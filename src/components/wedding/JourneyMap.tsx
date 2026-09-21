"use client";

import { useEffect, useRef, useState } from "react";

type Stop = {
  x: number;
  y: number;
  icon: string;
  title: string;
  text: string;
};

// Positions are percentages within the map's viewBox (0-100 x, 0-100 y).
const STOPS: Stop[] = [
  { x: 6, y: 62, icon: "☕", title: "Találkozás", text: "Ott kezdődött minden." },
  { x: 27, y: 24, icon: "⛰️", title: "Kirándulások", text: "Együtt fedeztük fel a hegyeket." },
  { x: 50, y: 70, icon: "💍", title: "Lánykérés", text: "Igen-t mondott." },
  { x: 73, y: 26, icon: "💒", title: "Esküvő", text: "2027.07.10 · Kálna, Mátyás Malom" },
  { x: 94, y: 64, icon: "🎉", title: "Boldogan, együtt", text: "...és éltek, míg meg nem haltak." },
];

// A gentle winding dashed path drawn purely as decoration behind the stops.
const PATH_D =
  "M 30 400 C 140 120, 260 120, 340 340 " +
  "S 560 620, 640 620 " +
  "S 780 140, 940 380";

export function StickCouple({ walking }: { walking: boolean }) {
  return (
    <svg
      viewBox="0 0 90 70"
      className="w-[70px] h-auto md:w-[86px] drop-shadow-[0_3px_3px_rgba(61,61,47,0.25)]"
      style={{ transform: walking ? "translateY(-2px)" : "none" }}
    >
      {/* Groom */}
      <g stroke="#3d3d2f" strokeWidth="3" strokeLinecap="round" fill="none">
        <circle cx="28" cy="14" r="7" fill="#fcf8ef" />
        <line x1="28" y1="21" x2="28" y2="42" />
        <line x1="28" y1="26" x2="40" y2="34" />
        <line x1="28" y1="26" x2="16" y2="22" />
        <g className={walking ? "origin-[28px_42px] animate-[walk-leg-a_0.5s_ease-in-out_infinite]" : ""}>
          <line x1="28" y1="42" x2="20" y2="58" />
        </g>
        <g className={walking ? "origin-[28px_42px] animate-[walk-leg-b_0.5s_ease-in-out_infinite]" : ""}>
          <line x1="28" y1="42" x2="36" y2="58" />
        </g>
      </g>
      {/* Bride */}
      <g stroke="#3d3d2f" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="52" cy="14" r="7" fill="#fcf8ef" />
        <path d="M 45 22 Q 40 40 38 54 L 66 54 Q 64 40 59 22 Z" fill="#fcf8ef" fillOpacity="0.6" />
        <line x1="45" y1="26" x2="40" y2="34" />
        <line x1="59" y1="26" x2="46" y2="22" />
        <g className={walking ? "origin-[52px_54px] animate-[walk-leg-b_0.5s_ease-in-out_infinite]" : ""}>
          <line x1="46" y1="54" x2="44" y2="60" />
        </g>
        <g className={walking ? "origin-[52px_54px] animate-[walk-leg-a_0.5s_ease-in-out_infinite]" : ""}>
          <line x1="58" y1="54" x2="60" y2="60" />
        </g>
      </g>
    </svg>
  );
}

const CONFETTI_PIECES = Array.from({ length: 24 }, (_, i) => ({
  left: Math.round((i * 37) % 100),
  delay: (i % 8) * 0.12,
  color: ["#a8834f", "#7c8c5b", "#c2a87a", "#b8ca9a", "#f6eaa9"][i % 5],
}));

export function Confetti() {
  const pieces = CONFETTI_PIECES;

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {pieces.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 w-[6px] h-[10px] rounded-sm animate-[confetti-fall_1.6s_ease-in_forwards]"
          style={{ left: `${p.left}%`, background: p.color, animationDelay: `${p.delay}s` }}
        />
      ))}
    </div>
  );
}

export default function JourneyMap() {
  const [index, setIndex] = useState(0);
  const [walking, setWalking] = useState(false);
  const [burst, setBurst] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const goTo = (next: number) => {
    const clamped = Math.max(0, Math.min(STOPS.length - 1, next));
    if (clamped === index) return;
    setWalking(true);
    setIndex(clamped);
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => {
      setWalking(false);
      if (clamped === STOPS.length - 1) setBurst((b) => b + 1);
    }, 900);
  };

  useEffect(() => () => { if (timeoutRef.current) clearTimeout(timeoutRef.current); }, []);

  const stop = STOPS[index];

  return (
    <div className="max-w-[1000px] mx-auto">
      <div className="relative w-full aspect-[16/8] rounded-xl border border-[#e5e0d0] bg-[#fcf8ef] overflow-hidden">
        {/* parchment-ish texture */}
        <div
          className="absolute inset-0 opacity-40"
          style={{
            backgroundImage:
              "radial-gradient(circle at 20% 30%, rgba(184,202,154,0.25), transparent 40%), radial-gradient(circle at 80% 70%, rgba(194,168,122,0.2), transparent 45%)",
          }}
        />
        <svg viewBox="0 0 1000 700" className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
          <path
            d={PATH_D}
            fill="none"
            stroke="#c2a87a"
            strokeWidth="4"
            strokeLinecap="round"
            strokeDasharray="2 16"
            opacity="0.8"
          />
        </svg>

        {burst > 0 && index === STOPS.length - 1 && <Confetti key={burst} />}

        {STOPS.map((s, i) => (
          <button
            key={s.title}
            type="button"
            onClick={() => goTo(i)}
            className="absolute -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-1 cursor-pointer group"
            style={{ left: `${s.x}%`, top: `${s.y}%` }}
            aria-label={s.title}
          >
            <span
              className={`w-3 h-3 rounded-full border-2 transition-colors ${
                i <= index ? "bg-[#a8834f] border-[#a8834f]" : "bg-[#fcf8ef] border-[#c2a87a]"
              }`}
            />
            <span className="text-lg md:text-xl opacity-70 group-hover:opacity-100 transition-opacity">{s.icon}</span>
          </button>
        ))}

        <div
          className="absolute -translate-x-1/2 -translate-y-[85%] transition-[left,top] duration-[900ms] ease-in-out"
          style={{ left: `${stop.x}%`, top: `${stop.y}%` }}
        >
          <StickCouple walking={walking} />
        </div>
      </div>

      <div className="mt-8 text-center">
        <div className="font-script text-[36px] text-[#3d3d2f]">{stop.title}</div>
        <p className="text-[15px] text-[#8a9668] mt-1">{stop.text}</p>

        <div className="flex items-center justify-center gap-4 mt-6">
          <button
            type="button"
            onClick={() => goTo(index - 1)}
            disabled={index === 0}
            className="px-4 py-2 text-xs tracking-[0.1em] uppercase border border-[#e5e0d0] rounded-full text-[#52514f] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#a8834f] hover:text-[#a8834f] transition-colors"
          >
            ← Vissza
          </button>
          <div className="flex gap-1.5">
            {STOPS.map((s, i) => (
              <span
                key={s.title}
                className={`w-1.5 h-1.5 rounded-full ${i === index ? "bg-[#a8834f]" : "bg-[#e5e0d0]"}`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={() => goTo(index + 1)}
            disabled={index === STOPS.length - 1}
            className="px-4 py-2 text-xs tracking-[0.1em] uppercase border border-[#e5e0d0] rounded-full text-[#52514f] disabled:opacity-30 disabled:cursor-not-allowed hover:border-[#a8834f] hover:text-[#a8834f] transition-colors"
          >
            Tovább →
          </button>
        </div>
      </div>
    </div>
  );
}
