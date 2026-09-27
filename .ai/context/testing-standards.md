# Testing Standards

> Base genérica válida para qualquer stack. A seção "Configuração Específica do Projeto", no final, é preenchida pelo `$bootstrap-project` com as ferramentas, comandos e ambiente reais (framework de teste, comando de build, como subir o ambiente local, banco de testes autorizado, etc.).

## Objetivo

Garantir que toda alteração seja validada antes da entrega. A implementação não é considerada concluída até que os testes definidos neste documento sejam executados com sucesso.

---

## Filosofia

Confiamos em evidências. Não confiamos apenas em: compilação, revisão visual, suposição do desenvolvedor ou suposição do agente.

Toda funcionalidade deve ser validada através de testes reais, executados.

---

## Pirâmide de Testes

Ordem de prioridade:

1. Testes unitários
2. Testes de integração
3. Testes end-to-end (E2E)

---

## Regra Obrigatória

Toda funcionalidade nova deve possuir pelo menos: testes unitários das regras que introduziu e validação funcional do fluxo principal.

---

## Tipos de Teste

### Testes Unitários

Validam regras isoladas. Obrigatório para: regras de negócio, funções puras, utilitários.

### Testes de Integração

Validam integração entre componentes (ex.: camada de serviço + persistência, endpoint + regra de negócio).

Se o projeto acessar banco de dados em testes de integração, o banco autorizado e as regras de proteção contra ambientes de produção/homologação são definidos na seção "Configuração Específica do Projeto" abaixo — e são absolutas: nenhum teste pode rodar contra um banco fora do configurado ali.

### Testes End-to-End (E2E)

Validam o comportamento real do usuário, do início ao fim. A ferramenta oficial (Playwright, Cypress, etc.) é definida no bootstrap.

---

## Processo Obrigatório Antes de Executar E2E

1. Executar o build do projeto afetado (comando definido na seção específica abaixo).
2. Se o build falhar: **interromper a execução**. Não seguir para E2E com build quebrado.
3. Subir o ambiente local necessário (comando/procedimento definidos na seção específica abaixo).
4. Validar que a aplicação está disponível e sem erros críticos nos logs.
5. Após a conclusão, encerrar o ambiente, se aplicável.

---

## Regra para Agentes

O agente não pode afirmar que algo funciona sem executar os testes correspondentes.

Expressões proibidas: "deve funcionar", "provavelmente funciona", "parece correto".

Expressões aceitáveis: "validado via teste", "validado via execução E2E", "testes executados com sucesso" — sempre com a evidência anexada (log, saída do comando, screenshot).

---

## Cenários Obrigatórios

Toda funcionalidade nova ou alterada deve possuir, no mínimo:

* **Cenário feliz** — o fluxo esperado.
* **Cenário de erro** — entrada ou estado inválido.
* **Cenário de regressão** — garantir que funcionalidades existentes relacionadas continuam funcionando.

---

## Evidências

Toda execução de teste relevante (especialmente E2E) deve produzir evidências: saída de comando, screenshots, vídeos ou logs, conforme o que a stack do projeto permitir.

---

## Processo de Entrega

Nenhuma entrega é considerada concluída sem:

* Build executado
* Testes unitários executados
* Testes E2E executados quando aplicável
* Evidências geradas
* Validation Report aprovado (`$validate-delivery`)

---

## Regra Suprema

Código sem teste é hipótese. Código validado por testes é evidência. Somente evidências podem ser utilizadas para aprovar uma entrega.

---

## Configuração Específica do Projeto

### Ferramentas

- Testes unitários e de componentes: Vitest + React Testing Library.
- Testes E2E: Playwright.
- O projeto não possui banco de dados nem testes de integração com banco.

### Scripts obrigatórios do projeto

Quando a aplicação for inicializada, o `package.json` deve expor, no mínimo:

- `npm run dev` — iniciar o Vite em ambiente local (porta padrão 5173, salvo conflito documentado).
- `npm run build` — executar checagem necessária e gerar o bundle de produção.
- `npm test` — executar a suíte unitária/de componentes.
- `npm run test:coverage` — executar testes com relatório de cobertura.
- `npm run test:e2e` — executar a suíte Playwright.

### Cobertura

O limite mínimo é de **80%** para cada métrica: statements, branches, functions e lines. O comando de cobertura e a CI devem falhar quando qualquer limite não for atingido.

### Ambiente local e E2E

1. Instalar dependências com `npm ci` quando houver lockfile.
2. Validar o build com `npm run build`.
3. Iniciar a aplicação local com `npm run dev` ou usar o `webServer` configurado no Playwright.
4. Executar `npm run test:e2e` contra o ambiente local, nunca contra a publicação de produção.
5. Encerrar o servidor local após a execução quando ele não for gerenciado automaticamente.

### Cenários mínimos do site

- Renderização das informações essenciais do evento.
- Renderização dos oito palestrantes e seus placeholders.
- Navegação e redirecionamento externo do botão de ingresso.
- Comportamento responsivo básico em viewport móvel e desktop.
- Cenários de regressão para estrutura visual e conteúdo alterados.

### Evidências

- Preservar a saída de build, testes e cobertura na Validation Report.
- Configurar o Playwright para produzir evidência de falha adequada, como screenshot, trace ou vídeo.
- A publicação no GitHub Pages não substitui validação local nem testes automatizados.
