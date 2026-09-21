"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// The invitation is designed on a 581 x 676 stage that is scaled to the viewport.
const STAGE_W = 581;
const STAGE_H = 676;

// Procedural, tileable paper texture: fine grain + mottling + fibres.
function makePaperTexture(): string {
  const N = 256;
  const canvas = document.createElement("canvas");
  canvas.width = canvas.height = N;
  const ctx = canvas.getContext("2d");
  if (!ctx) return "";

  let seed = 7;
  const rnd = () => {
    seed = (seed * 16807) % 2147483647;
    return (seed - 1) / 2147483646;
  };

  ctx.fillStyle = "rgb(128,128,128)";
  ctx.fillRect(0, 0, N, N);
  const img = ctx.getImageData(0, 0, N, N);
  const d = img.data;
  for (let i = 0; i < d.length; i += 4) {
    const v = (rnd() + rnd() + rnd() - 1.5) * 22;
    d[i] += v;
    d[i + 1] += v;
    d[i + 2] += v;
  }
  ctx.putImageData(img, 0, 0);

  // draw each mark on the 3x3 neighbouring tiles so the texture tiles seamlessly
  const wrap = (draw: () => void) => {
    for (let ox = -N; ox <= N; ox += N) {
      for (let oy = -N; oy <= N; oy += N) {
        ctx.save();
        ctx.translate(ox, oy);
        draw();
        ctx.restore();
      }
    }
  };

  for (let k = 0; k < 26; k++) {
    const px = rnd() * N;
    const py = rnd() * N;
    const pr = 30 + rnd() * 70;
    const light = rnd() > 0.5;
    const a = 0.03 + rnd() * 0.035;
    wrap(() => {
      const g = ctx.createRadialGradient(px, py, 0, px, py, pr);
      const col = light ? "255,255,255" : "0,0,0";
      g.addColorStop(0, `rgba(${col},${a})`);
      g.addColorStop(1, `rgba(${col},0)`);
      ctx.fillStyle = g;
      ctx.fillRect(px - pr, py - pr, pr * 2, pr * 2);
    });
  }

  ctx.lineCap = "round";
  for (let f = 0; f < 340; f++) {
    const fx = rnd() * N;
    const fy = rnd() * N;
    const len = 5 + rnd() * 20;
    const an = rnd() * 6.283;
    const light = rnd() > 0.45;
    const al = 0.06 + rnd() * 0.1;
    const cv = (rnd() - 0.5) * 7;
    const lw = 0.5 + rnd() * 0.5;
    wrap(() => {
      ctx.beginPath();
      ctx.moveTo(fx, fy);
      ctx.quadraticCurveTo(
        fx + (Math.cos(an) * len) / 2 + cv,
        fy + (Math.sin(an) * len) / 2 + cv,
        fx + Math.cos(an) * len,
        fy + Math.sin(an) * len,
      );
      ctx.strokeStyle = light ? `rgba(255,255,255,${al})` : `rgba(0,0,0,${al * 0.8})`;
      ctx.lineWidth = lw;
      ctx.stroke();
    });
  }

  return canvas.toDataURL("image/png");
}

export default function EnvelopeHero() {
  const heroRef = useRef<HTMLElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);

  // Everything here is imperative on purpose (like the original script): it toggles
  // classes and inline styles directly, so React never re-renders the hero.
  useEffect(() => {
    const hero = heroRef.current;
    const stage = stageRef.current;
    const bg = bgRef.current;
    if (!hero || !stage || !bg) return;

    const root = document.documentElement;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    /* scale the stage to the viewport, and centre it if the viewport is taller */
    const fit = () => {
      const s = Math.min(window.innerWidth / STAGE_W, (window.innerHeight / STAGE_H) * 1.02, 1.5);
      const h = Math.max(STAGE_H * s, window.innerHeight);
      hero.style.height = `${h}px`;
      stage.style.transform = `scale(${s})`;
      stage.style.marginLeft = `${(-STAGE_W * s) / 2}px`;
      stage.style.top = `${(h - STAGE_H * s) / 2}px`;
      hero.classList.add("is-ready");
    };
    fit();
    window.addEventListener("resize", fit);

    const paper = makePaperTexture();
    if (paper) hero.style.setProperty("--paper", `url(${paper})`);

    /* the page stays put until the envelope is opened */
    const previousRestoration = "scrollRestoration" in history ? history.scrollRestoration : null;
    if (previousRestoration) history.scrollRestoration = "manual";
    window.scrollTo(0, 0);
    root.classList.add("locked");

    let opened = false;
    let unlockTimer: number | undefined;
    const open = () => {
      if (opened) return;
      opened = true;
      hero.classList.add("is-open");
      unlockTimer = window.setTimeout(() => root.classList.remove("locked"), reduce ? 0 : 1900);
    };
    if (reduce) open();

    const onClick = () => open();
    hero.addEventListener("click", onClick);

    const onWheel = (e: WheelEvent) => {
      if (!opened && e.deltaY > 0) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("wheel", onWheel, { passive: false });

    let touchY: number | null = null;
    const onTouchStart = (e: TouchEvent) => {
      touchY = e.touches[0].clientY;
    };
    const onTouchMove = (e: TouchEvent) => {
      if (!opened && touchY !== null && touchY - e.touches[0].clientY > 8) open();
    };
    window.addEventListener("touchstart", onTouchStart, { passive: true });
    window.addEventListener("touchmove", onTouchMove, { passive: true });

    const onKey = (e: KeyboardEvent) => {
      if (opened) return;
      if (["Enter", " ", "ArrowDown", "PageDown"].includes(e.key)) {
        e.preventDefault();
        open();
      }
    };
    window.addEventListener("keydown", onKey);

    /* scroll parallax on the backdrop */
    let ticking = false;
    const parallax = () => {
      ticking = false;
      const y = Math.min(window.scrollY, 900);
      bg.style.transform = `translate3d(0,${y * 0.22}px,0)`;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(parallax);
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    return () => {
      window.removeEventListener("resize", fit);
      hero.removeEventListener("click", onClick);
      window.removeEventListener("wheel", onWheel);
      window.removeEventListener("touchstart", onTouchStart);
      window.removeEventListener("touchmove", onTouchMove);
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("scroll", onScroll);
      window.clearTimeout(unlockTimer);
      root.classList.remove("locked");
      if (previousRestoration) history.scrollRestoration = previousRestoration;
    };
  }, []);

  return (
    <header className="opener" id="top" ref={heroRef}>
      <div className="bg" ref={bgRef}>
        <div className="bg-zoom">
          <Image
            src="/images/backdrop-venue.jpg"
            alt=""
            fill
            priority
            sizes="100vw"
            className="bg-img"
          />
        </div>
      </div>

      <div className="stage" ref={stageRef}>
        <div className="shift" role="button" tabIndex={0} aria-label="Meghívó megnyitása">
          {/* envelope: back */}
          <div className="envelope env-back paper">
            <span className="clasp" style={{ left: 6, top: 2 }} />
            <span className="clasp" style={{ right: 6, top: 2 }} />
          </div>

          {/* card */}
          <div className="card-clip">
            <div className="card-rise">
              <div className="inv-card">
                <div className="card-in">
                  <p className="kicker">Szeretettel meghívunk</p>
                  <h1 className="name n1">Lilu</h1>
                  <p className="name amp">&amp;</p>
                  <h1 className="name n2">Marci</h1>
                  <p className="date">2027. július 10.</p>
                  <p className="place">Kálna, Mátyás malom</p>
                </div>
              </div>
            </div>
          </div>

          {/* envelope: front (textured paper with soft fold shadows) */}
          <div className="envelope env-front">
            <div className="sides-wrap">
              <div className="pc paper pl" />
              <div className="pc paper pr" />
            </div>
            <div className="bf-wrap">
              <div className="pc paper pb">
                <span className="mono">L&amp;M</span>
              </div>
            </div>
            <svg viewBox="0 0 431 300" aria-hidden="true" className="creases">
              <g fill="none" strokeLinejoin="round">
                <path
                  d="M0 0 L161.6 143 L0 300 M431 0 L269.4 143 L431 300"
                  stroke="rgba(255,255,255,.20)"
                  strokeWidth="1"
                />
                <path
                  d="M0 300 L161.6 143 M269.4 143 L431 300"
                  stroke="rgba(255,255,255,.34)"
                  strokeWidth="1.1"
                />
                <path
                  d="M0 300.6 L161.6 143.6 M269.4 143.6 L431 300.6"
                  stroke="rgba(20,26,10,.30)"
                  strokeWidth=".7"
                />
                <rect x=".5" y=".5" width="430" height="299" stroke="rgba(255,255,255,.10)" />
              </g>
            </svg>
          </div>

          {/* closing flap (rotates open in 3D) */}
          <div className="flap-shadow">
            <i />
          </div>
          <div className="flap">
            <div className="face ff paper" />
            <div className="face fb paper" />
          </div>
          <div className="flap seal-wrap">
            <span className="seal paper-seal">L&amp;M</span>
          </div>
          <p className="hint">Kattints vagy görgess a megnyitáshoz</p>
        </div>
      </div>
    </header>
  );
}
