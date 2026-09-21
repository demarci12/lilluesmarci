"use client";

import { useEffect, useState } from "react";

const WEDDING_DATE = new Date("2027-07-10T00:00:00");

export default function Countdown({ className = "" }: { className?: string }) {
  const [text, setText] = useState("");

  useEffect(() => {
    const update = () => {
      const days = Math.ceil((WEDDING_DATE.getTime() - Date.now()) / (1000 * 60 * 60 * 24));
      setText(days > 0 ? `${days} nap az esküvőig` : "Ma van az esküvő!");
    };
    update();
    const interval = setInterval(update, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  if (!text) return null;
  return <div className={className}>{text}</div>;
}
