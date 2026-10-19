export default function StatusTicker({
  items = [
    { icon: "sailing", label: "BRIDGE SYS: NOMINAL", color: "#eac07d" },
    {
      icon: "anchor",
      label: "CLUSTER SYNC: STEADY (24 CLUSTERS)",
      color: "#b1c9e0",
    },
    { icon: "tune", label: "HELM OPERATOR: ACTIVE", color: "#c3c7ce" },
    {
      icon: "radar",
      label: "OBSERVABILITY: STREAMING 18.4K EPS",
      color: "#c3c7ce",
    },
  ],
  coordinates = { lat: "34.0522° N", lon: "118.2437° W", azimuth: "042°" },
}) {
  return (
    <div className="relative max-w-7xl mx-auto px-6 lg:px-12 mb-8">
      <div className="flex items-center justify-between gap-4 py-2 px-4 rounded-lg bg-surface-container-low/70 backdrop-blur-md overflow-x-auto no-scrollbar">
        <div className="flex items-center gap-6 text-[11px] font-label tracking-widest uppercase shrink-0">
          {items.map((item, i) => (
            <>
              {i > 0 && <span className="text-outline-variant/40">/</span>}
              <div
                key={item.label}
                className="flex items-center gap-2"
                style={{ color: item.color }}
              >
                <span className="material-symbols-outlined text-[14px]">
                  {item.icon}
                </span>
                <span>{item.label}</span>
              </div>
            </>
          ))}
        </div>
        <div className="hidden xl:flex items-center gap-2 text-[10px] font-label text-outline tracking-widest shrink-0">
          <span>{coordinates.lat}</span>
          <span className="text-outline-variant/40">·</span>
          <span>{coordinates.lon}</span>
          <span className="text-outline-variant/40">·</span>
          <span className="text-primary font-semibold">
            AZIMUTH {coordinates.azimuth}
          </span>
        </div>
      </div>
    </div>
  );
}
