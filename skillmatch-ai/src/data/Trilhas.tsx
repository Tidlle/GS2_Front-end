export type TrilhaInfo = {
  id: string;
  titulo: string;
  area: "dados" | "ia" | "dev" | "cloud" | "ux";
  nivel: "iniciante" | "intermediario" | "avancado";
  duracaoHoras: number;
  focoPrincipal: string;
  descricao: string;
  objetivos: string[];
  competencias: string[];
  odsRelacionados: string[];
};

export const trilhas: TrilhaInfo[] = [
  {
    id: "fundamentos-analise-dados",
    titulo: "Fundamentos de Análise de Dados",
    area: "dados",
    nivel: "iniciante",
    duracaoHoras: 40,
    focoPrincipal: "Desenvolver base sólida em análise e manipulação de dados.",
    descricao:
      "Trilha voltada para quem está começando em Dados e quer entender a base de estatística, modelagem e ferramentas essenciais.",
    objetivos: [
      "Compreender os conceitos fundamentais de análise de dados.",
      "Aprender a manipular e limpar dados com ferramentas modernas.",
      "Introduzir visualização de dados e construção de dashboards simples."
    ],
    competencias: [
      "Lógica de programação aplicada a dados",
      "Noções de estatística descritiva",
      "Manipulação de dados (planilhas / SQL / Python)",
      "Visualização básica de dados"
    ],
    odsRelacionados: ["ODS 4 – Educação de Qualidade", "ODS 8 – Trabalho Decente"]
  },
  {
    id: "introducao-bi",
    titulo: "Introdução a Business Intelligence",
    area: "dados",
    nivel: "intermediario",
    duracaoHoras: 50,
    focoPrincipal: "Transformar dados em painéis e insights de negócio.",
    descricao:
      "Trilha focada em criação de dashboards, modelagem dimensional e boas práticas de BI para suporte à tomada de decisão.",
    objetivos: [
      "Entender conceitos de data warehouse e modelagem dimensional.",
      "Criar dashboards com ferramentas de BI.",
      "Aprender a comunicar insights de negócio com dados."
    ],
    competencias: [
      "Modelagem dimensional",
      "Construção de dashboards",
      "Boas práticas de visualização",
      "Trabalho com stakeholders de negócio"
    ],
    odsRelacionados: ["ODS 8 – Trabalho Decente e Crescimento Econômico"]
  },
  {
    id: "fundamentos-ml",
    titulo: "Fundamentos de Machine Learning",
    area: "ia",
    nivel: "intermediario",
    duracaoHoras: 60,
    focoPrincipal: "Introduzir conceitos e práticas essenciais de Machine Learning.",
    descricao:
      "Trilha para quem já tem base em programação/dados e quer dar o próximo passo em modelos de Machine Learning.",
    objetivos: [
      "Compreender tipos de modelos (supervisionados, não supervisionados).",
      "Treinar e avaliar modelos simples.",
      "Entender boas práticas de preparação de dados."
    ],
    competencias: [
      "Pré-processamento de dados",
      "Treino e avaliação de modelos",
      "Métricas de performance",
      "Uso de bibliotecas de ML"
    ],
    odsRelacionados: ["ODS 4 – Educação de Qualidade", "ODS 9 – Inovação e Infraestrutura"]
  },
  {
    id: "dev-web-fullstack-essencial",
    titulo: "Desenvolvimento Web Full-Stack Essencial",
    area: "dev",
    nivel: "iniciante",
    duracaoHoras: 70,
    focoPrincipal: "Formar base em desenvolvimento web do zero.",
    descricao:
      "Trilha que conecta front-end, back-end e banco de dados, ideal para quem quer entrar em desenvolvimento de software.",
    objetivos: [
      "Entender como funciona uma aplicação web de ponta a ponta.",
      "Construir interfaces com HTML, CSS e React.",
      "Consumir APIs e persistir dados em banco."
    ],
    competencias: [
      "HTML, CSS, JavaScript/TypeScript",
      "React básico",
      "Consumo de APIs REST",
      "Conceitos de banco de dados"
    ],
    odsRelacionados: ["ODS 4 – Educação de Qualidade"]
  },
  {
    id: "cloud-devops-fundamentos",
    titulo: "Cloud & DevOps – Fundamentos",
    area: "cloud",
    nivel: "intermediario",
    duracaoHoras: 45,
    focoPrincipal: "Introduzir conceitos de cloud, automação e cultura DevOps.",
    descricao:
      "Trilha voltada para quem deseja entender como aplicações são implantadas, monitoradas e escaladas em ambiente de nuvem.",
    objetivos: [
      "Aprender conceitos básicos de cloud (IaaS, PaaS, SaaS).",
      "Entender pipelines de CI/CD.",
      "Introduzir monitoramento e observabilidade."
    ],
    competencias: [
      "Conceitos de cloud",
      "Noções de containers",
      "CI/CD básico",
      "Monitoramento simples"
    ],
    odsRelacionados: ["ODS 9 – Indústria, Inovação e Infraestrutura"]
  },
  {
    id: "ux-produto-experiencia-usuario",
    titulo: "UX & Produto – Experiência do Usuário na Prática",
    area: "ux",
    nivel: "iniciante",
    duracaoHoras: 35,
    focoPrincipal:
      "Aprender a desenhar experiências digitais centradas no usuário.",
    descricao:
      "Trilha voltada para quem quer entender o papel de UX e Produto na construção de soluções digitais relevantes.",
    objetivos: [
      "Conhecer fundamentos de usabilidade.",
      "Aprender técnicas básicas de pesquisa com usuários.",
      "Entender o papel do protótipo na validação de ideias."
    ],
    competencias: [
      "Princípios de UX",
      "Pesquisa com usuários",
      "Criação de protótipos de baixa/média fidelidade",
      "Trabalho com times de produto e tecnologia"
    ],
    odsRelacionados: ["ODS 4 – Educação de Qualidade", "ODS 10 – Redução das Desigualdades"]
  }
];

export function getTrilhaById(id: string): TrilhaInfo | undefined {
  return trilhas.find((t) => t.id === id);
}
