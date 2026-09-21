"use client";

import { useEffect, useRef, useState } from "react";
import { Confetti, StickCouple } from "./JourneyMap";

type Milestone = {
  id: string;
  icon: string;
  label: string;
};

const MILESTONES: Milestone[] = [
  { id: "hero", icon: "💛", label: "Kezdet" },
  { id: "intro", icon: "☕", label: "Találkozás" },
  { id: "tortenet", icon: "🥾", label: "Történetünk" },
  { id: "helyszin", icon: "🏡", label: "Helyszín" },
  { id: "idorend", icon: "⏰", label: "Időrend" },
  { id: "menu", icon: "🍽️", label: "Menü" },
  { id: "szallas", icon: "🛏️", label: "Szállás" },
  { id: "dresscode", icon: "👗", label: "Dress code" },
  { id: "gyik", icon: "❓", label: "GYIK" },
  { id: "rsvp", icon: "💌", label: "RSVP" },
  { id: "kapcsolat", icon: "🎉", label: "Vége" },
];

function scrollToId(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
}

export default function SiteJourney() {
  const [progress, setProgress] = useState(0);
  const [activeId, setActiveId] = useState(MILESTONES[0].id);
  const [walking, setWalking] = useState(false);
  const [celebrated, setCelebrated] = useState(false);
  const idleTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const celebratedRef = useRef(false);

  useEffect(() => {
    const offsets = () =>
      MILESTONES.map((m) => {
        const el = document.getElementById(m.id);
        return { id: m.id, top: el ? el.getBoundingClientRect().top + window.scrollY : 0 };
      });

    let sectionOffsets = offsets();
    // Recompute after images/layout settle.
    const recompute = () => {
      sectionOffsets = offsets();
    };
    const recomputeTimer = setTimeout(recompute, 600);
    window.addEventListener("resize", recompute);

    const update = () => {
      const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      const p = maxScroll > 0 ? Math.min(1, Math.max(0, window.scrollY / maxScroll)) : 0;
      setProgress(p);

      let current = sectionOffsets[0]?.id ?? MILESTONES[0].id;
      for (const s of sectionOffsets) {
        if (window.scrollY + window.innerHeight * 0.35 >= s.top) current = s.id;
      }
      setActiveId(current);

      setWalking(true);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
      idleTimerRef.current = setTimeout(() => setWalking(false), 250);

      if (p > 0.985 && !celebratedRef.current) {
        celebratedRef.current = true;
        setCelebrated(true);
      }
    };

    // Lightweight time-based throttle — cheap enough to skip requestAnimationFrame,
    // which browsers pause while the tab/page isn't visible.
    let lastRun = 0;
    const onScroll = () => {
      const now = Date.now();
      if (now - lastRun < 50) return;
      lastRun = now;
      update();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", recompute);
      clearTimeout(recomputeTimer);
      if (idleTimerRef.current) clearTimeout(idleTimerRef.current);
    };
  }, []);

  const activeIndex = MILESTONES.findIndex((m) => m.id === activeId);

  return (
    <>
      {/* Top progress bar — every breakpoint */}
      <div className="fixed top-0 left-0 right-0 h-[3px] z-30 bg-[#e5e0d0]">
        <div
          className="h-full bg-gradient-to-r from-[#b8ca9a] via-[#a8834f] to-[#c2a87a] transition-[width] duration-150 ease-out"
          style={{ width: `${progress * 100}%` }}
        />
        <div
          className="absolute top-[3px] -translate-x-1/2 transition-[left] duration-150 ease-out pointer-events-none"
          style={{ left: `${progress * 100}%` }}
        >
          <div className="scale-[0.32] origin-top -mt-1">
            <StickCouple walking={walking} />
          </div>
        </div>
      </div>

      {/* Vertical milestone rail — desktop only */}
      <div className="hidden xl:flex fixed right-4 top-1/2 -translate-y-1/2 z-20 flex-col items-center">
        <div className="relative flex flex-col items-center gap-0">
          <div className="absolute top-2 bottom-2 w-px bg-[#e5e0d0]" />
          {MILESTONES.map((m, i) => (
            <button
              key={m.id}
              type="button"
              onClick={() => scrollToId(m.id)}
              className="relative py-3 px-2 group flex items-center justify-center cursor-pointer"
              aria-label={m.label}
              title={m.label}
            >
              <span
                className={`block rounded-full border-2 transition-all ${
                  i <= activeIndex
                    ? "w-[9px] h-[9px] bg-[#a8834f] border-[#a8834f]"
                    : "w-[7px] h-[7px] bg-[#fcf8ef] border-[#c2a87a]"
                }`}
              />
              <span className="absolute right-full mr-3 whitespace-nowrap text-[11px] tracking-[0.06em] uppercase bg-[#3d3d2f] text-[#fcf8ef] px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                {m.icon} {m.label}
              </span>
            </button>
          ))}
        </div>
      </div>

      {celebrated && (
        <div className="fixed inset-0 z-40 pointer-events-none">
          <Confetti />
        </div>
      )}
    </>
  );
}
