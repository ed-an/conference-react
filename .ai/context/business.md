# Contexto de Negócio

## Visão Geral

**React Conference** é um site público e promocional, em português, para uma nova conferência voltada a pessoas interessadas em React. O produto deve concentrar as informações essenciais do evento e conduzir visitantes à plataforma externa de inscrição.

O evento acontecerá em **12 de dezembro de 2026**, das **08h30 às 19h30**, na **Alameda Santos, 115 — Centro — São Paulo/SP**.

## Missão

Apresentar de forma clara, atraente e responsiva todas as informações necessárias para que uma pessoa interessada em React conheça a conferência e prossiga para a inscrição.

## Público-alvo e Personas

### Visitante interessado em React

Pessoa que deseja conhecer o evento, seus palestrantes, local, horário, alimentação, hospedagem e forma de inscrição. Pode acessar o site por celular, tablet ou desktop.

### Organizador da conferência

Responsável pelo conteúdo e pela divulgação do evento. Não utilizará uma área administrativa: alterações de conteúdo serão realizadas diretamente no código e passarão pelo fluxo de entrega do projeto.

## Modelo de Uso

O produto é o site público de divulgação de um evento. A inscrição não é processada pela aplicação: o visitante será redirecionado para `www.register.com.br/evento/14527`, e os organizadores acompanharão os inscritos diretamente nessa plataforma.

Não há backend, pagamento interno, conta de usuário ou painel administrativo no escopo atual.

## Conteúdo Inicial do Evento

- Nome: React Conference.
- Data e horário: 12/12/2026, das 08h30 às 19h30.
- Local: Alameda Santos, 115 — Centro — São Paulo/SP.
- Descrição: evento que reúne especialistas em desenvolvimento web.
- Alimentação: restaurantes da região.
- Hospedagem sugerida: Hotel InterContinental.
- Ingressos: redirecionamento para `www.register.com.br/evento/14527`.
- Imagens dos palestrantes: placeholders; não serão fornecidas fotografias.

### Palestrantes

| Nome | Especialização em React | Experiência | Empresa fictícia |
| --- | --- | --- | --- |
| Marina Azevedo | Arquitetura de aplicações React | 9 anos desenvolvendo plataformas web e liderando migrações de aplicações legadas | Nuvem Clara Tech |
| Rafael Monteiro | Performance e renderização | 8 anos otimizando aplicações React de grande tráfego | Velox Digital |
| Camila Torres | Design systems e acessibilidade | 7 anos criando bibliotecas de componentes para equipes de produto | Prisma Interface |
| Lucas Ferreira | React com TypeScript | 6 anos desenvolvendo aplicações corporativas com foco em manutenção e qualidade | Atlas Software |
| Beatriz Nogueira | Testes de aplicações React | 8 anos trabalhando com testes de componentes, integração e fluxos de usuário | Código Vivo |
| André Ribeiro | Gerenciamento de estado | 10 anos projetando aplicações com dados complexos e atualizações em tempo real | Fluxo Labs |
| Juliana Martins | React e integração com APIs | 7 anos construindo portais e painéis conectados a serviços Node.js | Horizonte Web |
| Pedro Almeida | Experiência do desenvolvedor | 9 anos criando ferramentas e padrões para equipes frontend | Órbita Engenharia |

## Indicador Principal

- Número de inscritos no evento, medido diretamente em `register.com.br`.

Cliques no link de ingresso podem servir como indicador auxiliar no futuro, mas não substituem o número efetivo de inscritos da plataforma externa.

## Princípios de Produto

- Priorizar a descoberta rápida das informações do evento.
- Dar destaque claro à chamada para inscrição.
- Manter a experiência responsiva.
- Preservar o conteúdo em português.
- Seguir a referência visual em `docs/references/layout.png`.
- Não criar complexidade operacional desnecessária para um site estático.
