// The "L & M" crest: serif L and M, a calligraphic ampersand, inside a thin
// olive-leaf wreath. Colours come from `currentColor`, so it works on cream,
// olive or photo backgrounds. Used in the footer, on the RSVP wax seal and as
// the source for the favicon and the link-share image.

const R = 82; // wreath radius in the 200×200 viewBox
const C = 100;

function arc(fromDeg: number, toDeg: number) {
  const p = (d: number) => {
    const a = (d * Math.PI) / 180;
    return [C + R * Math.cos(a), C + R * Math.sin(a)];
  };
  const [x1, y1] = p(fromDeg);
  const [x2, y2] = p(toDeg);
  const sweep = toDeg > fromDeg ? 1 : 0;
  return `M${x1.toFixed(1)} ${y1.toFixed(1)} A${R} ${R} 0 0 ${sweep} ${x2.toFixed(1)} ${y2.toFixed(1)}`;
}

// Leaves along each side of the wreath, alternating outside/inside the stem.
function leaves(fromDeg: number, toDeg: number, count: number) {
  return Array.from({ length: count }, (_, i) => {
    const d = fromDeg + ((toDeg - fromDeg) * (i + 0.5)) / count;
    const a = (d * Math.PI) / 180;
    const out = i % 2 === 0 ? 1 : -1;
    const x = C + (R + out * 6) * Math.cos(a);
    const y = C + (R + out * 6) * Math.sin(a);
    const tangent = d + 90 + (toDeg > fromDeg ? 0 : 180);
    return { x, y, rot: tangent + out * 28 };
  });
}

const LEFT = leaves(250, 120, 9);
const RIGHT = leaves(-70, 60, 9);

export default function Crest({ className = "", title }: { className?: string; title?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 200 200"
      role={title ? "img" : undefined}
      aria-label={title}
      aria-hidden={title ? undefined : true}
    >
      <g fill="none" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" opacity="0.85">
        <path d={arc(250, 120)} />
        <path d={arc(-70, 60)} />
      </g>
      <g fill="currentColor" opacity="0.8">
        {[...LEFT, ...RIGHT].map((l, i) => (
          <ellipse key={i} cx={l.x} cy={l.y} rx="7.5" ry="2.8" transform={`rotate(${l.rot.toFixed(1)} ${l.x.toFixed(1)} ${l.y.toFixed(1)})`} />
        ))}
      </g>
      <g fill="currentColor">
        <text x="66" y="100" textAnchor="middle" className="crest-letter">L</text>
        <text x="138" y="142" textAnchor="middle" className="crest-letter">M</text>
        <text x="97" y="124" textAnchor="middle" className="crest-amp">&amp;</text>
      </g>
    </svg>
  );
}
