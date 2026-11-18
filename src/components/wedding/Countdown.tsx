"use client";

import { useEffect, useState } from "react";

// 2027-07-10 15:00 (ceremony), Budapest (CEST)
const TARGET = new Date("2027-07-10T15:00:00+02:00").getTime();

const UNITS = [
  ["d", "nap"],
  ["h", "óra"],
  ["m", "perc"],
  ["s", "másodperc"],
] as const;

type Left = Record<(typeof UNITS)[number][0], number>;

function timeLeft(): Left {
  const s = Math.floor(Math.max(0, TARGET - Date.now()) / 1000);
  return { d: Math.floor(s / 86400), h: Math.floor((s % 86400) / 3600), m: Math.floor((s % 3600) / 60), s: s % 60 };
}

// daisyUI `countdown`: each digit column rolls to `--value`.
export default function Countdown() {
  const [left, setLeft] = useState<Left | null>(null);

  useEffect(() => {
    const tick = () => setLeft(timeLeft());
    const first = requestAnimationFrame(tick);
    const id = setInterval(tick, 1000);
    return () => {
      cancelAnimationFrame(first);
      clearInterval(id);
    };
  }, []);

  return (
    <div className="lm-count" role="timer" aria-label="Visszaszámlálás az esküvőig">
      {UNITS.map(([key, label]) => {
        const value = left?.[key] ?? 0;
        return (
          <div key={key} className="lm-unit">
            <span className="countdown" aria-hidden="true">
              <span
                style={{ "--value": value, "--digits": key === "d" ? 3 : 2 } as React.CSSProperties}
                aria-live="off"
              >
                {value}
              </span>
            </span>
            <small>
              {left ? <span className="sr-only">{value} </span> : null}
              {label}
            </small>
          </div>
        );
      })}
    </div>
  );
}
