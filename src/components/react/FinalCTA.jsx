export default function FinalCTA() {
  return (
    <section class="w-full py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="bg-gradient-to-r from-surface-container-low via-surface-container to-surface-container-low p-8 lg:p-12 rounded-2xl flex flex-col md:flex-row items-center justify-between gap-8 relative overflow-hidden shadow-2xl">
          <div class="space-y-2 max-w-xl">
            <span class="font-label text-xs uppercase tracking-widest text-primary font-semibold">
              PREPARE FOR EMBARKATION
            </span>
            <h3 class="font-headline text-2xl lg:text-3xl font-bold text-on-surface">
              Ready to harden your fleet's celestial helm?
            </h3>
            <p class="font-body text-sm text-on-surface-variant leading-relaxed">
              Join leading platform engineering organizations orchestrating
              reliable Kubernetes workloads with Felukka.
            </p>
          </div>
          <div class="flex flex-col sm:flex-row items-center gap-3 w-full md:w-auto">
            <a
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary hover:bg-primary-fixed-dim text-on-primary font-label text-xs uppercase tracking-wider font-semibold transition-all shadow-[0_0_16px_rgba(234,192,125,0.25)]"
              href="#connect-bridge"
            >
              <span class="material-symbols-outlined text-base">hub</span>
              <span>Initiate Fleet Consultation</span>
            </a>
            <a
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-3.5 rounded-md bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label text-xs uppercase tracking-wider font-semibold transition-colors"
              href="https://github.com/felukka"
              rel="noreferrer"
              target="_blank"
            >
              <span class="material-symbols-outlined text-base">code</span>
              <span>Explore Source</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
