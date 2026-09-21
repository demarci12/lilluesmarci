const CONFETTI_PIECES = Array.from({ length: 24 }, (_, i) => ({
  left: Math.round((i * 37) % 100),
  delay: (i % 8) * 0.12,
  color: ["#a8834f", "#7c8c5b", "#c2a87a", "#b8ca9a", "#f6eaa9"][i % 5],
}));

export default function Confetti() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      {CONFETTI_PIECES.map((p, i) => (
        <span
          key={i}
          className="absolute top-0 w-[6px] h-[10px] rounded-sm animate-[confetti-fall_1.6s_ease-in_forwards]"
          style={{ left: `${p.left}%`, background: p.color, animationDelay: `${p.delay}s` }}
        />
      ))}
    </div>
  );
}
