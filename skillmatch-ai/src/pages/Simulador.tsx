import { useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormEvent } from "react";

type DadosSimulador = {
  nome: string;
  email: string;
  areaInteresse: string;
  experiencia: string;
  objetivo: string;
  horasEstudo: string;
};

type Compatibilidade = {
  area: string;
  valor: number;
};

type ResultadoPerfil = {
  compatibilidades: Compatibilidade[];
  proximoPasso: string;
};

const STORAGE_USER_KEY = "skillmatch-user";
const STORAGE_SIMULADOR_KEY = "skillmatch-simulador";

export function Simulador() {
  const navigate = useNavigate();

  const [dados, setDados] = useState<DadosSimulador>({
    nome: "",
    email: "",
    areaInteresse: "",
    experiencia: "",
    objetivo: "",
    horasEstudo: ""
  });

  const [erro, setErro] = useState<string | null>(null);

  function handleChange(
    campo: keyof DadosSimulador,
    valor: string
  ) {
    setDados((prev) => ({ ...prev, [campo]: valor }));
  }

  function calcularResultado(d: DadosSimulador): ResultadoPerfil {
    const base: Compatibilidade[] = [
      { area: "Dados", valor: 40 },
      { area: "Inteligência Artificial", valor: 40 },
      { area: "Desenvolvimento Web", valor: 40 },
      { area: "Cloud & DevOps", valor: 40 },
      { area: "UX & Produto", valor: 40 }
    ];

    const interesse = d.areaInteresse.toLowerCase();
    base.forEach((c) => {
      if (interesse && c.area.toLowerCase().includes(interesse)) {
        c.valor += 20;
      }
    });

    if (d.experiencia === "iniciante") {
      base.forEach((c) => (c.valor -= 5));
    } else if (d.experiencia === "avancado") {
      base.forEach((c) => (c.valor += 5));
    }

    base.forEach((c) => {
      if (c.valor < 0) c.valor = 0;
      if (c.valor > 100) c.valor = 100;
    });

    base.sort((a, b) => b.valor - a.valor);

    let proximoPasso = "Comece explorando as trilhas recomendadas no seu dashboard.";
    const melhor = base[0];

    if (melhor.area === "Dados") {
      proximoPasso =
        "Comece pela trilha de Fundamentos de Análise de Dados e, depois, avance para BI.";
    } else if (melhor.area === "Inteligência Artificial") {
      proximoPasso =
        "Inicie pela trilha de Fundamentos de Machine Learning antes de avançar para temas mais avançados de IA.";
    } else if (melhor.area === "Desenvolvimento Web") {
      proximoPasso =
        "Comece pela trilha de Desenvolvimento Web Full-Stack Essencial.";
    } else if (melhor.area === "Cloud & DevOps") {
      proximoPasso =
        "Comece pela trilha de Fundamentos de Cloud & DevOps, entendendo bem os conceitos básicos.";
    } else if (melhor.area === "UX & Produto") {
      proximoPasso =
        "Comece pela trilha de UX & Produto – Experiência do Usuário na Prática.";
    }

    return {
      compatibilidades: base,
      proximoPasso
    };
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setErro(null);

    if (
      !dados.nome.trim() ||
      !dados.email.trim() ||
      !dados.areaInteresse.trim() ||
      !dados.experiencia.trim() ||
      !dados.objetivo.trim() ||
      !dados.horasEstudo.trim()
    ) {
      setErro("Por favor, preencha todos os campos antes de continuar.");
      return;
    }

    const resultado = calcularResultado(dados);

    const usuario = {
      nome: dados.nome,
      email: dados.email
    };
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(usuario));

    localStorage.setItem(
      STORAGE_SIMULADOR_KEY,
      JSON.stringify({ dados, resultado })
    );

    navigate("/dashboard");
  }

  return (
    <section className="max-w-3xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-white">
      <header className="mb-8 text-center">
        <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 mb-3">
          Simulador de perfil
        </p>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3">
          Descubra sua compatibilidade com áreas do{" "}
          <span className="text-[#3FA8FF]">futuro do trabalho</span>.
        </h1>
        <p className="text-xs sm:text-sm md:text-base text-slate-300 max-w-2xl mx-auto">
          Responda algumas perguntas rápidas para que o SkillMatch AI gere um
          diagnóstico inicial e recomende trilhas personalizadas no dashboard.
        </p>
      </header>

      <form
        onSubmit={handleSubmit}
        className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 sm:p-6 md:p-8 shadow-xl flex flex-col gap-4"
      >
        <div className="grid sm:grid-cols-2 gap-4">
          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm text-slate-200">
              Nome completo
            </label>
            <input
              type="text"
              value={dados.nome}
              onChange={(e) => handleChange("nome", e.target.value)}
              className="w-full rounded-xl bg-[#020617] border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-[#3FA8FF]"
              placeholder="Digite seu nome"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label className="text-xs sm:text-sm text-slate-200">
              E-mail
            </label>
            <input
              type="email"
              value={dados.email}
              onChange={(e) => handleChange("email", e.target.value)}
              className="w-full rounded-xl bg-[#020617] border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-[#3FA8FF]"
              placeholder="seuemail@exemplo.com"
            />
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs sm:text-sm text-slate-200">
            Área de maior interesse
          </label>
          <select
            value={dados.areaInteresse}
            onChange={(e) => handleChange("areaInteresse", e.target.value)}
            className="w-full rounded-xl bg-[#020617] border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-[#3FA8FF]"
          >
            <option value="">Selecione uma opção</option>
            <option value="dados">Dados</option>
            <option value="ia">Inteligência Artificial</option>
            <option value="desenvolvimento">Desenvolvimento Web</option>
            <option value="cloud">Cloud & DevOps</option>
            <option value="ux">UX & Produto</option>
          </select>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs sm:text-sm text-slate-200">
            Nível de experiência atual em tecnologia
          </label>
          <div className="grid sm:grid-cols-3 gap-2 text-xs sm:text-sm">
            <button
              type="button"
              onClick={() => handleChange("experiencia", "iniciante")}
              className={`rounded-xl border px-3 py-2 text-left ${
                dados.experiencia === "iniciante"
                  ? "border-[#3FA8FF] bg-[#0B1430]"
                  : "border-slate-700 hover:border-[#3FA8FF]/60"
              }`}
            >
              Iniciante <br />
              <span className="text-[11px] text-slate-400">
                estou começando agora
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleChange("experiencia", "intermediario")}
              className={`rounded-xl border px-3 py-2 text-left ${
                dados.experiencia === "intermediario"
                  ? "border-[#3FA8FF] bg-[#0B1430]"
                  : "border-slate-700 hover:border-[#3FA8FF]/60"
              }`}
            >
              Intermediário <br />
              <span className="text-[11px] text-slate-400">
                já tive contato com tecnologia
              </span>
            </button>
            <button
              type="button"
              onClick={() => handleChange("experiencia", "avancado")}
              className={`rounded-xl border px-3 py-2 text-left ${
                dados.experiencia === "avancado"
                  ? "border-[#3FA8FF] bg-[#0B1430]"
                  : "border-slate-700 hover:border-[#3FA8FF]/60"
              }`}
            >
              Avançado <br />
              <span className="text-[11px] text-slate-400">
                já atuo ou estudo há mais tempo
              </span>
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs sm:text-sm text-slate-200">
            Objetivo principal com a requalificação
          </label>
          <textarea
            value={dados.objetivo}
            onChange={(e) => handleChange("objetivo", e.target.value)}
            className="w-full min-h-[80px] rounded-xl bg-[#020617] border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-[#3FA8FF] resize-none"
            placeholder="Ex.: migrar de outra área, crescer na carreira atual, começar meu primeiro emprego em tecnologia..."
          />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-xs sm:text-sm text-slate-200">
            Quantas horas por semana você pode estudar?
          </label>
          <select
            value={dados.horasEstudo}
            onChange={(e) => handleChange("horasEstudo", e.target.value)}
            className="w-full rounded-xl bg-[#020617] border border-slate-700 px-3 py-2 text-sm focus:outline-none focus:border-[#3FA8FF]"
          >
            <option value="">Selecione uma opção</option>
            <option value="ate-4">Até 4 horas</option>
            <option value="4-8">Entre 4 e 8 horas</option>
            <option value="8-12">Entre 8 e 12 horas</option>
            <option value="12+">Mais de 12 horas</option>
          </select>
        </div>

        {erro && (
          <p className="text-xs sm:text-sm text-red-400 mt-1">{erro}</p>
        )}

        <div className="mt-4 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="submit"
            className="w-full sm:w-auto px-6 sm:px-8 py-2.5 sm:py-3 rounded-full bg-[#3FA8FF] text-[#020617] text-sm font-semibold hover:bg-[#6dc2ff] transition-colors"
          >
            Gerar diagnóstico
          </button>

          <p className="text-[11px] sm:text-xs text-slate-400 text-center sm:text-right max-w-xs">
            Este simulador é apenas uma estimativa acadêmica para a Global
            Solution. Os dados podem ser usados futuramente pela API Java e pelo
            banco Oracle.
          </p>
        </div>
      </form>
    </section>
  );
}
