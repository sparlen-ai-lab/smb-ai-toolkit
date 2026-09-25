import { Logo } from "@/components/Logo";
import { site } from "@/content/site";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto flex max-w-page flex-col gap-8 px-5 py-10 sm:px-8 md:flex-row md:items-end md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 text-sm text-mist">{site.footer.blurb}</p>
        </div>
        <div className="flex flex-col gap-4 sm:items-end">
          <ul className="flex gap-5 text-sm">
            <li>
              <a
                href={site.social.linkedin}
                className="inline-flex items-center gap-2 text-mist transition-colors hover:text-paper"
              >
                <LinkedInIcon />
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href={site.social.github}
                className="inline-flex items-center gap-2 text-mist transition-colors hover:text-paper"
              >
                <GitHubIcon />
                GitHub
              </a>
            </li>
          </ul>
          <p className="text-sm text-mist">
            © {year} {site.name}. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}

function LinkedInIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M6.5 9H4V20h2.5V9ZM5.25 4A1.5 1.5 0 1 0 5.26 7a1.5 1.5 0 0 0 0-3ZM20 20h-2.5v-5.6c0-1.55-.55-2.6-1.93-2.6-1.05 0-1.68.7-1.96 1.38-.1.24-.12.58-.12.92V20H11V9h2.4v1.51c.36-.55 1.12-1.34 2.72-1.34 1.99 0 3.48 1.3 3.48 4.1V20Z" />
    </svg>
  );
}

function GitHubIcon() {
  return (
    <svg viewBox="0 0 24 24" className="h-4 w-4" fill="currentColor" aria-hidden="true">
      <path d="M12 3.2a8.8 8.8 0 0 0-2.78 17.15c.44.08.6-.19.6-.42v-1.48c-2.45.53-2.97-1.04-2.97-1.04-.4-1.02-.98-1.29-.98-1.29-.8-.55.06-.54.06-.54.89.06 1.36.91 1.36.91.79 1.35 2.07.96 2.57.73.08-.57.31-.96.56-1.18-1.96-.22-4.01-.98-4.01-4.36 0-.96.34-1.75.91-2.37-.09-.22-.4-1.13.09-2.35 0 0 .75-.24 2.45.91a8.5 8.5 0 0 1 4.46 0c1.7-1.15 2.45-.91 2.45-.91.49 1.22.18 2.13.09 2.35.57.62.91 1.41.91 2.37 0 3.39-2.06 4.13-4.02 4.35.32.27.6.81.6 1.64v2.43c0 .23.16.51.61.42A8.8 8.8 0 0 0 12 3.2Z" />
    </svg>
  );
}
