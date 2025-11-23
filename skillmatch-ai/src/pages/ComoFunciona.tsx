export function ComoFunciona() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20 text-white">
      <header className="mb-10">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Como funciona
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Como o <span className="text-[#3FA8FF]">SkillMatch AI</span> apoia a
          sua jornada de requalificação.
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-3xl">
          Em poucos passos você consegue entender onde está hoje, quais áreas
          fazem mais sentido para o seu perfil e por onde começar a estudar,
          conectando tecnologia, IA e empregabilidade.
        </p>
      </header>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl">
          <p className="text-xs text-slate-400 mb-1">Passo 1</p>
          <h2 className="text-lg font-semibold mb-2">
            Você responde ao simulador de perfil
          </h2>
          <p className="text-sm text-slate-300">
            Informe sua área de interesse, experiência, objetivo profissional e
            disponibilidade de estudo. Esses dados alimentam o motor de
            recomendação do SkillMatch AI.
          </p>
        </div>

        <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl">
          <p className="text-xs text-slate-400 mb-1">Passo 2</p>
          <h2 className="text-lg font-semibold mb-2">
            A IA calcula sua compatibilidade com áreas em alta
          </h2>
          <p className="text-sm text-slate-300">
            O sistema gera um diagnóstico com seu nível de aderência a áreas
            como Dados, IA, Desenvolvimento, Cloud & DevOps e UX & Produto,
            destacando as que mais combinam com você.
          </p>
        </div>

        <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl">
          <p className="text-xs text-slate-400 mb-1">Passo 3</p>
          <h2 className="text-lg font-semibold mb-2">
            O dashboard recomenda trilhas personalizadas
          </h2>
          <p className="text-sm text-slate-300">
            A partir da área mais compatível, o dashboard sugere trilhas
            priorizando as competências que vão aumentar mais rápido sua
            empregabilidade no cenário de futuro do trabalho.
          </p>
        </div>

        <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl">
          <p className="text-xs text-slate-400 mb-1">Passo 4</p>
          <h2 className="text-lg font-semibold mb-2">
            Você acompanha sua evolução ao longo do tempo
          </h2>
          <p className="text-sm text-slate-300">
            À medida que avança nas trilhas, o sistema pode atualizar seus
            indicadores e sugerir novos passos. Em versões futuras, isso será
            integrado à API Java e ao banco Oracle.
          </p>
        </div>
      </div>

      <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-8 items-start">
        <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 md:p-6 shadow-xl">
          <h2 className="text-lg font-semibold mb-3">
            Visão do fluxo dentro da Global Solution
          </h2>
          <p className="text-sm text-slate-300 mb-3">
            O SkillMatch AI integra front-end em React + TypeScript + Tailwind,
            back-end em Java, banco de dados Oracle e módulos de IA para
            gerar recomendações de requalificação alinhadas às demandas do
            mercado.
          </p>
          <p className="text-sm text-slate-300 mb-3">
            Esse fluxo serve como base para os diagramas de casos de uso,
            atividades e arquitetura, alinhando experiência do usuário com
            requisitos de negócio e objetivos de empregabilidade.
          </p>
          <p className="text-xs text-slate-400">
            Assim, a jornada do usuário que você vê no front-end está diretamente
            conectada aos indicadores da Global Solution, às ODS 4 e 8 e à
            visão de futuro do trabalho.
          </p>
        </div>

        <div className="bg-[#020617]/60 border border-[#3FA8FF]/40 rounded-2xl p-5 shadow-xl text-sm">
          <h2 className="text-base font-semibold mb-2 text-[#3FA8FF]">
            O que acontece nos bastidores?
          </h2>
          <ul className="space-y-2 text-slate-200 text-xs">
            <li>
              • Dados do simulador podem ser enviados para uma API Java (Quarkus)
              e armazenados em Oracle.
            </li>
            <li>
              • Trilhas são mapeadas como entidades e expostas via endpoints
              REST para o front consumir.
            </li>
            <li>
              • O front traduz essas informações em telas claras, com foco em
              tomada de decisão e empregabilidade.
            </li>
          </ul>
          <p className="text-[11px] text-slate-400 mt-3">
            Essa explicação pode ser usada diretamente na apresentação da Global
            Solution para mostrar a visão ponta a ponta da solução.
          </p>
        </div>
      </div>
    </section>
  );
}
