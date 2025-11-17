export function FAQ() {
  const faqs = [
    {
      pergunta: "O que é o SkillMatch AI?",
      resposta:
        "É uma plataforma que usa IA para recomendar trilhas de aprendizado e oportunidades de carreira alinhadas ao futuro do trabalho.",
    },
    {
      pergunta: "Quem pode usar a plataforma?",
      resposta:
        "Estudantes, profissionais em transição de carreira e empresas que desejam mapear e desenvolver as competências de seus colaboradores.",
    },
  ];

  return (
    <section className="max-w-4xl mx-auto px-4 py-10">
      <h1 className="text-2xl font-bold text-[#0A2A66] mb-6">
        Perguntas Frequentes
      </h1>

      <div className="space-y-4">
        {faqs.map((item, index) => (
          <details
            key={index}
            className="bg-white rounded-xl border border-[#E1E5EE] p-4"
          >
            <summary className="cursor-pointer font-semibold text-sm text-[#0A2A66]">
              {item.pergunta}
            </summary>
            <p className="mt-2 text-xs text-[#4A5563]">{item.resposta}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
