import { conference } from '../data/conference'
import { SpeakerCard } from './SpeakerCard'

export function SpeakersSection() {
  return (
    <section id="palestrantes" aria-labelledby="speakers-title" className="scroll-mt-8 py-20 sm:py-28">
      <div className="section-heading">
        <div>
          <p className="eyebrow text-violet-strong">Quem sobe ao palco</p>
          <h2 id="speakers-title">Experiência de verdade, compartilhada.</h2>
        </div>
        <p>
          Oito perspectivas para explorar o React da arquitetura à experiência de quem constrói produtos todos os dias.
        </p>
      </div>

      <div className="mt-12 grid gap-x-6 gap-y-14 sm:grid-cols-2 lg:grid-cols-4">
        {conference.speakers.map((speaker, index) => (
          <SpeakerCard key={speaker.name} speaker={speaker} index={index} />
        ))}
      </div>
    </section>
  )
}
