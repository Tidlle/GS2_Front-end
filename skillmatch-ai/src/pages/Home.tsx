import { useNavigate } from "react-router-dom";

export function Home() {
  const navigate = useNavigate();

  function handleComecar() {
    navigate("/simulador");
  }

  function handleComoFunciona() {
    navigate("/como-funciona");
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 lg:py-24">
      <div className="grid gap-10 lg:gap-16 items-center lg:grid-cols-[1.2fr,1fr]">
        <div className="text-center lg:text-left">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-700 dark:text-slate-400 mb-3 sm:mb-4">
            O que fazemos
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold leading-tight sm:leading-tight mb-4 sm:mb-5 text-slate-900 dark:text-white">
            Requalificação inteligente para o{" "}
            <span className="text-[#3FA8FF]">futuro do trabalho.</span>
          </h1>

          <p className="text-xs sm:text-sm md:text-base text-slate-700 dark:text-slate-300 mb-6 sm:mb-8 max-w-xl mx-auto lg:mx-0">
            O SkillMatch AI usa inteligência artificial para mapear competências,
            identificar lacunas e recomendar trilhas personalizadas de
            aprendizado e oportunidades, conectando você às profissões do
            amanhã.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-3 sm:gap-4 mb-6 sm:mb-8">
            <button
              onClick={handleComecar}
              className="w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 bg-[#3FA8FF] text-[#020617] text-sm sm:text-[15px] font-semibold rounded-full shadow-lg hover:bg-[#6dc2ff] transition-all"
            >
              Começar agora
            </button>

            <button
              type="button"
              onClick={handleComoFunciona}
              className="w-full sm:w-auto px-6 sm:px-7 py-2.5 sm:py-3 border border-slate-300 dark:border-slate-500 text-sm sm:text-[15px] font-semibold rounded-full text-slate-800 dark:text-slate-200 hover:text-[#3FA8FF] hover:border-[#3FA8FF] transition-all"
            >
              Ver como funciona
            </button>
          </div>

          <ul className="text-[11px] sm:text-xs md:text-sm text-slate-600 dark:text-slate-400 space-y-1 max-w-md mx-auto lg:mx-0">
            <li>• Alinhado ao ODS 4 – Educação de Qualidade</li>
            <li>• Alinhado ao ODS 8 – Trabalho Decente e Crescimento Econômico</li>
          </ul>
        </div>

        <div className="hidden md:flex relative h-64 lg:h-72 items-center justify-center">
          <div className="absolute inset-0 blur-3xl bg-[#1D5BFF]/20 dark:bg-[#1D5BFF]/25" />

          <div className="relative w-full max-w-xs lg:max-w-sm">
            <div className="h-16 rounded-2xl bg-gradient-to-br from-[#3FA8FF] to-[#1D5BFF] shadow-2xl transform -skew-x-12 translate-x-6" />
            <div className="h-16 rounded-2xl bg-gradient-to-br from-[#1D5BFF] to-[#0A2A66] shadow-2xl transform -skew-x-12 -translate-y-6" />
            <div className="h-16 rounded-2xl bg-gradient-to-br from-[#0A2A66] to-[#020617] shadow-2xl transform -skew-x-12 -translate-y-12" />
          </div>
        </div>
      </div>
    </section>
  );
}
