export default function DirectContact() {
  const contacts = [
    {
      icon: "mail",
      title: "Direct Maintainer Comms",
      desc: "Reach our core steering council directly for urgent advisory or RFP tender invitations.",
      links: [{ label: "COMMERCIAL:", email: "mahmoudk1000@gmail.com" }],
    },
    {
      icon: "calendar_month",
      title: "Enterprise Advisory Council",
      desc: "Book a live 30-minute discovery session with a Felukka Principal Architect.",
      cta: "Reserve Council Session",
      href: "#connect-bridge",
    },
    {
      icon: "vpn_key",
      title: "Air-Gapped & Sovereign RFPs",
      desc: "For defense, aerospace, and banking institutions requiring encrypted proposals.",
      pgp: "4A7B 89F1 2C8D E450 91A3",
    },
  ];

  return (
    <section class="w-full py-12 lg:py-16">
      <div class="max-w-7xl mx-auto px-6 lg:px-12">
        <div class="space-y-6">
          <div class="flex items-center justify-between">
            <div>
              <span class="font-label text-xs uppercase tracking-widest text-primary font-semibold">
                DIRECT COMMS
              </span>
              <h3 class="font-headline text-xl font-bold text-on-surface">
                Alternative Transmission Channels
              </h3>
            </div>
          </div>
          <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
            {contacts.map((contact) => (
              <div
                key={contact.title}
                class="bg-surface-container-low p-6 rounded-xl space-y-4 hover:bg-surface-container transition-colors"
              >
                <div class="w-10 h-10 rounded-lg bg-surface-container-high flex items-center justify-center text-primary">
                  <span class="material-symbols-outlined text-2xl">
                    {contact.icon}
                  </span>
                </div>
                <div>
                  <h4 class="font-headline text-base font-semibold text-on-surface">
                    {contact.title}
                  </h4>
                  <p class="text-xs text-on-surface-variant font-body mt-1 leading-relaxed">
                    {contact.desc}
                  </p>
                </div>
                {contact.links && (
                  <div class="pt-2 space-y-1 font-mono text-xs text-secondary">
                    {contact.links.map((link) => (
                      <div key={link.label} class="flex items-center gap-2">
                        <span class="text-outline text-[10px]">
                          {link.label}
                        </span>
                        <a
                          class="hover:text-primary transition-colors"
                          href={`mailto:${link.email}`}
                        >
                          {link.email}
                        </a>
                      </div>
                    ))}
                  </div>
                )}
                {contact.cta && (
                  <div class="pt-2">
                    <a
                      class="inline-flex items-center gap-2 text-xs font-label text-primary uppercase tracking-wider font-semibold hover:text-primary-fixed-dim transition-colors"
                      href={contact.cta}
                    >
                      <span>{contact.cta}</span>
                      <span class="material-symbols-outlined text-sm">
                        arrow_forward
                      </span>
                    </a>
                  </div>
                )}
                {contact.pgp && (
                  <div class="pt-2 font-mono text-[11px] text-outline">
                    <span class="block text-on-surface-variant font-label text-[10px] uppercase tracking-wider">
                      PGP FINGERPRINT
                    </span>
                    <span class="text-primary truncate block">
                      {contact.pgp}
                    </span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
