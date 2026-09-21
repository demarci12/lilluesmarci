"use client";

import { useEffect } from "react";

// Fades every `.reveal` element in the first time it scrolls into view
// (mounted once per page; the elements just carry the class).
export default function Reveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 },
    );
    document.querySelectorAll(".ol .reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return null;
}
