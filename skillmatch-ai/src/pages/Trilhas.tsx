import { useState } from "react";
import { Link } from "react-router-dom";
import { trilhas } from "../data/Trilhas";
import type { TrilhaInfo } from "../data/Trilhas";

const AREA_LABEL: Record<TrilhaInfo["area"], string> = {
  dados: "Dados",
  ia: "Inteligência Artificial",
  dev: "Desenvolvimento Web",
  cloud: "Cloud & DevOps",
  ux: "UX & Produto"
};

const NIVEL_LABEL: Record<TrilhaInfo["nivel"], string> = {
  iniciante: "Iniciante",
  intermediario: "Intermediário",
  avancado: "Avançado"
};

export function Trilhas() {
  const [areaFiltro, setAreaFiltro] = useState<string>("todas");
  const [nivelFiltro, setNivelFiltro] = useState<string>("todos");

  const trilhasFiltradas = trilhas.filter((t) => {
    const areaOk = areaFiltro === "todas" || t.area === areaFiltro;
    const nivelOk = nivelFiltro === "todos" || t.nivel === nivelFiltro;
    return areaOk && nivelOk;
  });

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-14 md:py-20 text-white">
      <header className="mb-8">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Trilhas recomendadas
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Catálogo de trilhas do{" "}
          <span className="text-[#3FA8FF]">SkillMatch AI</span>
        </h1>
        <p className="text-sm md:text-base text-slate-300 max-w-2xl">
          Explore trilhas de aprendizado pensadas para apoiar sua requalificação
          profissional em tecnologia, dados, IA, cloud e UX.
        </p>
      </header>

      <div className="mb-8 flex flex-wrap gap-4 items-center text-sm">
        <div className="flex items-center gap-2">
          <span className="text-slate-300 text-xs md:text-sm">Área:</span>
          <select
            value={areaFiltro}
            onChange={(e) => setAreaFiltro(e.target.value)}
            className="bg-[#020617] border border-slate-700 rounded-full px-3 py-1.5 text-xs md:text-sm"
          >
            <option value="todas">Todas</option>
            <option value="dados">Dados</option>
            <option value="ia">IA</option>
            <option value="dev">Desenvolvimento</option>
            <option value="cloud">Cloud & DevOps</option>
            <option value="ux">UX & Produto</option>
          </select>
        </div>

        <div className="flex items-center gap-2">
          <span className="text-slate-300 text-xs md:text-sm">Nível:</span>
          <select
            value={nivelFiltro}
            onChange={(e) => setNivelFiltro(e.target.value)}
            className="bg-[#020617] border border-slate-700 rounded-full px-3 py-1.5 text-xs md:text-sm"
          >
            <option value="todos">Todos</option>
            <option value="iniciante">Iniciante</option>
            <option value="intermediario">Intermediário</option>
            <option value="avancado">Avançado</option>
          </select>
        </div>
      </div>

      {trilhasFiltradas.length === 0 ? (
        <p className="text-sm text-slate-400">
          Nenhuma trilha encontrada com os filtros selecionados.
        </p>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {trilhasFiltradas.map((trilha) => (
            <Link
              key={trilha.id}
              to={`/trilhas/${trilha.id}`}
              className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-lg hover:border-[#3FA8FF] hover:-translate-y-1 transition-all flex flex-col justify-between"
            >
              <div>
                <p className="text-xs text-slate-400 mb-1">
                  {AREA_LABEL[trilha.area]} • {NIVEL_LABEL[trilha.nivel]}
                </p>
                <h2 className="text-lg font-semibold mb-2">{trilha.titulo}</h2>
                <p className="text-xs md:text-sm text-slate-300 mb-3">
                  {trilha.descricao}
                </p>
              </div>

              <div className="flex items-center justify-between mt-2 text-xs text-slate-400">
                <span>Duração estimada: ~{trilha.duracaoHoras} horas</span>
                <span className="text-[#3FA8FF] font-semibold">
                  Ver trilha
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}
    </section>
  );
}
