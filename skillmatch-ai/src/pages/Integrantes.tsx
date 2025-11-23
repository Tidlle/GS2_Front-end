export function Integrantes() {
  const membros = [
    {
      nome: "Eduardo Martins",
      rm: "RM 562259",
      funcao: "Front-end | UX & Produto",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      foto: "/src/assets/integrantes/eduardo.png",
    },
    {
      nome: "Thiago Sposito",
      rm: "RM 561694",
      funcao: "Back-end | API Java",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      foto: "/src/assets/integrantes/thiago.png",
    },
    {
      nome: "Vitor Madrigrano",
      rm: "RM 564191",
      funcao: "Banco de Dados | Oracle SQL",
      linkedin: "https://www.linkedin.com/",
      github: "https://github.com/",
      foto: "/src/assets/integrantes/vitor.png",
    },
  ];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-white">
      <header className="mb-10 text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Equipe
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Integrantes do <span className="text-[#3FA8FF]">SkillMatch AI</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-2xl mx-auto">
          Conheça os responsáveis pelo desenvolvimento da solução apresentada na
          Global Solution, integrando front-end, back-end e banco de dados.
        </p>
      </header>

      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
        {membros.map((m) => (
          <div
            key={m.rm}
            className="bg-[#020617]/70 border border-white/10 rounded-2xl p-6 shadow-xl text-center hover:border-[#3FA8FF] transition-all"
          >
            <div className="flex justify-center mb-4">
              <div className="w-28 h-28 rounded-full overflow-hidden border border-slate-700 shadow-lg">
                <img
                  src={m.foto}
                  alt={m.nome}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            <h2 className="text-lg font-semibold text-white mb-1">
              {m.nome}
            </h2>

            <p className="text-xs text-slate-400 mb-2">{m.rm}</p>

            <p className="text-sm text-slate-300 mb-4">{m.funcao}</p>

            <div className="flex items-center justify-center gap-4 mt-3">
              <a
                href={m.linkedin}
                target="_blank"
                className="text-[#3FA8FF] text-sm hover:text-white transition-colors"
              >
                LinkedIn
              </a>

              <span className="text-slate-700">•</span>

              <a
                href={m.github}
                target="_blank"
                className="text-[#3FA8FF] text-sm hover:text-white transition-colors"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-14 text-center">
        <p className="text-xs sm:text-sm text-slate-400">
          Este projeto foi desenvolvido para a Global Solution — FIAP 2025,
          integrando conceitos de React, API Java, Oracle, UX e Inteligência
          Artificial.
        </p>
      </div>
    </section>
  );
}
