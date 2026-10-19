// File: PostHeader.jsx
// Description: React component for displaying the header section of individual blog posts.
// Dependencies: React, Astro (for routing and props)

const PostHeader = ({
  category,
  date,
  readTime,
  title,
  subtitle,
  author,
  authorRole,
  authorBadge,
  onBack,
}) => {
  return (
    <section className="w-full bg-surface-container-lowest px-6 lg:px-12 py-10 lg:py-16 relative overflow-hidden">
      {/* Ambient Beacon Glow */}
      <div className="absolute -top-32 right-10 w-96 h-96 rounded-full bg-tertiary-container/15 blur-3xl pointer-events-none"></div>
      <div className="absolute -bottom-20 left-1/4 w-80 h-80 rounded-full bg-primary/5 blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto relative z-10 flex flex-col gap-6">
        {/* Breadcrumb & Return Link */}
        <div className="flex flex-wrap items-center justify-between gap-4 text-xs font-label uppercase tracking-widest text-on-surface-variant">
          <div className="flex items-center gap-2">
            <a className="hover:text-primary transition-colors flex items-center gap-1.5 text-secondary" href={onBack || "/blog"}>
              <span className="material-symbols-outlined text-sm">arrow_back</span>
              <span>Back to all dispatches</span>
            </a>
            <span className="text-outline-variant opacity-40">/</span>
            <span className="text-on-surface-variant">Logbook</span>
            <span className="text-outline-variant opacity-40">/</span>
            <span className="text-on-surface-variant">{category}</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded bg-surface-container-high text-primary text-[10px] tracking-widest font-semibold">
              <span className="material-symbols-outlined text-xs">radar</span> DISPATCH #{Math.floor(Math.random() * 999) + 1}
            </span>
            <span className="hidden sm:inline-block text-[11px] text-outline">ASTRO v4.8 + TS 5.4</span>
          </div>
        </div>

        {/* Category Pill & Metadata Ribbon */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <span className="px-3 py-1 rounded bg-secondary-container/50 text-secondary text-xs font-label tracking-widest uppercase font-semibold">
            {category}
          </span>
          <span className="text-xs text-on-surface-variant font-label flex items-center gap-1.5">
            <span className="material-symbols-outlined text-xs text-primary">calendar_today</span>
            {date}
          </span>
          <span className="text-xs text-on-surface-variant font-label flex items-center gap-1.5">
            <span className="material-symbols-outlined text-xs text-primary">schedule</span>
            {readTime} min read
          </span>
          <span className="inline-flex items-center gap-1 text-[11px] font-label text-tertiary bg-surface-container px-2 py-0.5 rounded">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            VERIFIED BY BRIDGE LOGS
          </span>
        </div>

        {/* Main Headline */}
        <h1 className="font-headline font-bold text-3xl sm:text-4xl lg:text-5xl text-on-surface tracking-tight leading-[1.15] max-w-5xl">
          {title}
        </h1>

        {/* Lede / Deck Paragraph */}
        <p className="font-body text-base lg:text-xl text-on-surface-variant leading-relaxed max-w-4xl font-normal">
          {subtitle}
        </p>

        {/* Author Metadata & Telemetry Actions Bar */}
        <div className="pt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-6 border-t-0 bg-surface-container-low/70 p-4 lg:p-5 rounded-lg backdrop-blur-md">
          <div className="flex items-center gap-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden bg-surface-container-highest ring-1 ring-primary/40 shrink-0">
              <div className="w-full h-full flex items-center justify-center">
                <span className="material-symbols-outlined text-xl text-primary">person</span>
              </div>
            </div>
            <div className="flex flex-col">
              <div className="flex items-center gap-2">
                <span className="font-headline font-semibold text-sm text-on-surface">{author}</span>
                <span className="text-[10px] font-label px-1.5 py-0.2 rounded bg-primary/20 text-primary uppercase font-bold tracking-wider">{authorBadge}</span>
              </div>
              <span className="text-xs text-on-surface-variant font-body">{authorRole}</span>
            </div>
          </div>
          {/* Social / Share Console */}
          <div className="flex items-center gap-2 self-start sm:self-auto">
            <button className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label text-xs uppercase tracking-wider transition-all flex items-center gap-1.5">
              <span className="material-symbols-outlined text-sm">link</span>
              <span>Copy Link</span>
            </button>
            <a className="px-3 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label text-xs uppercase tracking-wider transition-colors flex items-center gap-1.5" href="https://github.com" rel="noreferrer" target="_blank">
              <span className="material-symbols-outlined text-sm">forum</span>
              <span className="hidden md:inline">GitHub</span> Discussion
            </a>
            <button className="px-2.5 py-1.5 rounded bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface transition-colors" title="Share Bridge Dispatch">
              <span className="material-symbols-outlined text-sm">share</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PostHeader;
