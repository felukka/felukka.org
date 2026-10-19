export default function TeamMember({
  name = "Team Member",
  role = "Role",
  avatarColor = "#eac07d",
  initials = "TM",
  bio = "Bio description goes here.",
  github = "https://github.com",
  twitter = "https://twitter.com",
}) {
  return (
    <div className="rounded-xl bg-surface-container-low p-6 flex flex-col items-center text-center gap-4 hover:bg-surface-container transition-colors">
      <span className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-primary/40 shrink-0 flex items-center justify-center">
        <span
          className="font-headline font-bold text-xl"
          style={{ color: avatarColor }}
        >
          {initials}
        </span>
      </span>

      <div className="space-y-1">
        <h4 className="font-headline font-bold text-lg text-on-surface">
          {name}
        </h4>
        <p className="text-xs font-label uppercase tracking-widest text-secondary">
          {role}
        </p>
      </div>

      <p className="text-xs text-on-surface-variant font-body leading-relaxed">
        {bio}
      </p>

      <div className="flex items-center gap-3">
        <a
          className="text-on-surface-variant hover:text-primary transition-colors"
          href={github}
          rel="noreferrer"
          target="_blank"
          title="GitHub"
        >
          <span className="material-symbols-outlined text-lg">code</span>
        </a>
        <a
          className="text-on-surface-variant hover:text-primary transition-colors"
          href={twitter}
          rel="noreferrer"
          target="_blank"
          title="Twitter / X"
        >
          <span className="material-symbols-outlined text-lg">tag</span>
        </a>
      </div>
    </div>
  );
}
