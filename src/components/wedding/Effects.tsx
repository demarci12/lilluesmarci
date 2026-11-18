"use client";

import { useEffect } from "react";

type Stop = { el: HTMLElement; y: number; x: number; k: number };

const lerp = (a: number, b: number, t: number) => a + (b - a) * t;
// Sun colour over the day: noon cream → afternoon pale lemon → sunset sand.
const SUN_COLORS = ["#f6ecd2", "#f1e3b8", "#e6d0a4"];

// Page-wide scroll effects, mounted once:
// - fades `.lm-reveal` / `.lm-wipe` in on first view,
// - moves the cream sun between the `[data-sun="y x scale"]` stops of each section,
// - fills the program timelines and marks passed events,
// - parallax inside `.lm-par` photo frames,
// - shows the phone RSVP button between the hero and the RSVP section.
export default function Effects() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            io.unobserve(entry.target);
          }
        });
      },
      // Threshold 0 + bottom inset: clip-path wiped figures count as zero visible
      // area in Chromium, so a ratio threshold would never fire for them.
      { threshold: 0, rootMargin: "0px 0px -10% 0px" },
    );
    document.querySelectorAll(".lm-reveal, .lm-wipe").forEach((el) => io.observe(el));

    const fab = document.getElementById("lm-fab");
    const hero = document.getElementById("lm-hero");
    const rsvp = document.getElementById("rsvp");
    const updateFab = () => {
      if (!fab || !hero || !rsvp) return;
      const pastHero = window.scrollY > hero.offsetHeight * 0.8;
      const atRsvp = rsvp.getBoundingClientRect().top < window.innerHeight;
      fab.classList.toggle("is-hidden", !pastHero || atRsvp);
    };

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      updateFab();
      window.addEventListener("scroll", updateFab, { passive: true });
      return () => {
        io.disconnect();
        window.removeEventListener("scroll", updateFab);
      };
    }

    const sun = document.querySelector<HTMLElement>(".lm-sun");
    const timelines = [...document.querySelectorAll<HTMLElement>(".lm-tl")];
    const events = [...document.querySelectorAll<HTMLElement>(".lm-ev")];
    const frames = [...document.querySelectorAll<HTMLElement>(".lm-par")];
    const night = document.getElementById("transzfer");
    let stops: Stop[] = [];

    const readStops = () => {
      const narrow = window.innerWidth < 900;
      stops = [...document.querySelectorAll<HTMLElement>("[data-sun]")].map((el) => {
        const spec = (narrow && el.dataset.sunM) || el.dataset.sun || "10 80 1";
        const [y, x, k] = spec.split(" ").map(Number);
        return { el, y, x, k };
      });
    };

    let raf = 0;
    const frame = () => {
      raf = 0;
      const vh = window.innerHeight;
      const mid = window.scrollY + vh * 0.5;

      if (sun && stops.length) {
        let i = 0;
        while (i < stops.length - 1 && stops[i + 1].el.offsetTop <= mid) i++;
        const a = stops[i];
        const b = stops[Math.min(i + 1, stops.length - 1)];
        const span = Math.max(1, b.el.offsetTop - a.el.offsetTop || a.el.offsetHeight);
        const t = Math.min(1, Math.max(0, (mid - a.el.offsetTop) / span));
        const e = t * t * (3 - 2 * t);
        const narrow = window.innerWidth < 900;
        const x = narrow ? Math.max(lerp(a.x, b.x, e), 92) : lerp(a.x, b.x, e);
        sun.style.setProperty("--sy", `${lerp(a.y, b.y, e)}vh`);
        sun.style.setProperty("--sx", `calc(${x}vw - var(--s) / 2)`);
        sun.style.setProperty("--sk", String(lerp(a.k, b.k, e)));
        const dayEnd = Math.max(1, night?.offsetTop ?? document.body.scrollHeight);
        const progress = Math.min(1, window.scrollY / dayEnd);
        sun.style.setProperty("--sun", SUN_COLORS[Math.min(2, Math.floor(progress * 2.999))]);
      }

      timelines.forEach((tl) => {
        const r = tl.getBoundingClientRect();
        tl.style.setProperty("--p", String(Math.min(1, Math.max(0, (vh * 0.6 - r.top) / r.height))));
      });
      events.forEach((ev) => ev.classList.toggle("is-on", ev.getBoundingClientRect().top < vh * 0.6));
      frames.forEach((img) => {
        const r = (img.parentElement ?? img).getBoundingClientRect();
        const p = (r.top + r.height / 2 - vh / 2) / vh;
        img.style.setProperty("--py", `${(p * 8).toFixed(2)}%`);
      });
      updateFab();
    };

    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(frame);
    };
    const onResize = () => {
      readStops();
      frame();
    };

    readStops();
    frame();
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize);
    return () => {
      io.disconnect();
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
    };
  }, []);

  return null;
}
