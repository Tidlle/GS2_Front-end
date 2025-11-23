import { useParams, Link, useNavigate } from "react-router-dom";
import { getTrilhaById, TrilhaInfo } from "../data/Trilhas";

export function TrilhaDetalhe() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const trilha: TrilhaInfo | undefined = id ? getTrilhaById(id) : undefined;

  if (!trilha) {
    return (
      <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20 text-white">
        <h1 className="text-2xl md:text-3xl font-bold mb-3">
          Trilha não encontrada
        </h1>
        <p className="text-sm text-slate-300 mb-4">
          A trilha que você tentou acessar não foi localizada. Ela pode ter sido
          removida ou o link está incorreto.
        </p>
        <button
          type="button"
          onClick={() => navigate("/trilhas")}
          className="px-4 py-2 rounded-full bg-[#3FA8FF] text-[#020617] text-sm font-semibold hover:bg-[#6dc2ff] transition-colors"
        >
          Voltar para catálogo de trilhas
        </button>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20 text-white">
      <div className="mb-6 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
        <div>
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
            Trilha de aprendizado
          </p>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-1">
            {trilha.titulo}
          </h1>
          <p className="text-xs md:text-sm text-slate-400">
            {trilha.duracaoHoras} horas estimadas • Área:{" "}
            <span className="text-[#3FA8FF]">{trilha.area.toUpperCase()}</span>
          </p>
        </div>

        <Link
          to="/trilhas"
          className="self-start md:self-center text-xs md:text-sm text-slate-300 hover:text-[#3FA8FF] border border-slate-600 hover:border-[#3FA8FF] rounded-full px-4 py-1.5 transition-colors"
        >
          Voltar para trilhas
        </Link>
      </div>

      <div className="grid lg:grid-cols-[1.3fr,0.7fr] gap-8 items-start">
        <div className="space-y-6">
          <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl">
            <h2 className="text-lg font-semibold mb-2">Sobre esta trilha</h2>
            <p className="text-sm text-slate-300 mb-3">{trilha.descricao}</p>
            <p className="text-xs text-slate-400">
              <span className="font-semibold text-[#3FA8FF]">
                Foco principal:
              </span>{" "}
              {trilha.focoPrincipal}
            </p>
          </div>

          <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl">
            <h2 className="text-lg font-semibold mb-3">Objetivos da trilha</h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
              {trilha.objetivos.map((obj) => (
                <li key={obj}>{obj}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl">
            <h2 className="text-lg font-semibold mb-3">
              Competências desenvolvidas
            </h2>
            <ul className="list-disc list-inside space-y-2 text-sm text-slate-300">
              {trilha.competencias.map((comp) => (
                <li key={comp}>{comp}</li>
              ))}
            </ul>
          </div>
        </div>

        <aside className="space-y-5">
          <div className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl text-sm">
            <h2 className="text-base font-semibold mb-2">
              Informações resumidas
            </h2>
            <p className="text-slate-300 mb-1">
              <span className="text-slate-400">Nível: </span>
              <span className="text-[#3FA8FF] font-semibold">
                {trilha.nivel === "iniciante"
                  ? "Iniciante"
                  : trilha.nivel === "intermediario"
                  ? "Intermediário"
                  : "Avançado"}
              </span>
            </p>
            <p className="text-slate-300 mb-1">
              <span className="text-slate-400">Duração estimada: </span>
              ~{trilha.duracaoHoras} horas
            </p>
            <p className="text-slate-300">
              <span className="text-slate-400">ODS relacionados:</span>
            </p>
            <ul className="mt-1 space-y-1 text-xs text-slate-300">
              {trilha.odsRelacionados.map((ods) => (
                <li key={ods}>• {ods}</li>
              ))}
            </ul>
          </div>

          <div className="bg-[#020617]/60 border border-[#3FA8FF]/40 rounded-2xl p-4 shadow-xl text-sm">
            <h2 className="text-base font-semibold mb-2 text-[#3FA8FF]">
              Conexão com o SkillMatch AI
            </h2>
            <p className="text-slate-200 mb-2">
              Esta trilha é sugerida de acordo com seu diagnóstico no simulador,
              considerando sua área de maior compatibilidade e o tempo
              disponível para estudo.
            </p>
            <p className="text-[11px] text-slate-400">
              Em versões futuras, esta tela poderá exibir seu progresso real,
              conectado à API Java e ao banco Oracle, fortalecendo os indicadores
              da Global Solution.
            </p>
          </div>
        </aside>
      </div>
    </section>
  );
}
