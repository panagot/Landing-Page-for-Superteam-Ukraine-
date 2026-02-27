/** Wheat symbol — Ukrainian element per bounty brief */
export function WheatIcon({ className = 'h-6 w-6' }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      <path d="M12 2v20M8 6c2 2 4 2 4 6s-2 4-4 6M16 6c-2 2-4 2-4 6s2 4 4 6M6 10h12M5 14h14M4 18h16" />
      <path d="M12 2l-1 4 1 4 1-4-1-4z" fill="currentColor" opacity={0.6} />
    </svg>
  );
}
