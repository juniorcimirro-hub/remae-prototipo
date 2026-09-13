# ReMãe — Protótipo

Protótipo navegável do app **ReMãe**. Cobre as 3 funcionalidades do MVP original
(**vagas afirmativas**, **fórum de apoio estilo Reddit** e **empreendedorismo**) mais
as áreas adicionadas na 2ª rodada: **simulador de currículo/entrevista com IA**,
**direitos da mulher trabalhadora** e **comunidade estilo LinkedIn** — além de
telas de apoio como política de privacidade e diretrizes de moderação.

Feito em HTML + CSS + JavaScript puro (sem framework, sem instalação), pra você
poder abrir e mexer direto no VSCode.

## Como testar

**Opção mais simples:** dê duplo clique no arquivo `index.html` — ele abre no
seu navegador normalmente.

**Opção recomendada (evita bugs de navegador com arquivos locais):** no VSCode,
instale a extensão gratuita **Live Server**, clique com o botão direito em
`index.html` e escolha "Open with Live Server". Isso sobe um servidor local
e o app funciona 100% igual a como funcionaria hospedado na internet.

**No celular:** abra o mesmo `index.html` publicado (ex: via Live Server + túnel,
ou hospedando em qualquer serviço gratuito de páginas estáticas) direto no navegador
do celular — o layout já se adapta a telas pequenas. Ver a seção "Como isso vira um
app de celular" abaixo para o caminho completo até um app instalável.

## Estrutura do projeto

```
remae-prototipo/
├── index.html            Página inicial (feed com atalhos)
├── login.html            Login / cadastro (visual apenas + aceite de termos)
├── vagas.html            Lista de vagas com filtros
├── vaga-detalhe.html     Detalhe de uma vaga
├── forum.html            Categorias e tópicos do fórum (com diretrizes da comunidade)
├── topico.html           Um tópico aberto, com respostas e botão de denúncia
├── comunidade.html       Feed estilo LinkedIn (posts, curtidas, comentários)
├── empreendedorismo.html Vitrine de produtos/serviços de mães + selo de verificação
├── simulador.html        Gerador de prompt para currículo/entrevista + simulação local
├── direitos.html         Explicações sobre direitos da mulher trabalhadora
├── privacidade.html      Política de privacidade e termos de uso (estilo LGPD)
├── perfil.html           Perfil da usuária (dados mock)
├── css/style.css         Todo o visual do app (cores em variáveis no topo)
├── js/data.js            Dados fictícios (vagas, tópicos, produtos, posts)
├── DIFICULDADES.md       Aprofundamento das dificuldades reais do projeto + soluções
└── README.md             Este arquivo
```

## O que é funcional e o que é só visual (mock)

| Recurso | Status |
|---|---|
| Navegar entre todas as páginas | ✅ Funciona |
| Filtrar vagas por modalidade/tipo | ✅ Funciona |
| Responder um tópico do fórum | ✅ Funciona (some ao recarregar) |
| Curtir/comentar/publicar na Comunidade | ✅ Funciona (some ao recarregar) |
| Anunciar um produto no Empreendedorismo | ✅ Funciona (some ao recarregar) |
| Gerar prompt de currículo/entrevista | ✅ Funciona (você cola numa IA gratuita externa) |
| Simulação local de perguntas de entrevista | ✅ Funciona (perguntas e dicas fixas) |
| Botões de "Denunciar" (fórum, comunidade, anúncios) | 🟡 Mostram confirmação, mas não há moderação real por trás |
| Login/cadastro | 🟡 Só visual — qualquer clique entra no app |
| Candidatar-se a uma vaga / Salvar perfil | 🟡 Só mostram mensagem de confirmação |

Nada é salvo permanentemente porque não existe banco de dados de verdade —
isso é proposital nessa fase de protótipo.

## Identidade visual

Ainda não foi definida. Todas as cores e fontes ficam concentradas no topo do
arquivo `css/style.css`, dentro do bloco `:root`. Quando vocês decidirem a
identidade visual (cores, fonte, logo), basta trocar os valores ali — o app
inteiro muda junto, sem precisar editar cada página.

## Como isso vira um app de celular

1. **Hoje:** já funciona bem num navegador de celular, porque o layout é responsivo.
2. **Próximo passo natural:** transformar em **PWA** (Progressive Web App) — adicionar
   um `manifest.json` e um `service worker` a este mesmo código. Isso permite "Adicionar
   à tela inicial" e funcionar parcialmente offline, sem passar por loja de aplicativo.
   (Ainda não implementado aqui — é rápido de adicionar quando vocês quiserem.)
3. **App nativo de verdade** (publicado na Play Store/App Store, com acesso completo a
   recursos do celular): normalmente significa reconstruir com um framework mobile
   (React Native, Flutter). Esse protótipo não vira esse app diretamente, mas serve
   como referência completa de telas, textos e fluxo para quem for programá-lo.

## Isso pode servir de ponto de partida para programadores?

Sim, com uma expectativa clara: este protótipo é uma **especificação viva** —
mostra todas as telas, textos, fluxos de navegação e até os dados que cada
funcionalidade precisaria (veja `js/data.js`, que já imita o formato de uma
resposta de API). Um programador consegue usar isso para entender exatamente
o que construir, sem precisar adivinhar.

O que muda quando vira um projeto de produção:
- Login, perfil e formulários passam a ter um back-end real com banco de dados;
- Autenticação e senha seguem padrões de segurança (hoje é só visual);
- Moderação, denúncias e selos de verificação passam a ter um processo humano/automatizado
  por trás (hoje é só a interface, sem verificação real).

## Dificuldades para levar esse projeto adiante

Resumo rápido — o detalhamento completo, com possíveis soluções para cada uma, está em
[`DIFICULDADES.md`](./DIFICULDADES.md):

- Privacidade de dados (LGPD)
- Moderação do fórum e da comunidade
- Publicar um aplicativo de verdade (custos e manutenção)
- Limites das IAs gratuitas
- Verificação de empresas e vendedoras
- Escopo muito amplo para o tempo disponível
- Segurança da informação
- Dependência de parcerias externas
