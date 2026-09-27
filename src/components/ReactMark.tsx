interface ReactMarkProps {
  className?: string
}

export function ReactMark({ className = '' }: ReactMarkProps) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="32" cy="32" r="5" fill="currentColor" />
      <ellipse cx="32" cy="32" rx="27" ry="10" stroke="currentColor" strokeWidth="3" />
      <ellipse
        cx="32"
        cy="32"
        rx="27"
        ry="10"
        stroke="currentColor"
        strokeWidth="3"
        transform="rotate(60 32 32)"
      />
      <ellipse
        cx="32"
        cy="32"
        rx="27"
        ry="10"
        stroke="currentColor"
        strokeWidth="3"
        transform="rotate(120 32 32)"
      />
    </svg>
  )
}
