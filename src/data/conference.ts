export interface Speaker {
  name: string
  initials: string
  specialty: string
  experience: string
  company: string
}

export interface Conference {
  name: string
  eyebrow: string
  headline: string
  description: string
  date: string
  dateTime: string
  hours: string
  address: string
  food: string
  hotel: string
  ticketUrl: string
  mapsUrl: string
  speakers: readonly Speaker[]
}

export const conference: Conference = {
  name: 'React Conference',
  eyebrow: 'São Paulo · 12 de dezembro de 2026',
  headline: 'Ideias que movem a web.',
  description:
    'Um dia inteiro com especialistas que estão transformando arquitetura, performance e experiências digitais com React.',
  date: '12 de dezembro de 2026',
  dateTime: '2026-12-12',
  hours: '08h30 às 19h30',
  address: 'Alameda Santos, 115 — Centro — São Paulo/SP',
  food: 'Restaurantes da região',
  hotel: 'Hotel InterContinental',
  ticketUrl: 'https://www.register.com.br/evento/14527',
  mapsUrl:
    'https://www.google.com/maps/search/?api=1&query=Alameda%20Santos%2C%20115%20Centro%20S%C3%A3o%20Paulo%20SP',
  speakers: [
    {
      name: 'Marina Azevedo',
      initials: 'MA',
      specialty: 'Arquitetura de aplicações React',
      experience:
        '9 anos desenvolvendo plataformas web e liderando migrações de aplicações legadas',
      company: 'Nuvem Clara Tech',
    },
    {
      name: 'Rafael Monteiro',
      initials: 'RM',
      specialty: 'Performance e renderização',
      experience: '8 anos otimizando aplicações React de grande tráfego',
      company: 'Velox Digital',
    },
    {
      name: 'Camila Torres',
      initials: 'CT',
      specialty: 'Design systems e acessibilidade',
      experience: '7 anos criando bibliotecas de componentes para equipes de produto',
      company: 'Prisma Interface',
    },
    {
      name: 'Lucas Ferreira',
      initials: 'LF',
      specialty: 'React com TypeScript',
      experience:
        '6 anos desenvolvendo aplicações corporativas com foco em manutenção e qualidade',
      company: 'Atlas Software',
    },
    {
      name: 'Beatriz Nogueira',
      initials: 'BN',
      specialty: 'Testes de aplicações React',
      experience:
        '8 anos trabalhando com testes de componentes, integração e fluxos de usuário',
      company: 'Código Vivo',
    },
    {
      name: 'André Ribeiro',
      initials: 'AR',
      specialty: 'Gerenciamento de estado',
      experience:
        '10 anos projetando aplicações com dados complexos e atualizações em tempo real',
      company: 'Fluxo Labs',
    },
    {
      name: 'Juliana Martins',
      initials: 'JM',
      specialty: 'React e integração com APIs',
      experience: '7 anos construindo portais e painéis conectados a serviços Node.js',
      company: 'Horizonte Web',
    },
    {
      name: 'Pedro Almeida',
      initials: 'PA',
      specialty: 'Experiência do desenvolvedor',
      experience: '9 anos criando ferramentas e padrões para equipes frontend',
      company: 'Órbita Engenharia',
    },
  ],
}
