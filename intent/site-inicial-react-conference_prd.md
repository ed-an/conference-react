# PRD — Site inicial da React Conference

## Metadados

- **Título:** Site público inicial da React Conference
- **Slug:** `site-inicial-react-conference`
- **Data:** 2026-09-27
- **Autor:** Usuário e agente
- **Origem:** `intent/site-inicial-react-conference.md`
- **Status:** Aprovado

## Resumo Executivo

Construir e publicar a primeira versão do site oficial da React Conference como uma página única, estática, responsiva e acessível. A experiência deve apresentar o evento, os oito palestrantes e as informações práticas, além de conduzir o visitante à inscrição externa.

## Problema

A conferência não possui uma presença digital oficial que reúna seu conteúdo e ofereça um caminho claro entre descoberta e inscrição.

## Objetivos

### Objetivo Principal

Disponibilizar uma página pública que permita ao visitante compreender o evento e acessar a inscrição externa com clareza.

### Objetivos Secundários

- Apresentar os oito palestrantes e suas credenciais.
- Centralizar data, horário, endereço, alimentação e hospedagem.
- Oferecer navegação simples entre as seções da página.
- Permitir manutenção do conteúdo sem backend.

### Objetivos Não Funcionais

- Entregar experiência responsiva e acessível.
- Manter carregamento leve e sem dependências de execução externas desnecessárias.
- Automatizar validação, build e publicação.

## Escopo

### Dentro do Escopo

- Scaffold React + TypeScript + Vite + Tailwind CSS com npm.
- Página única em português.
- Cabeçalho com marca, navegação por âncoras e chamada para ingresso.
- Hero do evento.
- Seção com oito palestrantes e placeholders gráficos.
- Seção de informações práticas.
- CTA final e rodapé.
- Link externo de ingresso e link de localização no Google Maps.
- Metadados básicos de SEO e Open Graph.
- Testes unitários/de componentes, cobertura e E2E.
- Workflows de CI e publicação no GitHub Pages.

### Fora do Escopo

- Backend, API, banco de dados, autenticação ou área administrativa.
- Compra ou pagamento de ingressos dentro do site.
- Consulta ou exibição da quantidade de inscritos.
- Analytics, cookies de rastreamento ou formulários de coleta de dados.
- Fotografias reais de palestrantes.
- Agenda detalhada de sessões, patrocinadores, blog ou internacionalização.
- Integração de API com mapas, hotel ou plataforma de ingressos.
- Imagem dedicada para compartilhamento social.

Esta entrega cabe em uma única integração segura na `main`: há um único módulo frontend, um único fluxo público e nenhuma migração ou rollout coordenado. Portanto, não serão criados tickets separados.

## Personas/Perfis Impactados

- **Visitante interessado em React:** recebe a experiência pública completa e o acesso à inscrição.
- **Organizador:** passa a manter conteúdo estático versionado e publicar por fluxo automatizado.

## Sistemas/Módulos Impactados

- Aplicação web na raiz do repositório.
- GitHub Actions e GitHub Pages.
- `register.com.br` e Google Maps somente como destinos de links externos.

## Requisitos Funcionais

### RF001 — Estrutura pública da página

A aplicação deve renderizar uma página única em português, composta por cabeçalho, hero, palestrantes, informações práticas, CTA final e rodapé.

**Critérios de Aceite**

- [ ] A página carrega sem erro pela rota base do GitHub Pages.
- [ ] As seções possuem landmarks e títulos semânticos.
- [ ] Não existe dependência de backend para renderizar o conteúdo.

### RF002 — Navegação por âncoras

O cabeçalho deve apresentar a marca React Conference e links para `Evento`, `Palestrantes` e `Informações`.

**Critérios de Aceite**

- [ ] Cada link leva à seção correspondente na mesma página.
- [ ] O destino permanece identificável e acessível por teclado.
- [ ] A navegação se reorganiza sem menu hambúrguer em viewport móvel.

### RF003 — Apresentação principal e ingresso

O hero deve apresentar nome, descrição, data, horário, local e uma chamada principal para ingresso.

**Critérios de Aceite**

- [ ] Data, horário e endereço correspondem ao conteúdo oficial.
- [ ] O CTA aponta para `https://www.register.com.br/evento/14527`.
- [ ] O CTA abre em nova aba e usa `rel="noopener noreferrer"`.
- [ ] A natureza externa do destino é comunicada de forma acessível.

### RF004 — Palestrantes

A página deve apresentar os oito palestrantes fornecidos, preservando nome, especialização, experiência e empresa fictícia.

**Critérios de Aceite**

- [ ] Existem exatamente oito cartões, na ordem definida no contexto de negócio.
- [ ] Cada cartão apresenta todos os quatro campos do palestrante.
- [ ] Cada cartão usa placeholder gráfico com iniciais e não depende de fotografia.
- [ ] A grade não produz rolagem horizontal nas viewports testadas.

### RF005 — Informações práticas

A página deve apresentar local, alimentação e hospedagem em seção própria.

**Critérios de Aceite**

- [ ] O endereço completo é exibido.
- [ ] O endereço aponta para uma busca HTTPS no Google Maps aberta em nova aba com proteção adequada.
- [ ] Alimentação é descrita como restaurantes da região.
- [ ] Hotel InterContinental é apresentado apenas como sugestão textual, sem link inventado.

### RF006 — Encerramento da experiência

A página deve oferecer nova chamada para inscrição ao final do conteúdo e um rodapé simples.

**Critérios de Aceite**

- [ ] O CTA final possui o mesmo destino e proteções do CTA principal.
- [ ] O rodapé identifica React Conference e o ano do evento.
- [ ] Não são exibidos contatos ou perfis sociais não fornecidos.

### RF007 — Responsividade e acessibilidade

A experiência deve ser utilizável em dispositivos móveis e desktop e seguir WCAG 2.1 AA como referência prática.

**Critérios de Aceite**

- [ ] Conteúdo é legível e operável em 375 × 667 e 1440 × 900.
- [ ] Todos os controles são acessíveis por teclado e possuem foco visível.
- [ ] A hierarquia de títulos é coerente e existe um único `h1`.
- [ ] Contraste de texto e controles atende aos mínimos AA.
- [ ] Animações e transições não essenciais são desativadas ou reduzidas com `prefers-reduced-motion`.

### RF008 — Metadados

O documento deve conter metadados básicos de busca e compartilhamento.

**Critérios de Aceite**

- [ ] O documento usa `lang="pt-BR"`.
- [ ] Título, descrição, viewport e `theme-color` estão definidos.
- [ ] Metadados Open Graph básicos representam o evento sem referenciar imagem inexistente.

### RF009 — Conteúdo separado da apresentação

Os dados do evento e palestrantes devem estar tipados e separados dos componentes visuais.

**Critérios de Aceite**

- [ ] Componentes consomem conteúdo de módulo em `src/data`.
- [ ] Tipos impedem ausência silenciosa dos campos obrigatórios.
- [ ] Não há uso de `any` no código da aplicação.

### RF010 — Validação e publicação automatizadas

O repositório deve validar e publicar a aplicação por GitHub Actions.

**Critérios de Aceite**

- [ ] Pulls/pushes relevantes executam testes e build em workflow de CI.
- [ ] Alterações na `main` podem publicar o artefato `dist` no GitHub Pages.
- [ ] O build usa base `/conference-react/` em produção.
- [ ] Falha de teste ou build impede a etapa dependente de publicação.

## Requisitos Não Funcionais

### RNF001 — Performance

- A aplicação não deve carregar fontes, scripts ou APIs de terceiros durante a renderização inicial.
- O total de JavaScript e CSS emitido pelo build, excluindo source maps, deve permanecer abaixo de 500 KiB antes de compressão.
- Elementos gráficos dos placeholders devem ser implementados sem ativos raster pesados.

### RNF002 — Segurança

- Todo link que abre nova aba deve usar `noopener noreferrer`.
- URLs externas devem ser constantes versionadas e usar HTTPS.
- A aplicação não deve coletar, persistir ou transmitir dados pessoais.
- Dependências não devem conter vulnerabilidade conhecida de severidade alta ou crítica no momento da entrega, conforme `npm audit`.

### RNF003 — Multi-Tenancy

Não aplicável: o projeto não é multi-tenant e não persiste dados.

### RNF004 — Compatibilidade

- Suportar navegadores modernos compatíveis com o build padrão do Vite.
- Validar ao menos Chromium em viewport móvel e desktop por E2E.
- Funcionar no subcaminho público do repositório no GitHub Pages.

### RNF005 — Observabilidade

- Não são necessários logs de runtime ou analytics para a página estática.
- Build, testes, cobertura e deploy devem produzir logs nos workflows do GitHub Actions.
- Falhas E2E devem gerar screenshot e trace para diagnóstico.

### RNF006 — Manutenibilidade

- Usar TypeScript estrito, componentes em `PascalCase` e um componente principal por arquivo.
- Centralizar tokens visuais e manter conteúdo separado em `src/data`.
- A suíte deve exigir 80% em statements, branches, functions e lines.

## Regras de Negócio

- **RN001:** Todo conteúdo público deve estar em português.
- **RN002:** A inscrição ocorre exclusivamente pela URL externa aprovada.
- **RN003:** O site não consulta nem exibe quantidade de inscritos.
- **RN004:** Os oito palestrantes e seus dados devem corresponder ao contexto oficial.
- **RN005:** O evento deve ser apresentado em 12/12/2026, das 08h30 às 19h30.
- **RN006:** O endereço oficial é Alameda Santos, 115 — Centro — São Paulo/SP.
- **RN007:** Alimentação deve ser apresentada como disponível em restaurantes da região.
- **RN008:** Hotel InterContinental deve ser apresentado como hospedagem sugerida.
- **RN009:** Não utilizar fotografias; os palestrantes são representados por placeholders com iniciais.
- **RN010:** O indicador de inscritos permanece externo ao site.

## Fluxo Principal

1. O visitante abre a página.
2. Identifica nome, proposta, data, horário e local no hero.
3. Navega ou rola até os palestrantes.
4. Consulta informações práticas.
5. Aciona um CTA de ingresso.
6. A plataforma externa abre em nova aba, preservando a página da conferência.

## Fluxos Alternativos

- **FA001 — Navegação direta:** o visitante usa os links do cabeçalho para saltar às seções.
- **FA002 — Localização:** o visitante aciona o endereço e abre uma busca do Google Maps em nova aba.
- **FA003 — Mobile:** os mesmos conteúdos e ações são oferecidos em layout reorganizado sem ocultar funcionalidade.

## Casos de Erro

- **ER001 — Plataforma externa indisponível:** o site permanece funcional; a indisponibilidade do destino não deve quebrar a página.
- **ER002 — JavaScript indisponível após carga:** o conteúdo renderizado não deve depender de chamadas assíncronas; links HTML continuam semanticamente definidos.
- **ER003 — Conteúdo longo:** textos dos cartões devem quebrar linha sem overflow horizontal.
- **ER004 — Caminho do GitHub Pages:** recursos devem resolver sob `/conference-react/`, sem erro 404 causado por base incorreta.

## UX / Interface

### Objetivo

Transmitir uma conferência de tecnologia contemporânea, clara e confiável, preservando a composição do wireframe e refinando seu acabamento.

### Alterações de Tela

- Cabeçalho com marca, três links internos e CTA.
- Hero em destaque com paleta azul-marinho, roxo e azul.
- Grade responsiva de palestrantes com placeholders em gradiente e iniciais.
- Cartões de informações práticas.
- CTA final e rodapé.

### Mensagens

- Textos devem seguir o conteúdo oficial, com ajustes apenas de gramática e apresentação que não alterem significado.
- Links externos devem possuir nome acessível que indique sua finalidade.

### Responsividade / Acessibilidade

- Mobile-first, sem menu hambúrguer.
- Foco visível, landmarks semânticos, skip link e navegação por teclado.
- Estados hover não podem ser a única indicação de interação.
- Respeitar `prefers-reduced-motion`.

## Integrações

### Sistemas Envolvidos

- GitHub Actions e GitHub Pages.
- Plataforma de ingresso e Google Maps somente por links.

### APIs Impactadas

Nenhuma.

### Contratos Impactados

- URL do ingresso: `https://www.register.com.br/evento/14527`.
- Base pública de produção: `/conference-react/`.

## Dados / Banco de Dados

Não aplicável. O conteúdo é estático, tipado e versionado; não há banco ou migration.

## Impacto Técnico

- Inicialização da aplicação frontend na raiz.
- Inclusão de configurações de TypeScript, Vite, Tailwind CSS, Vitest, Testing Library e Playwright.
- Inclusão de workflows de CI e deploy.
- Criação de componentes, dados, estilos e testes.

## Segurança

- [x] Multi-tenancy e permissões não se aplicam.
- [x] Autenticação/autorização não se aplicam.
- [x] Links externos terão isolamento de contexto.
- [x] Nenhum dado sensível será coletado ou registrado.
- [x] Logs ficam restritos a build/test/deploy e não contêm dados de usuário.

## Multi-Tenancy

Não aplicável.

## Estratégia de Migração

- **Necessária:** não.
- **Descrição:** primeira versão da aplicação, sem dados persistidos.
- **Rollback:** republicar o commit anterior do GitHub Pages ou reverter o commit da entrega.

## Plano de Testes

### Testes Unitários e de Componentes

- Renderização e integridade do conteúdo oficial.
- Exatamente oito palestrantes e campos obrigatórios.
- Navegação interna e atributos dos links externos.
- Metadados/documento quando aplicável ao ambiente de teste.

### Testes de Integração

Não há backend ou banco. A composição da página com dados e componentes será coberta pela suíte de componentes.

### Testes E2E

- Carregamento e conteúdo principal em desktop e mobile.
- Navegação por âncoras.
- Destino e abertura externa do CTA de ingresso.
- Ausência de overflow horizontal.
- Foco por teclado em controles principais.

### Testes Negativos e de Regressão

- Detectar quantidade incorreta de palestrantes ou conteúdo obrigatório ausente.
- Detectar links externos sem proteção.
- Detectar recursos quebrados sob a base de produção.
- Build e cobertura devem falhar quando os contratos não forem atendidos.

## Evidências Esperadas

- Saída de `npm run build`.
- Saída de `npm test` e `npm run test:coverage`.
- Saída de `npm run test:e2e`.
- Relatório de cobertura.
- Screenshots E2E de desktop e mobile ou evidências equivalentes.
- Logs dos workflows e URL publicada quando disponíveis.

## Critérios de Aceite da Entrega

- [ ] Todos os RF e RN implementados.
- [ ] Build executado com sucesso.
- [ ] Testes unitários/de componentes executados com sucesso.
- [ ] Cobertura mínima de 80% nas quatro métricas.
- [ ] Testes E2E executados com sucesso.
- [ ] Reviews de implementação, segurança e observabilidade aprovadas.
- [ ] Aplicação integrada à `main` e enviada a `origin/main`.
- [ ] Validation Report aprovado.

## Critérios de Reprovação

- Qualquer RF ou RN não atendido.
- Build, teste ou cobertura abaixo do limite.
- CTA apontando para destino incorreto ou sem proteção.
- Falha responsiva crítica, overflow horizontal ou inacessibilidade de ações principais.
- Publicação incompatível com o subcaminho do GitHub Pages.
- Vulnerabilidade alta ou crítica introduzida pela entrega.

## Riscos Conhecidos

- O destino de ingresso é externo e sua disponibilidade não é controlada pelo projeto.
- O GitHub Pages exige configuração correta do caminho base.
- O conteúdo estático depende do processo de entrega para permanecer atualizado.

## Dependências

- Node.js e npm compatíveis com as versões adotadas no scaffold.
- React, Vite, TypeScript, Tailwind CSS, Vitest, Testing Library e Playwright.
- GitHub Actions e GitHub Pages habilitados no repositório.

## Perguntas em Aberto

Nenhuma.

## Aprovação do PRD

- [x] Escopo está claro.
- [x] Critérios de aceite estão claros.
- [x] Requisitos são testáveis.
- [x] Está pronto para análise de impacto.

## Próxima Etapa

Executar `$impact-analysis`.
