import Crest from "./Crest";

// RSVP envelope: when its `[data-reveal]` parent scrolls into view (Reveal adds
// `.is-visible`), the flap opens, the wax seal lifts and the letter slides up.
// The letter holds the section's real heading, so it reads fine without motion.
export default function Envelope() {
  return (
    <div className="envelope">
      <div className="env-back" />
      <div className="env-letter">
        <p className="env-kicker">Kérjük, jelezzetek vissza</p>
        <h2 className="env-title">Ott leszel?</h2>
      </div>
      <svg className="env-pocket" viewBox="0 0 300 200" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 L150 112 L300 0 L300 200 L0 200 Z" />
        <path className="env-crease" d="M0 200 L128 96 M300 200 L172 96" />
      </svg>
      <svg className="env-flap" viewBox="0 0 300 116" preserveAspectRatio="none" aria-hidden="true">
        <path d="M0 0 L300 0 L150 116 Z" />
      </svg>
      <span className="env-seal" aria-hidden="true">
        <Crest className="crest h-[52px] w-[52px]" />
      </span>
    </div>
  );
}
