# Observability Review — Site inicial da React Conference

## Metadados

- **Slug:** `site-inicial-react-conference`
- **Data:** 2026-09-27
- **Revisor:** Agente
- **Escopo:** aplicação estática, testes, CI e deploy

## Classificação Operacional

- **Impacto do fluxo:** médio — o site é o canal público do evento, mas não processa pagamentos nem dados.
- **Risco operacional:** baixo após as correções desta review.
- **Capacidade de diagnóstico:** adequada.

## Fluxos Críticos

1. Build de produção compatível com `/conference-react/`.
2. Renderização do conteúdo em desktop e mobile.
3. Navegação até a plataforma externa de ingresso.
4. Publicação do artefato validado no GitHub Pages.

Não há autenticação, pagamento interno, API, banco ou processamento assíncrono.

## Logs e Contexto

- Vite registra módulos transformados, artefatos, tamanho e falhas de build.
- Vitest registra arquivos, quantidade de testes e cobertura.
- Playwright registra projeto/viewport, cenário, duração e stack de falha.
- GitHub Actions separa instalação, typecheck, cobertura, build, E2E, auditoria, upload e deploy em etapas nomeadas.
- GitHub Pages registra URL e resultado do deployment no ambiente `github-pages`.

Esses logs identificam commit, workflow, job e etapa automaticamente. Como não existem usuário, tenant ou recurso persistido, contexto adicional de domínio não é necessário.

## Erros e Exceções

- Não há `catch` vazio ou tratamento que suprima falhas.
- Falha de typecheck, teste, build ou E2E encerra o job.
- Deploy depende do build e não executa quando a validação falha.
- Playwright retém trace e screenshot em falha.

## Evidências Persistidas

Durante a review foi identificado que evidências locais do runner seriam descartadas. A implementação foi corrigida para enviar, por sete dias:

- relatório de cobertura;
- relatório HTML do Playwright;
- screenshots, traces e demais resultados E2E.

O upload usa `if: !cancelled()`, portanto também ocorre após falha de teste.

## Integrações Externas

- Ingresso e Google Maps são links, não integrações de runtime. O site não tem como diagnosticar indisponibilidade do destino e não deve tentar monitorá-la nesta versão.
- GitHub Pages é rastreável pelos logs e pelo ambiente de deployment.

## Auditoria

Não há operação mutável de usuário que exija trilha de auditoria. Alterações de conteúdo e configuração já são auditadas pelo histórico Git e pelos workflows.

## Métricas

- Build, cobertura, quantidade/duração de testes e status de deploy ficam disponíveis no GitHub Actions.
- Analytics e métricas de visitante estão explicitamente fora do escopo.
- O indicador de negócio — inscritos — permanece na plataforma externa.

## Dados Sensíveis nos Logs

Não há senha, token de aplicação, dado financeiro ou pessoal. O token do GitHub não é impresso e as permissões de deploy são efêmeras e restritas.

## Procedimento de Diagnóstico

1. Consultar o workflow associado ao SHA da `main`.
2. Identificar a primeira etapa com falha.
3. Baixar `ci-test-evidence` ou `deploy-test-evidence` quando houver falha de teste.
4. Inspecionar coverage, relatório Playwright, screenshot e trace.
5. Para falha de publicação, consultar o job `deploy` e o ambiente `github-pages`.
6. Reproduzir localmente com `npm ci`, `npm run build` e `npm run test:e2e`.

## Checklist de Observabilidade

- [x] Logs adequados.
- [x] Erros e exceções registrados/propagados.
- [x] Contexto suficiente nos logs.
- [x] Integrações rastreáveis dentro do controle do projeto.
- [x] Auditoria avaliada.
- [x] Métricas avaliadas.

## Parecer Final

**APROVADO.**

Se a publicação ou o fluxo principal quebrar, o SHA, a etapa, os logs e as evidências permitem identificar e reproduzir a causa. Logs de runtime e analytics não agregariam valor proporcional para esta página estática.

## Próxima Etapa

Executar validações finais, reintegrar com `$reintegrar-main` e gerar o Validation Report com `$validate-delivery`.
