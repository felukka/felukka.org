export default function WriterBadge({
  name = "Unknown Author",
  role = "Maintainer",
  avatar = "AA",
  avatarColor = "#eac07d",
  bio = "",
  github = "#",
  linkedin = "#",
}) {
  return (
    <div className="bg-surface-container-low p-6 rounded-lg flex flex-col sm:flex-row gap-5 items-start">
      <span className="relative w-14 h-14 rounded-full overflow-hidden bg-surface-container-highest ring-2 ring-primary/40 shrink-0 flex items-center justify-center">
        <span
          className="font-headline font-semibold text-base"
          style={{ color: avatarColor }}
        >
          {avatar}
        </span>
      </span>

      <div className="flex flex-col gap-2 flex-1">
        <div>
          <h4 className="font-headline font-bold text-base text-on-surface">
            {name}
          </h4>
          <p className="text-[11px] text-secondary font-label uppercase tracking-wider">
            {role}
          </p>
        </div>

        {bio && (
          <p className="text-xs text-on-surface-variant font-body leading-relaxed">
            {bio}
          </p>
        )}

        <div className="flex items-center gap-3">
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-xs font-label uppercase tracking-wider flex items-center gap-1"
            href={github}
            rel="noreferrer"
            target="_blank"
          >
            GitHub
            <span className="material-symbols-outlined text-sm">
              arrow_outward
            </span>
          </a>
          <span className="text-outline-variant opacity-40">·</span>
          <a
            className="text-on-surface-variant hover:text-primary transition-colors text-xs font-label uppercase tracking-wider flex items-center gap-1"
            href={linkedin}
            rel="noreferrer"
            target="_blank"
          >
            LinkedIn
            <span className="material-symbols-outlined text-sm">
              arrow_outward
            </span>
          </a>
        </div>
      </div>
    </div>
  );
}
