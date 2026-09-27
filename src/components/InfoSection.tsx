import { conference } from '../data/conference'

const infoCards = [
  {
    label: 'Quando',
    value: conference.date,
    detail: conference.hours,
    icon: '12',
  },
  {
    label: 'Alimentação',
    value: conference.food,
    detail: 'Opções para todos os momentos do dia',
    icon: '01',
  },
  {
    label: 'Hospedagem sugerida',
    value: conference.hotel,
    detail: 'Praticidade para quem vem de fora',
    icon: '02',
  },
] as const

export function InfoSection() {
  return (
    <section id="informacoes" aria-labelledby="info-title" className="scroll-mt-8 py-20 sm:py-28">
      <div className="section-heading">
        <div>
          <p className="eyebrow text-violet-strong">Planeje seu dia</p>
          <h2 id="info-title">Tudo para chegar e aproveitar.</h2>
        </div>
        <p>Uma programação intensa merece uma chegada tranquila. Consulte as informações práticas antes do evento.</p>
      </div>

      <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-[1.35fr_1fr_1fr_1fr]">
        <article className="info-card info-card-featured">
          <span className="info-icon" aria-hidden="true">↗</span>
          <p className="info-label">Local</p>
          <h3>Alameda Santos, 115</h3>
          <p>Centro — São Paulo/SP</p>
          <a
            className="text-link mt-8"
            href={conference.mapsUrl}
            rel="noopener noreferrer"
            target="_blank"
            aria-label="Abrir endereço no Google Maps — abre em nova aba"
          >
            Abrir no Google Maps <span aria-hidden="true">↗</span>
          </a>
        </article>

        {infoCards.map((item) => (
          <article className="info-card" key={item.label}>
            <span className="info-icon" aria-hidden="true">{item.icon}</span>
            <p className="info-label">{item.label}</p>
            <h3>{item.value}</h3>
            <p>{item.detail}</p>
          </article>
        ))}
      </div>
    </section>
  )
}
