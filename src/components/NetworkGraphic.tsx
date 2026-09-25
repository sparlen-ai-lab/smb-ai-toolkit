export function NetworkGraphic() {
  return (
    <div
      aria-hidden="true"
      className="pointer-events-none absolute inset-0 overflow-hidden"
    >
      <div className="dot-grid absolute inset-0 opacity-70" />
      <div className="absolute -right-16 top-10 h-[28rem] w-[28rem] rounded-full bg-accent/10 blur-3xl sm:right-0 sm:top-16 sm:h-[36rem] sm:w-[36rem]" />
      <div className="absolute bottom-0 left-0 h-64 w-64 rounded-full bg-blue-700/10 blur-3xl" />
      <svg
        viewBox="0 0 640 560"
        className="absolute -right-16 top-16 h-72 w-[28rem] text-paper opacity-80 sm:right-[-4%] sm:top-[14%] sm:h-[72%] sm:w-[54%] sm:opacity-100"
        fill="none"
      >
        <path
          d="M120 280H250M250 280 390 140M250 280 390 280M250 280 390 420M390 140H520M390 280H520M390 420H520"
          stroke="currentColor"
          strokeOpacity="0.18"
        />
        <circle cx="120" cy="280" r="7" fill="#3ec8b8" className="node-pulse" />
        <circle cx="250" cy="280" r="5" fill="currentColor" fillOpacity="0.85" />
        <circle cx="390" cy="140" r="5" fill="currentColor" fillOpacity="0.7" />
        <circle
          cx="390"
          cy="280"
          r="6"
          fill="#3ec8b8"
          className="node-pulse node-pulse-delay"
        />
        <circle cx="390" cy="420" r="5" fill="currentColor" fillOpacity="0.7" />
        <circle cx="520" cy="140" r="4" fill="currentColor" fillOpacity="0.45" />
        <circle cx="520" cy="280" r="4" fill="currentColor" fillOpacity="0.45" />
        <circle cx="520" cy="420" r="4" fill="currentColor" fillOpacity="0.45" />
        <rect
          x="92"
          y="248"
          width="64"
          height="64"
          rx="32"
          stroke="#3ec8b8"
          strokeOpacity="0.35"
        />
      </svg>
    </div>
  );
}
