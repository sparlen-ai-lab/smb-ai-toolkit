"use client";

import { Reveal } from "@/components/Reveal";
import { site } from "@/content/site";
import { FormEvent, useState } from "react";

type Fields = {
  name: string;
  email: string;
  brief: string;
};

const empty: Fields = { name: "", email: "", brief: "" };

export function Contact() {
  const [fields, setFields] = useState<Fields>(empty);
  const [errors, setErrors] = useState<Partial<Fields>>({});
  const [sent, setSent] = useState(false);

  function update(key: keyof Fields, value: string) {
    setFields((current) => ({ ...current, [key]: value }));
    setErrors((current) => ({ ...current, [key]: undefined }));
    setSent(false);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const nextErrors: Partial<Fields> = {};
    if (!fields.name.trim()) nextErrors.name = "Add your name.";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email.trim())) {
      nextErrors.email = "Add a valid email.";
    }
    if (fields.brief.trim().length < 12) {
      nextErrors.brief = "Add a short note about the workflow.";
    }
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) return;

    const subject = encodeURIComponent(`Project inquiry from ${fields.name.trim()}`);
    const body = encodeURIComponent(
      `${fields.brief.trim()}\n\n— ${fields.name.trim()}\n${fields.email.trim()}`,
    );
    window.location.href = `mailto:${site.email}?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <section id="contact" className="border-t border-white/10 py-24 sm:py-32">
      <div className="mx-auto grid max-w-page gap-14 px-5 sm:px-8 lg:grid-cols-12 lg:gap-16">
        <Reveal className="lg:col-span-5">
          <p className="text-sm text-accent">{site.contact.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-medium tracking-[-0.03em] text-paper sm:text-4xl">
            {site.contact.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-mist sm:text-lg">
            {site.contact.lede}
          </p>
          <p className="mt-8 text-sm text-mist">
            Or write directly to{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-paper underline decoration-white/20 underline-offset-4 hover:decoration-accent"
            >
              {site.email}
            </a>
          </p>
        </Reveal>

        <div className="lg:col-span-7">
          <Reveal delay={0.08}>
            <form onSubmit={handleSubmit} noValidate className="space-y-4">
              <div>
                <label htmlFor="name" className="mb-2 block text-sm text-paper">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  autoComplete="name"
                  value={fields.name}
                  onChange={(event) => update("name", event.target.value)}
                  className="field"
                  aria-invalid={Boolean(errors.name)}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name ? (
                  <p id="name-error" className="mt-2 text-sm text-[#e7b4b4]">
                    {errors.name}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="email" className="mb-2 block text-sm text-paper">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  value={fields.email}
                  onChange={(event) => update("email", event.target.value)}
                  className="field"
                  aria-invalid={Boolean(errors.email)}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email ? (
                  <p id="email-error" className="mt-2 text-sm text-[#e7b4b4]">
                    {errors.email}
                  </p>
                ) : null}
              </div>
              <div>
                <label htmlFor="brief" className="mb-2 block text-sm text-paper">
                  Project brief
                </label>
                <textarea
                  id="brief"
                  name="brief"
                  rows={5}
                  value={fields.brief}
                  onChange={(event) => update("brief", event.target.value)}
                  className="field resize-y"
                  aria-invalid={Boolean(errors.brief)}
                  aria-describedby={errors.brief ? "brief-error" : undefined}
                />
                {errors.brief ? (
                  <p id="brief-error" className="mt-2 text-sm text-[#e7b4b4]">
                    {errors.brief}
                  </p>
                ) : null}
              </div>
              <button
                type="submit"
                className="rounded-full bg-paper px-5 py-3 text-sm font-medium text-ink transition-colors hover:bg-white"
              >
                {site.contact.submit}
              </button>
              {sent ? (
                <p role="status" className="text-sm text-mist">
                  {site.contact.success}{" "}
                  <a className="text-paper underline underline-offset-4" href={`mailto:${site.email}`}>
                    {site.email}
                  </a>
                </p>
              ) : null}
            </form>
          </Reveal>

          <div className="mt-8 overflow-hidden rounded-2xl border border-white/10 bg-panel">
            {site.calendlyUrl ? (
              <iframe
                title="Schedule a consultation"
                src={site.calendlyUrl}
                className="h-[420px] w-full"
              />
            ) : (
              <div className="px-6 py-8">
                <p className="text-sm font-medium text-paper">{site.contact.calendlyLabel}</p>
                <p className="mt-2 max-w-md text-sm leading-relaxed text-mist">
                  {site.contact.calendlyNote}
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
