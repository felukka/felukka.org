export default function ServiceTier({
  title = "Tier Name",
  price = "$0",
  priceType = "/ Free",
  description = "Description here.",
  badge = "",
  badgeColor = "bg-primary text-on-primary",
  tagLabel = "OPEN SOURCE",
  tagColor = "bg-surface-container text-on-surface-variant",
  icon = "star",
  iconColor = "text-secondary",
  features = [],
  iconType = "check_circle",
  ctaLabel = "Get Started",
  ctaHref = "#",
  ctaPrimary = false,
}) {
  const iconMap = {
    check: "check_circle",
    verified: "verified",
    shield: "shield",
  };
  const featuredIcon = iconMap[iconType] || iconMap.check;

  return (
    <div
      class={`flex flex-col justify-between bg-surface-container-low p-7 rounded-xl shadow-md transition-all duration-300 hover:bg-surface-container ${badge ? "bg-surface-container p-7 rounded-xl shadow-xl relative scale-[1.02] -my-1 ring-1 ring-primary/20" : ""}`}
    >
      {badge && (
        <div
          class={`absolute -top-3.5 left-1/2 -translate-x-1/2 font-label text-[10px] font-bold uppercase tracking-widest px-3 py-0.5 rounded-full shadow-[0_0_12px_rgba(234,192,125,0.3)] ${badgeColor}`}
        >
          {badge}
        </div>
      )}
      <div class="space-y-6">
        <div class="flex justify-between items-start">
          <span
            class={`px-2.5 py-1 rounded bg-surface-container text-on-surface-variant font-label text-[10px] tracking-widest uppercase font-semibold ${tagColor}`}
          >
            {tagLabel}
          </span>
          <span class={`material-symbols-outlined text-2xl ${iconColor}`}>
            {icon}
          </span>
        </div>
        <div>
          <h3 class="font-headline text-xl font-bold text-on-surface">
            {title}
          </h3>
          <div class="mt-3 flex items-baseline gap-1">
            <span
              class={`font-headline text-3xl font-bold ${ctaPrimary ? "text-primary" : "text-on-surface"}`}
            >
              {price}
            </span>
            {priceType && (
              <span class="font-label text-xs text-on-surface-variant uppercase tracking-wider">
                {priceType}
              </span>
            )}
          </div>
          <p class="mt-3 text-xs text-on-surface-variant font-body leading-relaxed">
            {description}
          </p>
        </div>
        <div class="space-y-3 pt-3">
          {tagLabel === "OPEN SOURCE" && (
            <span class="font-label text-[11px] uppercase tracking-wider text-outline font-semibold block">
              Included Instruments
            </span>
          )}
          {tagLabel === "COMMERCIAL LICENSE" && (
            <span class="font-label text-[11px] uppercase tracking-wider text-primary font-semibold block">
              Production Protection
            </span>
          )}
          {tagLabel === "AIR-GAPPED & BESPOKE" && (
            <span class="font-label text-[11px] uppercase tracking-wider text-outline font-semibold block">
              Mission-Critical Suite
            </span>
          )}
          <ul class="space-y-2.5 text-xs text-on-surface-variant font-body">
            {features.map((feat) => (
              <li key={feat} class="flex items-start gap-2.5">
                <span
                  class={`material-symbols-outlined text-primary text-base shrink-0 mt-0.5`}
                >
                  {featuredIcon}
                </span>
                <span
                  class={
                    ctaPrimary && iconType === "verified"
                      ? "font-medium text-on-surface"
                      : ""
                  }
                >
                  {feat}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div class="pt-8">
        <a
          class={`w-full inline-flex items-center justify-center gap-2 px-4 py-3 rounded-md font-label text-xs uppercase tracking-wider font-semibold transition-all ${
            ctaPrimary
              ? "bg-primary hover:bg-primary-fixed-dim text-on-primary shadow-[0_0_16px_rgba(234,192,125,0.25)]"
              : "bg-surface-container-high hover:bg-surface-container-highest text-on-surface"
          }`}
          href={ctaHref}
        >
          <span class="material-symbols-outlined text-base">
            {ctaPrimary ? "request_quote" : "terminal"}
          </span>
          <span>{ctaLabel}</span>
        </a>
      </div>
    </div>
  );
}
