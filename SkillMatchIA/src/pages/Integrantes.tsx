export function Integrantes() {
  const integrantes = [
    {
      nome: "Eduardo Martins",
      rm: "562259",
      turma: "1TDSA",
      github: "https://github.com/...",
      linkedin: "https://www.linkedin.com/in/...",
    },
    {
      nome: "Vitor Madrigrano",
      rm: "564191",
      turma: "1TDSA",
      github: "https://github.com/...",
      linkedin: "https://www.linkedin.com/in/...",
    },
    {
      nome: "Thiago Sposito",
      rm: "561694",
      turma: "1TDSA",
      github: "https://github.com/...",
      linkedin: "https://www.linkedin.com/in/...",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-[#0A2A66] mb-6">
        Integrantes do Projeto
      </h1>

      <div className="grid md:grid-cols-2 gap-6">
        {integrantes.map((pessoa) => (
          <div
            key={pessoa.rm}
            className="bg-white rounded-2xl shadow-sm border border-[#E1E5EE] p-4"
          >
            <h2 className="text-sm font-semibold text-[#0A2A66]">
              {pessoa.nome}
            </h2>
            <p className="text-xs text-[#4A5563]">RM: {pessoa.rm}</p>
            <p className="text-xs text-[#4A5563] mb-2">
              Turma: {pessoa.turma}
            </p>

            <div className="flex gap-3 text-xs">
              <a
                href={pessoa.github}
                target="_blank"
                rel="noreferrer"
                className="text-[#1D5BFF] hover:underline"
              >
                GitHub
              </a>
              <a
                href={pessoa.linkedin}
                target="_blank"
                rel="noreferrer"
                className="text-[#1D5BFF] hover:underline"
              >
                LinkedIn
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
