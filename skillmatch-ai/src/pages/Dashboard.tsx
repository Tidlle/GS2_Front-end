import { useEffect, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { trilhas, TrilhaInfo } from "../data/Trilhas";

type Usuario = {
  nome: string;
  email: string;
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

function mapAreaToKey(area: string): TrilhaInfo["area"] | null {
  const texto = area.toLowerCase();

  if (texto.includes("dado")) return "dados";
  if (texto.includes("inteligência") || texto.includes("ia")) return "ia";
  if (texto.includes("web") || texto.includes("desenvolvimento")) return "dev";
  if (texto.includes("cloud") || texto.includes("devops")) return "cloud";
  if (texto.includes("ux") || texto.includes("produto")) return "ux";

  return null;
}

export function Dashboard() {
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState<Usuario | null>(null);
  const [resultado, setResultado] = useState<ResultadoPerfil | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_USER_KEY);
      if (!raw) {
        navigate("/login");
        return;
      }
      setUsuario(JSON.parse(raw) as Usuario);
    } catch {
      navigate("/login");
      return;
    }

    try {
      const raw = localStorage.getItem(STORAGE_SIMULADOR_KEY);
      if (raw) {
        const parsed = JSON.parse(raw) as { resultado: ResultadoPerfil };
        setResultado(parsed.resultado);
      }
    } catch {

    }
  }, [navigate]);

  if (!usuario) return null;

  const melhorArea =
    resultado?.compatibilidades?.length
      ? resultado.compatibilidades[0]
      : null;

  const areaKey = melhorArea ? mapAreaToKey(melhorArea.area) : null;

  const trilhasRecomendadas: TrilhaInfo[] =
    areaKey != null
      ? trilhas.filter((t) => t.area === areaKey).slice(0, 2)
      : [];

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-white">
      <header className="mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold mb-2">
          Olá, <span className="text-[#3FA8FF]">{usuario.nome}</span> 
        </h1>

        <p className="text-sm sm:text-base text-slate-300 max-w-2xl">
          Este é o seu painel personalizado. Aqui você acompanha seu diagnóstico,
          trilhas recomendadas e próximos passos para evoluir na sua carreira.
        </p>
      </header>

      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-1 bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl flex flex-col justify-between">
          <div>
            <h2 className="text-lg font-semibold mb-2">Seu perfil</h2>

            <p className="text-xs text-slate-300">
              <span className="font-semibold">Nome:</span> {usuario.nome}
            </p>
            <p className="text-xs text-slate-300 mb-4">
              <span className="font-semibold">E-mail:</span> {usuario.email}
            </p>

            <p className="text-[11px] text-slate-400 leading-relaxed">
              Futuramente, este painel será integrado com seus dados reais pela
              API Java + Oracle, mostrando progresso, certificações e trilhas
              concluídas.
            </p>
          </div>

          <Link
            to="/simulador"
            className="mt-6 inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#3FA8FF] text-[#020617] text-xs sm:text-sm font-semibold hover:bg-[#6dc2ff] transition-all"
          >
            Refazer diagnóstico
          </Link>
        </div>

        <div className="lg:col-span-2 bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl">
          <h2 className="text-lg font-semibold mb-4">
            Sua compatibilidade geral
          </h2>

          {resultado ? (
            <div className="space-y-4">
              {resultado.compatibilidades.map((c) => (
                <div key={c.area}>
                  <div className="flex justify-between mb-1 text-xs sm:text-sm">
                    <span className="text-slate-200">{c.area}</span>
                    <span className="text-[#3FA8FF] font-semibold">
                      {c.valor}%
                    </span>
                  </div>

                  <div className="h-2 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#3FA8FF] to-[#1D5BFF] rounded-full"
                      style={{ width: `${c.valor}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-sm text-slate-300">
              <p>Nenhum diagnóstico encontrado.</p>

              <Link
                to="/simulador"
                className="mt-3 inline-block px-4 py-2 rounded-full border border-[#3FA8FF] text-[#3FA8FF] text-xs hover:bg-[#3FA8FF] hover:text-[#020617] transition-colors"
              >
                Fazer simulador
              </Link>
            </div>
          )}
        </div>
      </div>

      <section className="mt-10">
        <h2 className="text-lg font-semibold mb-4">
          Trilhas recomendadas para você
        </h2>

        {melhorArea && trilhasRecomendadas.length > 0 ? (
          <>
            <p className="text-sm text-slate-300 mb-6">
              Com base na sua compatibilidade com{" "}
              <span className="text-[#3FA8FF] font-semibold">
                {melhorArea.area}
              </span>
              , estas são as trilhas ideais para começar agora:
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {trilhasRecomendadas.map((trilha) => (
                <Link
                  to={`/trilhas/${trilha.id}`}
                  key={trilha.id}
                  className="bg-[#020617]/70 border border-white/10 rounded-2xl p-5 shadow-xl hover:border-[#3FA8FF] hover:-translate-y-1 transition-all flex flex-col justify-between"
                >
                  <div>
                    <p className="text-xs text-slate-400 mb-1">
                      {trilha.area.toUpperCase()} • {trilha.nivel}
                    </p>
                    <h3 className="text-lg font-semibold mb-2">
                      {trilha.titulo}
                    </h3>
                    <p className="text-xs text-slate-300 mb-3">
                      {trilha.descricao}
                    </p>
                  </div>

                  <div className="flex justify-between text-xs text-slate-400">
                    <span>~{trilha.duracaoHoras} horas</span>
                    <span className="text-[#3FA8FF] font-semibold">
                      Ver detalhes
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          <p className="text-sm text-slate-300">
            Faça o simulador para receber trilhas personalizadas para o seu
            perfil profissional.
          </p>
        )}
      </section>

      {resultado && (
        <div className="mt-10 bg-[#020617]/50 border border-[#3FA8FF]/40 rounded-2xl p-5 shadow-xl text-sm">
          <h3 className="text-[#3FA8FF] font-semibold mb-2">
            Próximo passo recomendado
          </h3>
          <p className="text-slate-200">{resultado.proximoPasso}</p>
        </div>
      )}
    </section>
  );
}
