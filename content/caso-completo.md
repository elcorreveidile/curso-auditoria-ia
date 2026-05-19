# Caso transversal — Centro Lingua

*Caso de estudio para el Curso de Auditoría de Procesos de IA. Tres entregas progresivas, una por sesión.*

---

## Nota metodológica para el docente

Centro Lingua es un caso de estudio diseñado para el curso. Reproduce, con datos modificados y sin identificación, la estructura típica de un centro universitario de lenguas que está incorporando IA. Permite a los alumnos trabajar con un caso suficientemente complejo y realista a lo largo de las tres sesiones, sin necesidad de cambiar de contexto.

Los nombres de personas, herramientas y procesos son ficticios.

---

## Entrega 1 — Sesión 1: Descripción general y mapa de sistemas

### Contexto institucional

Centro Lingua es un centro universitario público dedicado a la enseñanza de lenguas modernas, dependiente de una universidad de tamaño medio. Cuenta con:

- **110 trabajadores** distribuidos en cuatro categorías profesionales: docentes (75), personal de administración y servicios (15), personal técnico (8) y dirección (12, incluidos cargos académicos).
- **Más de 4.000 estudiantes anuales** de procedencia internacional (predominantemente programas Study Abroad estadounidenses y europeos) y nacional.
- Oferta de cursos de español como lengua extranjera, otros idiomas (inglés, alemán, francés, italiano, portugués, árabe), preparación para certificaciones oficiales (DELE, SIELE, TOEFL), formación de profesores y programas culturales.
- Sistema de gestión académica propio (denominado internamente *Sistema GAP*), de desarrollo a medida, vigente desde hace más de 15 años.
- Página web institucional y presencia en redes sociales gestionadas internamente.

### Iniciativas relacionadas con IA en los últimos 18 meses

La dirección de Centro Lingua ha promovido o tolerado las siguientes incorporaciones de IA, con distinto grado de formalización:

1. **Chatbot de atención al estudiante** desplegado en la web institucional, basado en un LLM comercial (proveedor externo). Responde a preguntas sobre cursos, fechas, precios y procedimientos administrativos. Activo desde hace 8 meses. Sin documentación técnica disponible para el personal.

2. **Sistema de asistente para corrección de pruebas escritas** en cursos de español avanzado. Algunos docentes lo usan voluntariamente; consiste en una herramienta basada en LLM que sugiere correcciones gramaticales, léxicas y pragmáticas. No hay política formal sobre su uso. No se informa al alumnado.

3. **Generación automática de materiales didácticos**: parte del profesorado utiliza herramientas generativas (ChatGPT, Claude, Gemini) para preparar ejercicios, modelos de texto, esquemas. Sin protocolo. Sin formación específica reglada.

4. **Asistente conversacional para práctica oral**: piloto en marcha desde hace 4 meses con dos grupos de B2. Los estudiantes interactúan con un asistente para practicar producción oral fuera del aula. Datos de las interacciones almacenados por el proveedor.

5. **Sistema de detección de fraude académico** en exámenes a distancia: software adquirido a un tercero, usa análisis de patrones de tecleo y comportamiento del navegador. En uso desde hace un curso académico completo.

6. **Sistema de análisis predictivo de abandono** (en exploración): la dirección estudia adquirir un sistema que prediga qué estudiantes tienen mayor riesgo de no completar el curso, basado en datos académicos y de comportamiento en la plataforma.

7. **Traductores automáticos** (DeepL, Google Translate) en la traducción de comunicaciones administrativas. Uso extendido informal.

8. **Asistente de gestión de personal** (en evaluación): un sistema que automatizaría parte del proceso de contratación de profesorado externo, incluido el cribado inicial de candidaturas.

9. **Plataforma de análisis de sentimiento en redes sociales** (en exploración): la dirección evalúa contratar un servicio que analizaría menciones a Centro Lingua en Twitter/Instagram para detectar crisis reputacionales. Proveedor estadounidense. Sin garantías de ausencia de sesgo demográfico.

### Otros datos relevantes

- **No existe** política interna formal de uso de IA.
- **No existe** comité ni responsable específico de IA. La dirección general toma las decisiones consultando informalmente al área técnica.
- El Delegado de Protección de Datos es el de la universidad matriz, no específico de Centro Lingua.
- El comité de empresa solicitó información sobre los sistemas mencionados; no recibió respuesta formal.
- La universidad matriz está iniciando una estrategia general de IA y solicita a sus centros y servicios un diagnóstico.

### Encargo (Sesión 1)

Centro Lingua os ha contratado como equipo auditor. La dirección quiere comprender la situación actual antes de avanzar.

**Tarea 1**:

1. Elaborad un **inventario clasificado de los sistemas de IA** identificados en Centro Lingua. Para cada uno indicad:
   - Nombre del sistema.
   - Función.
   - Tipo de IA (clásica, ML supervisado, generativa, etc.).
   - Estado (en producción, piloto, exploración, uso informal).
   - Fase del ciclo de vida en la que se encuentra.
   - Datos personales implicados (sí/no/posible).

2. Identificad **tres preguntas clave** que haríais a la dirección para completar el inventario.

3. Identificad **dos sistemas no listados** que sospechéis que pueden existir en una organización como esta y que no se han mencionado (*shadow AI*).

---

## Entrega 2 — Sesión 2: Análisis de riesgos y clasificación normativa

### Información adicional facilitada en S2

La dirección de Centro Lingua os proporciona, tras vuestras preguntas, la siguiente información complementaria:

- **Chatbot web**: el proveedor es una empresa con sede en Estados Unidos. El contrato firmado no incluye cláusulas específicas de IA Act. Los datos de las consultas se almacenan en servidores estadounidenses durante 24 meses.

- **Asistente de corrección**: usado actualmente por aproximadamente 25 de los 75 docentes. No hay registro centralizado de quién lo usa ni de qué datos introducen. Algunos docentes copian fragmentos completos de redacciones de alumnos al servicio externo.

- **Generación de materiales**: la dirección estima que más del 80% del profesorado usa IA generativa de forma informal. Sin formación específica. Sin política. Sin protocolo de validación.

- **Práctica oral**: el proveedor del asistente conversacional almacena audios y transcripciones para fines de mejora del producto. El consentimiento del estudiante figura en una cláusula genérica de las condiciones de matrícula.

- **Detección de fraude**: en el último curso académico, el sistema reportó 47 casos sospechosos. De ellos, 12 fueron confirmados como fraude, 22 se descartaron tras revisión humana, y 13 permanecen sin resolución clara. No hay procedimiento documentado de impugnación para el estudiante.

- **Análisis predictivo de abandono**: el proveedor candidato es una startup europea. La oferta incluye un modelo entrenado con datos de otros centros, sin información sobre su composición demográfica.

- **Asistente RRHH**: en fase de evaluación. Proveedor extracomunitario.

- **Cuestiones organizativas**: el director es ingeniero, técnicamente afín a las soluciones tecnológicas. La subdirectora académica es filóloga, escéptica con los usos de IA. El comité de empresa ha presentado por escrito su preocupación por el uso de IA en aspectos que afectan al trabajo del personal docente (asistente de corrección, generación de materiales).

- **Situación competitiva**: el proveedor del chatbot ha sido adquirido recientemente por una big tecnológica. No hay claridad sobre si el servicio continuará o migrará a otra plataforma. Los contratos del 80% de los proveedores de IA de Centro Lingua tienen cláusulas de propietariedad sobre mejoras y datos derivados.

### Encargo (Sesión 2)

**Tarea 2**:

1. **Clasificación AI Act**: para cada uno de los nueve sistemas, indicad la categoría de riesgo según el Reglamento UE 2024/1689 (prohibido / alto riesgo / riesgo limitado / riesgo mínimo) y justificadla con referencia a los artículos o anexos pertinentes.

2. **Matriz de riesgos**: elaborad una matriz con los **diez riesgos más relevantes** identificados en el conjunto de la organización (no por sistema, sino transversales). Para cada riesgo:
   - Descripción.
   - Probabilidad (alta / media / baja / muy baja).
   - Impacto (crítico / alto / medio / bajo).
   - Categoría (técnico / datos / ético / legal / seguridad / organizativo).
   - Controles existentes (si los hay).

3. **Identificad las tres prácticas que más urgentemente** deben regularse en Centro Lingua y justificad la prioridad.

4. **Análisis competitivo (dimensión de mercado)**:
   - Identificad qué porcentaje de sistemas críticos dependen de proveedores únicos.
   - Evaluad el lock-in de cada sistema (alto/medio/bajo) tanto técnico como de datos.
   - Calculad una estimación de coste de salida para el chatbot (orden de magnitud).
   - Identificad riesgos de la adquisición del proveedor del chatbot por una big tech.
   - Proponed una estrategia de diversificación a 3 años.

---

## Entrega 3 — Sesión 3: Plan de auditoría completo

### Información final

La dirección de Centro Lingua, tras presentar vuestro análisis preliminar, os encarga **realizar la auditoría completa** bajo las siguientes condiciones:

- Plazo: **4 meses**.
- Recursos: el equipo auditor más acceso a personal interno.
- Alcance: completo (los nueve sistemas + gobernanza + datos + cumplimiento + dimensión competitiva).
- Entregables esperados: informe ejecutivo, informe técnico, hoja de ruta, plan de formación, propuesta de política de uso de IA, propuesta de gobernanza.
- Marco de referencia: AI Act + ISO 42001 + RGPD + ALTAI.
- La dirección os pide específicamente que el informe incluya **una sección sobre riesgos competitivos y de concentración**, preocupada por la adquisición del proveedor del chatbot.

### Encargo (Sesión 3)

**Tarea 3 — Plan de auditoría completo**. Diseñad un documento con la siguiente estructura mínima:

1. **Carta de encargo** (esbozo): alcance, objetivos, criterios, plazos, equipo, condiciones de independencia, confidencialidad, honorarios estimados (orden de magnitud).

2. **Plan de auditoría detallado**:
   - Fases con cronograma de las 16 semanas.
   - Métodos por fase.
   - Equipo (perfiles necesarios).
   - Recursos requeridos.
   - Riesgos del propio proceso de auditoría.

3. **Estrategia de involucración de stakeholders**:
   - Dirección.
   - Personal por categoría.
   - Comité de empresa.
   - Estudiantes (cuando proceda).
   - DPO de la universidad matriz.
   - Proveedores externos.

4. **Catálogo preliminar de pruebas** que realizaréis (mínimo 15):
   - Documentales.
   - Entrevistas.
   - Pruebas técnicas.
   - Observación.

5. **Estructura del informe final** previsto.

6. **Propuestas de quick wins** que pueden adelantarse durante la propia auditoría sin esperar al informe.

7. **Sección específica del informe: "Dimensión competitiva y de mercado"**:
   - Estructura de la sección que incluiréis en el informe final.
   - Matriz de dependencias de proveedores rellena (simulada con datos razonables).
   - 3 recomendaciones específicas sobre diversificación de proveedores.
   - Análisis del riesgo de la adquisición del proveedor del chatbot.

### Cierre

Cada grupo presentará su plan en 4-5 minutos. Atención a los siguientes criterios de evaluación:

- **Realismo**: ¿es ejecutable en 16 semanas con los recursos previstos?
- **Cobertura**: ¿aborda los cuatro marcos (AI Act, ISO 42001, RGPD, dimensión competitiva)?
- **Sensibilidad organizativa**: ¿tiene en cuenta el comité de empresa y la cultura de la organización?
- **Profundidad técnica**: ¿incluye pruebas técnicas o se queda en lo documental?
- **Análisis competitivo**: ¿aborda lock-in, concentración y dependencias de proveedores?
- **Comunicación**: ¿está pensado para que el cliente lo entienda y lo apruebe?

---

**[|]**
