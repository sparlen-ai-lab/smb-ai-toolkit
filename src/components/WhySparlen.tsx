import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function WhySparlen() {
  return (
    <section id="about" className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <SectionHeading
          eyebrow={site.about.eyebrow}
          title={site.about.title}
          lede={site.about.lede}
        />
        <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
          {site.about.points.map((point, index) => (
            <Reveal key={point.title} delay={index * 0.06}>
              <article className="border-t border-white/10 pt-6">
                <h3 className="text-lg font-medium tracking-tight text-paper">
                  {point.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-mist sm:text-base">
                  {point.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
