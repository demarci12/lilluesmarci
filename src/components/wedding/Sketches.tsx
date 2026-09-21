// Hand-drawn line-art set, ported from the Stitch design export (hero table
// scene, timeline icons, ribbon, envelopes, sparkles, rings, bride sketch).
// Everything strokes with currentColor, so each usage picks its own colour
// (ink on ivory, ivory on the olive bands).

type IconProps = { className?: string };

const STROKE = {
  stroke: "currentColor",
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  fill: "none",
};

const FLAME = "#a8834f";

export function HeroTableScene({ className }: IconProps) {
  return (
    <svg viewBox="0 0 1000 380" className={className} aria-hidden="true">
      <g {...STROKE} opacity={0.9} strokeWidth={1.6}>
        {/* left foliage */}
        <path d="M 90 280 C 85 240, 95 190, 85 140 C 80 110, 65 90, 75 70" />
        <path d="M 85 140 C 95 130, 115 135, 120 145" />
        <path d="M 88 190 C 70 180, 60 195, 75 210" />
        <path d="M 87 230 C 105 220, 120 235, 110 250" />
        {/* floral garland along the table */}
        <path d="M 120 290 C 180 260, 260 220, 360 190 C 450 160, 560 140, 700 110" strokeDasharray="4 2" />
        <path d="M 180 270 C 190 250, 175 235, 160 245 C 150 255, 165 275, 180 270 Z" />
        <path d="M 230 250 C 245 230, 225 210, 210 225 C 200 240, 220 255, 230 250 Z" />
        <path d="M 310 200 C 330 180, 305 160, 290 180 C 280 195, 300 215, 310 200 Z" />
        <path d="M 400 170 C 420 150, 395 130, 380 150 C 370 165, 390 185, 400 170 Z" />
        <path d="M 470 145 C 490 125, 465 110, 450 125" />
        {/* candles */}
        <line strokeWidth={1.8} x1={175} x2={175} y1={260} y2={190} />
        <path d="M 175 190 C 172 180, 178 172, 175 165 C 171 172, 173 182, 175 190" fill={FLAME} />
        <line strokeWidth={1.8} x1={330} x2={330} y1={205} y2={135} />
        <path d="M 330 135 C 327 125, 333 118, 330 110 C 327 118, 328 128, 330 135" fill={FLAME} />
        <line strokeWidth={1.8} x1={530} x2={530} y1={150} y2={70} />
        <path d="M 530 70 C 527 60, 533 55, 530 45 C 527 55, 528 65, 530 70" fill={FLAME} />
        <line strokeWidth={1.8} x1={720} x2={720} y1={120} y2={50} />
        <path d="M 720 50 C 717 40, 723 35, 720 25 C 717 35, 718 45, 720 50" fill={FLAME} />
        {/* table in perspective */}
        <path d="M 230 420 L 780 130" strokeWidth={2.2} />
        <path d="M 200 420 L 750 135" strokeDasharray="8 4" strokeWidth={1.5} />
        <path d="M 350 430 L 890 145" strokeWidth={2} />
        <path d="M 440 430 L 910 155" strokeWidth={1.2} />
        {/* place settings */}
        <ellipse cx={280} cy={350} rx={70} ry={22} strokeWidth={2} />
        <ellipse cx={280} cy={350} rx={52} ry={16} strokeWidth={1.3} />
        <path d="M 235 300 C 235 280, 255 280, 255 300 C 255 310, 245 315, 245 325" />
        <line x1={240} x2={250} y1={325} y2={325} />
        <path d="M 265 295 C 265 275, 285 275, 285 295 C 285 305, 275 310, 275 320" />
        <line x1={270} x2={280} y1={320} y2={320} />
        <ellipse cx={400} cy={305} rx={60} ry={18} strokeWidth={1.8} />
        <ellipse cx={400} cy={305} rx={44} ry={13} strokeWidth={1.2} />
        <path d="M 365 260 C 365 245, 380 245, 380 260 C 380 270, 372 275, 372 285" />
        <line x1={368} x2={376} y1={285} y2={285} />
        <ellipse cx={500} cy={255} rx={48} ry={14} strokeWidth={1.6} />
        <ellipse cx={500} cy={255} rx={34} ry={10} strokeWidth={1} />
        <path d="M 470 215 C 470 205, 485 205, 485 215 C 485 222, 478 226, 478 234" />
        <line x1={474} x2={482} y1={234} y2={234} />
        <ellipse cx={590} cy={218} rx={38} ry={11} strokeWidth={1.4} />
        <ellipse cx={680} cy={180} rx={32} ry={9} strokeWidth={1.2} />
        {/* chairs */}
        <path d="M 570 330 L 570 410" strokeWidth={2} />
        <path d="M 685 275 L 685 385" strokeWidth={2} />
        <path d="M 570 330 L 685 275" strokeWidth={3} />
        <line strokeWidth={1.2} x1={585} x2={585} y1={323} y2={400} />
        <line strokeWidth={1.2} x1={600} x2={600} y1={316} y2={395} />
        <line strokeWidth={1.2} x1={665} x2={665} y1={285} y2={375} />
        <path d="M 720 260 L 720 330" strokeWidth={1.8} />
        <path d="M 825 210 L 825 295" strokeWidth={1.8} />
        <path d="M 720 260 L 825 210" strokeWidth={2.5} />
        <path d="M 830 200 L 830 260" strokeWidth={1.5} />
        <path d="M 915 160 L 915 225" strokeWidth={1.5} />
        <path d="M 830 200 L 915 160" strokeWidth={2} />
      </g>
    </svg>
  );
}

export function ChurchSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...STROKE}>
      <path d="M 32 6 L 32 14 M 28 10 L 36 10" strokeWidth={2.2} />
      <path d="M 32 14 L 20 28 L 24 28 L 24 56 L 40 56 L 40 28 L 44 28 Z" strokeWidth={2} />
      <path d="M 12 36 L 24 28 L 24 56 L 12 56 Z" strokeWidth={1.8} />
      <path d="M 52 36 L 40 28 L 40 56 L 52 56 Z" strokeWidth={1.8} />
      <path d="M 28 56 L 28 42 C 28 39, 36 39, 36 42 L 36 56" strokeWidth={2} />
      <circle cx={32} cy={24} r={2.5} fill="currentColor" />
    </svg>
  );
}

export function ChampagneSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...STROKE}>
      <path d="M 16 18 C 16 32, 48 32, 48 18 L 16 18 Z" strokeWidth={2} />
      <path d="M 18 20 Q 32 23 46 20" strokeDasharray="3 2" strokeWidth={1} />
      <line strokeWidth={2} x1={32} x2={32} y1={32} y2={52} />
      <line strokeWidth={2} x1={22} x2={42} y1={52} y2={52} />
      <path d="M 32 38 C 26 34, 22 40, 27 43 C 31 45, 32 40, 32 38 Z" strokeWidth={1.5} />
      <path d="M 32 38 C 38 34, 42 40, 37 43 C 33 45, 32 40, 32 38 Z" strokeWidth={1.5} />
      <path d="M 30 42 C 28 48, 25 51, 22 55" strokeWidth={1.3} />
      <path d="M 34 42 C 36 48, 38 52, 41 56" strokeWidth={1.3} />
    </svg>
  );
}

export function DinnerSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...STROKE}>
      <circle cx={32} cy={32} r={18} strokeWidth={2} />
      <circle cx={32} cy={32} r={14} strokeDasharray="2 2" strokeWidth={1} />
      <circle cx={32} cy={32} r={8} strokeWidth={1.2} />
      <path d="M 32 27 C 33 30, 31 34, 32 37" strokeWidth={1.2} />
      <path d="M 9 20 L 9 32 C 9 35, 12 35, 12 38 L 12 48" strokeWidth={1.5} />
      <line strokeWidth={1.2} x1={7} x2={7} y1={20} y2={28} />
      <line strokeWidth={1.2} x1={11} x2={11} y1={20} y2={28} />
      <path d="M 52 20 C 52 30, 50 34, 50 48" strokeWidth={1.8} />
      <ellipse cx={56} cy={25} rx={3.5} ry={5.5} strokeWidth={1.3} />
      <line strokeWidth={1.5} x1={56} x2={56} y1={30.5} y2={48} />
    </svg>
  );
}

export function DancingSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...STROKE}>
      <ellipse cx={20} cy={46} rx={4} ry={3} fill="currentColor" />
      <line strokeWidth={2} x1={24} x2={24} y1={46} y2={22} />
      <ellipse cx={42} cy={38} rx={4} ry={3} fill="currentColor" />
      <line strokeWidth={2} x1={46} x2={46} y1={38} y2={16} />
      <path d="M 24 22 C 34 16, 38 24, 46 16" strokeWidth={3} />
      <path d="M 48 10 L 49 14 L 53 15 L 49 16 L 48 20 L 47 16 L 43 15 L 47 14 Z" fill="currentColor" />
      <path d="M 14 26 L 15 29 L 18 30 L 15 31 L 14 34 L 13 31 L 10 30 L 13 29 Z" fill="currentColor" />
    </svg>
  );
}

export function CakeSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...STROKE}>
      <ellipse cx={32} cy={18} rx={9} ry={3} strokeWidth={1.5} />
      <path d="M 23 18 L 23 26 C 23 28, 41 28, 41 26 L 41 18" strokeWidth={1.5} />
      <ellipse cx={32} cy={27} rx={17} ry={4} strokeWidth={1.5} />
      <path d="M 15 27 L 15 38 C 15 42, 49 42, 49 38 L 49 27" strokeWidth={1.8} />
      <ellipse cx={32} cy={40} rx={20} ry={4} strokeWidth={1.8} />
      <path d="M 28 44 L 26 54 L 38 54 L 36 44" strokeWidth={1.8} />
      <line strokeWidth={2} x1={22} x2={42} y1={54} y2={54} />
      <path d="M 18 33 Q 32 37 46 33" strokeDasharray="2 2" strokeWidth={1} />
    </svg>
  );
}

export function CarSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 64 64" className={className} aria-hidden="true" {...STROKE}>
      <rect height={24} rx={8} strokeWidth={2} width={36} x={14} y={24} />
      <path d="M 18 24 L 22 14 L 42 14 L 46 24" strokeWidth={2} />
      <rect height={7} rx={2} strokeWidth={1.2} width={20} x={22} y={16} />
      <path d="M 32 18 C 31 16, 29 17, 30 19 L 32 21 L 34 19 C 35 17, 33 16, 32 18 Z" fill="currentColor" />
      <circle cx={12} cy={42} r={3.5} strokeWidth={2} />
      <circle cx={52} cy={42} r={3.5} strokeWidth={2} />
      <rect height={8} rx={1.5} strokeWidth={1.3} width={18} x={23} y={33} />
      <path d="M 16 48 C 22 45, 42 45, 48 48" strokeDasharray="2 2" strokeWidth={2} />
    </svg>
  );
}

export function RibbonSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 200 200" className={className} aria-hidden="true" {...STROKE}>
      <path d="M 140 45 C 160 30, 185 45, 175 65 C 165 80, 145 65, 140 50 Z" strokeWidth={2} />
      <path d="M 135 45 C 115 30, 90 45, 100 65 C 110 80, 130 65, 135 50 Z" strokeWidth={2} />
      <ellipse cx={138} cy={48} rx={6} ry={5} strokeWidth={2.5} />
      <path d="M 136 53 C 145 80, 130 115, 150 150 C 155 160, 160 170, 155 180" strokeWidth={2} />
      <path d="M 133 53 C 115 85, 125 110, 105 135 C 80 155, 45 130, 20 140" strokeWidth={2} />
    </svg>
  );
}

export function EnvelopesSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 200 110" className={className} aria-hidden="true" {...STROKE}>
      <g strokeWidth={2}>
        <rect height={50} rx={3} transform="rotate(-10 62 55)" width={75} x={25} y={30} />
        <path d="M 22 38 L 57 60 L 96 26" />
        <path d="M 54 58 C 54 55, 59 55, 61 58 L 61 60 C 61 63, 56 65, 54 58 Z" fill="currentColor" />
      </g>
      <g strokeWidth={2.2}>
        <rect height={55} rx={3} width={80} x={90} y={40} />
        <path d="M 90 40 L 130 68 L 170 40" />
        <path d="M 130 68 C 127 64, 122 66, 124 70 L 130 75 L 136 70 C 138 66, 133 64, 130 68 Z" fill="currentColor" />
      </g>
      <path d="M 18 20 L 22 20 M 20 18 L 20 22" strokeWidth={1.5} />
      <path d="M 182 50 L 186 50 M 184 48 L 184 52" strokeWidth={1.5} />
    </svg>
  );
}

export function SparklesSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 40 40" className={className} aria-hidden="true" {...STROKE}>
      <path d="M 20 4 L 22 14 L 32 16 L 22 18 L 20 28 L 18 18 L 8 16 L 18 14 Z" strokeWidth={1.8} />
      <path d="M 30 26 L 31 30 L 35 31 L 31 32 L 30 36 L 29 32 L 25 31 L 29 30 Z" strokeWidth={1.5} />
    </svg>
  );
}

export function RingsSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 140 140" className={className} aria-hidden="true" {...STROKE}>
      <ellipse cx={60} cy={72} rx={24} ry={24} strokeWidth={2.2} />
      <ellipse cx={60} cy={72} rx={20} ry={20} strokeWidth={1.2} />
      <polygon points="60,34 68,44 52,44" strokeWidth={2} />
      <path d="M 52 44 L 68 44 M 56 39 L 64 39" strokeWidth={1.2} />
      <ellipse cx={80} cy={85} rx={24} ry={24} strokeWidth={2.2} />
      <ellipse cx={80} cy={85} rx={20} ry={20} strokeWidth={1.2} />
    </svg>
  );
}

export function BrideSketch({ className }: IconProps) {
  return (
    <svg viewBox="0 0 160 220" className={className} aria-hidden="true" {...STROKE}>
      <path d="M 75 40 C 70 30, 85 20, 95 30 C 100 40, 90 50, 80 45" strokeWidth={1.8} />
      <path d="M 85 45 C 80 65, 70 95, 68 120" strokeWidth={2} />
      <path d="M 78 55 C 65 65, 55 80, 52 105" strokeWidth={1.6} />
      <path d="M 68 85 C 85 110, 95 140, 102 180" strokeWidth={1.6} />
      <path d="M 82 25 C 75 15, 60 10, 48 30 C 40 45, 45 70, 52 85" strokeDasharray="3 2" strokeWidth={1.4} />
      <rect height={18} rx={2} strokeWidth={1.8} width={48} x={52} y={145} />
      <line strokeWidth={1.2} x1={76} x2={76} y1={145} y2={163} />
      <rect height={17} rx={2} strokeWidth={1.8} width={40} x={56} y={128} />
      <line strokeWidth={1.2} x1={76} x2={76} y1={128} y2={145} />
      <rect height={16} rx={2} strokeWidth={1.8} width={32} x={60} y={112} />
      <path d="M 62 170 C 70 178, 82 178, 90 170" strokeWidth={1.5} />
      <circle cx={76} cy={188} r={14} strokeWidth={2.2} />
      <line strokeWidth={2} x1={76} x2={76} y1={188} y2={175} />
      <path d="M 65 198 C 55 205, 45 210, 40 216" strokeDasharray="2 2" strokeWidth={1.2} />
      <rect height={10} rx={1} strokeWidth={1.3} width={6} x={36} y={212} />
      <path d="M 85 198 C 95 205, 105 210, 112 216" strokeDasharray="2 2" strokeWidth={1.2} />
      <rect height={10} rx={1} strokeWidth={1.3} width={6} x={110} y={212} />
    </svg>
  );
}
