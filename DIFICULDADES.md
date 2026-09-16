# Dificuldades para tirar o Mãe Conecta do papel — e possíveis soluções

Este documento aprofunda os obstáculos reais de transformar este protótipo em um aplicativo
publicado de verdade. A ideia é usar este material como base para o relatório do trabalho.

---

## 1. Privacidade de dados (LGPD)

**O problema:** o app coletaria dados sensíveis — nome, e-mail, telefone, cidade, experiência
profissional, e indiretamente até situação familiar (ex: "mãe solo", disponibilidade de horário
por causa dos filhos). A Lei Geral de Proteção de Dados (LGPD) exige consentimento explícito,
finalidade clara para cada dado coletado, e mecanismos para a usuária corrigir ou apagar seus
dados.

**Possíveis soluções:**
- Pedir consentimento explícito no cadastro (já simulado no protótipo com o checkbox de aceite
  dos Termos);
- Coletar só o dado estritamente necessário para cada funcionalidade (ex: não pedir CPF só para
  entrar no fórum);
- Ter uma política de privacidade clara e acessível (já simulada na aba "Política de Privacidade");
- Nomear um responsável pelo tratamento de dados (mesmo que seja um dos integrantes do grupo,
  para fins do projeto).

---

## 2. Moderação do fórum e da comunidade

**O problema:** espaços abertos de conversa entre mulheres — muitas delas em situação de
vulnerabilidade financeira ou emocional — são alvo comum de golpes financeiros, assédio,
desinformação (ex: sobre direitos trabalhistas) e spam.

**Possíveis soluções:**
- Diretrizes claras da comunidade, visíveis antes de postar (já simulado no protótipo);
- Botão de denúncia em posts, respostas e anúncios (já simulado no protótipo);
- Moderação humana nas primeiras fases (equipe pequena revisando denúncias), migrando para
  moderação automática (filtros de palavras, IA de moderação) conforme a base de usuárias cresce;
- Verificação em duas etapas para contas que vendem produtos/serviços.

---

## 3. Publicar um aplicativo de verdade

**O problema:** publicar na Google Play ou App Store não é gratuito nem imediato: há taxas
únicas ou anuais, processo de revisão de conteúdo, exigência de política de privacidade
publicada, e a necessidade de manter o app atualizado conforme o sistema operacional muda.

**Possíveis soluções:**
- Validar a ideia primeiro como PWA (Progressive Web App) — instalável a partir do navegador,
  sem passar pelas lojas, ideal para uma fase de testes com usuárias reais;
- Buscar editais, incubadoras ou programas de impacto social (muitos cobrem custos de
  publicação para projetos de cunho social como este);
- Definir um plano de manutenção mínimo antes de lançar (quem corrige bugs, com que frequência).

---

## 4. Limites das IAs gratuitas

**O problema:** o simulador de currículo/entrevista depende de uma IA externa gratuita
(ChatGPT, Gemini, etc.). Essas ferramentas têm cotas de uso, podem exigir cadastro, mudar de
política a qualquer momento, ou ficar instáveis em horários de pico.

**Possíveis soluções:**
- Não prometer "IA dentro do app" como recurso garantido a longo prazo — deixar claro que é uma
  ponte para uma ferramenta externa (é o que o protótipo já faz, gerando um prompt pronto);
  Se e quando o projeto tiver orçamento, migrar para uma API paga com limite mensal controlado.

---

## 5. Verificação de empresas e vendedoras

**O problema:** tanto o selo "Empresa Amiga da Maternidade" quanto o selo de "vendedora
verificada" dependem de alguém checar informações de verdade (CNPJ, políticas internas da
empresa, identidade da vendedora) — sem isso, os selos podem ser usados para aplicar golpes.

**Possíveis soluções:**
- Processo manual de verificação antes de conceder qualquer selo (documento + comprovante);
- Permitir que usuárias avaliem/comentem sobre a experiência com a vaga ou o produto, criando
  um histórico público de reputação;
- Deixar claro, para quem ainda não tem o selo, que a responsabilidade da negociação é entre as
  partes.

---

## 6. Escopo muito amplo para o tempo e a equipe disponíveis

**O problema:** o conceito original tem quase 20 funcionalidades (vagas, fórum, mentoria,
cursos, simuladores, empresas parceiras, agenda, bem-estar, comunidade, pontos...). Construir
tudo com qualidade em pouco tempo, com uma equipe pequena, é praticamente inviável.

**Possíveis soluções:**
- Priorizar um MVP (produto mínimo viável) enxuto — o que fizemos neste protótipo, focando
  primeiro em vagas, fórum e empreendedorismo;
- Adicionar funcionalidades em ondas, validando cada uma com usuárias reais antes de seguir
  para a próxima;
- Deixar registrado, desde já, quais funcionalidades ficaram de fora e por quê — isso mostra
  maturidade de planejamento no trabalho acadêmico.

---

## 7. Segurança da informação

**O problema:** dados de mulheres (muitas vezes com filhos pequenos e endereço) são um alvo
sensível — vazamentos podem gerar risco real, não só financeiro.

**Possíveis soluções:**
- Nunca armazenar senhas em texto puro (usar hashing, ex: bcrypt, quando houver back-end real);
- Conexão HTTPS obrigatória;
- Restringir quais dados aparecem publicamente no perfil (ex: nunca expor telefone/endereço
  completo por padrão).

---

## 8. Dependência de parcerias externas

**O problema:** boa parte do valor do app (vagas afirmativas reais, selo de empresas, cursos
gratuitos) depende de parcerias com empresas e instituições que ainda não existem.

**Possíveis soluções:**
- Começar com parcerias locais/pequenas (comércios da região, ONGs) antes de mirar grandes
  empresas;
- Ter um discurso claro de proposta de valor para empresas parceiras (ex: acesso a mão de obra
  qualificada, marketing de responsabilidade social).
