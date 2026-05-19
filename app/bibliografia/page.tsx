export default function Bibliografia() {
  const secciones = [
    {
      titulo: 'Informes oficiales',
      items: [
        {
          texto: 'Oficina Nacional de Prospectiva y Estrategia (2025). HispanIA 2040: Estudio de Prospeción Tecnológica en Inteligencia Artificial. 10 volúmenes, 1.800+ referencias. Volumen 8 (Ciberseguridad), Volumen 9 (IA, datos y competencia), Volumen 10 (Ética, gobernanza y regulación).',
          href: 'https://futuros.gob.es/nuestro-trabajo/hispania-2040',
        },
      ],
    },
    {
      titulo: 'Normativa europea',
      items: [
        {
          texto: 'Reglamento (UE) 2024/1689 del Parlamento Europeo y del Consejo, de 13 de junio de 2024, por el que se establecen normas armonizadas en materia de inteligencia artificial (AI Act).',
          href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689',
        },
        {
          texto: 'Reglamento (UE) 2016/679 (RGPD).',
          href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32016R0679',
        },
        {
          texto: 'Directiva (UE) 2022/2555 (NIS2).',
          href: 'https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32022L2555',
        },
      ],
    },
    {
      titulo: 'Normativa española',
      items: [
        {
          texto: 'Ley Orgánica 3/2018, de 5 de diciembre, de Protección de Datos Personales y garantía de los derechos digitales (LOPDGDD).',
          href: 'https://www.boe.es/buscar/act.php?id=BOE-A-2018-16673',
        },
        {
          texto: 'Real Decreto 311/2022, de 3 de mayo, por el que se regula el Esquema Nacional de Seguridad (ENS).',
          href: 'https://www.boe.es/buscar/act.php?id=BOE-A-2022-7191',
        },
        {
          texto: 'Estrategia de Inteligencia Artificial 2024 (ENIA).',
          href: 'https://portal.mineco.gob.es/es-es/digitalizacionIA/Documents/Estrategia_IA_2024.pdf',
        },
        {
          texto: 'Agencia Española de Supervisión de la Inteligencia Artificial (AESIA).',
          href: 'https://aesia.digital.gob.es/es',
        },
      ],
    },
    {
      titulo: 'Normativa internacional',
      items: [
        {
          texto: 'Executive Order 14110 on the Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence (EEUU, 2023).',
          href: 'https://www.whitehouse.gov/biden-harris-administration/2023/10/30/executive-order-on-the-safe-secure-and-trustworthy-development-and-use-of-artificial-intelligence/',
        },
        {
          texto: 'NIST AI Risk Management Framework (AI RMF 1.0), 2023.',
          href: 'https://www.nist.gov/itl/ai-risk-management-framework',
        },
        {
          texto: 'Interim Measures for the Administration of Generative Artificial Intelligence Services (China, 2023).',
          href: 'https://www.cac.gov.cn/en/2023-07/13/interim-measures-for-the-management-of-generative-artificial-intelligence-services/',
        },
        {
          texto: 'Deep Synthesis Provisions (China, 2022).',
          href: 'https://www.cac.gov.cn/en/2022-12/11/provisions-on-deep-synthesis-for-internet-information-services/',
        },
        {
          texto: 'Regulation on Algorithmic Recommendation of Internet Information Services (China, 2022).',
          href: 'https://www.cac.gov.cn/en/2022-03/01/provisions-on-the-algorithmic-recommendation-for-online-information-services/',
        },
      ],
    },
    {
      titulo: 'Estándares ISO',
      items: [
        {
          texto: 'ISO/IEC 42001:2023 — Sistemas de gestión de IA (AIMS).',
          href: 'https://www.iso.org/standard/81230.html',
        },
        {
          texto: 'ISO/IEC 23894:2023 — Gestión de riesgos de IA.',
          href: 'https://www.iso.org/standard/76977.html',
        },
        {
          texto: 'ISO/IEC 24368:2022 — Cuestiones éticas y sociales en IA.',
          href: 'https://www.iso.org/standard/76694.html',
        },
        {
          texto: 'ISO/IEC 22989:2022 — Conceptos y terminología de IA.',
          href: 'https://www.iso.org/standard/73972.html',
        },
        {
          texto: 'ISO/IEC 23053:2022 — Marco para sistemas de IA basados en ML.',
          href: 'https://www.iso.org/standard/71092.html',
        },
        {
          texto: 'ISO/IEC 25059:2023 — Modelo de calidad para sistemas de IA.',
          href: 'https://www.iso.org/standard/84045.html',
        },
      ],
    },
    {
      titulo: 'Marcos de referencia',
      items: [
        {
          texto: 'NIST AI Risk Management Framework (AI RMF 1.0), 2023.',
          href: 'https://www.nist.gov/itl/ai-risk-management-framework',
        },
        {
          texto: 'OECD AI Principles, actualizados 2024.',
          href: 'https://oecd.ai/en/ai-principles/',
        },
        {
          texto: 'Ethics Guidelines for Trustworthy AI (HLEG, Comisión Europea).',
          href: 'https://digital-strategy.ec.europa.eu/en/policies/1-ethics-guidelines-for-trustworthy-ai/',
        },
        {
          texto: 'ALTAI — Assessment List for Trustworthy AI.',
          href: 'https://alti.futuristic.io/list/',
        },
        {
          texto: 'IEEE 7000 series sobre ética en sistemas autónomos.',
          href: 'https://standards.ieee.org/ieee-7000.html',
        },
      ],
    },
    {
      titulo: 'Lecturas complementarias',
      items: [
        {
          texto: 'Mökander, J. (2023). Auditing AI systems. Springer.',
          href: 'https://link.springer.com/book/10.1007/978-3-031-29677-9',
        },
        {
          texto: 'Raji, I. D. et al. (2020). Closing the AI accountability gap. FAT* Conference.',
          href: 'https://dl.acm.org/doi/10.1145/3351095.3372851',
        },
        {
          texto: 'Floridi, L. (2023). The Ethics of Artificial Intelligence. Oxford University Press.',
          href: 'https://global.oup.com/academic/product/the-ethics-of-artificial-intelligence-9780198863676',
        },
        {
          texto: 'Friedler, S. A., Scheidegger, C. & Venkatasubramanian, S. (2016). On the (im)possibility of fairness.',
          href: 'https://arxiv.org/abs/1609.07236',
        },
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
            Normativa, estándares y lecturas que articulan el contenido de las cuatro sesiones.
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
                    {item.href ? (
                      <a
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-accent underline hover:no-underline"
                      >
                        {item.texto}
                      </a>
                    ) : (
                      item.texto
                    )}
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
