export default function PillarCard({
  icon = "diversity_3",
  iconColor = "#eac07d",
  title = "Citizen-Grade Simplicity",
  description = "Democratizing high-tier Kubernetes operations for all.",
  checkLabel = "Zero Cognitive Overhead",
  checkColor = "#eac07d",
}) {
  return (
    <div className="rounded-xl bg-surface-container-low p-8 flex flex-col justify-between space-y-6 hover:bg-surface-container transition-colors">
      <div className="space-y-4">
        <div
          className="w-12 h-12 rounded-lg flex items-center justify-center"
          style={{ backgroundColor: "#161c22", color: iconColor }}
        >
          <span className="material-symbols-outlined text-2xl">{icon}</span>
        </div>
        <h3 className="font-headline text-xl font-bold text-on-surface">
          {title}
        </h3>
        <p className="font-body text-sm text-on-surface-variant leading-relaxed">
          {description}
        </p>
      </div>
      <div
        className="pt-4 flex items-center gap-2 text-xs font-label uppercase tracking-wider"
        style={{ color: checkColor }}
      >
        <span className="material-symbols-outlined text-sm">done</span>
        <span>{checkLabel}</span>
      </div>
    </div>
  );
}
