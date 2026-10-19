export default function ServicesHero() {
  return (
    <section class="relative w-full overflow-hidden pb-16 lg:pb-24">
      <div class="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-gradient-to-b from-primary/10 via-tertiary-container/20 to-transparent blur-3xl" />

      <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-12 relative z-10">
        <div class="flex items-center gap-2 mb-6">
          <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-surface-container-high text-primary font-label text-[11px] font-semibold tracking-widest uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            Commercial Harbor
          </div>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-8 space-y-5">
            <h1 class="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl tracking-tight text-on-surface leading-[1.12]">
              Citizen-Grade Freedom.
              <br />
              <span class="bg-gradient-to-r from-primary via-primary-fixed-dim to-secondary text-transparent bg-clip-text">
                Enterprise-Grade Resilience.
              </span>
            </h1>
            <p class="font-body text-base lg:text-lg text-on-surface-variant max-w-3xl leading-relaxed">
              All Felukka instruments (
              <span class="text-on-surface font-medium">Koptan</span>,
              <span class="text-on-surface font-medium">Bosla</span>,
              <span class="text-on-surface font-medium">Kara</span>) are free
              and open source under Apache 2.0 for personal use. For production
              clusters and revenue-generating infrastructure, we provide
              dedicated enterprise stewardship, custom CRD engineering, and a
              24/7 bridge SLA.
            </p>
          </div>

          <div class="lg:col-span-4 bg-surface-container-low p-5 rounded-xl space-y-4 shadow-xl">
            <div class="flex items-center justify-between pb-3">
              <span class="font-label text-xs uppercase tracking-wider text-on-surface-variant font-semibold">
                Active Fleet Sentinel
              </span>
              <span class="flex items-center gap-1.5 font-label text-[10px] text-primary tracking-widest uppercase">
                <span class="inline-block w-1.5 h-1.5 rounded-full bg-primary" />
                99.98% HEALTH
              </span>
            </div>
            <div class="bg-surface-container-lowest p-3 rounded-lg space-y-2">
              <div class="flex justify-between text-[11px] font-label text-on-surface-variant">
                <span>CONTROLLER RECONCILIATION</span>
                <span class="text-primary font-mono">1.8ms avg</span>
              </div>
              <div class="h-1.5 w-full bg-surface-container rounded-full overflow-hidden">
                <div class="h-full bg-gradient-to-r from-secondary to-primary w-[92%] rounded-full" />
              </div>
              <div class="flex justify-between items-center text-[10px] font-label text-outline pt-1">
                <span>SLA THRESHOLD: &lt;5ms</span>
                <span>NODES MANAGED: 42,800+</span>
              </div>
            </div>
            <div class="text-xs font-body text-on-surface-variant leading-relaxed">
              Maintained by the principal authors of Koptan Operator. Direct
              line to upstream committers.
            </div>
          </div>
        </div>

        <div class="mt-12 py-3 px-5 rounded-xl bg-surface-container-low/70 flex flex-wrap items-center justify-between gap-4 text-xs font-label uppercase tracking-widest text-on-surface-variant">
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-base">
              verified_user
            </span>
            <span>Zero Vendor Lock-In</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-base">
              cloud_off
            </span>
            <span>Self-Hosted Air-Gapped Support</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-base">
              tune
            </span>
            <span>Custom CRD Engineering</span>
          </div>
          <div class="flex items-center gap-2">
            <span class="material-symbols-outlined text-primary text-base">
              support_agent
            </span>
            <span>Direct Maintainer SLA</span>
          </div>
        </div>
      </div>
    </section>
  );
}
