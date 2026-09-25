import { NetworkGraphic } from "@/components/NetworkGraphic";
import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";

export function Hero() {
  return (
    <section id="top" className="relative isolate min-h-[100svh] overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_45%_at_78%_18%,rgba(62,200,184,0.14),transparent_58%),radial-gradient(ellipse_40%_35%_at_8%_88%,rgba(37,99,235,0.12),transparent_55%)]" />
      <NetworkGraphic />
      <div className="relative mx-auto flex min-h-[100svh] max-w-page flex-col justify-center px-5 py-28 sm:px-8">
        <Reveal className="max-w-3xl">
          <p className="text-sm text-accent">{site.hero.eyebrow}</p>
          <h1 className="mt-5 text-[2.65rem] font-medium leading-[1.05] tracking-[-0.035em] text-paper sm:text-6xl lg:text-[4.35rem]">
            {site.hero.headline}
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-mist sm:text-lg">
            {site.hero.subheadline}
          </p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#contact"
              className="inline-flex items-center justify-center rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white"
            >
              {site.hero.primaryCta}
            </a>
            <a
              href="#work"
              className="inline-flex items-center justify-center rounded-full border border-white/15 px-5 py-3 text-sm text-paper transition-colors hover:border-white/40"
            >
              {site.hero.secondaryCta}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
