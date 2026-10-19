export default function BlogCard({
  title = "Article Title",
  description = "Article excerpt or summary goes here. It should be concise but informative.",
  category = "OBSERVABILITY",
  categoryBg = "#1d3f5e",
  categoryText = "#a9c9ef",
  pubDate = "Oct 2024",
  readTime = 6,
  href = "#",
  tags = [],
  authorName = "Author",
  authorInitial = "A",
  authorColor = "#eac07d",
}) {
  return (
    <article
      className="dispatch-card group rounded-xl bg-surface-container-low p-7 flex flex-col justify-between hover:bg-surface-container transition-all"
      data-tags={tags.join(",")}
    >
      <div className="space-y-4">
        {/* Metadata Row */}
        <div className="flex items-center justify-between text-[11px] font-label text-outline uppercase tracking-wider">
          <span>
            {pubDate} · {readTime} min read
          </span>
          <span
            className="px-2 py-0.5 rounded font-label text-[10px] font-semibold tracking-wider"
            style={{ backgroundColor: categoryBg, color: categoryText }}
          >
            {category}
          </span>
        </div>

        {/* Title */}
        <h3 className="font-headline text-xl font-bold text-on-surface group-hover:text-primary transition-colors leading-snug">
          <a className="focus:outline-none" href={href}>
            {title}
          </a>
        </h3>

        {/* Excerpt */}
        <p className="font-body text-xs sm:text-sm text-on-surface-variant leading-relaxed line-clamp-3">
          {description}
        </p>

        {/* Tags */}
        {tags.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {tags.map((tag) => (
              <span
                key={tag}
                className="px-2 py-0.5 rounded bg-surface-container-highest text-[10px] font-label font-medium text-secondary uppercase tracking-wider"
              >
                #{tag}
              </span>
            ))}
          </div>
        )}
      </div>

      {/* Author Footer */}
      <div className="pt-6 flex items-center justify-between text-xs font-label">
        <span className="text-on-surface-variant flex items-center gap-1.5">
          <span
            className="w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-label font-bold"
            style={{ backgroundColor: "#090f14", color: authorColor }}
          >
            {authorInitial}
          </span>
          {authorName}
        </span>
        <span className="material-symbols-outlined text-outline group-hover:text-primary group-hover:translate-x-1 transition-all text-base">
          arrow_forward
        </span>
      </div>
    </article>
  );
}
