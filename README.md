# God Harness

Um harness genérico de engenharia para agentes de IA (Claude Code, Codex, Cursor, etc.) trabalharem em qualquer projeto de software com um processo de desenvolvimento seguro e rastreável.

Este repositório **não é um projeto**. Ele é um esqueleto que, na primeira execução, não sabe nada sobre a aplicação que vai construir. O próprio harness pergunta a você o que é o projeto, qual arquitetura, quais tecnologias, quais convenções — e vai gerando os documentos de contexto (`.ai/context/*.md`) conforme você responde. Só depois disso ele libera o fluxo de desenvolvimento.

## Como começar

1. Copie esta pasta para o repositório do seu novo projeto (ou use este repositório como template).
2. Abra o projeto com seu agente de IA (Claude Code, Codex CLI, etc.).
3. Peça para o agente ler `AGENTS.md`. Como `.ai/context/business.md` e `.ai/context/architecture.md` ainda estão com o placeholder de bootstrap, o agente vai automaticamente rodar a skill `$bootstrap-project` e te entrevistar.
4. Responda às perguntas em rodadas. Ao final, o harness gera/atualiza:
   - `.ai/context/business.md`
   - `.ai/context/architecture.md`
   - `.ai/context/coding-standards.md`
   - `.ai/context/testing-standards.md`
   - `.ai/context/project-status.md` (marca o bootstrap como concluído)
5. A partir daí, toda solicitação de trabalho passa pelo fluxo descrito em `AGENTS.md`, coordenado pela skill `$orchestrator`.

## O que tem aqui

```text
AGENTS.md                  # regra zero: todo agente lê isso antes de qualquer coisa
.ai/
├── context/                # a "memória" do projeto (gerada pelo bootstrap)
│   ├── business.md
│   ├── architecture.md
│   ├── coding-standards.md
│   ├── testing-standards.md
│   └── project-status.md
└── templates/               # templates oficiais de documentos
    ├── intent_template.md
    ├── prd_template.md
    ├── impact_analysis_template.md
    ├── test_plan_template.md
    ├── validation_report_template.md
    └── adr_template.md
.agents/
└── skills/                  # skills invocáveis pelo agente ($nome-da-skill)
    ├── bootstrap-project/   # entrevista inicial, cria o contexto do zero
    ├── orchestrator/        # coordena o fluxo completo ponta a ponta
    ├── grill-me/            # entrevista relâmpago para pedidos não técnicos (Matt Pocock)
    ├── grilling/            # motor de entrevista em rodadas (Matt Pocock)
    ├── domain-modeling/     # glossário de domínio + ADRs leves (Matt Pocock)
    ├── to-tickets/          # quebra em tickets verticais (Matt Pocock)
    ├── resolving-merge-conflicts/ # resolução de conflitos de merge (Matt Pocock)
    ├── create-intent/
    ├── create-prd/
    ├── impact-analysis/
    ├── architecture-review/
    ├── business-review/
    ├── security-review/
    ├── observability-review/
    ├── generate-tests/
    ├── implementation-review/
    ├── validate-delivery/
    └── reintegrar-main/
docs/adr/                   # Architecture Decision Records
intent/                     # Intents, PRDs, análises e relatórios de cada entrega
scripts/
└── governance-audit.sh      # audita a consistência da governança do repo
```

## Filosofia

O processo é o mesmo para qualquer stack: o que muda é o conteúdo de `.ai/context/*.md`, preenchido uma vez pelo bootstrap e evoluído ao longo do projeto (por você ou pelas skills de revisão). As skills em si não sabem se o projeto é Java, Node, Python, Rust, Flutter ou o que for — elas leem o contexto para saber.

Fluxo obrigatório de qualquer entrega, do menor bugfix à maior funcionalidade:

```text
IDEIA
  ↓
ENTENDIMENTO ($grilling / $grill-me)
  ↓
INTENT ($create-intent)
  ↓
PRD ($create-prd)
  ↓
IMPACT ANALYSIS ($impact-analysis)
  ↓
ARCHITECTURE REVIEW ($architecture-review)
  ↓
BUSINESS REVIEW ($business-review)
  ↓
TICKETS, quando a entrega exigir mais de uma integração segura na main ($to-tickets)
  ↓
IMPLEMENTAÇÃO
  ↓
TESTES ($generate-tests)
  ↓
IMPLEMENTATION REVIEW ($implementation-review)
  ↓
SECURITY REVIEW ($security-review)
  ↓
OBSERVABILITY REVIEW ($observability-review)
  ↓
REINTEGRAÇÃO NA MAIN ($reintegrar-main)
  ↓
VALIDAÇÃO PRD × ENTREGA ($validate-delivery)
  ↓
ENTREGA
```

Para correções pequenas e operacionais, `AGENTS.md` define uma matriz de decisão que permite um fluxo simplificado — o rigor é proporcional ao risco, não burocracia por burocracia.

## Créditos

Este harness é baseado no processo de governança usado no ecossistema BJJ Control, generalizado para qualquer projeto, e incorpora as skills públicas de [Matt Pocock](https://github.com/mattpocock/skills) (`grill-me`, `grilling`, `domain-modeling`, `to-tickets`, `resolving-merge-conflicts`).

## Licença

Use, copie, adapte. Sem garantias.
