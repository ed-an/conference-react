import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import App from './App'
import { conference } from './data/conference'

describe('React Conference home page', () => {
  it('renders a semantic single-page experience in Portuguese', () => {
    render(<App />)

    expect(screen.getByRole('banner')).toBeInTheDocument()
    expect(screen.getByRole('navigation', { name: 'Navegação principal' })).toBeInTheDocument()
    expect(screen.getByRole('main')).toHaveAttribute('id', 'conteudo-principal')
    expect(screen.getByRole('contentinfo')).toBeInTheDocument()
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1)
    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(conference.headline)
    expect(screen.getByText(conference.address)).toBeInTheDocument()
    expect(screen.getByRole('link', { name: 'Pular para o conteúdo principal' })).toHaveAttribute(
      'href',
      '#conteudo-principal',
    )
  })

  it('connects every navigation item to an existing section', () => {
    const { container } = render(<App />)
    const nav = screen.getByRole('navigation', { name: 'Navegação principal' })

    for (const [label, id] of [
      ['Evento', 'evento'],
      ['Palestrantes', 'palestrantes'],
      ['Informações', 'informacoes'],
    ] as const) {
      expect(within(nav).getByRole('link', { name: label })).toHaveAttribute('href', `#${id}`)
      expect(container.querySelector(`#${id}`)).toBeInTheDocument()
    }
  })

  it('renders all speakers with placeholders and complete information', () => {
    const { container } = render(<App />)
    const section = container.querySelector('#palestrantes')

    expect(section).not.toBeNull()
    expect(within(section as HTMLElement).getAllByRole('article')).toHaveLength(8)
    expect(within(section as HTMLElement).queryAllByRole('img')).toHaveLength(0)

    for (const speaker of conference.speakers) {
      const heading = within(section as HTMLElement).getByRole('heading', { name: speaker.name })
      const card = heading.closest('article')
      expect(card).not.toBeNull()
      expect(card).toHaveTextContent(speaker.initials)
      expect(card).toHaveTextContent(speaker.specialty)
      expect(card).toHaveTextContent(speaker.experience)
      expect(card).toHaveTextContent(speaker.company)
    }
  })

  it('renders official practical information without inventing a hotel link', () => {
    const { container } = render(<App />)
    const section = container.querySelector('#informacoes')

    expect(section).not.toBeNull()
    expect(within(section as HTMLElement).getByText('Alameda Santos, 115')).toBeInTheDocument()
    expect(within(section as HTMLElement).getByText('Centro — São Paulo/SP')).toBeInTheDocument()
    expect(within(section as HTMLElement).getByText(conference.food)).toBeInTheDocument()
    expect(within(section as HTMLElement).getByText(conference.hotel)).toBeInTheDocument()
    expect(within(section as HTMLElement).getByRole('link', { name: /Google Maps/ })).toHaveAttribute(
      'href',
      conference.mapsUrl,
    )
    expect(within(section as HTMLElement).queryByRole('link', { name: /InterContinental/ })).not.toBeInTheDocument()
  })

  it('protects every external link opened in a new tab', () => {
    const { container } = render(<App />)
    const externalLinks = Array.from(container.querySelectorAll<HTMLAnchorElement>('a[target="_blank"]'))

    expect(externalLinks).toHaveLength(4)
    for (const link of externalLinks) {
      expect(link.href).toMatch(/^https:\/\//)
      expect(link.rel.split(' ')).toEqual(expect.arrayContaining(['noopener', 'noreferrer']))
      expect(link).toHaveAccessibleName(/abre em nova aba/)
    }
  })

  it('repeats the approved ticket destination and renders a restrained footer', () => {
    render(<App />)
    const ticketLinks = screen.getAllByRole('link', { name: /abre em nova aba/ }).filter(
      (link) => link.getAttribute('href') === conference.ticketUrl,
    )

    expect(ticketLinks).toHaveLength(3)
    expect(screen.getByRole('contentinfo')).toHaveTextContent('React Conference 2026 · São Paulo/SP')
    expect(screen.queryByRole('form')).not.toBeInTheDocument()
  })
})
