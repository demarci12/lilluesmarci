"use client";

import { useState, type ReactNode } from "react";

// A block of text that opens under a pill button ("Tovább" / "Kevesebb").
export default function Expandable({ children }: { children: ReactNode }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className={`fold ${open ? "open" : ""}`} inert={!open}>
        <div>{children}</div>
      </div>
      <button type="button" className="pill reveal" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? "Kevesebb" : "Tovább"}
      </button>
    </>
  );
}
