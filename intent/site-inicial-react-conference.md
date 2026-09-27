# Intent — Site inicial da React Conference

## Metadados

- **Título:** Disponibilizar o site público inicial da React Conference
- **Slug:** `site-inicial-react-conference`
- **Data:** 2026-09-27
- **Autor:** Usuário e agente
- **Status:** Aprovada

## Resumo Executivo

A React Conference ainda não possui um canal público próprio que concentre as informações do evento e conduza pessoas interessadas até a inscrição. Esta entrega deve tornar a conferência encontrável e compreensível em diferentes tamanhos de tela, reduzindo dúvidas e oferecendo um caminho claro para a plataforma externa de ingressos.

## Problema

### Problema Principal

Pessoas interessadas em React não dispõem de uma página oficial onde possam conhecer a React Conference, avaliar sua relevância e localizar as informações necessárias para decidir pela inscrição.

### Sintomas

- As informações do evento não estão publicadas em uma experiência única e acessível.
- Não existe um caminho oficial entre a descoberta da conferência e a inscrição externa.
- Palestrantes, data, horário, local, alimentação e hospedagem não podem ser consultados em um site do evento.

### Evidências

- O repositório contém apenas o harness de governança e uma referência visual; não existe aplicação executável.
- Os organizadores forneceram conteúdo completo do evento e identificaram o número de inscritos como indicador principal.
- A inscrição já possui destino externo definido, mas ainda não há site que direcione o público até ele.

## Contexto de Negócio

A React Conference ocorrerá em 12/12/2026, das 08h30 às 19h30, em São Paulo. O público é formado por pessoas interessadas em React. Hoje, a ausência do site impede a apresentação organizada do evento. Se nada for feito, a conferência dependerá de canais dispersos e terá menor capacidade de informar e converter visitantes em inscritos.

## Objetivo

Oferecer ao público uma presença oficial, clara e responsiva da React Conference, com informações suficientes para conhecer o evento e prosseguir com segurança para a inscrição externa.

## Benefícios Esperados

- **Visitante interessado em React:** encontra rapidamente informações do evento, conhece os palestrantes e acessa a inscrição.
- **Organizador:** passa a contar com um canal oficial de divulgação, simples de manter e coerente com a identidade da conferência.

## Usuários Impactados

- Visitantes interessados em React.
- Organizadores da React Conference.

## Módulos/Sistemas Impactados

- Aplicação web pública na raiz do repositório.
- Plataforma externa de inscrição apenas como destino de navegação.
- GitHub Pages como canal de publicação.

## Processo Atual

1. O interessado recebe informações por canais não centralizados.
2. Não existe uma página oficial para consultar todos os detalhes.
3. O acesso à plataforma de ingresso não parte de uma experiência própria do evento.

## Dores do Processo Atual

- Informação fragmentada ou indisponível.
- Menor confiança e clareza para o potencial participante.
- Ausência de presença digital oficial e responsiva.
- Maior esforço do organizador para comunicar repetidamente detalhes básicos.

## Resultado Esperado

O visitante acessa uma página oficial em português, entende o propósito da conferência, consulta data, horário, local, palestrantes e informações práticas e encontra uma chamada inequívoca para a inscrição externa, tanto em telas móveis quanto em desktop.

## Restrições

### Técnicas

- Respeitar a arquitetura frontend estática já aprovada no contexto do projeto.
- Não introduzir backend, banco de dados, autenticação ou administração de conteúdo.
- Preservar publicação compatível com GitHub Pages.

### Operacionais

- O conteúdo será mantido no código pelos organizadores.
- O número de inscritos será acompanhado diretamente em `register.com.br`.

### Financeiras

- Não há orçamento definido para serviços pagos; a solução não deve depender deles.

### Legais

- Não coletar dados pessoais nem instalar analytics nesta versão.
- Não usar fotografias de palestrantes; utilizar representação visual sem imagem pessoal.

## Regras de Negócio Conhecidas

- **RN001:** A experiência e o conteúdo público devem estar em português.
- **RN002:** A inscrição ocorre exclusivamente na plataforma externa informada pelos organizadores.
- **RN003:** O site não consulta nem apresenta o número de inscritos.
- **RN004:** Devem ser apresentados os oito palestrantes fornecidos no contexto de negócio.
- **RN005:** As informações oficiais de data, horário e endereço devem ser preservadas.
- **RN006:** A experiência deve funcionar de forma responsiva.

## Hipóteses

- A URL externa de ingressos permanecerá sob responsabilidade dos organizadores.
- O conteúdo fornecido durante o bootstrap está aprovado para publicação.
- Uma única página é suficiente para a primeira versão do evento.

## Riscos

### Riscos Técnicos

- Configuração incorreta da publicação pode quebrar recursos em subcaminho no GitHub Pages.
- Responsividade insuficiente pode comprometer o acesso móvel.

### Riscos Operacionais

- Conteúdo estático pode ficar desatualizado se mudanças do evento não passarem pelo fluxo de entrega.
- Indisponibilidade da plataforma externa impede inscrições mesmo com o site disponível.

### Riscos de Produto

- Informações pouco destacadas ou chamada fraca podem limitar conversão em inscrições.
- Uma interpretação excessivamente literal do wireframe pode resultar em baixa qualidade percebida.

### Riscos de Regressão

- Por ser a primeira versão, não há comportamento anterior da aplicação; o principal risco é publicar uma experiência incompleta ou inacessível.

## Impacto Esperado nos Indicadores

- **Número de inscritos:** impacto esperado positivo, ao criar um caminho oficial entre descoberta e inscrição. A medição continuará ocorrendo em `register.com.br`.

## Critérios de Sucesso

- **CS001:** Todo o conteúdo oficial do evento pode ser consultado em uma única experiência pública.
- **CS002:** O acesso à inscrição externa é claramente identificável e funcional.
- **CS003:** A experiência principal é utilizável em viewport móvel e desktop.
- **CS004:** Os oito palestrantes e suas informações são apresentados sem uso de fotografias.
- **CS005:** O site é publicado com sucesso no GitHub Pages.
- **CS006:** A entrega possui evidências automatizadas de build, comportamento e cobertura mínima definida pelo projeto.

## Critérios para Não Implementar

- Cancelamento da conferência.
- Retirada da autorização para publicar o conteúdo fornecido.
- Substituição desta iniciativa por uma plataforma oficial que já atenda integralmente às mesmas necessidades.

## Alternativas Consideradas

- Divulgar apenas por redes sociais ou mensagens: rejeitada por fragmentar informações e não oferecer uma fonte oficial única.
- Direcionar o público diretamente ao serviço de ingressos: insuficiente para apresentar proposta, palestrantes e informações práticas.
- Adotar um sistema com administração própria: complexidade desnecessária para o escopo atual.

## Perguntas em Aberto

Nenhuma.

## Aprovação da Intent

- [x] A Intent descreve claramente o problema.
- [x] Existe valor de negócio.
- [x] O objetivo está claro.
- [x] Está pronta para gerar PRD.

## Próximo Passo

Gerar `intent/site-inicial-react-conference_prd.md` com `$create-prd`.
