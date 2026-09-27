import { ReactMark } from './ReactMark'

export function Footer() {
  return (
    <footer className="border-t border-ink/10 py-8">
      <div className="page-shell flex flex-col items-center justify-between gap-4 text-center text-sm text-ink-muted sm:flex-row sm:text-left">
        <div className="flex items-center gap-3 font-black text-ink">
          <ReactMark className="h-7 w-7 text-action" />
          <span>React Conference</span>
        </div>
        <p>React Conference 2026 · São Paulo/SP</p>
      </div>
    </footer>
  )
}
