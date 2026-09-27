export default function OliveBranch({ className = "" }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 330 190" fill="none" aria-hidden="true">
      <path className="branch-line" d="M20 171C86 147 143 113 194 75C236 44 276 28 315 18" />
      {[
        [73, 148, -42],
        [97, 134, 18],
        [122, 118, -48],
        [147, 100, 15],
        [171, 83, -42],
        [198, 66, 18],
        [225, 50, -37],
        [253, 37, 22],
        [279, 27, -34],
      ].map(([x, y, rotation], index) => (
        <ellipse
          key={index}
          className="branch-leaf"
          cx={x}
          cy={y}
          rx="15"
          ry="5.5"
          transform={`rotate(${rotation} ${x} ${y})`}
        />
      ))}
    </svg>
  );
}
