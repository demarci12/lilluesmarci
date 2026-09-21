"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

// The invitation is designed on a 581 x 676 stage that is scaled to the viewport.
const STAGE_W = 581;
const STAGE_H = 676;

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
      // the closed envelope is shown larger, then pulls back as it opens
      const zoom = Math.max(1, Math.min(2, (window.innerWidth * 0.94) / (431 * s), (window.innerHeight * 0.84) / (300 * s)));
      hero.style.setProperty("--zoom", zoom.toFixed(3));
      hero.classList.add("is-ready");
    };
    fit();
    window.addEventListener("resize", fit);

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
          <div className="envelope env-back paper liner" />

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
              <defs>
                <clipPath id="sideClip">
                  <polygon points="0,0 161.6,143 0,300" />
                  <polygon points="431,0 269.4,143 431,300" />
                </clipPath>
                <linearGradient id="bfLight" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity=".13" />
                  <stop offset=".55" stopColor="#fff" stopOpacity="0" />
                  <stop offset="1" stopColor="#0b1004" stopOpacity=".2" />
                </linearGradient>
                <linearGradient id="sideFall" x1="0" y1="0" x2="1" y2="0">
                  <stop offset="0" stopColor="#fff" stopOpacity=".12" />
                  <stop offset="1" stopColor="#0b1004" stopOpacity=".24" />
                </linearGradient>
                <radialGradient id="sheen" cx=".2" cy=".08" r=".95">
                  <stop offset="0" stopColor="#fff" stopOpacity=".24" />
                  <stop offset=".5" stopColor="#fff" stopOpacity=".04" />
                  <stop offset="1" stopColor="#0b1004" stopOpacity=".16" />
                </radialGradient>
                <filter id="blur2" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation="2.6" />
                </filter>
                <filter id="blur1" x="-10%" y="-10%" width="120%" height="120%">
                  <feGaussianBlur stdDeviation=".7" />
                </filter>
              </defs>

              {/* the outer flaps pick up the shade of the bottom flap that overlaps them */}
              <g clipPath="url(#sideClip)">
                <rect width="431" height="300" fill="url(#sideFall)" />
                <g filter="url(#blur2)">
                  <path d="M-3 292 L155 139" stroke="#0b1004" strokeOpacity=".5" strokeWidth="8" fill="none" />
                  <path d="M434 292 L276 139" stroke="#0b1004" strokeOpacity=".5" strokeWidth="8" fill="none" />
                </g>
              </g>

              <polygon points="161.6,143 269.4,143 431,300 0,300" fill="url(#bfLight)" />

              {/* raised edge of the bottom flap: a catch of light above, a hairline of shadow below */}
              <g fill="none" strokeLinejoin="round" strokeLinecap="round">
                <path
                  d="M0 300 L161.6 143 M269.4 143 L431 300"
                  stroke="#fff"
                  strokeOpacity=".5"
                  strokeWidth="1.2"
                  filter="url(#blur1)"
                />
                <path d="M0 299 L161.6 142 M269.4 142 L431 299" stroke="#fff" strokeOpacity=".34" strokeWidth=".8" />
                <path d="M0 301 L161.6 144 M269.4 144 L431 301" stroke="#0b1004" strokeOpacity=".4" strokeWidth=".8" />
                <path d="M0 0 L161.6 143 M431 0 L269.4 143" stroke="#fff" strokeOpacity=".2" strokeWidth=".9" />
                <path d="M0 1 L161.6 144 M431 1 L269.4 144" stroke="#0b1004" strokeOpacity=".28" strokeWidth=".8" />
                <path d="M161.6 143 L269.4 143" stroke="#0b1004" strokeOpacity=".22" strokeWidth=".9" />
              </g>

              <rect width="431" height="300" fill="url(#sheen)" />

              {/* paper thickness on the outer edge */}
              <path d="M.6 299.4 V .6 H430.4" fill="none" stroke="#fff" strokeOpacity=".3" strokeWidth="1" />
              <path d="M.6 299.4 H430.4 V .6" fill="none" stroke="#0b1004" strokeOpacity=".4" strokeWidth="1" />
            </svg>
          </div>

          {/* closing flap (rotates open in 3D) */}
          <div className="flap-shadow">
            <i />
          </div>
          <div className="flap">
            <div className="face ff paper">
              <p className="flap-text">
                <span className="ft-k">Szeretettel meghívunk</span>
                <span className="ft-n">Lilu &amp; Marci</span>
              </p>
              <svg viewBox="0 0 431 200" preserveAspectRatio="none" aria-hidden="true" className="shade">
                <defs>
                  <linearGradient id="ffV" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0" stopColor="#fff" stopOpacity=".2" />
                    <stop offset=".6" stopColor="#fff" stopOpacity="0" />
                    <stop offset="1" stopColor="#0b1004" stopOpacity=".2" />
                  </linearGradient>
                  <linearGradient id="ffH" x1="0" y1="0" x2="1" y2="0">
                    <stop offset="0" stopColor="#fff" stopOpacity=".12" />
                    <stop offset=".5" stopColor="#fff" stopOpacity="0" />
                    <stop offset="1" stopColor="#0b1004" stopOpacity=".2" />
                  </linearGradient>
                </defs>
                <polygon points="-13,0 444,0 215.5,200" fill="url(#ffV)" />
                <polygon points="-13,0 444,0 215.5,200" fill="url(#ffH)" />
                <path d="M-13 .6 H444" stroke="#0b1004" strokeOpacity=".32" strokeWidth="1.2" fill="none" />
                <path d="M-13 2 H444" stroke="#fff" strokeOpacity=".25" strokeWidth="1" fill="none" />

                {/* lace trim along both slanted edges */}
                <defs>
                  <pattern id="laceMesh" width="5" height="5" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                    <path d="M0 2.5H5M2.5 0V5" stroke="#a3a46a" strokeWidth=".9" fill="none" />
                    <circle cx="2.5" cy="2.5" r=".9" fill="#a3a46a" />
                  </pattern>
                  <filter id="laceBlur" x="-10%" y="-10%" width="120%" height="120%">
                    <feGaussianBlur stdDeviation="1.6" />
                  </filter>
                </defs>
                <g fill="none" strokeLinecap="round" strokeLinejoin="round">
                  <g filter="url(#laceBlur)" opacity=".5">
                    <path d="M-14 -21 L220 196 M445 -21 L211 196" stroke="#0b1004" strokeWidth="11" transform="translate(1.6 3)" />
                  </g>
                  <path d="M-14 -21 L220 196 M445 -21 L211 196" stroke="#6d6e3a" strokeWidth="11" />
                  <path d="M-14 -21 L220 196 M445 -21 L211 196" stroke="url(#laceMesh)" strokeWidth="11" />
                  <path d="M-16 -24 L218 193 M447 -24 L213 193" stroke="#8b8c56" strokeWidth="6.4" strokeDasharray="0 6.6" />
                  <path d="M-11 -18 L223 199 M442 -18 L208 199" stroke="#b5b678" strokeOpacity=".7" strokeWidth=".9" strokeDasharray="2.2 2.2" />
                  <path d="M-13 -22.5 L219 193 M444 -22.5 L212 193" stroke="#c9ca90" strokeOpacity=".28" strokeWidth=".9" />
                </g>
              </svg>
            </div>
            <div className="face fb paper liner" />
          </div>
          <div className="flap seal-wrap">
            <svg className="seal" viewBox="0 0 100 100" aria-hidden="true">
              <defs>
                <radialGradient id="waxBase" cx=".34" cy=".28" r=".9">
                  <stop offset="0" stopColor="#fffaf0" />
                  <stop offset=".5" stopColor="#e9e0c6" />
                  <stop offset="1" stopColor="#a89d7b" />
                </radialGradient>
                <radialGradient id="waxDisc" cx=".38" cy=".3" r=".85">
                  <stop offset="0" stopColor="#f8f1de" />
                  <stop offset="1" stopColor="#d6ccac" />
                </radialGradient>
                <linearGradient id="ringHi" x1="0" y1="0" x2="1" y2="1">
                  <stop offset="0" stopColor="#fff" stopOpacity=".95" />
                  <stop offset=".5" stopColor="#fff" stopOpacity="0" />
                  <stop offset="1" stopColor="#6e6446" stopOpacity=".7" />
                </linearGradient>
                <filter id="waxGrain" x="0" y="0" width="100%" height="100%">
                  <feTurbulence type="fractalNoise" baseFrequency=".9" numOctaves="2" seed="3" result="n" />
                  <feColorMatrix
                    in="n"
                    type="matrix"
                    values="0 0 0 0 .45  0 0 0 0 .4  0 0 0 0 .28  0 0 0 .42 -.1"
                    result="g"
                  />
                  <feComposite in="g" in2="SourceGraphic" operator="in" result="gi" />
                  <feMerge>
                    <feMergeNode in="SourceGraphic" />
                    <feMergeNode in="gi" />
                  </feMerge>
                </filter>
                <filter id="waxBlur" x="-20%" y="-20%" width="140%" height="140%">
                  <feGaussianBlur stdDeviation="2.2" />
                </filter>
              </defs>
              <g transform="translate(50 50) scale(.84 1) translate(-50 -50)">
                <path d="M96.17 50.00C96.40 53.12 95.64 56.50 94.67 59.50C93.71 62.49 91.70 65.11 90.40 67.99C89.10 70.87 88.77 74.42 86.86 76.78C84.96 79.14 81.39 80.20 78.95 82.15C76.51 84.11 74.75 86.76 72.24 88.51C69.72 90.27 66.85 92.17 63.87 92.69C60.90 93.22 57.43 91.66 54.38 91.64C51.32 91.62 48.52 92.54 45.53 92.56C42.54 92.58 39.37 92.46 36.44 91.75C33.50 91.03 30.82 89.48 27.89 88.29C24.96 87.10 21.55 86.34 18.84 84.60C16.13 82.87 13.34 80.57 11.63 77.88C9.92 75.18 9.39 71.56 8.57 68.44C7.75 65.33 6.77 62.28 6.71 59.20C6.64 56.13 7.84 53.00 8.16 50.00C8.47 47.00 8.15 44.10 8.61 41.20C9.06 38.30 9.97 35.47 10.88 32.58C11.79 29.70 12.64 26.64 14.08 23.90C15.52 21.16 17.26 18.26 19.52 16.15C21.78 14.04 24.90 12.86 27.62 11.23C30.33 9.60 32.90 7.51 35.83 6.39C38.76 5.27 42.04 5.03 45.22 4.51C48.40 3.99 51.83 2.72 54.91 3.27C57.99 3.82 60.94 6.22 63.71 7.80C66.48 9.37 69.06 10.96 71.52 12.72C73.99 14.48 76.32 16.33 78.49 18.36C80.66 20.39 82.69 22.57 84.54 24.91C86.38 27.24 88.12 29.73 89.58 32.38C91.04 35.03 92.19 37.86 93.28 40.80C94.38 43.74 95.94 46.88 96.17 50.00Z" fill="url(#waxBase)" filter="url(#waxGrain)" />
                <path d="M96.17 50.00C96.40 53.12 95.64 56.50 94.67 59.50C93.71 62.49 91.70 65.11 90.40 67.99C89.10 70.87 88.77 74.42 86.86 76.78C84.96 79.14 81.39 80.20 78.95 82.15C76.51 84.11 74.75 86.76 72.24 88.51C69.72 90.27 66.85 92.17 63.87 92.69C60.90 93.22 57.43 91.66 54.38 91.64C51.32 91.62 48.52 92.54 45.53 92.56C42.54 92.58 39.37 92.46 36.44 91.75C33.50 91.03 30.82 89.48 27.89 88.29C24.96 87.10 21.55 86.34 18.84 84.60C16.13 82.87 13.34 80.57 11.63 77.88C9.92 75.18 9.39 71.56 8.57 68.44C7.75 65.33 6.77 62.28 6.71 59.20C6.64 56.13 7.84 53.00 8.16 50.00C8.47 47.00 8.15 44.10 8.61 41.20C9.06 38.30 9.97 35.47 10.88 32.58C11.79 29.70 12.64 26.64 14.08 23.90C15.52 21.16 17.26 18.26 19.52 16.15C21.78 14.04 24.90 12.86 27.62 11.23C30.33 9.60 32.90 7.51 35.83 6.39C38.76 5.27 42.04 5.03 45.22 4.51C48.40 3.99 51.83 2.72 54.91 3.27C57.99 3.82 60.94 6.22 63.71 7.80C66.48 9.37 69.06 10.96 71.52 12.72C73.99 14.48 76.32 16.33 78.49 18.36C80.66 20.39 82.69 22.57 84.54 24.91C86.38 27.24 88.12 29.73 89.58 32.38C91.04 35.03 92.19 37.86 93.28 40.80C94.38 43.74 95.94 46.88 96.17 50.00Z" fill="none" stroke="#7f7455" strokeOpacity=".5" strokeWidth="1.3" />
                <path
                  d="M96.17 50.00C96.40 53.12 95.64 56.50 94.67 59.50C93.71 62.49 91.70 65.11 90.40 67.99C89.10 70.87 88.77 74.42 86.86 76.78C84.96 79.14 81.39 80.20 78.95 82.15C76.51 84.11 74.75 86.76 72.24 88.51C69.72 90.27 66.85 92.17 63.87 92.69C60.90 93.22 57.43 91.66 54.38 91.64C51.32 91.62 48.52 92.54 45.53 92.56C42.54 92.58 39.37 92.46 36.44 91.75C33.50 91.03 30.82 89.48 27.89 88.29C24.96 87.10 21.55 86.34 18.84 84.60C16.13 82.87 13.34 80.57 11.63 77.88C9.92 75.18 9.39 71.56 8.57 68.44C7.75 65.33 6.77 62.28 6.71 59.20C6.64 56.13 7.84 53.00 8.16 50.00C8.47 47.00 8.15 44.10 8.61 41.20C9.06 38.30 9.97 35.47 10.88 32.58C11.79 29.70 12.64 26.64 14.08 23.90C15.52 21.16 17.26 18.26 19.52 16.15C21.78 14.04 24.90 12.86 27.62 11.23C30.33 9.60 32.90 7.51 35.83 6.39C38.76 5.27 42.04 5.03 45.22 4.51C48.40 3.99 51.83 2.72 54.91 3.27C57.99 3.82 60.94 6.22 63.71 7.80C66.48 9.37 69.06 10.96 71.52 12.72C73.99 14.48 76.32 16.33 78.49 18.36C80.66 20.39 82.69 22.57 84.54 24.91C86.38 27.24 88.12 29.73 89.58 32.38C91.04 35.03 92.19 37.86 93.28 40.80C94.38 43.74 95.94 46.88 96.17 50.00Z"
                  fill="none"
                  stroke="#fff"
                  strokeOpacity=".6"
                  strokeWidth=".9"
                  transform="translate(1.4 1.6) scale(.972) translate(1.4 1.4)"
                />
                <ellipse cx="50" cy="50" rx="33" ry="33" fill="url(#waxDisc)" />
                <ellipse cx="50" cy="50" rx="33" ry="33" fill="none" stroke="url(#ringHi)" strokeWidth="2" />
                <ellipse
                  cx="50"
                  cy="50"
                  rx="28"
                  ry="28"
                  fill="none"
                  stroke="#a99e7d"
                  strokeOpacity=".8"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeDasharray="0 3.4"
                />
              </g>
              <g fontFamily="var(--script)" fontSize="21" textAnchor="middle">
                <text x="51" y="58.6" fill="#8f8460" fillOpacity=".75">L&amp;M</text>
                <text x="49.2" y="56.8" fill="#fffdf6" fillOpacity=".95">L&amp;M</text>
                <text x="50.1" y="57.7" fill="#d2c7a4">L&amp;M</text>
              </g>
              <ellipse
                cx="34"
                cy="27"
                rx="15"
                ry="7"
                fill="#fff"
                fillOpacity=".5"
                filter="url(#waxBlur)"
                transform="rotate(-32 34 27)"
              />
            </svg>
          </div>
          <p className="hint">Kattints vagy görgess a megnyitáshoz</p>
        </div>
      </div>
    </header>
  );
}
