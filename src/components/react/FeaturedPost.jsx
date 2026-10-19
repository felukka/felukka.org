// File: FeaturedPost.jsx
// Description: React component for displaying the featured/lead blog post on the blog index page.
// Dependencies: React, Astro (for routing and props)

const FeaturedPost = ({
  category,
  date,
  readTime,
  title,
  summary,
  author,
  authorRole,
  slug,
}) => {
  return (
    <div className="rounded-xl bg-surface-container-low overflow-hidden shadow-xl transition-all duration-300 hover:shadow-2xl">
      <div className="grid grid-cols-1 lg:grid-cols-12">
        {/* Text Content */}
        <div className="lg:col-span-7 p-6 sm:p-8 lg:p-12 flex flex-col justify-between space-y-6">
          <div className="space-y-4">
            {/* Meta Row */}
            <div className="flex flex-wrap items-center gap-3 text-xs font-label">
              <span className="px-2.5 py-1 rounded bg-tertiary-container text-tertiary font-semibold tracking-wider uppercase text-[11px]">
                {category}
              </span>
              <span className="text-outline-variant">·</span>
              <span className="text-secondary font-mono tracking-wide uppercase">{date}</span>
              <span className="text-outline-variant">·</span>
              <span className="text-on-surface-variant flex items-center gap-1 font-mono">
                <span className="material-symbols-outlined text-xs">schedule</span>
                {readTime} MIN READ
              </span>
            </div>
            {/* Title */}
            <h2 className="font-headline font-bold text-2xl sm:text-3xl lg:text-4xl text-on-surface leading-tight hover:text-primary transition-colors cursor-pointer">
              {title}
            </h2>
            {/* Summary */}
            <p className="font-body text-secondary text-sm sm:text-base leading-relaxed">
              {summary}
            </p>
          </div>
          {/* Author & CTA Bar */}
          <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center">
                <span className="material-symbols-outlined text-sm text-primary">person</span>
              </div>
              <div>
                <div className="font-headline font-semibold text-sm text-on-surface">{author}</div>
                <div className="text-[11px] font-label text-on-surface-variant tracking-wider uppercase">
                  {authorRole}
                </div>
              </div>
            </div>
            <a
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-on-primary font-label text-xs uppercase tracking-wider font-semibold hover:bg-primary-fixed-dim transition-all shadow-[0_0_16px_rgba(234,192,125,0.3)]"
              href={`/blog/${slug}/`}
            >
              <span>Read Dispatch</span>
              <span className="material-symbols-outlined text-base">arrow_forward</span>
            </a>
          </div>
        </div>
        {/* Terminal Mockup */}
        <div className="lg:col-span-5 bg-surface-container p-6 sm:p-8 flex flex-col justify-between relative overflow-hidden">
          {/* Ghost Grid Background */}
          <div className="absolute inset-0 opacity-10 pointer-events-none">
            <svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="32" id="celestial-grid" patternUnits="userSpaceOnUse" width="32">
                  <path className="text-secondary" d="M 32 0 L 0 0 0 32" fill="none" stroke="currentColor" strokeWidth="0.75" />
                </pattern>
              </defs>
              <rect fill="url(#celestial-grid)" height="100%" width="100%" />
            </svg>
          </div>
          {/* Terminal */}
          <div className="relative z-10 w-full rounded-lg bg-surface-container-lowest p-4 font-mono text-xs shadow-inner space-y-3">
            <div className="flex items-center justify-between pb-2">
              <div className="flex items-center gap-1.5">
                <span className="h-2 w-2 rounded-full bg-error"></span>
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                <span className="h-2 w-2 rounded-full bg-tertiary"></span>
                <span className="ml-2 text-[10px] text-on-surface-variant tracking-wider uppercase">
                  minzar-operator-v1.log
                </span>
              </div>
              <span className="text-[9px] px-1.5 py-0.5 rounded bg-surface-container text-primary font-semibold">
                STREAM ACTIVE
              </span>
            </div>
            <div className="space-y-1.5 text-[11px] leading-snug">
              <div className="text-on-surface-variant">
                <span className="text-tertiary">14:02:18.441</span> [INIT] Topology mesh probing on <span className="text-on-surface">cl-beacon-01</span>
              </div>
              <div className="text-on-surface-variant">
                <span className="text-primary">14:02:19.012</span> [RECONCILE] Collapsing 84 metrics → 4 nautical compass vectors
              </div>
              <div className="p-2 rounded bg-surface-container-low text-[10px] space-y-1 my-2">
                <div className="flex justify-between text-secondary">
                  <span>VECTOR.LATENCY_HORIZON</span>
                  <span className="text-primary font-semibold">14.2ms [P99.9]</span>
                </div>
                <div className="w-full h-1.5 bg-surface-container-highest rounded-full overflow-hidden flex">
                  <div className="bg-primary h-full w-[72%]"></div>
                  <div className="bg-tertiary h-full w-[16%]"></div>
                </div>
              </div>
              <div className="text-secondary">
                <span className="text-tertiary">14:02:20.108</span> [PASS] Operator incident fatigue index decreased by <span className="text-primary font-bold">78.4%</span>
              </div>
            </div>
          </div>
          {/* Visual Context */}
          <div className="relative z-10 pt-4 flex items-center justify-between text-xs font-label">
            <div className="flex items-center gap-2 text-on-surface-variant">
              <span className="material-symbols-outlined text-sm text-primary">view_quilt</span>
              <span>Topology Stream: <strong className="text-on-surface">Calm Mode</strong></span>
            </div>
            <span className="text-[11px] text-secondary font-mono">HASH: 9e4f·k8s</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedPost;
