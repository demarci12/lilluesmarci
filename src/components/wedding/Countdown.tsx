"use client";

import { useEffect, useState } from "react";

// 2027-07-10 00:00, Budapest (CEST)
const TARGET = new Date("2027-07-10T00:00:00+02:00").getTime();

export default function Countdown() {
  const [left, setLeft] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const s = Math.floor(Math.max(0, TARGET - Date.now()) / 1000);
      setLeft({
        d: Math.floor(s / 86400),
        h: Math.floor((s % 86400) / 3600),
        m: Math.floor((s % 3600) / 60),
        s: s % 60,
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="count reveal" aria-live="off">
      <div className="cd">
        <b>{left.d}</b>
        <i>Nap</i>
      </div>
      <div className="cd">
        <b>{left.h}</b>
        <i>Óra</i>
      </div>
      <div className="cd">
        <b>{left.m}</b>
        <i>Perc</i>
      </div>
      <div className="cd">
        <b>{left.s}</b>
        <i>Másodperc</i>
      </div>
    </div>
  );
}
