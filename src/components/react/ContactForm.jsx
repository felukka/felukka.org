/**
 * ContactForm — Left side protocol description + right side inquiry form.
 */
export default function ContactForm() {
  return (
    <section
      class="w-full bg-surface-container-lowest py-16 lg:py-24"
      id="connect-bridge"
    >
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div class="lg:col-span-5 space-y-6">
            <div class="space-y-3">
              <h2 class="font-headline text-3xl font-bold text-on-surface tracking-tight">
                Chart Your Fleet Requirements
              </h2>
              <p class="font-body text-sm text-on-surface-variant leading-relaxed">
                Tell us about your cluster topology, workloads, and operational
                requirements. Our principal bridge architects will review your
                manifests and respond within 24 hours.
              </p>
            </div>
            <div class="p-5 rounded-xl bg-surface-container-low space-y-4">
              <span class="font-label text-xs uppercase tracking-wider text-on-surface font-semibold block">
                Bridge Intake Protocols
              </span>
              <div class="space-y-3 text-xs font-body text-on-surface-variant">
                {[
                  {
                    num: "1",
                    title: "Manifest Analysis",
                    desc: "Topology review for Koptan, Bosla and custom Kubernetes operator CRDs.",
                  },
                  {
                    num: "2",
                    title: "Indemnification & Compliance Audit",
                    desc: "Assessment of regulatory requirements (SOC2, HIPAA, air-gapped sovereign networks).",
                  },
                  {
                    num: "3",
                    title: "Bridge Onboarding",
                    desc: "Dedicated Slack/Discord setup, PGP exchange, and SLA clock initiation.",
                  },
                ].map((step) => (
                  <div key={step.num} class="flex items-start gap-3">
                    <div class="w-6 h-6 rounded bg-surface-container flex items-center justify-center shrink-0 text-primary font-label text-[11px] font-bold">
                      {step.num}
                    </div>
                    <div>
                      <span class="text-on-surface font-medium block">
                        {step.title}
                      </span>
                      {step.desc}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div class="lg:col-span-7 bg-surface-container-low p-6 sm:p-8 rounded-2xl shadow-2xl">
            <form
              class="space-y-5"
              id="fleet-inquiry-form"
            >
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="font-label text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Full Name *
                  </label>
                  <input
                    name="name"
                    class="w-full px-3.5 py-2.5 rounded-md bg-surface-container text-on-surface font-body text-sm focus:outline-none focus:bg-surface-container-highest transition-colors placeholder:text-outline/50"
                    placeholder="Captain Alex Morgan"
                    required
                    type="text"
                  />
                </div>
                <div class="space-y-1.5">
                  <label class="font-label text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Corporate Email *
                  </label>
                  <input
                    name="email"
                    class="w-full px-3.5 py-2.5 rounded-md bg-surface-container text-on-surface font-body text-sm focus:outline-none focus:bg-surface-container-highest transition-colors placeholder:text-outline/50"
                    placeholder="alex@enterprise-cloud.io"
                    required
                    type="email"
                  />
                </div>
              </div>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div class="space-y-1.5">
                  <label class="font-label text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Organization / Fleet *
                  </label>
                  <input
                    name="organization"
                    class="w-full px-3.5 py-2.5 rounded-md bg-surface-container text-on-surface font-body text-sm focus:outline-none focus:bg-surface-container-highest transition-colors placeholder:text-outline/50"
                    placeholder="Aegis Navigation Systems"
                    required
                    type="text"
                  />
                </div>
                <div class="space-y-1.5">
                  <label class="font-label text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                    Role / Position
                  </label>
                  <input
                    name="role"
                    class="w-full px-3.5 py-2.5 rounded-md bg-surface-container text-on-surface font-body text-sm focus:outline-none focus:bg-surface-container-highest transition-colors placeholder:text-outline/50"
                    placeholder="e.g. Platform Engineer"
                    type="text"
                  />
                </div>
              </div>
              <div class="space-y-1.5">
                <label class="font-label text-xs uppercase tracking-wider text-on-surface-variant block font-medium">
                  Message / Topology Notes
                </label>
                <textarea
                  name="message"
                  class="w-full px-3.5 py-2.5 rounded-md bg-surface-container text-on-surface font-body text-sm focus:outline-none focus:bg-surface-container-highest transition-colors placeholder:text-outline/50"
                  placeholder="Describe your current cluster setup, workloads, or operational requirements..."
                  rows="4"
                ></textarea>
              </div>
              <div class="pt-2">
                <button
                  class="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-primary hover:bg-primary-fixed-dim text-on-primary font-label text-xs uppercase tracking-wider font-bold transition-all shadow-[0_0_18px_rgba(234,192,125,0.25)]"
                  type="submit"
                >
                  <span class="material-symbols-outlined text-base">send</span>
                  <span>Transmit Fleet Specification</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
