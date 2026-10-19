export default function WhySection() {
  return (
    <section class="w-full py-16 lg:py-20">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="bg-surface-container-low rounded-2xl p-6 lg:p-10 shadow-lg">
          <div class="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div class="lg:col-span-5 relative">
              <div class="w-full h-72 rounded-xl overflow-hidden bg-surface-container-lowest relative shadow-inner">
                <div class="absolute inset-0 bg-gradient-to-br from-primary/10 via-tertiary-container/20 to-transparent" />
                <div class="absolute bottom-4 left-4 right-4 p-3 bg-surface-container/90 backdrop-blur-md rounded-lg">
                  <div class="flex items-center justify-between text-xs font-label">
                    <span class="text-on-surface font-semibold uppercase tracking-wider">
                      Direct Upstream Stewardship
                    </span>
                    <span class="text-primary font-mono text-[11px]">
                      BRANCH // MAIN
                    </span>
                  </div>
                  <p class="text-[11px] text-on-surface-variant font-body mt-1 leading-tight">
                    No third-party brokers. Work directly with core maintainers
                    of Felukka.
                  </p>
                </div>
              </div>
            </div>
            <div class="lg:col-span-7 space-y-6">
              <div class="space-y-2">
                <span class="font-label text-xs uppercase tracking-widest text-primary font-semibold">
                  WHY FELUKKA COMMERCIAL
                </span>
                <h3 class="font-headline text-2xl font-bold text-on-surface">
                  The Open-Core Sovereign Guarantee
                </h3>
                <p class="font-body text-sm text-on-surface-variant leading-relaxed">
                  We reject predatory cloud-native vendor traps. Felukka will
                  always be fully functional without artificial feature tiering.
                  Our commercial contracts fund continuous upstream engineering
                  and guarantee legal indemnification, sovereign air-gap
                  isolation, and critical operational uptime for enterprise
                  leaders.
                </p>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="bg-surface-container p-4 rounded-lg space-y-1">
                  <div class="flex items-center gap-2 text-primary font-headline text-sm font-semibold">
                    <span class="material-symbols-outlined text-lg">
                      policy
                    </span>
                    <span>Complete IP Assurance</span>
                  </div>
                  <p class="text-xs text-on-surface-variant font-body leading-relaxed">
                    Full legal protection, patents non-assertion, and enterprise
                    licensing certificates for audit defense.
                  </p>
                </div>
                <div class="bg-surface-container p-4 rounded-lg space-y-1">
                  <div class="flex items-center gap-2 text-primary font-headline text-sm font-semibold">
                    <span class="material-symbols-outlined text-lg">
                      sync_problem
                    </span>
                    <span>Zero Drift Telemetry</span>
                  </div>
                  <p class="text-xs text-on-surface-variant font-body leading-relaxed">
                    Automated continuous verification between etcd state and
                    live cloud worker nodes across multiple regions.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
