import { Reveal } from "@/components/Reveal";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  lede?: string;
};

export function SectionHeading({ eyebrow, title, lede }: SectionHeadingProps) {
  return (
    <Reveal className="max-w-2xl">
      <p className="text-sm text-accent">{eyebrow}</p>
      <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-paper sm:text-4xl">
        {title}
      </h2>
      {lede ? (
        <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">{lede}</p>
      ) : null}
    </Reveal>
  );
}
