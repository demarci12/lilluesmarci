"use client";

import { useState } from "react";
import RsvpForm from "./RsvpForm";

// The "Visszajelzés" pill opens the RSVP form in place.
export default function RsvpPanel() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button type="button" className="pill reveal" aria-expanded={open} onClick={() => setOpen((o) => !o)}>
        {open ? "Bezárás" : "Visszajelzés"}
      </button>
      <div className={`fold ${open ? "open" : ""}`} inert={!open}>
        <div>
          <div className="rpanel">
            <RsvpForm />
          </div>
        </div>
      </div>
    </>
  );
}
