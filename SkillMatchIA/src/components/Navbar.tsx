import { Link, NavLink } from "react-router-dom";

export function Navbar() {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        
        <Link to="/" className="flex items-center gap-3">
          <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-[#1D5BFF] to-[#3FA8FF] flex items-center justify-center text-white font-bold">
            SM
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-[#0A2A66] font-semibold text-lg">SkillMatch</span>
            <span className="text-[#1D5BFF] text-xs font-medium">AI</span>
          </div>
        </Link>

        <nav className="flex items-center gap-6 text-sm font-medium">
          <NavLink
            to="/"
            end
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#1D5BFF] px-3 py-1.5 rounded-lg"
                : "text-gray-700 hover:text-[#1D5BFF]"
            }
          >
            Início
          </NavLink>

          <NavLink
            to="/sobre"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#1D5BFF] px-3 py-1.5 rounded-lg"
                : "text-gray-700 hover:text-[#1D5BFF]"
            }
          >
            Sobre
          </NavLink>

          <NavLink
            to="/integrantes"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#1D5BFF] px-3 py-1.5 rounded-lg"
                : "text-gray-700 hover:text-[#1D5BFF]"
            }
          >
            Integrantes
          </NavLink>

          <NavLink
            to="/faq"
            className={({ isActive }) =>
              isActive
                ? "text-white bg-[#1D5BFF] px-3 py-1.5 rounded-lg"
                : "text-gray-700 hover:text-[#1D5BFF]"
            }
          >
            FAQ
          </NavLink>
        </nav>
      </div>
    </header>
  );
}
