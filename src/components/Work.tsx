import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function Work() {
  return (
    <section id="work" className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <SectionHeading
          eyebrow={site.work.eyebrow}
          title={site.work.title}
          lede={site.work.lede}
        />
        <ol className="mt-14 border-b border-white/10">
          {site.work.items.map((item, index) => (
            <li key={item.title}>
              <Reveal delay={index * 0.05}>
                <article className="grid gap-3 border-t border-white/10 py-8 md:grid-cols-12 md:gap-8 md:py-10">
                  <p className="text-sm text-accent md:col-span-3">
                    <span className="mr-3 font-mono text-xs text-mist">
                      0{index + 1}
                    </span>
                    {item.sector}
                  </p>
                  <h3 className="text-xl font-medium tracking-tight text-paper md:col-span-4">
                    {item.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-mist md:col-span-5 sm:text-base">
                    {item.summary}
                  </p>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
