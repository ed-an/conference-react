# Impact Analysis — Site inicial da React Conference

## Metadados

- **Título:** Impactos da primeira versão pública da React Conference
- **Slug:** `site-inicial-react-conference`
- **Data:** 2026-09-27
- **Autor:** Agente
- **Intent:** `intent/site-inicial-react-conference.md`
- **PRD:** `intent/site-inicial-react-conference_prd.md`

## Resumo Executivo

A entrega inicializa o único módulo executável do repositório, adicionando aplicação frontend, toolchain, testes e automação de publicação. Não altera dados persistidos nem contratos de API, mas cria o primeiro contrato público de conteúdo, navegação e deploy do produto.

## Complexidade Estimada

- **Técnica:** média — scaffold, responsividade, acessibilidade, cobertura, E2E e GitHub Pages precisam funcionar em conjunto.
- **Negócio:** baixa — conteúdo e fluxo já foram confirmados, sem transação interna.
- **Operacional:** média — a publicação automatizada passa a ser parte do processo de entrega.

## Sistemas/Módulos Impactados

| Sistema/Módulo | Impacto | Motivo |
| --- | --- | --- |
| Aplicação web na raiz | Sim | Será criada integralmente. |
| Governança (`intent/`) | Sim | Recebe documentos da entrega e Validation Report. |
| Referências (`docs/references/`) | Não | `layout.png` será consultado, mas não alterado nem empacotado. |
| GitHub Actions | Sim | Recebe workflows de CI e deploy. |
| GitHub Pages | Sim | Passa a hospedar o artefato estático. |
| Plataforma de ingressos | Não | Apenas recebe navegação por link; nenhum contrato de API é consumido. |
| Google Maps | Não | Apenas recebe uma busca via link HTTPS. |

## Impacto por Sistema/Módulo

### Aplicação web

- **Componentes impactados:** novos componentes, dados tipados, estilos, configurações, testes unitários e E2E.
- **APIs/contratos impactados:** contrato público da página, IDs de âncora, URL de ingresso e base de assets.
- **Risco:** médio — a aplicação nasce nesta entrega; falhas de base path, layout ou acessibilidade impedem o objetivo principal.

### Governança

- **Componentes impactados:** documentos do slug `site-inicial-react-conference`.
- **APIs/contratos impactados:** nenhum.
- **Risco:** baixo — risco restrito a inconsistência entre PRD e entrega, mitigado pela Validation Report e auditoria.

### GitHub Actions e GitHub Pages

- **Componentes impactados:** workflows de CI/deploy, permissões Pages, artefato `dist` e branch `main`.
- **APIs/contratos impactados:** actions oficiais do GitHub e caminho público `/conference-react/`.
- **Risco:** médio — permissões ou path incorretos podem permitir build local e falha de publicação.

## Impacto em Dados / Banco de Dados

- **Estruturas impactadas:** nenhuma estrutura persistida.
- **Novas estruturas:** apenas objetos TypeScript versionados em `src/data`.
- **Índices:** não aplicável.
- **Volume:** oito palestrantes e um registro de evento; impacto desprezível.
- **Risco:** baixo.

## Impacto em Multi-Tenancy

Não aplicável. O projeto não é multi-tenant e não possui persistência.

## Impacto em Segurança

- Autenticação, autorização e permissões de usuário não se aplicam.
- Não haverá coleta de dados pessoais, cookies de analytics ou segredos no frontend.
- Links externos exigem HTTPS e isolamento de contexto com `noopener noreferrer`.
- Workflows devem usar permissões mínimas necessárias; deploy requer Pages e OIDC apenas no job responsável.
- Dependências ampliam a cadeia de suprimentos e exigem auditoria antes da entrega.

**Risco geral:** baixo a médio, concentrado em dependências e configuração de workflow.

## Impacto em Performance

- Renderização é local e estática, sem consultas de runtime.
- Tailwind deve eliminar CSS não utilizado no build.
- Placeholders em CSS evitam ativos pesados.
- O maior risco é dependência ou bundle desnecessário; limite de 500 KiB para JS + CSS mitiga.

**Risco:** baixo.

## Impacto em Integrações

- `register.com.br`: nenhum acoplamento técnico além da URL constante; indisponibilidade externa não deve afetar renderização.
- Google Maps: busca construída por URL; sem chave, API ou script incorporado.
- GitHub Pages: integração operacional real, dependente de actions oficiais, permissões e base path.

## Impacto Operacional

- Organizadores passam a alterar conteúdo por mudanças versionadas, sem painel administrativo.
- Falhas de CI/deploy ficam visíveis nos logs do GitHub Actions.
- A manutenção exige Node.js/npm somente para desenvolvimento e build; visitantes recebem arquivos estáticos.
- Não há custo operacional de banco, servidor ou serviço pago previsto.

## Impacto no Cliente / Usuário

- **Visitante:** ganha canal oficial responsivo e acesso claro à inscrição; pode ser afetado se o link externo estiver indisponível.
- **Organizador:** ganha publicação automatizada, mas depende do fluxo Git para atualizar informações.

## Impacto nos Indicadores

- **Número de inscritos:** impacto esperado positivo por tornar o evento e a inscrição mais descobríveis. A aplicação não mede o indicador e não permite atribuição direta de conversão nesta versão.

## Riscos Identificados

| ID | Descrição | Probabilidade | Impacto | Mitigação |
| --- | --- | --- | --- | --- |
| R01 | Base path incorreto quebra assets no GitHub Pages. | Média | Alto | Configurar `/conference-react/`, testar build servido nesse caminho e validar workflow. |
| R02 | Layout gera overflow ou perda de conteúdo em mobile. | Média | Alto | CSS mobile-first e E2E em 375 × 667 e 1440 × 900. |
| R03 | Conteúdo publicado diverge do contexto oficial. | Baixa | Alto | Fonte tipada única, testes de conteúdo e validação RF/RN. |
| R04 | Links externos ficam incorretos ou inseguros. | Baixa | Alto | Constantes centralizadas e testes de `href`, `target` e `rel`. |
| R05 | Dependência vulnerável entra no lockfile. | Média | Médio | `npm audit`, dependências mínimas e bloqueio para severidade alta/crítica. |
| R06 | Workflow não possui permissões corretas para Pages. | Média | Médio | Usar actions oficiais, permissões mínimas documentadas e validação do YAML. |
| R07 | Cobertura é artificial ou deixa fluxo visual sem proteção. | Baixa | Médio | Combinar Testing Library com Playwright e exigir 80% nas quatro métricas. |
| R08 | Plataforma de ingressos fica indisponível. | Baixa | Alto | Manter página independente; tratar o destino como responsabilidade externa e facilitar futura troca da constante. |

## Regressões Potenciais

- **RP001:** documentos e scripts do harness podem ser incluídos acidentalmente no artefato ou afetados pelo scaffold.
- **RP002:** configuração de Vite pode sobrescrever convenções ou arquivos existentes na raiz.
- **RP003:** CI pode executar comandos incompatíveis com o lockfile ou a versão de Node adotada.
- **RP004:** links de navegação podem apontar para IDs inexistentes após refatoração.
- **RP005:** mudanças de estilo podem remover foco visível, contraste ou comportamento reduzido de movimento.
- **RP006:** deploy pode ocorrer apesar de teste ou build falho se dependências entre jobs estiverem incorretas.

## Estratégia de Rollback

1. Reverter o commit da entrega na `main` por novo commit, preservando histórico.
2. Executar novamente a CI.
3. Publicar o artefato do commit anterior ou permitir que o workflow remova/substitua a versão com falha.
4. Se apenas o deploy falhar, manter o código versionado e corrigir a configuração em entrega própria; não alterar manualmente assets publicados sem rastreabilidade.

Não há rollback de dados.

## Estratégia de Testes

### Unitários e componentes

- Integridade da fonte de dados e quantidade de palestrantes.
- Renderização de seções, conteúdo e links.
- Atributos de segurança de destinos externos.
- Estados semânticos e estrutura principal.

### Integração

- Composição da página com dados tipados e componentes no ambiente jsdom.
- Configuração de build e base path validada pela geração/inspeção do artefato.

### E2E

- Desktop e mobile, conteúdo, âncoras, foco, links e overflow.
- Execução contra build local equivalente à produção.
- Screenshots/trace como evidência e diagnóstico.

## Decisão de ADR

**ADR não é necessária.** A entrega concretiza arquitetura, stack, hospedagem e integrações já aprovadas no bootstrap. Não introduz nova estrutura persistente, autenticação, multi-tenancy, integração de API, débito técnico consciente ou dependência arquitetural além das ferramentas oficiais já registradas.

## Aprovação para Implementação

- [x] Todos os impactos foram identificados.
- [x] Os riscos possuem mitigação.
- [x] Existe estratégia de rollback.
- [x] Os testes estão definidos.

## Parecer Final

- **Recomendação:** implementar.
- **Justificativa:** o valor é direto, o escopo está fechado e os riscos técnicos/operacionais possuem mitigação verificável.
- **Próxima etapa:** executar `$architecture-review` antes da implementação.
