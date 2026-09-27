# Arquitetura do Projeto

## Visão Geral

React Conference é uma aplicação frontend estática de página única, mantida em um único repositório. A aplicação apresenta o conteúdo da conferência e redireciona o usuário para uma plataforma externa de inscrição.

## Estrutura do Repositório

### Aplicação web — raiz do repositório

- **Responsabilidade:** renderizar o site público da conferência.
- **Linguagem:** TypeScript.
- **Framework e build:** React com Vite.
- **Estilos:** Tailwind CSS, organizado por componentes e tokens visuais.
- **Gerenciador de dependências:** npm.
- **Hospedagem:** GitHub Pages.
- **Publicação:** GitHub Actions após alterações integradas à `main`.

### Governança — `.agents/`, `.ai/`, `intent/` e `docs/adr/`

- **Responsabilidade:** manter skills, contexto oficial, documentação de requisitos, análises, reviews e decisões arquiteturais.
- Esses diretórios não fazem parte do bundle publicado da aplicação.

### Referências — `docs/references/`

- **Responsabilidade:** armazenar referências fornecidas para orientar a implementação.
- `docs/references/layout.png` é a referência visual inicial do site.

## Organização Planejada da Aplicação

```text
src/
├── assets/       # ativos visuais usados pela aplicação
├── components/   # componentes React reutilizáveis
├── data/         # conteúdo tipado do evento
└── pages/        # composição das páginas
```

O conteúdo do evento deve permanecer separado dos componentes de apresentação. Componentes React usam `PascalCase`, com um componente principal por arquivo.

## Comunicação e Dependências Externas

- Não existe comunicação entre módulos internos independentes; há apenas uma aplicação frontend.
- O fluxo de inscrição é uma navegação externa para `www.register.com.br/evento/14527`.
- A aplicação não consulta nem exibe a quantidade de inscritos.
- Não há API própria, backend, banco de dados, fila ou processamento de pagamento.

## Multi-tenancy e Dados

O projeto **não é multi-tenant**. Não há persistência própria nem dados de usuários no escopo atual.

## Interface e Responsividade

- A interface deve seguir `docs/references/layout.png`: cabeçalho, navegação, banner principal com chamada para ingresso e grade de oito palestrantes.
- O layout deve ser responsivo.
- Fotografias de palestrantes não fazem parte do escopo; devem ser usados placeholders.
- Não há requisito declarado de suporte a navegadores legados.

## Compatibilidade e Evolução

O produto é greenfield e não possui clientes legados ou contratos de API a preservar. Mudanças futuras que introduzam backend, banco de dados, autenticação, administração de conteúdo ou integração com a plataforma de ingressos alteram a arquitetura e exigem fluxo completo e, quando aplicável, ADR.

## Critério de Escolha de Módulo

No escopo atual há um único módulo executável: toda mudança de interface ou conteúdo pertence à aplicação web na raiz. Documentos de requisitos e decisões pertencem aos diretórios de governança correspondentes; referências visuais pertencem a `docs/references/`.
