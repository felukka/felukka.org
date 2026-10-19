// File: TelemetryPill.jsx
// Description: React component for displaying telemetry indicator pills in the blog design.
// Dependencies: React, Astro (for props)

const TelemetryPill = ({ icon, label, value, badge, isLink, linkText, linkHref, isTertiary = false }) => {
  return (
    <div className="p-3.5 rounded-xl bg-surface-container-low flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-2.5">
        <span className={`material-symbols-outlined ${isTertiary ? 'text-tertiary' : 'text-primary'} text-xl`}>
          {icon}
        </span>
        <div>
          <div className="text-[10px] font-label uppercase tracking-widest text-on-surface-variant">{label}</div>
          <div className="text-xs font-headline font-semibold text-on-surface">{value}</div>
        </div>
      </div>
      {badge ? (
        <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-primary-container/40 text-primary">{badge}</span>
      ) : isLink ? (
        <a className="text-[10px] font-label uppercase tracking-widest text-secondary hover:text-primary transition-colors flex items-center gap-1" href={linkHref || "#"}>
          {linkText} <span className="material-symbols-outlined text-xs">south_east</span>
        </a>
      ) : null}
    </div>
  );
};

export default TelemetryPill;
