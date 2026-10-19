// File: ProjectCard.jsx
// Description: React component for displaying project/fleet cards on the landing page.
// Dependencies: React, Astro (for routing and props)

const ProjectCard = ({
  icon,
  iconColor = "var(--primary)",
  bgOpacity = 0.1,
  label,
  version,
  versionColor = "var(--primary)",
  title,
  titleColor = "var(--primary)",
  motif,
  description,
  codeHeader,
  codeCommand,
  codeOutput,
  tags,
  ctaLabel,
  ctaLink,
  ctaColor = "var(--primary)",
  ctaClass = "link-primary",
  specLabel,
}) => {
  return (
    <div className="fleet-card">
      <div className="card-header flex-between">
        <div className="flex-center label text-outline">
          <div
            className="icon-box"
            style={{
              color: iconColor,
              background: `${iconColor}${Math.round(bgOpacity * 100)}%`,
            }}
          >
            <span className="material-symbols-outlined">{icon}</span>
          </div>
          {label}
        </div>
        <div className="badge label" style={{ color: versionColor, background: "var(--surface-container-high)" }}>
          <span className="status-dot" style={{ background: versionColor }}></span>
          {version}
        </div>
      </div>
      <div className="card-title-group">
        <h3 className="font-headline card-title">
          {title}{" "}
          <span className="label" style={{ color: titleColor }}>
            {motif}
          </span>
        </h3>
        <p className="label text-secondary card-motif">{motif}</p>
      </div>
      <p className="card-desc">{description}</p>
      <div className="code-block">
        <div className="code-header flex-between label text-outline">
          <div className="flex-center">
            <span className="dot-small" style={{ background: iconColor }}></span>
            {codeHeader}
          </div>{" "}
          <span style={{ color: "var(--secondary)" }}>{codeOutput}</span>
        </div>
        <div className="code-line prompt">{codeCommand}</div>
      </div>
      <div className="tag-group">
        {tags.map((tag, i) => (
          <span className="tag" key={i}>
            {tag}
          </span>
        ))}
      </div>
      <div className="card-footer flex-between">
        <a href={ctaLink} className={`label flex-center ${ctaClass}`}>
          {ctaLabel} <span className="material-symbols-outlined icon-small">arrow_forward</span>
        </a>
        <span className="label text-outline">{specLabel}</span>
      </div>
    </div>
  );
};

export default ProjectCard;
