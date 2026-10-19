export default function TelemetryPill({
  icon = "satellite_alt",
  label = "Fleet Status",
  value = "36 Nodes Synchronized",
  badge = "99.98% OK",
  isLink = false,
  linkText = "Sync",
  linkHref = "#",
  isTertiary = false,
}) {
  const iconColor = isTertiary ? "#a9c9ef" : "#eac07d";
  const badgeBg = isTertiary ? "rgba(29,63,94,0.4)" : "rgba(83,56,0,0.4)";
  const badgeColor = isTertiary ? "#a9c9ef" : "#eac07d";

  return (
    <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2.5">
        <span
          className="material-symbols-outlined text-xl"
          style={{ color: iconColor }}
        >
          {icon}
        </span>
        <div>
          <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">
            {label}
          </div>
          <div className="text-xs font-headline font-semibold text-on-surface">
            {value}
          </div>
        </div>
      </div>
      {isLink ? (
        <a
          className="text-[10px] font-label uppercase tracking-widest hover:text-primary transition-colors flex items-center gap-1"
          href={linkHref}
        >
          {linkText}
          <span className="material-symbols-outlined text-xs">south_east</span>
        </a>
      ) : (
        <span
          className="text-[10px] font-mono px-2 py-0.5 rounded"
          style={{ backgroundColor: badgeBg, color: badgeColor }}
        >
          {badge}
        </span>
      )}
    </div>
  );
}
