import { FinalCta } from '../components/FinalCta'
import { Footer } from '../components/Footer'
import { Header } from '../components/Header'
import { Hero } from '../components/Hero'
import { InfoSection } from '../components/InfoSection'
import { SpeakersSection } from '../components/SpeakersSection'

export function HomePage() {
  return (
    <>
      <a className="skip-link" href="#conteudo-principal">
        Pular para o conteúdo principal
      </a>
      <Header />
      <main id="conteudo-principal" className="page-shell">
        <Hero />
        <SpeakersSection />
        <InfoSection />
        <FinalCta />
      </main>
      <Footer />
    </>
  )
}
