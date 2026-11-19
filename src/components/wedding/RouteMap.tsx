// A small hand-drawn-style route: Budapest → Etyeki templom → Kálna Mátyás Malom.
// Not to scale. The dotted gold path draws itself when its `[data-reveal]`
// parent becomes visible (Reveal adds `.is-visible`); under reduced motion it
// is simply shown.

const BP_TO_CHURCH = "M700 92 C 600 40, 470 150, 360 118 S 250 96, 232 138";
const CHURCH_TO_MILL = "M232 138 C 210 180, 170 196, 128 232";

function Stop({ x, y, name, note, anchor = "start", dx = 18, dy = -22 }: { x: number; y: number; name: string; note: string; anchor?: "start" | "middle" | "end"; dx?: number; dy?: number }) {
  return (
    <g>
      <circle cx={x} cy={y} r="9" className="route-ring" />
      <circle cx={x} cy={y} r="4" className="route-dot" />
      <text x={x + dx} y={y + dy} textAnchor={anchor} className="route-name">{name}</text>
      <text x={x + dx} y={y + dy + 22} textAnchor={anchor} className="route-note">{note}</text>
    </g>
  );
}

export default function RouteMap() {
  return (
    <figure className="route-map" aria-label="Útvonal: Budapest, Etyeki templom, Kálna Mátyás Malom">
      <svg viewBox="0 0 820 300" role="img" aria-labelledby="route-map-title">
        <title id="route-map-title">Budapestről az etyeki templomig autóval 35–45 perc, onnan közös transzfer a Kálna Mátyás Malomhoz.</title>
        {/* faint hills */}
        <path className="route-hill" d="M0 268 C 120 232, 220 250, 320 236 S 520 214, 640 236 S 780 250, 820 238" />
        <path className="route-hill" d="M0 290 C 140 270, 260 284, 400 272 S 640 262, 820 276" />

        <mask id="route-reveal-a">
          <path d={BP_TO_CHURCH} className="draw" pathLength={1000} />
        </mask>
        <mask id="route-reveal-b">
          <path d={CHURCH_TO_MILL} className="draw draw-late" pathLength={1000} />
        </mask>
        <path d={BP_TO_CHURCH} className="route-path" mask="url(#route-reveal-a)" />
        <path d={CHURCH_TO_MILL} className="route-path" mask="url(#route-reveal-b)" />

        <text x="470" y="70" textAnchor="middle" className="route-leg">autóval 35–45 perc</text>
        <text x="148" y="178" textAnchor="end" className="route-leg">közös transzfer</text>

        <Stop x={700} y={92} name="Budapest" note="indulás" anchor="start" dy={-26} />
        <Stop x={232} y={138} name="Etyeki templom" note="érkezés 14:45 · szertartás 15:00" anchor="start" dy={6} />
        <Stop x={128} y={232} name="Kálna Mátyás Malom" note="16:40-től · vacsora és buli" anchor="start" dy={-4} />
      </svg>
    </figure>
  );
}
