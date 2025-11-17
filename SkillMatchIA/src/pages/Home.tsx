export function Home() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 grid md:grid-cols-2 gap-12 items-start">
      <div>
        <h1 className="text-3xl md:text-4xl font-bold text-[#0A2A66] mb-4">
          Requalificação inteligente para o{" "}
          <span className="text-[#1D5BFF]">futuro do trabalho</span>.
        </h1>
        <p className="text-sm md:text-base text-[#4A5563] mb-6">
          O SkillMatch AI usa inteligência artificial para mapear suas
          competências, identificar lacunas de habilidades e recomendar trilhas
          personalizadas de aprendizado e oportunidades de carreira.
        </p>

        <div className="flex flex-wrap gap-3">
          <button className="px-5 py-2 rounded-lg bg-[#1D5BFF] text-white text-sm font-medium shadow-md hover:bg-[#0A2A66] transition-colors">
            Começar agora
          </button>
          <button className="px-5 py-2 rounded-lg border border-[#1D5BFF] text-[#1D5BFF] text-sm font-medium hover:bg-[#E3EDFF] transition-colors">
            Ver como funciona
          </button>
        </div>

        <div className="mt-6 text-xs text-[#6B7280] space-y-1">
          <p>• Alinhado ao ODS 4 – Educação de Qualidade</p>
          <p>• Alinhado ao ODS 8 – Trabalho Decente e Crescimento Econômico</p>
        </div>
      </div>

      <div className="bg-white rounded-2xl shadow-md p-6 border border-gray-200 w-full max-w-[480px]">
        <h2 className="text-sm font-semibold text-[#0A2A66] mb-4">
          Visão geral do seu perfil
        </h2>

        <div className="space-y-4 text-xs">
          <div className="flex justify-between items-center">
            <span>Compatibilidade com área de Dados</span>
            <span className="font-semibold text-[#1D5BFF]">82%</span>
          </div>
          <div className="w-full bg-[#E1E5EE] rounded-full h-2 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#1D5BFF] to-[#3FA8FF] w-4/5" />
          </div>

          <div className="flex justify-between items-center">
            <span>Compatibilidade com área de IA</span>
            <span className="font-semibold text-[#1D5BFF]">74%</span>
          </div>
          <div className="w-full bg-[#E1E5EE] rounded-full h-2 overflow-hidden">
            <div className="h-2 bg-gradient-to-r from-[#1D5BFF] to-[#39D2FF] w-3/4" />
          </div>

          <div className="mt-4 p-3 rounded-xl bg-[#E3EDFF] text-[#0A2A66]">
            <p className="font-semibold text-xs mb-1">
              Próximo passo sugerido:
            </p>
            <p>
              Iniciar trilha de{" "}
              <span className="font-semibold">Introdução à Análise de Dados</span>{" "}
              e complementar com{" "}
              <span className="font-semibold">
                Fundamentos de Machine Learning
              </span>
              .
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
