export function Sobre() {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-white">
      <header className="mb-10">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Sobre a solução
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          O que é o <span className="text-[#3FA8FF]">SkillMatch AI</span>?
        </h1>
        <p className="text-sm sm:text-base text-slate-300 max-w-3xl">
          O SkillMatch AI é uma plataforma de requalificação inteligente que
          ajuda pessoas a se conectarem com as profissões do futuro. A solução
          utiliza dados, inteligência artificial e trilhas de aprendizado
          estruturadas para apoiar a transição de carreira em um cenário de
          automação e transformação digital.
        </p>
      </header>

      <div className="grid gap-8 lg:grid-cols-[1.1fr,0.9fr] items-start mb-10">
        <div className="space-y-6">
          <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Problema que queremos resolver
            </h2>
            <p className="text-sm sm:text-base text-slate-300">
              Milhões de profissionais já sentem os impactos da automação, da
              inteligência artificial e de novas formas de trabalho. Ao mesmo
              tempo, surgem vagas em tecnologia, dados, produto e experiência do
              usuário que exigem competências específicas – e nem sempre é claro
              por onde começar essa transição.
            </p>
          </div>

          <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 sm:p-6 shadow-xl">
            <h2 className="text-lg sm:text-xl font-semibold mb-2">
              Nossa proposta de valor
            </h2>
            <p className="text-sm sm:text-base text-slate-300 mb-3">
              O SkillMatch AI funciona como um “GPS de carreira”: a pessoa
              responde a um simulador, recebe um diagnóstico de compatibilidade
              com áreas em alta e, a partir disso, visualiza trilhas de
              aprendizado alinhadas ao seu objetivo, ritmo de estudo e
              contexto.
            </p>
            <p className="text-sm sm:text-base text-slate-300">
              Em vez de recomendar cursos soltos, a plataforma organiza o
              caminho em etapas, fornece visão de progresso e apoia decisões de
              médio e longo prazo na jornada profissional.
            </p>
          </div>
        </div>

        <aside className="space-y-4">
          <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-4 sm:p-5 shadow-xl text-sm">
            <h3 className="text-base font-semibold mb-2 text-[#3FA8FF]">
              Tecnologias envolvidas
            </h3>
            <ul className="space-y-1 text-slate-200 text-xs sm:text-sm">
              <li>• Front-end em React + TypeScript + Vite + TailwindCSS</li>
              <li>• Back-end em Java (Quarkus) expondo APIs REST</li>
              <li>• Banco de dados Oracle para persistência de dados</li>
              <li>• Módulo de recomendação com lógica de IA / regras de negócio</li>
            </ul>
          </div>

          <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-4 sm:p-5 shadow-xl text-sm">
            <h3 className="text-base font-semibold mb-2 text-[#3FA8FF]">
              Alinhamento com ODS
            </h3>
            <p className="text-slate-200 text-xs sm:text-sm mb-2">
              A solução foi pensada para contribuir diretamente com:
            </p>
            <ul className="space-y-1 text-slate-200 text-xs sm:text-sm">
              <li>• ODS 4 – Educação de Qualidade</li>
              <li>• ODS 8 – Trabalho Decente e Crescimento Econômico</li>
            </ul>
            <p className="text-[11px] text-slate-400 mt-3">
              Ao apoiar a requalificação em larga escala, o SkillMatch AI busca
              reduzir o descompasso entre vagas abertas em tecnologia e pessoas
              em busca de recolocação no mercado.
            </p>
          </div>

          <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-4 sm:p-5 shadow-xl text-sm">
            <h3 className="text-base font-semibold mb-2 text-[#3FA8FF]">
              Quem pode se beneficiar?
            </h3>
            <ul className="space-y-1 text-slate-200 text-xs sm:text-sm">
              <li>• Pessoas em transição de carreira para tecnologia</li>
              <li>• Jovens em busca do primeiro emprego em áreas digitais</li>
              <li>• Profissionais que querem se atualizar em IA, dados e produto</li>
              <li>• Empresas interessadas em mapear potencial interno</li>
            </ul>
          </div>
        </aside>
      </div>

      <div className="bg-[#020617]/60 border border-[#3FA8FF]/40 rounded-2xl p-5 sm:p-6 shadow-xl text-sm">
        <h2 className="text-base sm:text-lg font-semibold mb-2 text-[#3FA8FF]">
          Próximos passos da solução
        </h2>
        <p className="text-slate-200 text-xs sm:text-sm mb-2">
          A versão apresentada na Global Solution representa um MVP funcional,
          com simulação de diagnóstico, dashboard, catálogo de trilhas e
          experiência de navegação. Os próximos passos incluem:
        </p>
        <ul className="space-y-1 text-slate-200 text-xs sm:text-sm mb-3">
          <li>• Integração completa com API Java e banco Oracle;</li>
          <li>• Registro real de progresso nas trilhas;</li>
          <li>• Evolução do motor de recomendação com dados históricos;</li>
          <li>• Abertura de um painel para empresas e instituições de ensino.</li>
        </ul>
        <p className="text-[11px] text-slate-400">
          Isso transforma o SkillMatch AI em uma plataforma escalável de
          requalificação, alinhando tecnologia, impacto social e visão de
          futuro do trabalho.
        </p>
      </div>
    </section>
  );
}
