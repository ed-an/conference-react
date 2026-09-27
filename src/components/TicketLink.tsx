import type { ReactNode } from 'react'
import { conference } from '../data/conference'

interface TicketLinkProps {
  children: ReactNode
  className?: string
  tone?: 'blue' | 'light'
}

const toneClasses = {
  blue: 'bg-action text-white shadow-[0_12px_30px_rgba(20,93,252,0.3)] hover:bg-action-dark',
  light: 'bg-white text-ink shadow-[0_12px_30px_rgba(17,16,79,0.2)] hover:bg-violet-soft',
}

export function TicketLink({ children, className = '', tone = 'blue' }: TicketLinkProps) {
  return (
    <a
      aria-label={`${String(children)} — abre em nova aba`}
      className={`button-link ${toneClasses[tone]} ${className}`}
      href={conference.ticketUrl}
      rel="noopener noreferrer"
      target="_blank"
    >
      <span>{children}</span>
      <span aria-hidden="true">↗</span>
    </a>
  )
}
