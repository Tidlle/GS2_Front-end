export function Footer() {
  return (
    <footer className="bg-white border-t border-[#E1E5EE] mt-8">
      <div className="max-w-6xl mx-auto px-4 py-4 flex flex-col md:flex-row items-center justify-between gap-2 text-xs text-[#9EA8B7]">
        <span>© {new Date().getFullYear()} SkillMatch AI. Todos os direitos reservados.</span>
        <span className="text-[10px]">
          Projeto acadêmico – Global Solution 2025/2 – FIAP.
        </span>
      </div>
    </footer>
  );
}
