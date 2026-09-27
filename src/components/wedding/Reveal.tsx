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
      // Threshold 0 + bottom inset instead of a ratio: `.image-reveal` figures start
      // fully clip-pathed, which Chromium counts as zero visible area, so any
      // ratio threshold > 0 would never fire for them.
      { threshold: 0, rootMargin: "0px 0px -12% 0px" },
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
