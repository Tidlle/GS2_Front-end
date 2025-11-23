import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import type { FormEvent, ChangeEvent } from "react";


type UsuarioForm = {
  nome: string;
  email: string;
};

const STORAGE_USER_KEY = "skillmatch-user";

export function Login() {
  const navigate = useNavigate();

  const [form, setForm] = useState<UsuarioForm>({
    nome: "",
    email: ""
  });

  const [erro, setErro] = useState<string | null>(null);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(STORAGE_USER_KEY);
      if (raw) {
        navigate("/dashboard");
      }
    } catch {
 
    }
  }, [navigate]);

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    const { name, value } = event.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  }

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setErro(null);

    const nome = form.nome.trim();
    const email = form.email.trim();

    if (!nome || !email) {
      setErro("Preencha nome e e-mail para continuar.");
      return;
    }

    const usuario = { nome, email };
    localStorage.setItem(STORAGE_USER_KEY, JSON.stringify(usuario));

    navigate("/dashboard");
  }

  const podeEnviar = form.nome.trim() !== "" && form.email.trim() !== "";

  return (
    <section className="min-h-[70vh] flex items-center justify-center px-4 sm:px-6 md:px-8 py-12 sm:py-16 md:py-20 text-white">
      <div className="w-full max-w-md bg-[#020617]/80 border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl">
        <header className="mb-6 text-center">
          <p className="text-[10px] sm:text-xs uppercase tracking-[0.2em] text-slate-400 mb-2">
            Acesso
          </p>
          <h1 className="text-2xl sm:text-3xl font-bold mb-2">
            Acesse o <span className="text-[#3FA8FF]">SkillMatch AI</span>
          </h1>
          <p className="text-xs sm:text-sm text-slate-300">
            Use seus dados para acessar o dashboard, visualizar seu diagnóstico e
            acompanhar as trilhas recomendadas.
          </p>
        </header>

        <form onSubmit={handleSubmit} className="space-y-4 text-sm">
          <div className="flex flex-col gap-1">
            <label
              htmlFor="nome"
              className="text-xs sm:text-sm text-slate-200"
            >
              Nome completo
            </label>
            <input
              id="nome"
              name="nome"
              type="text"
              value={form.nome}
              onChange={handleChange}
              className="bg-[#020617] border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-[#3FA8FF]"
              placeholder="Ex: Eduardo Martins"
            />
          </div>

          <div className="flex flex-col gap-1">
            <label
              htmlFor="email"
              className="text-xs sm:text-sm text-slate-200"
            >
              E-mail
            </label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              className="bg-[#020617] border border-slate-700 rounded-lg px-3 py-2 text-sm text-slate-100 focus:outline-none focus:border-[#3FA8FF]"
              placeholder="seuemail@exemplo.com"
            />
          </div>

          {erro && (
            <p className="text-xs sm:text-sm text-red-400 mt-1">{erro}</p>
          )}

          <button
            type="submit"
            disabled={!podeEnviar}
            className={`w-full mt-3 px-4 py-2.5 rounded-full text-sm font-semibold transition-all ${
              podeEnviar
                ? "bg-[#3FA8FF] text-[#020617] hover:bg-[#6dc2ff] shadow-lg"
                : "bg-slate-700 text-slate-400 cursor-not-allowed"
            }`}
          >
            Entrar
          </button>

          <p className="text-[11px] sm:text-xs text-slate-400 mt-3 text-center">
            Este login é simulado apenas para fins acadêmicos da Global Solution.
            Em versões futuras, poderá ser integrado à API Java e ao banco Oracle.
          </p>
        </form>
      </div>
    </section>
  );
}
