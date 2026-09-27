# Test Plan — Título da página de teste

## Metadados

- **Slug:** `titulo-pagina-teste`
- **Data:** 2026-09-27
- **Intent:** `intent/titulo-pagina-teste.md`
- **PRD:** `intent/titulo-pagina-teste_prd.md`
- **Impact Analysis:** `intent/titulo-pagina-teste_impact.md`

## Matriz de cobertura

| RF/RN | Cenário feliz | Cenário de erro | Regressão | Evidência esperada |
| --- | --- | --- | --- | --- |
| RF001 / RN001 | CT001 | CT002 | CT003 | Saída do Playwright, build e testes |

## Cenários

- **CT001 — E2E:** abrir a página e verificar o título exato `Pagina de teste — React Conference — 12 de dezembro de 2026`.
- **CT002 — Negativo automatizado:** a asserção exata falha se a expressão, o nome ou a data estiverem ausentes/divergentes.
- **CT003 — Regressão:** executar todas as suítes unitárias/de componentes e E2E para confirmar conteúdo, navegação, responsividade e links existentes.
- **CT004 — Build:** executar `npm run build` antes do E2E.

## Não aplicável

Não há regra de negócio isolada que exija novo teste unitário, integração com serviço/banco, autenticação, autorização, multi-tenancy ou teste de performance específico.

## Checklist

- [x] RF e RN cobertos.
- [x] Cenários feliz, negativo e regressão definidos.
- [x] E2E definido para o impacto observável.

