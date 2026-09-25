import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { ChatIcon, CompassIcon, DocumentIcon, FlowIcon } from "@/components/icons";
import { site } from "@/content/site";

const icons = [ChatIcon, DocumentIcon, FlowIcon, CompassIcon];

export function Services() {
  return (
    <section id="services" className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <SectionHeading
          eyebrow={site.services.eyebrow}
          title={site.services.title}
          lede={site.services.lede}
        />
        <div className="mt-14 grid gap-4 md:grid-cols-2">
          {site.services.items.map((item, index) => {
            const Icon = icons[index] ?? ChatIcon;
            return (
              <Reveal key={item.title} delay={index * 0.06}>
                <article className="flex h-full flex-col rounded-2xl border border-white/10 bg-panel/80 p-7 transition-colors hover:border-accent/40">
                  <Icon className="h-8 w-8 text-accent" />
                  <h3 className="mt-6 text-xl font-medium tracking-tight text-paper">
                    {item.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                    {item.description}
                  </p>
                  <ul className="mt-6 space-y-2.5 text-sm text-paper/90">
                    {item.outcomes.map((outcome) => (
                      <li key={outcome} className="flex gap-3">
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1 w-1 shrink-0 rounded-full bg-accent"
                        />
                        <span>{outcome}</span>
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
