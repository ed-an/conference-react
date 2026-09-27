import { TicketLink } from './TicketLink'

export function FinalCta() {
  return (
    <section aria-labelledby="cta-title" className="pb-20 pt-8 sm:pb-28">
      <div className="cta-panel overflow-hidden rounded-[2rem] px-6 py-14 text-center text-white sm:px-12 sm:py-20">
        <p className="eyebrow text-violet-soft">Uma data. Oito vozes. Muitas ideias.</p>
        <h2 id="cta-title" className="mx-auto mt-5 max-w-3xl text-4xl font-black tracking-[-0.04em] sm:text-6xl">
          Seu próximo salto com React começa aqui.
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/75">
          Reserve o dia 12 de dezembro e venha trocar experiências com quem constrói a web que usamos amanhã.
        </p>
        <TicketLink className="mt-9" tone="light">
          Garantir meu ingresso
        </TicketLink>
      </div>
    </section>
  )
}
