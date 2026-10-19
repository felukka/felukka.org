export default function CTASection({
  title = "Ready to Embark?",
  description = "Whether you are piloting five microservices or commanding thousands of high-velocity nodes across continents, the Felukka constellation is built for your bridge.",
  features = [
    { icon: "verified", label: "Apache 2.0 License" },
    { icon: "lock_open", label: "Open Governance" },
    { icon: "group", label: "Community Driven" },
  ],
  primaryCTA = { label: "Star on GitHub", href: "https://github.com/felukka" },
  secondaryCTA = { label: "Read Quickstart Guide", href: "#" },
  tertiaryCTA = {
    label: "Join Discord Bridge",
    href: "https://discord.gg/Rzt9NM7RK5",
  },
}) {
  return (
    <section className="w-full bg-surface py-20 lg:py-28 relative overflow-hidden">
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -bottom-20 right-1/4 w-[500px] h-[350px] bg-primary/5 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="rounded-2xl bg-gradient-to-b from-surface-container-low to-surface-container p-8 sm:p-14 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-10">
          {/* Left Copy */}
          <div className="space-y-4 max-w-2xl text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label text-xs uppercase tracking-widest font-semibold">
              <span className="material-symbols-outlined text-sm">sailing</span>
              Open Source Collective
            </div>
            <h2 className="font-headline text-3xl sm:text-5xl font-bold tracking-tight text-on-surface">
              {title}
            </h2>
            <p className="font-body text-base text-on-surface-variant leading-relaxed">
              {description}
            </p>
            <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-6 text-xs font-label text-outline uppercase tracking-wider">
              {features.map((f) => (
                <span key={f.label} className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-primary text-base">
                    {f.icon}
                  </span>
                  {f.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right Actions */}
          <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
            <a
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-primary hover:bg-primary-fixed-dim text-on-primary font-label text-xs font-bold tracking-widest uppercase transition-all shadow-[0_0_20px_rgba(234,192,125,0.25)]"
              href={primaryCTA.href}
              rel="noreferrer"
              target="_blank"
            >
              <span className="material-symbols-outlined text-base">star</span>
              <span>{primaryCTA.label}</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-surface-container-highest hover:bg-surface-bright text-secondary hover:text-on-surface font-label text-xs font-semibold tracking-widest uppercase transition-colors"
              href={secondaryCTA.href}
            >
              <span className="material-symbols-outlined text-base">
                terminal
              </span>
              <span>{secondaryCTA.label}</span>
            </a>
            <a
              className="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-md bg-surface-container-high hover:bg-surface-container-highest text-on-surface-variant hover:text-on-surface font-label text-xs font-semibold tracking-widest uppercase transition-colors"
              href={tertiaryCTA.href}
            >
              <span className="material-symbols-outlined text-base">forum</span>
              <span>{tertiaryCTA.label}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
