# Guion docente — Auditoría de Procesos de IA

*Notas para el profesor, no para distribuir a los alumnos.*

---

## Consideraciones generales antes de empezar

### Sobre el público mixto

Asume tres perfiles probables:

1. **Auditores tradicionales** (financieros, internos, ISO 27001): saben de auditoría, no de IA. Riesgo: minimizan la diferencia técnica.
2. **Técnicos** (IT, data, MLOps): saben de IA, no de auditoría. Riesgo: minimizan la dimensión normativa y ética.
3. **Gestores y docentes**: ni una cosa ni otra, pero responsables de implantar. Riesgo: se pierden en lo técnico.

**Estrategia transversal**: en cada bloque, conecta los tres marcos (técnico, normativo, organizativo). Cuando expliques algo técnico, traduce al lenguaje del auditor; cuando expliques una norma, ejemplifica técnicamente.

### Sobre el tono

- Eres profesor universitario con perfil híbrido (estudios de doctorado en Informática + humanidades). Aprovecha la singularidad: no eres el típico auditor financiero ni el típico data scientist. Esto te da autoridad para articular las dimensiones.
- Evita la jerga gratuita. Cuando uses un término técnico, defínelo.
- Permite el debate. La auditoría de IA es un campo en construcción: hay zonas grises legítimas.

### Sobre el caso transversal

"Centro Lingua" es ficción inspirada en el CLM. Útil para ti como ensayo metodológico. **No reveles la inspiración real al alumnado**: si alguien del CLM está conectado a la sesión, el caso debe parecer un ejercicio académico.

### Material para imprimir (mínimo)

- Plantilla de carta de encargo (1 pp.)
- Matriz de riesgos vacía (1 pp.)
- Esquema del AI Act (1 pp.)
- Ficha del caso transversal por entrega (3 × 2 pp.)

Todo lo demás, digital.

---

## SESIÓN 1 — 9 de septiembre

### Apertura (16:00–16:15)

**Objetivo**: situar el curso, diagnosticar el grupo, romper el hielo.

Empieza con una pregunta abierta: *"¿Cuántos de vosotros habéis usado IA en el trabajo esta semana?"*. Cuenta a mano alzada. Después: *"¿Cuántos sabéis exactamente qué hace internamente?"*. La diferencia entre ambas manos es la razón de ser de este curso.

Presenta el curso brevemente:
- Tres sesiones.
- Caso transversal.
- Producto final: plan de auditoría.
- Tu enfoque: técnico riguroso, pero traducido.

Diagnóstico rápido (5 min): pregunta perfil profesional (auditor / técnico / gestor / docente / otro), experiencia con IA, expectativas. Anota en pizarra para gestionar el resto del curso.

### Bloque 1: Industria 5.0 y panorama tecnológico (16:15–17:00)

**Mensaje central**: la IA no es solo tecnología, es un fenómeno sociotécnico. Auditar IA exige entender ambas dimensiones.

**Punto de atención**: si hay auditores tradicionales, marca aquí la diferencia con auditorías clásicas. La IA aprende, evoluciona, se degrada. No es estática.

**Pregunta detonadora**: *"Si un sistema de IA empeora con el tiempo sin que nadie lo toque, ¿qué tipo de control hay que auditar?"*. Respuesta esperada: monitorización de deriva. Si no sale, dirígelos.

**Ejemplo concreto que funciona bien**: Amazon retiró en 2018 un sistema de filtrado de CVs por sesgo de género. Caso clásico, todos lo entienden, ilustra varias cosas a la vez (sesgo, ciclo de vida, decisión de retirada).

### Bloque 2: Técnicas, algoritmos, modelos y ciclo de vida (17:00–17:45)

**Mensaje central**: distintos tipos de IA tienen distintos perfiles de riesgo. El auditor adapta la metodología.

**Punto crítico**: si tienes técnicos en sala, no te metas en profundidad matemática. Si te insisten, ofrece sesión informal después. El curso es de auditoría, no de ML.

**Riesgo de gestión del tiempo**: aquí puedes alargarte con facilidad. Recórtate por el lado de los algoritmos concretos y centra el tiempo en el **ciclo de vida**, que es lo que se va a auditar.

**Demostración (5 min)**: comparte pantalla y muestra un ejemplo de SHAP o LIME sobre un modelo simple. No para que aprendan a hacerlo, sino para que vean cómo se ve una explicación.

### Pausa (17:45–18:00)

Aprovecha para conversaciones individuales. Suele aflorar aquí información valiosa sobre las expectativas reales del grupo.

### Bloque 3: Principios éticos (18:00–18:45)

**Mensaje central**: los principios HLEG no son filosofía abstracta, son **criterios auditables**.

**Estrategia didáctica**: para cada principio, presenta (a) definición, (b) cómo se mide, (c) qué evidencia busca el auditor. No te quedes en lo conceptual.

**Pregunta detonadora**: *"¿Pueden todos los principios cumplirse simultáneamente?"*. Lleva a la discusión sobre los trade-offs (privacidad vs. equidad, transparencia vs. seguridad). Esto eleva el debate y muestra madurez del campo.

**Cita útil**: Friedler, Scheidegger y Venkatasubramanian (2016) demostraron formalmente que ciertas definiciones de equidad son matemáticamente incompatibles. Suele impresionar y genera confianza en el profesor.

### Bloque 4: Explicabilidad, generativa, datos sintéticos (18:45–19:30)

**Mensaje central**: la explicabilidad es un requisito derivado, no un capricho.

**Demostración recomendada**: si puedes, enseña en directo cómo un LLM "alucina" y luego cómo se le puede inducir a marcar incertidumbre. Esto conecta con la auditoría de sistemas conversacionales.

**Nota sobre datos sintéticos**: a los auditores tradicionales esto les sorprende. Insiste en que los datos sintéticos **no son una panacea de privacidad**: si el modelo generador memoriza, los sintéticos filtran.

### Taller 1: Inventario en Centro Lingua (19:30–20:00)

**Objetivo**: aplicar lo aprendido a un caso concreto, conocer a los compañeros.

**Material**: ficha del caso (Anexo) + plantilla de inventario.

**Consigna**: *"En parejas, identificad qué sistemas de IA tiene Centro Lingua según el caso, clasificadlos por tipo de IA y por fase del ciclo de vida, y proponed tres preguntas que haríais al director del centro para completar el inventario."*

**Cierre (5 min)**: pídeles que compartan una pregunta cada pareja. No analices a fondo, solo recoge. Lo retomarás mañana.

**Tarea para casa (opcional)**: leer el dossier completo S1 y echar un vistazo a la estructura del AI Act.

---

## SESIÓN 2 — 10 de septiembre

### Apertura y conexión (16:00–16:15)

Repaso rápido: *"Ayer hablamos de qué es la IA y su ciclo de vida. Hoy nos toca lo difícil: qué puede fallar y qué dice la ley."*

Pregunta a una o dos parejas qué descubrieron en el taller de cierre de S1. Conecta con riesgos.

### Bloque 1: Riesgos operativos (16:15–17:15)

**Mensaje central**: los riesgos de IA son específicos. No se reducen a riesgos de TI.

**Estrategia**: usa la taxonomía del dossier pero **adáptala con ejemplos vivos**:
- Sesgo: Amazon RRHH.
- Robustez: el panda que se confunde con un gibón al añadir ruido imperceptible (clásico).
- Shadow AI: estudio reciente que muestra que >70% de empleados usan IA generativa fuera de canales oficiales.
- Inyección de prompts: muestra un ejemplo si puedes.

**Ejercicio rápido (15 min)**: en grupos pequeños, identifican el riesgo más probable y el de mayor impacto en sus respectivas organizaciones. Puesta en común.

### Bloque 2: AI Act (17:15–18:00)

**Mensaje central**: el AI Act es la columna vertebral normativa. Hay que conocer su arquitectura, no memorizarlo entero.

**Estrategia didáctica**: dibuja en pizarra la pirámide de riesgos. Llénala con ejemplos preguntando al grupo:
- *"¿Reconocimiento emocional en clase?"* → prohibido.
- *"¿Sistema de admisión universitaria?"* → alto riesgo.
- *"¿Chatbot informativo?"* → riesgo limitado.
- *"¿Recomendador de canciones?"* → riesgo mínimo.

**Punto crítico**: explica que los plazos de aplicación están escalonados y que **ya hay obligaciones en vigor** (prácticas prohibidas y alfabetización, desde febrero 2025).

**Cuando se aplica formación obligatoria** (art. 4): subraya esto. Es la base para vender la formación interna.

### Pausa (18:00–18:15)

### Bloque 3: ISO 42001, 23894, 24368 [2 profes] (18:15–19:15)

**Mensaje central**: ISO 42001 es a la IA lo que ISO 27001 a la seguridad. Estructura el sistema de gestión.

**Con dos profesores**: idealmente, uno explica la estructura ISO 42001 y el otro hace el paralelismo con 23894 (riesgos) y 24368 (ética). Repartíos el tiempo 30/30.

**Si vas solo (en caso de no contar con el segundo docente)**: dedica 35 min a 42001 y 25 min a las otras dos en conjunto.

**Recurso útil**: una tabla en pizarra con tres columnas (42001 / 23894 / 24368) y filas por concepto (objeto, alcance, certificable, valor para auditor).

**Taller breve (10 min)**: cada pareja recibe una cláusula concreta de ISO 42001 y la traduce a "qué evidencia buscaría yo si fuera auditor".

### Bloque 4: Marcos de auditoría y tipos de auditor [2 profes] (19:15–19:45)

**Mensaje central**: hay muchas formas de auditar IA. Conviene combinar enfoques.

**Discusión guiada**: ¿auditor interno o externo? Saca a relucir las ventajas y limitaciones. Muestra que **no se sustituyen, se complementan**.

**Nota institucional**: en España, la AESIA está construyendo guías. ENAC acredita certificadores de ISO 42001. Esto es información práctica útil.

### Taller 2: Clasificación de riesgos en Centro Lingua (19:45–20:00)

**Consigna**: *"Partiendo del inventario de ayer, clasificad cada sistema según el AI Act (prohibido / alto / limitado / mínimo) y justificadlo."*

Recoge resultados. Habrá divergencias: aprovecha para mostrar las zonas grises.

**Tarea para casa**: leer dossier S2 antes de mañana.

---

## SESIÓN 3 — 11 de septiembre

### Apertura (16:00–16:15)

Repaso rápido. Anuncia que hoy es **día de práctica intensiva**. El producto del día es un plan de auditoría completo para Centro Lingua.

### Bloque 1: Auditoría del ciclo de vida + gobernanza (16:15–17:00)

**Mensaje central**: una auditoría seria recorre todo el ciclo de vida y evalúa la gobernanza, no solo el modelo.

**Recurso visual recomendado**: el organigrama de gobernanza del dossier (Comité dirección → Comité IA → AI Officer / DPO → equipos). Explícalo paso a paso.

**Punto crítico**: el rol del comité de empresa / representación legal de trabajadores. En sistemas que afecten al trabajo (gestión de personas, evaluación, asignación), hay derechos de información y consulta. Esto es importante en el contexto español.

### Bloque 2: Liderazgo, roles, gestión de procesos y riesgos (17:00–17:45)

**Mensaje central**: la auditoría no juzga personas, juzga sistemas. Pero esos sistemas tienen responsables.

**Estrategia**: para cada rol del dossier, plantea una pregunta concreta del auditor:
- *"¿Quién aprueba un nuevo caso de uso de IA?"* → busca al Comité.
- *"¿Quién se asegura de que los datos personales se traten conforme a RGPD?"* → DPO.
- *"¿Quién opera el override humano en este sistema?"* → operador final.

**Pregunta provocadora útil**: *"Si nadie responde a una de estas preguntas, ¿qué tipo de no conformidad es?"*. Lleva a la idea de gobernanza ausente como riesgo de entidad.

### Pausa (17:45–18:00)

### Bloque 3: Taller integrador [2 profes] (18:00–19:00)

**El núcleo práctico del curso**.

**Material**: ficha final del caso Centro Lingua + plantilla de plan de auditoría.

**Consigna**: *"Vuestro grupo recibe el encargo de auditar Centro Lingua. Tenéis una hora para preparar el esqueleto del plan de auditoría: alcance, criterios, fases, métodos, entregables, cronograma, equipo. Al final, lo presentaréis al resto."*

**Con dos profesores**: cada uno tutoriza dos o tres grupos rotando. Ofreced pistas más que respuestas.

**Si vas solo**: paseo continuo entre grupos. Resiste la tentación de dar respuestas; redirige con preguntas.

**Errores frecuentes en este taller** (anticípalos):
- Plan demasiado ambicioso para los plazos.
- Olvidan el aspecto laboral / consulta a representación trabajadores.
- Confunden auditoría con consultoría (recomiendan en vez de evaluar).
- No clarifican criterios (¿auditan contra ISO 42001? ¿AI Act? ¿interno?).

### Bloque 4: Documentación, no conformidades, comunicación [2 profes] (19:00–19:30)

**Mensaje central**: una auditoría no comunicada es inútil. La forma del informe es tan importante como el fondo.

**Mostrar**: un ejemplo de hallazgo bien formulado vs. mal formulado.

> **Mal**: "El sistema no es muy transparente."
> **Bien**: "No se ha localizado documentación técnica del sistema de evaluación automática conforme al Anexo IV del AI Act (criterios 1.4, 2.1, 2.3). Riesgo: incumplimiento normativo, imposibilidad de explicar decisiones a personas afectadas. Recomendación: elaborar model card y datasheet en plazo de 90 días."

**Plantilla de informe**: muéstrala estructurada. Que vean dónde encaja cada cosa.

### Presentación de planes, evaluación y cierre (19:30–20:00)

Cada grupo presenta su plan en 4-5 min. Tú y el otro profesor (si está) hacéis 1 feedback constructivo por grupo.

**Cierre**:
- Recapitulación: ¿qué nos llevamos? Pide tres palabras a cada uno.
- Próximos pasos: bibliografía, certificaciones, comunidades profesionales.
- Cuestionario de verificación (entregable, 20% nota).
- Encuesta de satisfacción.
- Agradecimiento.

---

## Anexo: gestión de situaciones difíciles

### "Yo no soy auditor, ¿esto me sirve?"
Sí, porque toda persona implicada en procesos de IA es susceptible de ser auditada. Conocer la auditoría es saber qué te van a preguntar y por qué.

### "Esto va a quedar obsoleto en seis meses con los avances de la IA"
La tecnología sí evoluciona rápido. Los **principios de auditoría** son más estables: rigor metodológico, gestión de riesgos, gobernanza, transparencia. Eso es lo que se enseña aquí.

### "¿Y si la empresa no quiere auditarse?"
Hay obligaciones legales (AI Act lo hace obligatorio para alto riesgo). Más allá: presión del mercado, requisitos de clientes, riesgo reputacional, riesgo de litigio.

### "ChatGPT/Claude me hace mejor el informe"
Sí, en parte. Pero genera contenido plausible, no garantiza rigor profesional. La responsabilidad sigue siendo del auditor, no de la herramienta. Y conviene declarar el uso de IA generativa en la metodología (coherencia con lo que auditamos).

### Conflicto entre participantes
Habrá momentos en que un auditor tradicional y un técnico no se entiendan. Aprovéchalo: pide al técnico que explique lo que ha dicho en términos para el otro. Es justo el tipo de comunicación que la auditoría exige.

---

## Anexo: lectura mínima del docente antes del curso

Si no tienes tiempo de leer todo lo del dossier, prioriza:

1. **AI Act (Reglamento 2024/1689)**: al menos artículos 3 (definiciones), 5 (prohibidas), 6 (alto riesgo), 16-29 (obligaciones de proveedores e implementadores), 50 (transparencia), 95 (códigos de conducta).
2. **ISO 42001:2023**: Resumen y Anexo A.
3. **NIST AI RMF 1.0**: capítulo introductorio.
4. **HLEG ALTAI**: lista de preguntas (te servirá de cuestionario).

---

**[|]**
