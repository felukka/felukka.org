// File: BlogCard.jsx
// Description: React component for displaying blog post cards on the blog index page.
// Dependencies: React, Astro (for routing and props)

const BlogCard = ({ title, description, pubDate, slug, category = "ARCHITECTURE", readTime }) => {
  const formattedDate = pubDate.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <article className="dispatch-card">
      <div className="space-y-4">
        {/* Metadata Row */}
        <div className="flex items-center justify-between text-xs font-label">
          <span className="px-2 py-0.5 rounded bg-surface-container-high text-secondary font-semibold uppercase tracking-wider text-[10px]">
            {category}
          </span>
          <span className="text-on-surface-variant font-mono text-[11px]">{readTime} MIN READ</span>
        </div>
        {/* Title */}
        <h4 className="font-headline font-bold text-lg text-on-surface group-hover:text-primary transition-colors leading-snug">
          <a className="after:absolute after:inset-0" href={`/blog/${slug}/`}>
            {title}
          </a>
        </h4>
        {/* Excerpt */}
        <p className="font-body text-xs sm:text-sm text-secondary leading-relaxed line-clamp-3">
          {description}
        </p>
      </div>
      {/* Card Footer */}
      <div className="pt-6 mt-6 flex items-center justify-between text-xs font-label">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-full bg-surface-container-high flex items-center justify-center">
            <span className="material-symbols-outlined text-sm text-primary">person</span>
          </div>
          <div>
            <span className="font-headline font-semibold text-on-surface block leading-tight">Author</span>
            <span className="text-[10px] text-on-surface-variant font-mono">{formattedDate}</span>
          </div>
        </div>
        <span className="material-symbols-outlined text-secondary group-hover:text-primary group-hover:translate-x-1 transition-all text-lg">
          arrow_outward
        </span>
      </div>
    </article>
  );
};

export default BlogCard;
