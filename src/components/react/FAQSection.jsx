import FAQItem from "./FAQItem.jsx";

const faqs = [
  {
    q: "When does my company need a commercial subscription?",
    a: "Personal, educational, and open-source lab explorations are 100% free forever under Apache 2.0. However, when you deploy Felukka across production clusters that support revenue-generating workloads, corporate compliance typically mandates formal commercial licenses, IP indemnification, vulnerability response warranties, and dedicated maintainer SLAs.",
  },
  {
    q: "Can we deploy Felukka in air-gapped sovereign clouds?",
    a: "Yes. Our Admiral Enterprise tier includes fully self-contained OCI tarballs, offline Helm packages, private cryptographic verification bundles, and strict zero-telemetry operational modes designed specifically for isolated networks (DoD IL5/IL6, AWS Secret Region, and sovereign banking clouds).",
  },
  {
    q: "Do you provide migration from legacy Helm & Grafana setups?",
    a: "Absolutely. Our bridge team provides custom migration blueprints to convert disparate Prometheus rules, Grafana dashboards, and raw Helm hooks into unified Felukka Custom Resource Definitions (CRDs) with automated rollback testing.",
  },
  {
    q: "What is the response time on the emergency incident bridge?",
    a: "For Fleet Navigator subscribers, our response time is guaranteed under 4 hours for Severity 1 alerts. For Admiral Enterprise agreements, we operate a 15-minute follow-the-sun emergency dispatch with direct conference bridging to core operator maintainers.",
  },
];

export default function FAQSection() {
  return (
    <section class="w-full bg-surface-container-lowest py-16 lg:py-24">
      <div class="max-w-3xl mx-auto px-6 lg:px-12 space-y-8">
        <div class="text-center space-y-2">
          <span class="font-label text-xs uppercase tracking-widest text-primary font-semibold">
            GOVERNANCE & LICENSING QUERIES
          </span>
          <h2 class="font-headline text-2xl lg:text-3xl font-bold text-on-surface">
            Enterprise Bridge FAQ
          </h2>
          <p class="font-body text-sm text-on-surface-variant">
            Everything you need to know about Felukka's commercial models and
            dual-use terms.
          </p>
        </div>
        <div class="space-y-4">
          {faqs.map((faq) => (
            <FAQItem key={faq.q} question={faq.q} answer={faq.a} />
          ))}
        </div>
      </div>
    </section>
  );
}
