// Original hand-drawn line-art icons, matching the rustic ink style of
// JourneyMap's StickCouple. Pure SVG, no external assets — stroke="currentColor"
// so each usage can size and recolor itself (e.g. inverted white on the footer).

type IconProps = { className?: string };

const STROKE = {
  stroke: "currentColor",
  strokeWidth: 2.4,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

export function ChurchSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 118" className={className} {...STROKE}>
      <path d="M50 6 L50 24" />
      <path d="M42 13 L58 13" />
      <path d="M50 24 L27 42" />
      <path d="M50 24 L73 42" />
      <path d="M27 42 L27 111" />
      <path d="M73 42 L73 111" />
      <path d="M27 111 L73 111" />
      <path d="M18 111 L82 111" />
      <path d="M40 111 L40 84 Q40 77 50 77 Q60 77 60 84 L60 111" />
      <path d="M33 56 L45 56 L45 68 L33 68 Z" />
      <path d="M55 56 L67 56 L67 68 L55 68 Z" />
    </svg>
  );
}

export function VillaSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 160 110" className={className} {...STROKE}>
      <path d="M8 100 L152 100" />
      <path d="M24 100 L24 54 L52 34 L80 54 L80 100" />
      <path d="M24 54 L80 54" />
      <path d="M40 100 L40 78 L60 78 L60 100" />
      <path d="M48 64 L56 64 L56 72 L48 72 Z" />
      <path d="M96 100 Q96 48 102 24 Q108 48 108 100" />
      <path d="M118 100 Q118 55 123 35 Q128 55 128 100" />
      <path d="M136 100 Q136 60 140 44 Q144 60 144 100" />
    </svg>
  );
}

export function ChampagneSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 60 108" className={className} {...STROKE}>
      <path d="M14 8 Q14 36 30 42 Q46 36 46 8 Z" />
      <path d="M20 16 Q22 28 30 32" opacity="0.6" />
      <path d="M30 42 L30 90" />
      <path d="M16 98 L44 98" />
      <path d="M30 90 L30 98" />
    </svg>
  );
}

export function PlaceSettingSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 130 90" className={className} {...STROKE}>
      <circle cx="65" cy="45" r="30" />
      <circle cx="65" cy="45" r="19" />
      <path d="M12 12 L12 40 Q12 46 18 46 Q24 46 24 40 L24 12" />
      <path d="M15 12 L15 32" />
      <path d="M18 12 L18 32" />
      <path d="M21 12 L21 32" />
      <path d="M18 46 L18 78" />
      <path d="M112 12 Q120 20 114 32 Q110 36 112 40 L112 78" />
    </svg>
  );
}

export function MusicNoteSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 90 90" className={className} {...STROKE}>
      <ellipse cx="18" cy="70" rx="11" ry="8" transform="rotate(-12 18 70)" />
      <ellipse cx="56" cy="76" rx="11" ry="8" transform="rotate(-12 56 76)" />
      <path d="M28 68 L28 16 L66 6 L66 70" />
      <path d="M28 28 L66 18" />
    </svg>
  );
}

export function CakeSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 96" className={className} {...STROKE}>
      <path d="M50 4 L50 18" />
      <path d="M46 2 Q50 -4 54 2 Q54 6 50 8 Q46 6 46 2 Z" opacity="0.75" />
      <path d="M38 18 Q44 24 50 18 Q56 24 62 18 L62 38 L38 38 Z" />
      <path d="M20 46 Q30 40 40 46 Q50 40 60 46 Q70 40 80 46 L80 92 L20 92 Z" />
      <path d="M20 46 L20 92" />
      <path d="M80 46 L80 92" />
      <path d="M20 68 L80 68" opacity="0.6" />
    </svg>
  );
}

export function RingBoxSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 100 96" className={className} {...STROKE}>
      <path d="M14 46 L50 28 L86 46 L50 64 Z" />
      <path d="M14 46 L14 74 L50 92 L86 74 L86 46" />
      <path d="M50 64 L50 92" />
      <path d="M14 46 L50 28" opacity="0.4" />
      <path d="M86 46 L50 28" opacity="0.4" />
      <circle cx="50" cy="47" r="11" />
      <path d="M45 39 L50 30 L55 39" opacity="0.7" />
    </svg>
  );
}

export function WreathSketch({ className }: IconProps) {
  const leaves = Array.from({ length: 18 }, (_, i) => i);
  return (
    <svg viewBox="0 0 100 100" className={className} {...STROKE} strokeWidth={1.8}>
      {leaves.map((i) => {
        const angle = (i / leaves.length) * 360;
        // Leave a gap at the bottom for a little bow, like a hung wreath.
        if (angle > 165 && angle < 195) return null;
        return (
          <g key={i} transform={`rotate(${angle} 50 50)`}>
            <path d="M50 12 Q54 18 50 24 Q46 18 50 12 Z" />
          </g>
        );
      })}
      <path d="M50 88 Q46 92 50 96 Q54 92 50 88 Z" opacity="0.8" />
      <path d="M44 90 L50 96 L56 90" opacity="0.8" />
    </svg>
  );
}
