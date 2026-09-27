import { describe, expect, it } from 'vitest'
import { conference } from './conference'

describe('conference data', () => {
  it('preserves the approved event details', () => {
    expect(conference).toMatchObject({
      name: 'React Conference',
      date: '12 de dezembro de 2026',
      hours: '08h30 às 19h30',
      address: 'Alameda Santos, 115 — Centro — São Paulo/SP',
      food: 'Restaurantes da região',
      hotel: 'Hotel InterContinental',
      ticketUrl: 'https://www.register.com.br/evento/14527',
    })
    expect(conference.mapsUrl).toMatch(/^https:\/\/www\.google\.com\/maps\/search\//)
  })

  it('contains the eight approved speakers in order and with complete fields', () => {
    expect(conference.speakers).toHaveLength(8)
    expect(conference.speakers.map(({ name }) => name)).toEqual([
      'Marina Azevedo',
      'Rafael Monteiro',
      'Camila Torres',
      'Lucas Ferreira',
      'Beatriz Nogueira',
      'André Ribeiro',
      'Juliana Martins',
      'Pedro Almeida',
    ])

    for (const speaker of conference.speakers) {
      expect(speaker.name).toBeTruthy()
      expect(speaker.initials).toMatch(/^[A-Z]{2}$/)
      expect(speaker.specialty).toBeTruthy()
      expect(speaker.experience).toMatch(/\d+ anos/)
      expect(speaker.company).toBeTruthy()
    }
  })
})
