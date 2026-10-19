export default function SubscribeNewsletter() {
  return (
    <section
      className="w-full bg-surface-container-low py-16 lg:py-24 relative overflow-hidden"
      id="subscribe"
    >
      {/* Ambient Glow */}
      <div className="pointer-events-none absolute -bottom-24 -left-20 h-96 w-96 rounded-full bg-primary/5 blur-3xl" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        <div className="rounded-2xl bg-surface-container-lowest p-8 sm:p-12 shadow-2xl relative overflow-hidden">
          {/* Console Header */}
          <div className="flex flex-wrap items-center justify-between gap-4 pb-6 border-b-0">
            <div className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">
                sensors
              </span>
              <div>
                <div className="text-[10px] font-label uppercase tracking-widest text-primary font-bold">
                  FREQUENCY CARRIER: 104.2 MHz
                </div>
                <h3 className="font-headline font-bold text-2xl sm:text-3xl text-on-surface">
                  Receive Celestial Dispatches in Your Terminal or Inbox
                </h3>
              </div>
            </div>
            <div className="flex items-center gap-2 font-mono text-[11px] text-secondary">
              <span className="h-2 w-2 rounded-full bg-primary animate-ping" />
              <span>BEACON LISTENING</span>
            </div>
          </div>

          <p className="font-body text-secondary text-sm sm:text-base leading-relaxed max-w-2xl mb-8">
            No spam, no vendor pitches. Only architectural deep dives,
            zero-downtime operator playbooks, and release logs delivered every
            two weeks.
          </p>

          {/* Subscribe Form */}
          <form
            className="space-y-4"
            onSubmit={(e) => {
              e.preventDefault();
              const el = document.getElementById("sub-success");
              if (el) el.classList.remove("hidden");
            }}
          >
            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline text-lg">
                  alternate_email
                </span>
                <input
                  className="w-full pl-11 pr-4 py-3 bg-surface-container rounded-lg font-mono text-xs sm:text-sm text-on-surface placeholder:text-outline focus:outline-none focus:bg-surface-container-high transition-colors"
                  placeholder="sre-bridge@organization.internal"
                  required
                  type="email"
                />
              </div>
              <button
                className="px-6 py-3 rounded-lg bg-primary text-on-primary font-label text-xs sm:text-sm uppercase tracking-wider font-semibold hover:bg-primary-fixed-dim transition-all shadow-[0_0_16px_rgba(234,192,125,0.3)] flex items-center justify-center gap-2 whitespace-nowrap"
                type="submit"
              >
                <span className="material-symbols-outlined text-lg">
                  cell_tower
                </span>
                <span>Subscribe to Dispatch</span>
              </button>
            </div>

            {/* Terminal CURL snippet */}
            <div className="p-3 rounded-lg bg-surface-container flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs font-mono text-on-surface-variant">
              <div className="flex items-center gap-2 truncate">
                <span className="text-primary font-bold">$</span>
                <span className="truncate">
                  curl -sSL https://felukka.org/dispatch/feed.xml |
                  koptan-stream
                </span>
              </div>
              <button
                className="hover:text-primary transition-colors text-[11px] uppercase tracking-wider flex items-center gap-1 self-start sm:self-auto"
                onClick={() => {
                  navigator.clipboard.writeText(
                    "curl -sSL https://felukka.org/dispatch/feed.xml | koptan-stream",
                  );
                }}
                type="button"
              >
                <span className="material-symbols-outlined text-xs">
                  content_copy
                </span>
                <span>Copy</span>
              </button>
            </div>

            {/* Success */}
            <div
              className="hidden p-3 rounded-lg bg-tertiary-container/30 text-tertiary text-xs font-label flex items-center gap-2"
              id="sub-success"
            >
              <span className="material-symbols-outlined text-base">
                check_circle
              </span>
              <span>
                Signal carrier subscribed. Verification ping routed to your
                inbox.
              </span>
            </div>
          </form>

          {/* Protocol Flags */}
          <div className="pt-6 mt-6 flex flex-wrap items-center justify-between gap-4 text-[11px] font-label text-on-surface-variant">
            <div className="flex items-center gap-4">
              <a
                className="hover:text-primary transition-colors flex items-center gap-1"
                href="#"
              >
                <span className="material-symbols-outlined text-xs">
                  rss_feed
                </span>{" "}
                RSS 2.0 Feed
              </a>
              <a
                className="hover:text-primary transition-colors flex items-center gap-1"
                href="#"
              >
                <span className="material-symbols-outlined text-xs">code</span>{" "}
                JSON Feed Specs
              </a>
              <a
                className="hover:text-primary transition-colors flex items-center gap-1"
                href="#"
              >
                <span className="material-symbols-outlined text-xs">lock</span>{" "}
                PGP Key 0x489C
              </a>
            </div>
            <span className="font-mono text-outline">
              LATENCY // 18ms EU-CENTRAL
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
