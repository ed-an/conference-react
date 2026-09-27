# Architecture Review — Site inicial da React Conference

## Metadados

- **Slug:** `site-inicial-react-conference`
- **Data:** 2026-09-27
- **Revisor:** Agente
- **Documentos revisados:** Intent, PRD e Impact Analysis do mesmo slug

## Resumo

A solução propõe inicializar a aplicação estática descrita no contexto arquitetural oficial. O módulo escolhido, a stack, a organização e a hospedagem coincidem com as decisões do bootstrap. Não há tentativa de introduzir backend, persistência, autenticação ou integração de API.

## Módulo e Localização

**A alteração está sendo proposta no lugar certo:** sim.

- A aplicação web pertence à raiz do único repositório.
- Código de apresentação fica em `src/components` e `src/pages`.
- Conteúdo tipado fica em `src/data`.
- Ativos da aplicação ficam em `src/assets` ou `public`, quando necessários.
- Workflows ficam em `.github/workflows`.
- Artefatos da entrega permanecem sob o slug em `intent/`.

O harness e `docs/references/layout.png` não devem ser incluídos diretamente no bundle de produção.

## Reutilização

Não existe aplicação, componente ou configuração equivalente no repositório. A criação é necessária. A solução reutiliza:

- a fonte oficial de conteúdo em `.ai/context/business.md`;
- a referência visual existente;
- capacidades nativas do React, CSS/Tailwind e links HTML;
- actions oficiais do GitHub para Pages.

Não se justifica biblioteca adicional de componentes, ícones, roteamento, estado ou animação.

## Complexidade

**Classificação:** média.

A página em si é simples; a complexidade vem da inicialização integrada de build, estilos, testes, acessibilidade, E2E e deploy. A proposta evita complexidade acidental ao manter uma única página, dados locais e nenhuma camada de serviço.

## Aderência à Stack e Convenções

- React + TypeScript + Vite: aderente.
- Tailwind CSS e tokens visuais centralizados: aderente.
- npm com lockfile versionado: aderente.
- Componentes em `PascalCase`, um principal por arquivo: aderente.
- Conteúdo separado da apresentação: aderente.
- TypeScript estrito e proibição de `any`: aderente.
- Vitest, Testing Library e Playwright: aderente aos padrões de teste.
- GitHub Pages e base `/conference-react/`: aderente ao repositório de destino.

## Dados e Banco

Não há banco, migration, API ou persistência. Os objetos TypeScript são conteúdo versionado, não estrutura de dados operacional. O risco de volume é desprezível.

## Dependências

As dependências propostas são as mínimas já aprovadas no contexto:

- Runtime: React e React DOM.
- Build/tipagem/estilos: Vite, TypeScript e Tailwind CSS.
- Testes: Vitest, Testing Library, jsdom e Playwright.

Condições:

- manter versões resolvidas no `package-lock.json`;
- não adicionar framework de UI, roteador, gerenciador de estado, biblioteca de ícones ou analytics;
- executar auditoria de dependências e bloquear vulnerabilidades altas/críticas introduzidas.

## Segurança, Performance e Compatibilidade

- Links externos isolados com `noopener noreferrer`.
- Nenhum dado pessoal, segredo ou input de usuário.
- Workflows com permissões mínimas e deploy separado da validação.
- Bundle limitado e sem fontes/scripts remotos.
- Base path de produção e viewports mobile/desktop cobertos por testes.
- Multi-tenancy não se aplica.

## Débito Técnico

Nenhum débito técnico consciente é aceito. A ausência de CMS, analytics e agenda é escopo deliberado, não dívida: qualquer uma dessas capacidades exigirá nova Intent.

## ADR

Não necessária. A solução implementa decisões explícitas do contexto oficial sem alterar fronteiras, integrações ou estrutura arquitetural.

## Recomendações Obrigatórias para Implementação

1. Centralizar URLs externas e dados do evento em `src/data`.
2. Validar o build sob `/conference-react/`, não apenas na raiz local.
3. Manter o deploy dependente do sucesso de testes e build.
4. Evitar abstrações genéricas prematuras; extrair apenas componentes com responsabilidade visual clara.
5. Garantir que a referência visual oriente o design sem ser copiada para o bundle.

## Checklist Arquitetural

- [x] Módulo/sistema correto identificado.
- [x] Reutilização avaliada.
- [x] Complexidade avaliada.
- [x] Aderência à stack e convenções validada.
- [x] Dependências avaliadas.
- [x] Débito técnico avaliado.

## Parecer Final

**APROVADA.**

A solução é a implementação direta e mais simples da arquitetura oficial. As condições acima já estão refletidas no PRD e devem ser verificadas pela Implementation Review.

## Próxima Etapa

Executar `$business-review`.
