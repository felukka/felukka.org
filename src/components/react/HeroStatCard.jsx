export default function HeroStatCard({
  label = "Projects",
  value = "2 Flagships",
  valueColor = "#dde3ea",
  sub = "Deployed",
  subColor = "#eac07d",
  description = "Koptan (Operator) + Minzar (Cockpit)",
}) {
  return (
    <div className="flex flex-col space-y-1">
      <span className="font-label text-[10px] uppercase tracking-widest text-outline">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span
          className="font-headline text-2xl font-bold"
          style={{ color: valueColor }}
        >
          {value}
        </span>
        <span className="text-xs font-label" style={{ color: subColor }}>
          {sub}
        </span>
      </div>
      <span className="font-body text-xs text-on-surface-variant">
        {description}
      </span>
    </div>
  );
}
