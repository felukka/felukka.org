export default function ServicesHero() {
  return (
    <section class="relative w-full overflow-hidden pb-16 lg:pb-24">
      <div class="pointer-events-none absolute -top-32 left-1/2 -translate-x-1/2 w-[720px] h-[320px] bg-gradient-to-b from-primary/10 via-tertiary-container/20 to-transparent blur-3xl" />

      <div class="max-w-7xl mx-auto px-6 lg:px-12 pt-12 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          <div class="lg:col-span-12 space-y-5">
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
