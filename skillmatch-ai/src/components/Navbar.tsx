import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo_SkillMatchIA.png";
import { useTheme } from "../context/ThemeContext";

type Usuario = {
  nome: string;
  email: string;
};

const STORAGE_USER_KEY = "skillmatch-user";

function getUsuarioAtual(): Usuario | null {
  try {
    const raw = localStorage.getItem(STORAGE_USER_KEY);
    if (!raw) return null;
    return JSON.parse(raw) as Usuario;
  } catch {
    return null;
  }
}

export function Navbar() {
  const location = useLocation();
  const navigate = useNavigate();
  const usuario = getUsuarioAtual();
  const { theme, toggleTheme } = useTheme();

  function handleLogout() {
    localStorage.removeItem(STORAGE_USER_KEY);
    navigate("/login");
  }

  return (
    <header className="sticky top-0 z-50 bg-slate-700 text-slate-900 dark:bg-[#020617]/80 dark:text-white backdrop-blur border-b border-slate-200 dark:border-white/10">
      <div className="max-w-6xl mx-auto px-4 md:px-8 py-4 md:py-5 flex items-center justify-between gap-4">
        {/* LOGO */}
        <Link to="/" className="flex items-center gap-3">
          <img
            src={logo}
            alt="SkillMatch AI"
            className="h-8 md:h-9 w-auto object-contain"
          />
        </Link>

        {/* MENU PRINCIPAL */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#3FA8FF] pb-1"
                : "text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white pb-1 transition-colors"
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/como-funciona"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#3FA8FF] pb-1"
                : "text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white pb-1 transition-colors"
            }
          >
            Como funciona
          </NavLink>

          <NavLink
            to="/trilhas"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#3FA8FF] pb-1"
                : "text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white pb-1 transition-colors"
            }
          >
            Trilhas
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#3FA8FF] pb-1"
                : "text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white pb-1 transition-colors"
            }
          >
            Sobre
          </NavLink>

          <NavLink
            to="/integrantes"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#3FA8FF] pb-1"
                : "text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white pb-1 transition-colors"
            }
          >
            Integrantes
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? "border-b-2 border-[#3FA8FF] pb-1"
                : "text-slate-500 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white pb-1 transition-colors"
            }
          >
            FAQ
          </NavLink>
        </nav>

        {/* ÁREA DIREITA: TEMA + USUÁRIO */}
        <div className="flex items-center gap-2 md:gap-3 text-xs md:text-sm">
          {/* BOTÃO TEMA */}
          <button
            type="button"
            onClick={toggleTheme}
            className="px-3 py-1.5 rounded-full border border-slate-500 dark:border-slate-600 text-[11px] md:text-xs text-slate-500 dark:text-slate-200 hover:border-[#3FA8FF] hover:text-[#3FA8FF] transition-colors"
          >
            {theme === "dark" ? "Modo claro" : "Modo escuro"}
          </button>

          {usuario ? (
            <>
              <span className="hidden md:inline text-slate-500 dark:text-slate-500">
                Olá,{" "}
                <span className="text-slate-900 dark:text-white font-semibold">
                  {usuario.nome}
                </span>
              </span>

              <NavLink
                to="/dashboard"
                className={({ isActive }) =>
                  isActive
                    ? "px-3 py-1.5 rounded-full bg-[#3FA8FF] text-[#020617] font-semibold"
                    : "px-3 py-1.5 rounded-full border border-slate-500 dark:border-slate-500 text-slate-800 dark:text-slate-100 hover:border-[#3FA8FF] hover:text-[#3FA8FF] transition-colors"
                }
              >
                Dashboard
              </NavLink>

              <button
                type="button"
                onClick={handleLogout}
                className="text-slate-500 dark:text-slate-400 hover:text-red-500 transition-colors text-xs md:text-sm"
              >
                Sair
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() =>
                location.pathname === "/login" ? null : navigate("/login")
              }
              className="px-4 py-1.5 rounded-full bg-[#3FA8FF] text-[#020617] text-sm font-semibold hover:bg-[#6dc2ff] transition-colors"
            >
              Entrar
            </button>
          )}
        </div>
      </div>
    </header>
  );
}
