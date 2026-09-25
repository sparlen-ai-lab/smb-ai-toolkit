import { site } from "@/content/site";

export function TechStack() {
  return (
    <section aria-label={site.stack.label} className="border-t border-white/10">
      <div className="mx-auto flex max-w-page flex-col gap-6 px-5 py-10 sm:px-8 md:flex-row md:items-center md:justify-between md:gap-10">
        <p className="shrink-0 text-sm text-mist">{site.stack.label}</p>
        <ul className="flex flex-wrap gap-x-6 gap-y-3 md:justify-end">
          {site.stack.items.map((item) => (
            <li key={item} className="text-sm tracking-wide text-paper/80">
              {item}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
