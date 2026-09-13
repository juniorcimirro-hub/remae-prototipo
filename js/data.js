/*
  data.js
  Dados de exemplo (mock) do protótipo ReMãe.
  Nada aqui vem de um servidor de verdade — é só pra simular como o app
  funcionaria. Quando vocês tiverem um back-end real, essas listas viram
  respostas de API.
*/

const vagas = [
  {
    id: 1,
    titulo: "Assistente Administrativa",
    empresa: "Grupo Vitta",
    modalidade: "Remoto",
    tipo: "Meio período",
    selo: true,
    local: "São Paulo - SP",
    descricao: "Rotinas administrativas, organização de agenda e apoio ao financeiro. Horário flexível, ideal para conciliar com a rotina dos filhos.",
    requisitos: ["Ensino médio completo", "Pacote Office básico", "Boa comunicação"]
  },
  {
    id: 2,
    titulo: "Analista de Marketing Digital (retorno de maternidade)",
    empresa: "Ateliê Comunicação",
    modalidade: "Híbrido",
    tipo: "Primeiro emprego após maternidade",
    selo: true,
    local: "Curitiba - PR",
    descricao: "Vaga pensada para mães voltando ao mercado. Treinamento incluso nas primeiras semanas.",
    requisitos: ["Interesse em redes sociais", "Criatividade", "Não é necessária experiência prévia"]
  },
  {
    id: 3,
    titulo: "Consultora de Vendas MEI",
    empresa: "Autônoma / Rede de apoio ReMãe",
    modalidade: "Remoto",
    tipo: "Empreendedorismo",
    selo: false,
    local: "Qualquer cidade",
    descricao: "Oportunidade para mães que já têm ou querem abrir um MEI de vendas por indicação.",
    requisitos: ["Perfil comunicativo", "Disponibilidade parcial"]
  },
  {
    id: 4,
    titulo: "Auxiliar de Atendimento ao Cliente",
    empresa: "TechFlex Serviços",
    modalidade: "Presencial",
    tipo: "Estágio",
    selo: true,
    local: "Belo Horizonte - MG",
    descricao: "Atendimento via telefone e chat, escala compatível com horário escolar dos filhos.",
    requisitos: ["Cursando ensino técnico ou superior", "Boa dicção"]
  },
  {
    id: 5,
    titulo: "Recepcionista",
    empresa: "Clínica Vida Plena",
    modalidade: "Presencial",
    tipo: "Meio período",
    selo: true,
    local: "Porto Alegre - RS",
    descricao: "Recepção de pacientes e organização de agenda médica, período da manhã.",
    requisitos: ["Ensino médio completo", "Boa apresentação e organização"]
  },
  {
    id: 6,
    titulo: "Desenvolvedora Front-end Júnior",
    empresa: "CodeMãe Startup",
    modalidade: "Remoto",
    tipo: "Primeiro emprego após maternidade",
    selo: true,
    local: "Qualquer cidade",
    descricao: "Vaga afirmativa para mães que estão estudando ou já concluíram curso de tecnologia.",
    requisitos: ["Conhecimento básico de HTML/CSS", "Vontade de aprender"]
  }
];

const forumCategorias = [
  {
    id: "carreira",
    nome: "Carreira e Direitos Trabalhistas",
    icone: "💼",
    descricao: "Dúvidas sobre currículo, entrevistas, licença-maternidade, estabilidade e retorno ao mercado."
  },
  {
    id: "empreendedorismo",
    nome: "Empreendedorismo",
    icone: "🌱",
    descricao: "Trocas entre mães que vendem produtos ou serviços: precificação, divulgação, MEI e mais."
  }
];

const topicos = [
  {
    id: 1,
    categoria: "carreira",
    titulo: "Como responder sobre o \"gap\" da maternidade no currículo?",
    autora: "Fernanda M.",
    data: "há 2 dias",
    corpo: "Fiquei 3 anos fora do mercado depois que minha filha nasceu. Como vocês contam esse período pra quem for me entrevistar sem parecer que eu \"sumi\"?",
    respostas: [
      { autora: "Camila R.", texto: "Eu coloco como 'Licença maternidade e desenvolvimento pessoal' e cito cursos que fiz nesse período. Ajuda bastante!" },
      { autora: "Juliana P.", texto: "Fui bem direta na entrevista e falei com naturalidade. Empresa boa não vê isso como problema." }
    ]
  },
  {
    id: 2,
    categoria: "carreira",
    titulo: "Tenho direito a horário reduzido para amamentar?",
    autora: "Bruna S.",
    data: "há 5 dias",
    corpo: "Voltei ao trabalho e meu bebê ainda mama. Alguém sabe como funciona esse direito na prática?",
    respostas: [
      { autora: "Renata A.", texto: "Sim! A CLT garante dois descansos de 30 min por dia até os 6 meses do bebê, pode ser prorrogado com atestado médico." }
    ]
  },
  {
    id: 3,
    categoria: "empreendedorismo",
    titulo: "Vale a pena abrir MEI vendendo doces?",
    autora: "Patrícia L.",
    data: "há 1 dia",
    corpo: "Comecei vendendo pros vizinhos e já não dou conta sozinha. Quem tem MEI de confeitaria pode contar como foi o processo?",
    respostas: [
      { autora: "Ana Paula", texto: "Abri o meu ano passado, super simples pelo site do governo. Facilitou muito emitir nota e vender pra empresas." }
    ]
  },
  {
    id: 4,
    categoria: "empreendedorismo",
    titulo: "Dicas de divulgação para quem está começando",
    autora: "Marina T.",
    data: "há 3 dias",
    corpo: "Fiz um Instagram para o meu ateliê mas ninguém vê. Como vocês divulgam o trabalho de vocês?",
    respostas: []
  },
  {
    id: 5,
    categoria: "carreira",
    titulo: "Fui chamada para entrevista depois de 4 anos parada. Estou apavorada, alguma dica?",
    autora: "Luciana F.",
    data: "há 6 horas",
    corpo: "Meu filho mais novo já vai pra escola e recebi um retorno de currículo depois de muito tempo. Não sei nem por onde começar a me preparar.",
    respostas: [
      { autora: "Camila R.", texto: "Treina em voz alta as perguntas mais comuns, ajuda muito a perder o medo de travar." },
      { autora: "Bruna S.", texto: "Usa o simulador de entrevista do app! Me ajudou bastante a organizar as ideias antes." }
    ]
  },
  {
    id: 6,
    categoria: "carreira",
    titulo: "Empresa pode perguntar se eu tenho filhos pequenos na entrevista?",
    autora: "Patrícia L.",
    data: "há 1 semana",
    corpo: "Fui perguntada sobre quem cuida das crianças enquanto trabalho. Isso é permitido?",
    respostas: [
      { autora: "Renata A.", texto: "Não é uma pergunta obrigatória e é considerada discriminatória em muitos contextos. Vale pesquisar sobre isso antes da próxima entrevista." }
    ]
  },
  {
    id: 7,
    categoria: "carreira",
    titulo: "Como pedir horário flexível sem parecer que não quero trabalhar?",
    autora: "Juliana P.",
    data: "há 2 semanas",
    corpo: "Preciso sair mais cedo pra buscar meu filho na creche duas vezes por semana. Como conversar isso com o RH?",
    respostas: []
  },
  {
    id: 8,
    categoria: "carreira",
    titulo: "Estabilidade da gestante: até quando ela vale?",
    autora: "Fernanda M.",
    data: "há 3 semanas",
    corpo: "Engravidei de novo e fiquei em dúvida sobre até quando tenho estabilidade no emprego atual.",
    respostas: [
      { autora: "Marina T.", texto: "Dá uma olhada na aba 'Direitos da Mulher Trabalhadora' do app, tem uma explicação bem simples sobre isso!" }
    ]
  },
  {
    id: 9,
    categoria: "empreendedorismo",
    titulo: "Como precificar meu trabalho sem cobrar barato demais?",
    autora: "Renata A.",
    data: "há 4 horas",
    corpo: "Sempre fico insegura na hora de cobrar pelo meu serviço, tenho medo de perder cliente.",
    respostas: [
      { autora: "Ana Paula", texto: "Calcula sempre o custo do material + seu tempo de trabalho. Cobrar barato demais te queima no médio prazo." }
    ]
  },
  {
    id: 10,
    categoria: "empreendedorismo",
    titulo: "Alguém já vendeu para empresas (B2B) e não só para pessoa física?",
    autora: "Ana Paula",
    data: "há 5 dias",
    corpo: "Queria oferecer meus doces para eventos corporativos, mas não sei como abordar uma empresa.",
    respostas: []
  },
  {
    id: 11,
    categoria: "empreendedorismo",
    titulo: "Vale a pena participar de feiras de artesanato?",
    autora: "Marina T.",
    data: "há 1 semana",
    corpo: "Tem uma feira no meu bairro cobrando uma taxa pequena pra participar. Alguém já tentou?",
    respostas: [
      { autora: "Patrícia L.", texto: "Já participei! Não vendi muito no dia, mas fiz contatos que viraram encomendas depois." }
    ]
  },
  {
    id: 12,
    categoria: "empreendedorismo",
    titulo: "Como organizar as finanças do negócio separadas de casa?",
    autora: "Bruna S.",
    data: "há 2 semanas",
    corpo: "Confesso que meu dinheiro de venda e o dinheiro de casa vivem se misturando. Como vocês organizam isso?",
    respostas: []
  }
];

const comunidadePosts = [
  {
    id: 1,
    autora: "Camila R.",
    cargo: "Analista Financeira · voltou ao mercado há 3 meses",
    tipo: "conquista",
    texto: "Hoje fecho 3 meses no novo emprego! Depois de 2 anos fora do mercado, nunca achei que fosse conseguir conciliar tudo. Obrigada a quem me ajudou a revisar o currículo aqui no app 💛",
    curtidas: 24,
    comentarios: [
      { autora: "Fernanda M.", texto: "Que orgulho! Isso me dá esperança 😍" }
    ]
  },
  {
    id: 2,
    autora: "Patrícia L.",
    cargo: "Confeiteira e dona da Doces da Pati",
    tipo: "divulgação",
    texto: "Gente, abri agenda para encomendas de fim de ano! Quem quiser experimentar meus brigadeiros gourmet, dá uma olhada na aba Empreendedorismo 🍫",
    curtidas: 18,
    comentarios: []
  },
  {
    id: 3,
    autora: "Bruna S.",
    cargo: "Em busca de recolocação",
    tipo: "pedido de ajuda",
    texto: "Alguém tem dica de curso rápido de Excel que já ajudou a conseguir entrevista? Preciso reforçar meu currículo essa semana.",
    curtidas: 5,
    comentarios: [
      { autora: "Renata A.", texto: "Da uma olhada na aba de Cursos gratuitos, tem um módulo básico de Excel bem direto ao ponto!" }
    ]
  },
  {
    id: 4,
    autora: "Marina T.",
    cargo: "Artesã · Ateliê Marina Bordados",
    tipo: "networking",
    texto: "Alguém da comunidade mora perto de Campinas? Queria trocar uma ideia sobre feiras de artesanato boas na região.",
    curtidas: 3,
    comentarios: []
  }
];

const produtos = [
  {
    id: 1,
    nome: "Brownies Gourmet da Ana",
    autora: "Ana Paula",
    categoria: "Doces",
    preco: "a partir de R$ 12,00",
    cidade: "Curitiba - PR",
    descricao: "Brownies artesanais, encomendas para festas e presentes corporativos.",
    verificado: true
  },
  {
    id: 2,
    nome: "Ateliê Marina Bordados",
    autora: "Marina T.",
    categoria: "Artesanato",
    preco: "sob consulta",
    cidade: "São Paulo - SP",
    descricao: "Bordados personalizados em roupas de bebê e enxovais.",
    verificado: true
  },
  {
    id: 3,
    nome: "Consultoria Financeira para Mães Empreendedoras",
    autora: "Renata A.",
    categoria: "Consultoria",
    preco: "a partir de R$ 80,00/hora",
    cidade: "Remoto",
    descricao: "Organização financeira pessoal e do pequeno negócio, planejamento de MEI.",
    verificado: false
  },
  {
    id: 4,
    nome: "Roupinhas Sustentáveis Pequenos Passos",
    autora: "Juliana P.",
    categoria: "Roupas",
    preco: "a partir de R$ 35,00",
    cidade: "Belo Horizonte - MG",
    descricao: "Roupas infantis feitas com tecido reciclado e sob encomenda.",
    verificado: true
  }
];
