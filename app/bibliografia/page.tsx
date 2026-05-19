export default function Bibliografia() {
  const secciones = [
    {
      titulo: 'Informes oficiales',
      items: [
        'Ministerio de Economía, Comercio y Empresa (2025). Estudio de Prospeción Tecnológica en Inteligencia Artificial. 10 volúmenes, 1.800+ referencias. Volumen 8 (Ciberseguridad), Volumen 9 (IA, datos y competencia), Volumen 10 (Ética, gobernanza y regulación).',
      ],
    },
    {
      titulo: 'Normativa europea',
      items: [
        'Reglamento (UE) 2024/1689 del Parlamento Europeo y del Consejo, de 13 de junio de 2024, por el que se establecen normas armonizadas en materia de inteligencia artificial (AI Act).',
        'Reglamento (UE) 2016/679 (RGPD).',
        'Directiva (UE) 2022/2555 (NIS2).',
      ],
    },
    {
      titulo: 'Normativa española',
      items: [
        'Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).',
        'Real Decreto 311/2022 que regula el Esquema Nacional de Seguridad (ENS).',
        'Estrategia Nacional de Inteligencia Artificial (ENIA 2024).',
        'Agencia Española de Supervisión de la Inteligencia Artificial (AESIA) — guías técnicas.',
      ],
    },
    {
      titulo: 'Normativa internacional',
      items: [
        'Executive Order 14110 on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence (EEUU, 2023).',
        'NIST AI Risk Management Framework (AI RMF 1.0), 2023.',
        'Interim Measures for the Administration of Generative Artificial Intelligence Services (China, 2023).',
        'Deep Synthesis Provisions (China, 2022).',
        'Regulation on Algorithmic Recommendation of Internet Information Services (China, 2022).',
      ],
    },
    {
      titulo: 'Estándares ISO',
      items: [
        'ISO/IEC 42001:2023 — Sistemas de gestión de IA (AIMS).',
        'ISO/IEC 23894:2023 — Gestión de riesgos de IA.',
        'ISO/IEC 24368:2022 — Cuestiones éticas y sociales en IA.',
        'ISO/IEC 22989:2022 — Conceptos y terminología de IA.',
        'ISO/IEC 23053:2022 — Marco para sistemas de IA basados en ML.',
        'ISO/IEC 25059:2023 — Modelo de calidad para sistemas de IA.',
      ],
    },
    {
      titulo: 'Marcos de referencia',
      items: [
        'NIST AI Risk Management Framework (AI RMF 1.0), 2023.',
        'OECD AI Principles, actualizados 2024.',
        'Ethics Guidelines for Trustworthy AI (HLEG, Comisión Europea).',
        'ALTAI — Assessment List for Trustworthy AI.',
        'IEEE 7000 series sobre ética en sistemas autónomos.',
      ],
    },
    {
      titulo: 'Lecturas complementarias',
      items: [
        'Mökander, J. (2023). Auditing AI systems. Springer.',
        'Raji, I. D. et al. (2020). Closing the AI accountability gap. FAT* Conference.',
        'Floridi, L. (2023). The Ethics of Artificial Intelligence. Oxford University Press.',
        'Friedler, S. A., Scheidegger, C. & Venkatasubramanian, S. (2016). On the (im)possibility of fairness.',
      ],
    },
  ];

  return (
    <>
      <section className="border-b border-ink">
        <div className="max-w-6xl mx-auto px-6 py-16">
          <p className="font-mono text-xs tracking-widest text-accent uppercase mb-3">
            Referencias del curso
          </p>
          <h1 className="font-serif italic text-5xl md:text-7xl leading-none mb-6">
            Bibliografía
          </h1>
          <p className="font-serif italic text-xl md:text-2xl max-w-2xl text-muted leading-snug">
            Normativa, estándares y lecturas que articulan el contenido de las tres sesiones.
          </p>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 py-16">
        <div className="space-y-16">
          {secciones.map((s, i) => (
            <div key={i} className="grid md:grid-cols-4 gap-8">
              <div className="md:col-span-1">
                <p className="font-mono text-xs tracking-widest text-accent uppercase mb-2">
                  {String(i + 1).padStart(2, '0')}
                </p>
                <h2 className="font-serif text-2xl leading-tight">{s.titulo}</h2>
              </div>
              <ul className="md:col-span-3 space-y-3">
                {s.items.map((item, j) => (
                  <li
                    key={j}
                    className="border-b border-ink/15 pb-3 text-sm leading-relaxed"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
