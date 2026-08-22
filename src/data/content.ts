export const brand = {
  logo: {
    src: "/images/logo-liliana-bastos.png",
    alt: "Liliana Bastos",
    width: 1536,
    height: 1024,
  },
} as const;
export const site = {
  name: "Liliana Bastos",
  fullName: "Liliana Bastos",
  role: "Psicóloga Clínica",
  crp: "CRP 04/36259",
  city: "Viçosa",
  state: "MG",
  address: {
    street: "R. Benjamim Araújo, 56, sala 311, Edifício Panorama - Centro",
    cityLine: "Viçosa - MG, 36576-000",
    mapsUrl: "https://www.google.com/maps?q=R.+Benjamim+Ara%C3%BAjo,+56,+Centro,+Vi%C3%A7osa+-+MG,+36576-000",
    embedQuery: "R. Benjamim Araújo, 56, Centro, Viçosa - MG",
  },
  phoneDisplay: "(31) 9 8718-9676",
  whatsappNumber: "5531987189676",
  whatsappMessage:
    "Olá, Liliana! Encontrei seu site e gostaria de saber mais sobre o acompanhamento psicológico.",
  instagramAccounts: [
    { handle: "@liliana.pbastos", url: "https://www.instagram.com/liliana.pbastos" },
  ],
  hours: "Atendimento mediante agendamento",
  hoursNote: "As consultas necessitam ser previamente agendadas.",
  modality: "Atendimento presencial em Viçosa (MG) e online",
  metaDescription:
    "Liliana Bastos é psicóloga clínica em Viçosa (MG), com abordagem em Terapia Cognitivo-Comportamental. Atende adolescentes e adultos, com foco em ansiedade, depressão, sexualidade e identidade de gênero, e transtorno bipolar. Atendimento presencial e online.",
} as const;
export function whatsappLink(customMessage?: string) {
  const message = encodeURIComponent(customMessage ?? site.whatsappMessage);
  return `https://wa.me/${site.whatsappNumber}?text=${message}`;
}
export const nav = [
  { label: "Início", href: "/#hero" },
  { label: "Como posso te ajudar", href: "/#especialidades" },
  { label: "Sobre mim", href: "/#sobre" },
  { label: "Depoimentos", href: "/#depoimentos" },
  { label: "Como funciona", href: "/#processo" },
  { label: "FAQ", href: "/#faq" },
  { label: "Blog", href: "/blog" },
] as const;
export const header = {
  ctaLabel: "Quero agendar uma sessão",
} as const;
export const hero = {
  eyebrow: site.role,
  greeting: "Olá, eu sou",
  name: "Liliana Bastos",
  pcdBadge: "Psicóloga PCD auditiva",
  headline: "Um espaço de escuta para compreender o que você sente e viver com mais leveza.",
  headlineHighlight: "compreender",
  subheadline: "Psicoterapia para adolescentes e adultos, presencial em Viçosa (MG) e online.",
  subtitle:
    "Atendo adolescentes e adultos em psicoterapia, com abordagem em Terapia Cognitivo-Comportamental (TCC), oferecendo um espaço de escuta ética, acolhedora e sem julgamentos.",
  mobileText:
    "Atendo adolescentes e adultos que desejam compreender melhor suas emoções e viver com mais equilíbrio, acolhendo questões como ansiedade, depressão, sexualidade, identidade de gênero e transtorno bipolar. Se você sente que é hora de cuidar de si, agende sua sessão.",
  checklist: [
    "Ansiedade, depressão, sexualidade e gênero",
    "Terapia Cognitivo-Comportamental (TCC)",
  ],
  ctaLabel: "Quero agendar uma sessão",
  ctaSecondaryLabel: "Conhecer meu trabalho",
  ctaSecondaryHref: "#sobre",
  image: {
    desktopSrc: "/images/desktop.png",
    mobileSrc: "/images/mobile.png",
    alt: "Liliana Bastos, psicóloga clínica",
  },
} as const;
export const heroStat = {
  value: "14+",
  label: "anos de formada",
} as const;
export const specialties = {
  eyebrow: "COMO POSSO TE AJUDAR",
  title: "Um cuidado pensado para o que você está vivendo.",
  subtitle:
    "Aqui você não recebe respostas prontas. Você tem uma psicóloga do seu lado, com escuta ética e um acompanhamento pensado pra sua própria história.",
  items: [
    {
      title: "Ansiedade",
      description:
        "Uma ansiedade que não passa, pensamentos acelerados, dificuldade pra relaxar? Trabalho para que você compreenda melhor seus pensamentos, emoções e comportamentos e desenvolva estratégias para lidar com as situações do dia a dia.",
    },
    {
      title: "Depressão",
      description:
        "Tristeza persistente, falta de energia, perda de interesse pelas coisas? Um espaço de escuta e acompanhamento para compreender o que você está vivendo e construir, gradualmente, recursos para lidar com esse momento.",
    },
    {
      title: "Sexualidade",
      description:
        "Um espaço seguro e sem julgamentos para você elaborar questões da sua sexualidade, no seu tempo e do seu jeito.",
    },
    {
      title: "Identidade de Gênero",
      description:
        "Acompanhamento acolhedor para quem está em processo de descoberta ou afirmação da própria identidade de gênero.",
    },
    {
      title: "Transtorno Bipolar",
      description:
        "Acompanhamento psicológico para pessoas que convivem com o transtorno bipolar, com foco no autoconhecimento, manejo emocional e construção de estratégias para o cotidiano.",
    },
    {
      title: "Terapia Cognitivo-Comportamental",
      description:
        "Minha abordagem é baseada em TCC: um método com embasamento científico, focado em mudanças práticas na sua vida.",
    },
  ],
} as const;
export const about = {
  eyebrow: "SOBRE A LILIANA",
  greeting: "Olá, sou",
  title: "Liliana Bastos",
  paragraphs: [
    "Sou psicóloga clínica, formada em Psicologia em 2011.",
    "Sou mestre em Políticas Públicas, com pós-graduações em Terapia Familiar, Dependência de Álcool e Drogas, Terapia Cognitivo-Comportamental e Avaliação Psicológica.",
    "Também sou uma psicóloga com deficiência auditiva, uma vivência que faz parte da minha trajetória e da forma como compreendo a importância da escuta, da acessibilidade e do acolhimento.",
  ],
  ctaText: "Se você sente que é hora de conversar sobre o que está vivendo, esse é um bom primeiro passo. Vamos conversar?",
  image: {
    src: "/images/liliana-sobre.png",
    alt: "Retrato de Liliana Bastos",
  },
} as const;
export const testimonials = {
  id: "depoimentos",
  eyebrow: "AVALIAÇÕES NO GOOGLE",
  title: "O que dizem",
  titleHighlight: "sobre o atendimento",
  subtitle: "Avaliações públicas deixadas por pacientes no perfil do Google da Liliana.",
  isPlaceholder: true,
  items: [
    {
      name: "Paciente em acompanhamento",
      time: "há 1 mês",
      text: "Cheguei sem saber muito bem o que esperar, só sabia que não aguentava mais carregar tudo sozinha. Desde a primeira sessão me senti ouvida de verdade, sem pressa e sem julgamento. Hoje enxergo minha própria história com outros olhos.",
    },
    {
      name: "Paciente em acompanhamento",
      time: "há 2 meses",
      text: "Levei anos pra conseguir falar abertamente sobre quem eu sou. Encontrar um espaço onde isso pôde ser dito sem medo mudou a forma como eu me relaciono comigo mesma. Sou muito grata por esse acompanhamento.",
    },
    {
      name: "Paciente em acompanhamento",
      time: "há 3 meses",
      text: "A ansiedade dominava praticamente todas as minhas decisões. Com a terapia cognitivo-comportamental, aprendi a identificar os pensamentos que me paralisavam e a construir, aos poucos, estratégias que realmente funcionam no meu dia a dia.",
    },
    {
      name: "Paciente em acompanhamento",
      time: "há 4 meses",
      text: "Morava longe e achei que não conseguiria manter uma terapia séria à distância. O atendimento online se mostrou tão cuidadoso quanto eu imaginava que só o presencial poderia ser — nunca senti que estava recebendo menos.",
    },
    {
      name: "Paciente em acompanhamento",
      time: "há 5 meses",
      text: "Passei um período em que sair da cama já era a tarefa mais difícil do dia. Aos poucos, com escuta e paciência, fui recuperando um pouco de mim. Não foi rápido, mas foi real.",
    },
    {
      name: "Paciente em acompanhamento",
      time: "há 6 meses",
      text: "O que mais me marcou não foi só a competência técnica, mas a humanidade no atendimento. Nunca me senti apenas mais um caso — me senti uma pessoa inteira, respeitada em cada detalhe da minha história.",
    },
  ],
} as const;
export const process = {
  eyebrow: "COMO FUNCIONA MEU TRABALHO",
  title: "Sua primeira sessão",
  paragraphs: [
    "A primeira sessão é um momento de acolhimento, escuta e avaliação da sua história, suas demandas e seus objetivos — permitindo a construção de um plano terapêutico individualizado, feito sob medida para você.",
    "O acompanhamento segue com sessões regulares, com escuta qualificada e direcionamento terapêutico de acordo com suas necessidades, dentro da abordagem cognitivo-comportamental.",
  ],
  progressBars: [
    { label: "Escuta acolhedora", value: 100 },
    { label: "Compromisso com o processo", value: 97 },
  ],
  ctaLabel: "Quero agendar uma sessão",
  image: {
    src: "/images/liliana-processo.png",
    alt: "Liliana Bastos durante uma sessão de atendimento",
  },
} as const;
export const reasons = {
  eyebrow: "COMO A TERAPIA PODE TE AJUDAR",
  title: "O que podemos trabalhar em terapia",
  subtitle:
    "A terapia proporciona equilíbrio emocional, autoconhecimento e mais segurança para tomar decisões — com um trabalho pautado na ética e no acolhimento.",
  items: [
    {
      number: "01",
      title: "Compreensão da ansiedade",
      description: "Entenda os gatilhos e sintomas da ansiedade e encontre formas mais leves de lidar com ela.",
    },
    {
      number: "02",
      title: "Autoconhecimento e regulação emocional",
      description: "Desenvolva mais clareza sobre si mesma e ferramentas para lidar com suas emoções.",
    },
    {
      number: "03",
      title: "Sexualidade e identidade",
      description: "Um espaço seguro para elaborar questões de sexualidade e identidade de gênero, sem julgamentos.",
    },
    {
      number: "04",
      title: "Estratégias para lidar com situações do cotidiano",
      description: "Construa recursos práticos para enfrentar os desafios da rotina com mais equilíbrio.",
    },
  ],
} as const;
export const faq = {
  eyebrow: "DÚVIDAS FREQUENTES",
  title: "Ainda tem dúvidas?",
  featured: {
    eyebrow: "DÚVIDAS FREQUENTES",
    title: "Talvez seja hora de buscar ajuda se você…",
    paragraphs: [],
    checklist: [
      "sente que a ansiedade está interferindo na sua rotina",
      "tem dificuldade para compreender ou lidar com suas emoções",
      "está passando por mudanças ou conflitos pessoais",
      "enfrenta dificuldades relacionadas à autoestima, identidade ou relacionamentos",
      "sente que precisa de um espaço para falar sem julgamentos",
    ],
    closingParagraphs: [
      "Você não precisa enfrentar tudo sozinho(a).",
      "Cuidar da saúde emocional também é uma forma de cuidar de si. Se você sente que é hora de começar, podemos conversar.",
    ],
    ctaLabel: "Quero agendar uma sessão",
  },
  items: [
    {
      question: "E se eu nunca fiz terapia?",
      answer:
        "Na primeira sessão, vamos conversar sobre o que trouxe você até aqui, sua história e aquilo que deseja transformar. Não é necessário saber exatamente o que dizer ou por onde começar. A terapia é construída ao longo do processo, respeitando seu tempo e suas necessidades.",
    },
    {
      question: "Como funciona a primeira sessão?",
      answer:
        "É um momento de acolhimento, escuta e avaliação da sua história, suas demandas e seus objetivos, permitindo a construção de um plano terapêutico individualizado.",
    },
    {
      question: "A Liliana atende convênio?",
      answer:
        "No momento, atendo pelo plano IMAS e também de forma particular. Para outros convênios, emito documentação para solicitação de reembolso quando o seu plano oferece esse benefício.",
    },
    {
      question: "Qual público a Liliana atende?",
      answer:
        "Atendo adolescentes e adultos, com foco em ansiedade, depressão, sexualidade e identidade de gênero, e transtorno bipolar.",
    },
    {
      question: "Como funciona a consulta online?",
      answer:
        "As consultas online seguem a mesma estrutura das presenciais, com a mesma duração e o mesmo cuidado na avaliação.",
    },
    {
      question: "Vocês fazem diagnóstico ou passam medicação?",
      answer:
        "Não. Psicólogos não prescrevem medicação — isso é atribuição exclusiva de médicos psiquiatras. O acompanhamento psicológico trabalha por meio de avaliação e escuta, com devolutivas claras sobre o que é observado ao longo do processo.",
    },
    {
      question: "Como sei se preciso de terapia?",
      answer:
        "Se você sente ansiedade, tristeza persistente, sobrecarga emocional, dificuldade nos relacionamentos ou a sensação de estar perdida na vida, esse já é um bom motivo para buscar apoio.",
    },
  ],
} as const;
export const footer = {
  about:
    "Um espaço seguro, ético e acolhedor para adolescentes e adultos desenvolverem recursos emocionais e construírem uma vida com mais equilíbrio e significado.",
  quickLinksTitle: "Links rápidos",
  hoursTitle: "Horário de atendimento",
  ctaLabel: "Quero agendar uma sessão",
  rightsText: `© ${new Date().getFullYear()} ${site.name} — ${site.role}. Todos os direitos reservados.`,
} as const;
