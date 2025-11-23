import { useState } from "react";

type Pergunta = {
  titulo: string;
  resposta: string;
};

const PERGUNTAS: Pergunta[] = [
  {
    titulo: "O que é o SkillMatch AI?",
    resposta:
      "O SkillMatch AI é uma plataforma de requalificação inteligente que usa dados e IA para sugerir trilhas de aprendizado alinhadas ao seu perfil, objetivo profissional e disponibilidade de estudo."
  },
  {
    titulo: "Como funciona o simulador de perfil?",
    resposta:
      "Você responde algumas perguntas sobre interesse, experiência e objetivo. A partir disso, o sistema gera um diagnóstico de compatibilidade com áreas em alta, como Dados, IA, Desenvolvimento, Cloud & DevOps e UX & Produto."
  },
  {
    titulo: "As trilhas são cursos reais?",
    resposta:
      "Na versão acadêmica da Global Solution, as trilhas funcionam como um modelo conceitual de jornadas de aprendizado. Em versões futuras, elas podem ser conectadas a cursos e conteúdos reais de parceiros."
  },
  {
    titulo: "Meus dados são salvos em algum lugar?",
    resposta:
      "Nesta entrega, os dados são armazenados apenas no navegador (localStorage) para simulação. A arquitetura proposta prevê, em versões futuras, integração com API Java e banco Oracle."
  },
  {
    titulo: "Qual é a relação com a Global Solution da FIAP?",
    resposta:
      "O SkillMatch AI é o projeto desenvolvido para a Global Solution 2025, integrando front-end em React + TypeScript + Tailwind, back-end em Java, banco Oracle e conceitos de IA voltados ao futuro do trabalho."
  },
];

export function FAQ() {
  const [aberta, setAberta] = useState<number | null>(0);

  function toggle(index: number) {
    setAberta((atual) => (atual === index ? null : index));
  }

  return (
    <section className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-white">
      <header className="mb-10 text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Perguntas frequentes
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          FAQ – <span className="text-[#3FA8FF]">SkillMatch AI</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Separamos algumas respostas rápidas sobre a plataforma, o simulador,
          as trilhas e a relação com a Global Solution.
        </p>
      </header>

      <div className="space-y-3">
        {PERGUNTAS.map((p, index) => {
          const ativa = aberta === index;
          return (
            <div
              key={p.titulo}
              className="bg-[#020617]/70 border border-white/10 rounded-2xl overflow-hidden shadow-md"
            >
              <button
                type="button"
                onClick={() => toggle(index)}
                className="w-full flex items-center justify-between gap-3 px-4 sm:px-5 py-3 sm:py-4 text-left"
              >
                <span className="text-sm sm:text-base font-medium text-slate-100">
                  {p.titulo}
                </span>
                <span className="text-[#3FA8FF] text-xl sm:text-2xl leading-none">
                  {ativa ? "−" : "+"}
                </span>
              </button>

              {ativa && (
                <div className="px-4 sm:px-5 pb-4">
                  <p className="text-xs sm:text-sm text-slate-300">
                    {p.resposta}
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>

      <div className="mt-10 bg-[#020617]/60 border border-[#3FA8FF]/30 rounded-2xl p-5 sm:p-6 text-xs sm:text-sm text-slate-300">
        <h2 className="text-sm sm:text-base font-semibold mb-2 text-[#3FA8FF]">
          Não encontrou sua dúvida?
        </h2>
        <p>
          Como este projeto faz parte da Global Solution, novas perguntas podem
          ser incluídas de acordo com o feedback de professores, avaliadores e
          usuários teste. Você pode complementar esta seção com dúvidas sobre
          uso da API, integrações futuras e métricas de impacto.
        </p>
      </div>
    </section>
  );
}
