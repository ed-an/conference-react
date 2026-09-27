# Security Review — Site inicial da React Conference

## Metadados

- **Slug:** `site-inicial-react-conference`
- **Data:** 2026-09-27
- **Revisor:** Agente
- **Escopo:** aplicação estática, dependências, testes e workflows

## Classificação de Risco

**Baixo.**

A aplicação é pública, somente leitura, sem backend, formulário, autenticação, persistência, cookie, analytics, upload ou dado pessoal. A superfície principal está em dependências de build, links externos e permissões do workflow de publicação.

## Multi-Tenancy

Não aplicável. Não existem tenants, usuários, dados ou consultas. Não há caminho pelo qual um usuário possa acessar dados de outro.

## Autenticação e Autorização

Não aplicáveis. A aplicação não define áreas protegidas nem ações privilegiadas.

## IDOR, APIs e Banco de Dados

Não aplicáveis. Não existem endpoints, identificadores de recursos, consultas ou banco de dados.

## Dados Sensíveis e Privacidade

- Nenhum dado de visitante é coletado, persistido ou transmitido.
- Não existem formulários, analytics, cookies ou armazenamento local.
- Os dados exibidos são conteúdo público e fictício/aprovado para o evento.
- Nenhum log de runtime é produzido.

## Segredos e Credenciais

- Busca estática não identificou token, senha, segredo ou credencial na implementação.
- Workflows não usam segredos da aplicação.
- O deploy usa o token efêmero e OIDC nativos do GitHub Pages, limitados ao job de deploy.
- Nenhuma credencial existente foi removida ou alterada.

## Links e Integrações Externas

- URLs externas são constantes HTTPS.
- Todo link com `target="_blank"` usa `rel="noopener noreferrer"`.
- Testes verificam todos os links externos renderizados.
- Ingresso e Maps são navegação simples; não há script, iframe, chave, webhook ou troca de dados.

## Frontend

- Não há HTML arbitrário, `dangerouslySetInnerHTML`, avaliação dinâmica de código ou entrada do usuário.
- Conteúdo é renderizado pelo escaping padrão do React.
- Não há chamadas `fetch`, WebSocket ou comunicação de runtime.
- O favicon e a marca são SVGs controlados pelo repositório.

## Cadeia de Suprimentos

- Dependências são mínimas para a stack aprovada e estão fixadas no lockfile.
- `npm audit --audit-level=high`: zero vulnerabilidades.
- CI executa instalação reprodutível com `npm ci` e repete a auditoria.

## Workflows

- CI usa somente `contents: read`.
- Build do deploy herda somente leitura.
- `pages: write` e `id-token: write` existem apenas no job de deploy, que depende do build/testes/E2E.
- Nenhuma entrada externa é interpolada em comandos shell.

## Vulnerabilidades Encontradas

Nenhuma vulnerabilidade crítica, alta, média ou baixa identificada no escopo revisado.

## Limitações Conhecidas

GitHub Pages não permite ao projeto configurar todos os cabeçalhos HTTP de segurança diretamente. Como a página não aceita entrada, não carrega scripts terceiros e não mantém sessão, essa limitação não constitui bloqueio. Uma futura migração de hospedagem deve reavaliar CSP e demais cabeçalhos.

## Checklist Final

- [x] Autenticação marcada como não aplicável.
- [x] Autorização marcada como não aplicável.
- [x] Multi-tenancy marcada como não aplicável.
- [x] APIs revisadas e inexistentes.
- [x] Consultas revisadas e inexistentes.
- [x] Dados sensíveis revisados.
- [x] Segredos revisados.
- [x] Integrações revisadas.

## Parecer Final

**APROVADO — risco baixo.**

Não há vulnerabilidade bloqueante. A implementação reduz adequadamente a superfície de ataque para um site estático.

## Próxima Etapa

Executar `$observability-review`.
