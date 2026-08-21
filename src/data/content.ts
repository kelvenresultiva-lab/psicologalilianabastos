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
  crp: "CRP a confirmar",
  city: "Viçosa",
  state: "MG",
  address: {
    street: "R. Padre Serafim, 138 - Centro",
    cityLine: "Viçosa - MG, 36570-000",
    mapsUrl: "https://www.google.com/maps?q=R.+Padre+Serafim,+138,+Centro,+Vi%C3%A7osa+-+MG",
    embedQuery: "R. Padre Serafim, 138, Centro, Viçosa - MG",
  },
  phoneDisplay: "(31) 9 8718-9676",
  whatsappNumber: "5531987189676",
  whatsappMessage:
    "Olá, Liliana! Encontrei seu site e gostaria de saber mais sobre o acompanhamento psicológico.",
  instagramAccounts: [
    { handle: "@liliana.pbastos", url: "https://www.instagram.com/liliana.pbastos" },
  ],
  hours: "Horário de atendimento a confirmar",
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
  ctaLabel: "Agendar consulta",
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
    "Psicoterapia para adolescentes e adultos em um espaço de escuta ética e acolhedora, com abordagem em Terapia Cognitivo-Comportamental. Trabalho com ansiedade, depressão, sexualidade e identidade de gênero, e transtorno bipolar — presencial em Viçosa (MG) ou online.",
  mobileText:
    "Atendo adolescentes e adultos que desejam compreender melhor suas emoções e viver com mais equilíbrio, acolhendo questões como ansiedade, depressão, sexualidade, identidade de gênero e transtorno bipolar. Se você sente que é hora de cuidar de si, agende sua sessão.",
  checklist: [
    "Ansiedade, depressão, sexualidade e gênero",
    "Terapia Cognitivo-Comportamental (TCC)",
  ],
  ctaLabel: "Agendar sua consulta",
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
  title: "Um cuidado pensado pra o que você está vivendo",
  subtitle:
    "Aqui você não recebe respostas prontas. Você tem uma psicóloga do seu lado, com escuta ética e um acompanhamento pensado pra sua própria história.",
  items: [
    {
      title: "Ansiedade",
      description:
        "Uma ansiedade que não passa, pensamentos acelerados, dificuldade pra relaxar? Trabalho para que você entenda o que sente e encontre mais equilíbrio no dia a dia.",
    },
    {
      title: "Depressão",
      description:
        "Tristeza persistente, falta de energia, perda de interesse pelas coisas? Ofereço um espaço de escuta para você atravessar esse momento com mais leveza.",
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
        "Acompanhamento psicológico contínuo para quem convive com transtorno bipolar, com escuta qualificada e cuidado de longo prazo.",
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
    "Sou psicóloga clínica, formada em Psicologia desde janeiro de 2012. Sou mestre em Políticas Públicas, com pós-graduações em Terapia Familiar, Dependência de Álcool e Drogas, Terapia Cognitivo-Comportamental e Avaliação Psicológica — uma formação construída ao longo de mais de 14 anos de trajetória clínica.",
    "Atendo adolescentes e adultos com abordagem em Terapia Cognitivo-Comportamental (TCC), cuidando de quem enfrenta ansiedade, depressão, questões de sexualidade e identidade de gênero, ou convive com transtorno bipolar — sempre com um espaço de escuta ética, acolhedora e sem julgamentos.",
    "Sou uma psicóloga PCD auditiva, e essa vivência faz parte de como me relaciono com o cuidado e a escuta na clínica.",
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
  ctaLabel: "Agende sua consulta",
  image: {
    src: "/images/liliana-processo.png",
    alt: "Liliana Bastos durante uma sessão de atendimento",
  },
} as const;
export const reasons = {
  eyebrow: "COMO A TERAPIA PODE TE AJUDAR",
  title: "O que muda no seu dia a dia",
  subtitle:
    "A terapia proporciona equilíbrio emocional, autoconhecimento e mais segurança para tomar decisões — com um trabalho pautado na ética e no acolhimento.",
  items: [
    {
      number: "01",
      title: "Redução da ansiedade",
      description:
        "Desenvolva estratégias reais para lidar com a ansiedade do dia a dia, com mais equilíbrio emocional.",
    },
    {
      number: "02",
      title: "Acolhimento para viver sua identidade",
      description:
        "Um espaço seguro para elaborar questões de sexualidade e identidade de gênero, sem julgamentos.",
    },
    {
      number: "03",
      title: "Mais estabilidade emocional",
      description:
        "Construa recursos para lidar com oscilações de humor e fortalecer sua rotina de cuidado.",
    },
    {
      number: "04",
      title: "Autoconhecimento",
      description:
        "Ganhe clareza sobre seus sentimentos e mais confiança para tomar decisões importantes na sua vida.",
    },
  ],
} as const;
export const faq = {
  eyebrow: "DÚVIDAS FREQUENTES",
  title: "Ainda tem dúvidas?",
  featured: {
    eyebrow: "DÚVIDAS FREQUENTES",
    title: "Por que buscar acompanhamento psicológico?",
    paragraphs: [
      "Muita gente adia a terapia por medo de ser julgada, por não saber como funciona o processo, ou por acreditar que precisa resolver tudo sozinha. Mas buscar ajuda é o primeiro passo para o equilíbrio emocional que você merece.",
      "Esse processo acontece a partir da relação de confiança entre psicóloga e paciente — por isso, é importante encontrar uma profissional qualificada, ética e responsável, com quem você se sinta à vontade.",
    ],
    ctaLabel: "Quero iniciar meu processo terapêutico",
  },
  items: [
    {
      question: "Como funciona a primeira sessão?",
      answer:
        "É um momento de acolhimento, escuta e avaliação da sua história, suas demandas e seus objetivos, permitindo a construção de um plano terapêutico individualizado.",
    },
    {
      question: "A Liliana atende convênio?",
      answer:
        "O atendimento é particular. Emito documentação para solicitação de reembolso quando o seu convênio oferece esse benefício.",
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
  ctaLabel: "Agende sua consulta",
  rightsText: `© ${new Date().getFullYear()} ${site.name} — ${site.role}. Todos os direitos reservados.`,
} as const;
