import type { Speaker } from '../data/conference'

interface SpeakerCardProps {
  speaker: Speaker
  index: number
}

export function SpeakerCard({ speaker, index }: SpeakerCardProps) {
  return (
    <article className="speaker-card group">
      <div className={`speaker-portrait portrait-${(index % 4) + 1}`} aria-hidden="true">
        <span className="speaker-ring" />
        <span className="speaker-initials">{speaker.initials}</span>
        <span className="speaker-index">0{index + 1}</span>
      </div>
      <div className="px-1 pt-5">
        <p className="text-xs font-black uppercase tracking-[0.16em] text-violet-strong">
          {speaker.company}
        </p>
        <h3 className="mt-2 text-2xl font-black tracking-tight text-ink">{speaker.name}</h3>
        <p className="mt-2 font-bold text-action-dark">{speaker.specialty}</p>
        <p className="mt-3 text-sm leading-6 text-ink-muted">{speaker.experience}</p>
      </div>
    </article>
  )
}
