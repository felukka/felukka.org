const iconMap = {
  sailing: "sailing",
  explore: "explore",
  anchor: "anchor",
};

export default function ProjectCard({
  icon = "sailing",
  iconColor = "#eac07d",
  iconBg = "rgba(234,192,125,0.1)",
  category = "Autonomous Operator",
  version = "v1.4.2",
  versionColor = "#eac07d",
  versionStatusColor = "#eac07d",
  title = "KOPTAN",
  subtitle = "/ The Captain",
  subtitleColor = "#eac07d",
  motif = "Single-Sided Collapsible Oar Motif",
  description = "Description goes here.",
  codeHeaderLeft = "koptan.felukka.io/v1",
  codeStatus = "Reconciled",
  codeCommand = "$ kubectl get koptanroutes -A",
  codeOutput = "helm-harbor-prod · 042.8° · 0.00% drift",
  tags = ["Go", "Custom CRDs"],
  ctaLabel = "Source / GitHub",
  ctaHref = "#",
  ctaColor = "#eac07d",
  specLabel = "CRD SPEC v1",
}) {
  return (
    <div className="group relative flex flex-col justify-between rounded-xl bg-surface-container-low p-8 transition-all duration-300 hover:bg-surface-container hover:shadow-[0_16px_40px_rgba(0,0,0,0.4)]">
      {/* Ambient glow (pseudo-element via div) */}
      <div
        className="pointer-events-none absolute -right-10 -top-10 w-48 h-48 rounded-full blur-2xl transition-colors opacity-60 group-hover:opacity-100"
        style={{ backgroundColor: iconBg.replace(/[\d.]+\)$/, "0.1)") }}
      />

      <div>
        {/* Header row */}
        <div className="flex items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-2">
            <span
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: iconBg, color: iconColor }}
            >
              <span className="material-symbols-outlined text-lg">
                {iconMap[icon] || icon}
              </span>
            </span>
            <span className="font-label text-xs uppercase tracking-widest text-outline">
              {category}
            </span>
          </div>
          <span
            className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-surface-container-high font-label text-[11px] font-semibold tracking-wider"
            style={{ color: versionColor }}
          >
            <span
              className="w-1.5 h-1.5 rounded-full"
              style={{ backgroundColor: versionStatusColor }}
            />
            {version}
          </span>
        </div>

        {/* Title block */}
        <div className="space-y-1">
          <div className="flex items-baseline gap-3">
            <h3 className="font-headline text-2xl sm:text-3xl font-bold tracking-tight text-on-surface">
              {title}
            </h3>
            <span
              className="font-label text-xs tracking-widest uppercase"
              style={{ color: subtitleColor }}
            >
              {subtitle}
            </span>
          </div>
          <p className="font-label text-xs uppercase tracking-wider text-secondary">
            {motif}
          </p>
        </div>

        {/* Description */}
        <p className="mt-4 font-body text-sm text-on-surface-variant leading-relaxed">
          {description}
        </p>

        {/* Code Block */}
        <div className="mt-6 rounded-lg bg-surface-container-lowest p-4 font-mono text-xs text-on-surface-variant space-y-1.5">
          <div className="flex items-center justify-between text-[11px] font-label text-outline pb-1">
            <span className="flex items-center gap-1.5">
              <span
                className="inline-block w-2 h-2 rounded-full"
                style={{ backgroundColor: iconColor + "99" }}
              />
              {codeHeaderLeft}
            </span>
            <span className="text-secondary">{codeStatus}</span>
          </div>
          <div className="text-[11px]" style={{ color: "#eac07d99" }}>
            {codeCommand}
          </div>
          <div className="text-[10px] text-secondary">{codeOutput}</div>
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="px-2.5 py-1 rounded bg-surface-container-high text-xs font-label text-on-surface-variant"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Footer */}
      <div className="mt-8 pt-6 flex items-center justify-between gap-4">
        <a
          className="inline-flex items-center gap-2 text-xs font-label tracking-widest hover:opacity-80 font-semibold transition-colors"
          style={{ color: ctaColor }}
          href={ctaHref}
          rel="noreferrer"
          target="_blank"
        >
          {ctaLabel}
          <span className="material-symbols-outlined text-sm">
            arrow_forward
          </span>
        </a>
        <span className="text-[11px] font-label text-outline tracking-wider">
          {specLabel}
        </span>
      </div>
    </div>
  );
}
