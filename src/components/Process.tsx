import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { site } from "@/content/site";

export function Process() {
  return (
    <section id="process" className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto max-w-page px-5 sm:px-8">
        <SectionHeading
          eyebrow={site.process.eyebrow}
          title={site.process.title}
          lede={site.process.lede}
        />
        <ol className="relative mt-16 grid gap-12 md:grid-cols-4 md:gap-6">
          <div
            aria-hidden="true"
            className="absolute left-0 right-0 top-[7px] hidden h-px bg-white/15 md:block"
          />
          {site.process.steps.map((step, index) => (
            <li key={step.title} className="relative">
              {index < site.process.steps.length - 1 ? (
                <span
                  aria-hidden="true"
                  className="absolute left-[6px] top-3.5 h-[calc(100%+3rem)] w-px bg-white/15 md:hidden"
                />
              ) : null}
              <Reveal delay={index * 0.07}>
                <div className="relative">
                  <span className="relative z-10 block h-3.5 w-3.5 rounded-full border border-accent bg-ink" />
                  <p className="mt-5 font-mono text-xs text-accent">0{index + 1}</p>
                  <h3 className="mt-2 text-lg font-medium tracking-tight text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-mist">{step.description}</p>
                </div>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
