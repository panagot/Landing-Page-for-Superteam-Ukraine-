/** Ukraine flag — blue (sky) top, yellow (wheat) bottom. #0057B7, #FFDD00 */
export function UkraineFlagIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      aria-hidden
    >
      <rect width="24" height="12" y="0" fill="#0057B7" />
      <rect width="24" height="12" y="12" fill="#FFDD00" />
    </svg>
  );
}
