# Test Plan — Site inicial da React Conference

## Metadados

- **Título:** Validação da primeira versão pública da React Conference
- **Slug:** `site-inicial-react-conference`
- **Data:** 2026-09-27
- **Autor:** Agente
- **Intent:** `intent/site-inicial-react-conference.md`
- **PRD:** `intent/site-inicial-react-conference_prd.md`
- **Impact Analysis:** `intent/site-inicial-react-conference_impact.md`

## Resumo

O plano valida conteúdo, semântica, navegação, links externos, responsividade, acessibilidade prática, configuração de build, segurança de dependências e publicação no subcaminho do GitHub Pages. A suíte combina Vitest/Testing Library, inspeções do build e Playwright em Chromium.

## Matriz de Cobertura dos Requisitos Funcionais

| RF | Cenário feliz | Alternativo | Erro/regressão | Evidência esperada |
| --- | --- | --- | --- | --- |
| RF001 | CT002 | CT010 | CT013 | Vitest + Playwright + build |
| RF002 | CT003 | CT011 | CT012 | Vitest + Playwright |
| RF003 | CT004 | CT010 | CT015 | Vitest + audit estática |
| RF004 | CT001, CT005 | CT011 | CT014 | Vitest + Playwright |
| RF005 | CT006 | CT010 | CT015 | Vitest + audit estática |
| RF006 | CT007 | CT011 | CT015 | Vitest + audit estática |
| RF007 | CT002 | CT011, CT012 | CT014 | Vitest + Playwright + screenshots |
| RF008 | CT008 | CT013 | CT016 | Inspeção de fonte/build |
| RF009 | CT001 | CT002 | CT016 | Typecheck + Vitest + audit estática |
| RF010 | CT009 | CT013 | CT017 | Build + inspeção dos workflows |

## Cobertura das Regras de Negócio

| Regra | Cenários |
| --- | --- |
| RN001 | CT002, CT008, CT010 |
| RN002 | CT004, CT007, CT015 |
| RN003 | CT002, CT016 |
| RN004 | CT001, CT005 |
| RN005 | CT001, CT002 |
| RN006 | CT001, CT006 |
| RN007 | CT001, CT006 |
| RN008 | CT001, CT006 |
| RN009 | CT005, CT014 |
| RN010 | CT016 |

## Testes Unitários e de Componentes

### CT001 — Integridade dos dados oficiais

- **Valida:** RN004–RN010 e RF009.
- **Entrada:** módulo tipado de conteúdo.
- **Resultado esperado:** evento contém data, horário, endereço, alimentação, hotel e URLs oficiais; existem exatamente oito palestrantes na ordem aprovada, todos com nome, iniciais, especialização, experiência e empresa.
- **Negativo:** quantidade ou campo obrigatório divergente faz o teste falhar.

### CT002 — Estrutura semântica da página

- **Valida:** RF001, RF007 e RN001.
- **Entrada:** renderização da página principal.
- **Resultado esperado:** um único `h1`, landmarks `header`, `nav`, `main` e `footer`, seções tituladas e skip link.
- **Negativo:** ausência ou duplicidade do título principal falha.

### CT003 — Navegação interna

- **Valida:** RF002.
- **Entrada:** cabeçalho renderizado.
- **Resultado esperado:** links Evento, Palestrantes e Informações apontam para IDs existentes.
- **Alternativo:** layout não depende de botão de menu ou estado JavaScript.

### CT004 — CTA principal de ingresso

- **Valida:** RF003, RN002 e RNF002.
- **Entrada:** hero renderizado.
- **Resultado esperado:** conteúdo oficial presente; link usa URL aprovada, `_blank` e `noopener noreferrer`, com nome acessível indicando destino externo.
- **Negativo:** atributo de segurança ausente falha.

### CT005 — Grade de palestrantes

- **Valida:** RF004, RN004 e RN009.
- **Entrada:** seção de palestrantes.
- **Resultado esperado:** oito artigos/cartões, com iniciais e todos os campos, sem elementos `img` de fotografias.
- **Negativo:** cartão incompleto ou quantidade divergente falha.

### CT006 — Informações práticas

- **Valida:** RF005 e RN006–RN008.
- **Entrada:** seção Informações.
- **Resultado esperado:** endereço completo, alimentação e hotel; Maps usa HTTPS, `_blank` e proteção; hotel não recebe link inventado.

### CT007 — CTA final e rodapé

- **Valida:** RF006 e RN002.
- **Entrada:** final da página.
- **Resultado esperado:** segundo CTA preserva contrato externo e rodapé identifica React Conference 2026 sem contatos ou redes sociais.

### CT008 — Metadados do documento

- **Valida:** RF008 e RN001.
- **Entrada:** `index.html`.
- **Resultado esperado:** `pt-BR`, título, descrição, viewport, theme-color e Open Graph textual; ausência de `og:image` inexistente.

### CT009 — Contratos de configuração

- **Valida:** RF010 e RNF004–RNF006.
- **Entrada:** configurações e scripts versionados.
- **Resultado esperado:** scripts obrigatórios existem; cobertura exige 80% nas quatro métricas; Vite usa `/conference-react/` em produção; Playwright gera trace/screenshot em falha.

## Testes de Integração

Não há banco, API ou serviço externo consumido. CT002–CT007 exercitam a integração entre fonte tipada, componentes e página no jsdom. O build integra TypeScript, Vite, Tailwind e assets.

## Testes E2E

Pré-condição absoluta: `npm run build` concluído com sucesso.

### CT010 — Jornada principal desktop

- **Viewport:** 1440 × 900.
- **Passos:** abrir aplicação; conferir hero; usar âncoras; conferir palestrantes e informações; inspecionar CTA sem navegar ao domínio externo.
- **Resultado esperado:** todo conteúdo principal visível/operável, links corretos e screenshot armazenado.

### CT011 — Jornada mobile

- **Viewport:** 375 × 667.
- **Passos:** abrir aplicação; conferir navegação reorganizada; percorrer todas as seções e CTAs.
- **Resultado esperado:** nenhuma função oculta, conteúdo legível e screenshot armazenado.

### CT012 — Navegação por teclado

- **Passos:** iniciar no topo; usar `Tab`; ativar skip link; percorrer navegação e CTAs.
- **Resultado esperado:** ordem coerente, foco visível e destino do skip link correto.

### CT013 — Execução sob base de produção

- **Entrada:** preview do build com base `/conference-react/`.
- **Resultado esperado:** documento, JS e CSS carregam sem 404 e a página renderiza.
- **Negativo:** qualquer recurso local quebrado reprova.

### CT014 — Layout e overflow

- **Viewports:** 375 × 667 e 1440 × 900.
- **Resultado esperado:** largura rolável do documento não excede a viewport; oito placeholders são visíveis e textos quebram linha.

## Testes de Regressão e Auditoria

### CT015 — Auditoria de links externos

- Buscar todos os elementos com `target="_blank"` na página renderizada.
- Todos devem usar HTTPS e conter `noopener` e `noreferrer`.
- Nenhum link inesperado de contato, rede social ou hotel deve existir.

### CT016 — Escopo negativo

- O bundle e DOM não podem conter analytics, formulários, contagem de inscritos, chamadas `fetch`, fotografias de palestrantes ou conteúdo em idioma alternativo.
- Typecheck e busca estática não podem encontrar `any` explícito no código da aplicação.

### CT017 — Pipeline e falha segura

- Inspecionar workflows para confirmar que deploy depende do job de validação e só publica `dist` a partir da `main`.
- Confirmar permissões mínimas e actions oficiais.
- YAML inválido, ausência de dependência ou deploy sem validação reprova.

### CT018 — Tamanho do build

- Somar arquivos JS e CSS em `dist`, excluindo source maps.
- Resultado deve ser inferior a 500 KiB antes de compressão.

### CT019 — Dependências

- Executar `npm audit --audit-level=high`.
- Nenhuma vulnerabilidade alta ou crítica introduzida pode permanecer.

### CT020 — Governança

- Executar `scripts/governance-audit.sh`.
- Intent, PRD, Impact Analysis, reviews e plano devem respeitar nomes e referências do slug.

## Multi-Tenancy

Não aplicável: não há tenant, autenticação ou persistência.

## Segurança

A segurança é validada por CT004, CT006, CT007, CT015, CT016, CT017 e CT019. Não há controle de acesso a testar.

## Performance

- CT018 valida o limite objetivo do bundle.
- CT010 e CT011 confirmam renderização sem dependência de APIs ou fontes remotas.

## Ordem de Execução

1. `npm ci`
2. checagem estática/lint, se configurada
3. `npm test`
4. `npm run test:coverage`
5. `npm run build`
6. inspeção de bundle/configuração/workflows
7. `npm audit --audit-level=high`
8. `npm run test:e2e`
9. auditoria de governança

Se o build falhar, interromper antes do E2E.

## Evidências

- Saídas integrais dos comandos relevantes no relatório de validação.
- Relatório de cobertura gerado pelo Vitest.
- Screenshots desktop/mobile sob `test-results/evidence/` ou caminho equivalente versionado apenas quando definido pela entrega.
- Trace e screenshot automáticos do Playwright em falha.
- SHA do commit e resultado dos workflows remotos na Validation Report.

## Checklist

- [x] Todos os RF cobertos.
- [x] Todas as RN cobertas.
- [x] Cenários positivos e negativos definidos.
- [x] Regressão definida.
- [x] Multi-tenancy marcada como não aplicável.
- [x] Segurança definida.
- [x] E2E definido.

## Próxima Etapa

Após sincronizar o repositório com `origin/main`, implementar a entrega e executar este plano com evidência real.
