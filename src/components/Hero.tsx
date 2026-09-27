import { conference } from '../data/conference'
import { ReactMark } from './ReactMark'
import { TicketLink } from './TicketLink'

export function Hero() {
  return (
    <section id="evento" aria-labelledby="event-title" className="scroll-mt-8 py-6 sm:py-10">
      <div className="hero-panel relative isolate overflow-hidden rounded-[2rem] px-6 py-12 text-white sm:px-12 sm:py-16 lg:px-20 lg:py-20">
        <div aria-hidden="true" className="hero-orb hero-orb-one" />
        <div aria-hidden="true" className="hero-orb hero-orb-two" />
        <ReactMark className="absolute -right-12 -top-10 h-72 w-72 rotate-12 text-white/8 sm:h-96 sm:w-96" />

        <div className="relative max-w-4xl">
          <p className="eyebrow text-violet-soft">{conference.eyebrow}</p>
          <h1 id="event-title" className="mt-5 max-w-3xl text-5xl font-black leading-[0.96] tracking-[-0.045em] sm:text-6xl lg:text-8xl">
            {conference.headline}
          </h1>
          <p className="mt-7 max-w-2xl text-lg leading-8 text-white/90 sm:text-xl">
            {conference.description}
          </p>

          <dl className="mt-9 grid max-w-3xl gap-3 text-sm sm:grid-cols-3">
            <div className="hero-detail">
              <dt>Data</dt>
              <dd>
                <time dateTime={conference.dateTime}>{conference.date}</time>
              </dd>
            </div>
            <div className="hero-detail">
              <dt>Horário</dt>
              <dd>{conference.hours}</dd>
            </div>
            <div className="hero-detail">
              <dt>Local</dt>
              <dd>{conference.address}</dd>
            </div>
          </dl>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <TicketLink tone="light">Garantir meu ingresso</TicketLink>
            <a className="text-link text-white" href="#palestrantes">
              Conhecer palestrantes <span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
