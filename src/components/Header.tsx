import { ReactMark } from './ReactMark'
import { TicketLink } from './TicketLink'

const navigation = [
  { label: 'Evento', href: '#evento' },
  { label: 'Palestrantes', href: '#palestrantes' },
  { label: 'Informações', href: '#informacoes' },
] as const

export function Header() {
  return (
    <header className="border-b border-ink/8 bg-canvas/95 backdrop-blur">
      <div className="page-shell flex flex-wrap items-center justify-between gap-5 py-5">
        <a className="brand-link" href="#evento" aria-label="React Conference — início">
          <ReactMark className="h-10 w-10 text-action" />
          <span>
            React <strong>Conference</strong>
          </span>
        </a>

        <nav aria-label="Navegação principal" className="order-3 w-full sm:order-2 sm:w-auto">
          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 text-sm font-bold text-ink-muted">
            {navigation.map((item) => (
              <li key={item.href}>
                <a className="nav-link" href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="order-2 hidden sm:block">
          <TicketLink tone="blue">Ingressos</TicketLink>
        </div>
      </div>
    </header>
  )
}
