type IconProps = { className?: string };

export function ChatIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M7 8.5h14.5a2 2 0 0 1 2 2V19a2 2 0 0 1-2 2H13l-4.5 3.2V21H7a2 2 0 0 1-2-2v-8.5a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M10 14h8M10 17.5h5" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function DocumentIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <path
        d="M10 6.5h8.2L24 12.2V25.5a1 1 0 0 1-1 1H10a1 1 0 0 1-1-1v-18a1 1 0 0 1 1-1Z"
        stroke="currentColor"
        strokeWidth="1.4"
      />
      <path d="M18 6.8V12h5.2M12 17h8M12 20.5h6" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function FlowIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <circle cx="8" cy="16" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="9" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <circle cx="24" cy="23" r="2.2" stroke="currentColor" strokeWidth="1.4" />
      <path d="M10.2 15.2 21.6 10M10.2 16.8 21.6 22" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export function CompassIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 32 32" className={className} fill="none" aria-hidden="true">
      <circle cx="16" cy="16" r="8.5" stroke="currentColor" strokeWidth="1.4" />
      <path d="m13.2 18.8 1.4-5.2 5.2-1.4-1.4 5.2-5.2 1.4Z" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}
