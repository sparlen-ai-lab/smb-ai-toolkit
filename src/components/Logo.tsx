import { site } from "@/content/site";

export function Logo({ className = "" }: { className?: string }) {
  return (
    <a href="#top" className={`inline-flex items-center gap-2.5 ${className}`}>
      <svg
        aria-hidden="true"
        viewBox="0 0 28 28"
        className="h-7 w-7"
        fill="none"
      >
        <circle cx="9" cy="14" r="2" fill="#3ec8b8" />
        <circle cx="19" cy="7.5" r="2" className="fill-paper" />
        <circle cx="19" cy="20.5" r="2" className="fill-paper" />
        <path
          d="M11 14h6M10.6 13.2l6.6-4.2M10.6 14.8l6.6 4.2"
          stroke="#3ec8b8"
          strokeWidth="1.2"
        />
      </svg>
      <span className="text-base font-medium tracking-tight text-paper">
        {site.name}
      </span>
    </a>
  );
}
