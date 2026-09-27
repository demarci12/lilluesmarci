"use client";

import { useEffect } from "react";

// Fades every `.reveal`/`[data-reveal]` element in the first time it scrolls into
// view, and drives the `--scroll-y` custom property the parallax images use
// (mounted once per page).
export default function Reveal() {
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
      { threshold: 0.15 },
    );
    document.querySelectorAll(".ol .reveal, .ol [data-reveal]").forEach((el) => io.observe(el));

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return () => io.disconnect();
    }

    let ticking = false;
    const updateParallax = () => {
      document.documentElement.style.setProperty("--scroll-y", `${window.scrollY}px`);
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(updateParallax);
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      io.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
