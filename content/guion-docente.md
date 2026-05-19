# Guion docente — Auditoría de Sistemas de IA

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

"Centro Lingua" es un caso ficticio inspirado en centros reales. Útil para ti como ensayo metodológico. **No reveles la inspiración real al alumnado**: debe parecer un ejercicio académico.

### Material para imprimir (mínimo)

- Plantilla de carta de encargo (1 pp.)
- Matriz de riesgos vacía (1 pp.)
- Esquema del AI Act (1 pp.)
- Matriz de dependencias de proveedores (1 pp.)
- Ficha de dilema del algoritmo (1 pp.)
- Ficha del caso transversal por entrega (3 × 2 pp.)

Todo lo demás, digital.

---

## SESIÓN 1 — 9 de septiembre

**Título**: Disrupción algorítmica y nueva lógica de la utilidad

### Apertura (16:00–16:15)

**Objetivo**: situar el curso, diagnosticar el grupo, romper el hielo.

Empieza con una pregunta abierta: *"¿Cuántos de vosotros habéis usado IA en el trabajo esta semana?"*. Cuenta a mano alzada. Después: *"¿Cuántos sabéis exactamente qué hace internamente?"*. La diferencia entre ambas manos es la razón de ser de este curso.

Presenta el curso brevemente:
- Cuatro sesiones consecutivas (miércoles).
- Caso transversal.
- Producto final: plan de auditoría completo.
- Tu enfoque: técnico riguroso, pero traducido.

Diagnóstico rápido (5 min): pregunta perfil profesional (auditor / técnico / gestor / docente / otro), experiencia con IA, expectativas. Anota en pizarra para gestionar el resto del curso.

### Bloque 1: NLPUE — Nuevo Problema de Lógica de Utilidad y Ética (16:15–17:00)

**Mensaje central**: la IA no es solo tecnología nueva, es un **cambio de paradigma** en cómo tomamos decisiones. Auditar IA exige entender que estamos delegando juicios morales y prácticos a algoritmos.

**Punto de atención**: si hay auditores tradicionales, marca aquí la ruptura con auditorías clásicas. La IA no es estática: aprende, evoluciona, se degrada.

**Pregunta detonadora**: *"Si un algoritmo rechaza un CV sin que nadie sepa por qué, ¿qué tipo de responsabilidad hay que auditar?"*. Respuesta esperada: agencia, atribución, transparencia. Si no sale, dirígelos.

**Ejemplo concreto que funciona bien**: Amazon retiró en 2018 un sistema de filtrado de CVs por sesgo de género. Caso clásico, todos lo entiende, ilustra varias cosas a la vez (sesgo, opacidad, decisión de retirada).

### Bloque 2: Los 4 dilemas del algoritmo (17:00–17:45)

**Mensaje central**: todo sistema de IA plantea cuatro tensiones que no tienen solución técnica perfecta. El auditor las identifica, las cuantifica y las comunica.

**Estrategia didáctica**: para cada dilema, presenta (a) definición, (b) ejemplo real, (c) cómo se audita.

1. **Agencia**: *"¿Quién decide, el humano o el algoritmo?"* → Override humano, responsibility gaps.
2. **Atribución**: *"¿A quién atribuyo el resultado?"* → Causalidad difusa, opacidad.
3. **Transparencia**: *"¿Puedo explicarlo?"* → Explicabilidad vs. complejidad.
4. **Sesgo**: *"¿Es justo?"* → Equidad, no discriminación.

**Pregunta detonadora**: *"¿Pueden cumplirse simultáneamente transparencia y privacidad?"*. Lleva a la discusión sobre trade-offs legítimos.

**Cita útil**: Friedler, Scheidegger y Venkatasubramanian (2016) demostraron formalmente que ciertas definiciones de equidad son matemáticamente incompatibles. Suele impresionar y genera confianza en el profesor.

### Pausa (17:45–18:00)

Aprovecha para conversaciones individuales. Suele aflorar aquí información valiosa sobre las expectativas reales del grupo.

### Bloque 3: Enfoques regulatorios comparados (18:00–18:45)

**Mensaje central**: no hay un marco global único. UE, EEUU y China tienen enfoques distintos. El auditor necesita conocer las diferencias si trabaja en contexto internacional.

**Estrategia**: tabla comparativa en pizarra.

| Dimensión | UE | EEUU | China |
|-----------|----|----|-------|
| Enfoque | Reglamento (AI Act) | Sectorial + ejecutiva | Regulación sectorial estricta |
| Riesgo | Clasificación por niveles | NIST AI RMF (voluntario) | Énfasis en contenido y seguridad |
| Sanciones | Hasta 6% facturación | Variable | severas |

**Punto crítico**: el AI Act es **extraterritorial**. Cualquier proveedor de IA que quiera operar en UE, aunque esté en EEUU o China, tiene que cumplir. Esto cambia la auditoría de proveedores globales.

### Bloque 4: IA generativa como categoría específica (18:45–19:30)

**Mensaje central**: la IA generativa añade una capa de riesgo: **creatividad sin control**.

**Estrategia**: diferenciar IA clásica vs. generativa.

- IA clásica: predice, clasifica.
- IA generativa: crea contenido nuevo (texto, imágenes, audio, video).

**Riesgos específicos de genAI**:
- Alucinaciones (inventar facts)
- Copyright (entrenamiento con obras protegidas)
- Deep-fakes (suplantación identidad)
- Fuga de información (prompt leakage)
- Prompt injection (ataques a través del prompt)

**Ejercicio rápido (10 min)**: en parejas, identifican un caso de uso de IA generativa en sus organizaciones y dos riesgos específicos. Puesta en común.

### Taller 1: Dilemas del algoritmo en Centro Lingua (19:30–20:00)

**Objetivo**: aplicar los 4 dilemas a un caso concreto.

**Material**: ficha del caso + plantilla de dilema del algoritmo.

**Consigna**: *"En parejas, tomad dos sistemas de IA del caso Centro Lingua y analizad para cada uno: (1) ¿Hay override humano? ¿Quién? ¿Cómo?, (2) ¿A quién atribuirías la responsabilidad si falla?, (3) ¿Es explicable? ¿A quién?, (4) ¿Qué riesgo de sesgo ves?"*

**Cierre (5 min)**: pídeles que compartan un dilema cada pareja. No analices a fondo, solo recoge. Lo retomarás en S2.

**Tarea para casa (opcional)**: leer el dossier completo S1.

---

## SESIÓN 2 — 16 de septiembre

**Título**: Marco regulatorio y sistemas de gestión

### Apertura y conexión (16:00–16:15)

Repaso rápido: *"La semana pasada hablamos de NLPUE, los 4 dilemas y cómo UE/EEUU/China regulan de forma distinta. Hoy entramos en el meollo normativo: qué exige la ley europea y cómo se articula con los sistemas de gestión."*

Pregunta a una o dos parejas qué dilemas identificaron en el taller de S1. Conecta con regulación.

### Bloque 1: AI Act — La pirámide del riesgo (16:15–17:15)

**Mensaje central**: el AI Act es la columna vertebral normativa en Europa. Hay que conocer su arquitectura, no memorizarlo entero.

**Estrategia didáctica**: dibuja en pizarra la pirámide de riesgos. Llénala con ejemplos preguntando al grupo:
- *"¿Reconocimiento emocional en clase?"* → prohibido.
- *"¿Sistema de admisión universitaria?"* → alto riesgo.
- *"¿Chatbot informativo?"* → riesgo limitado.
- *"¿Recomendador de canciones?"* → riesgo mínimo.

**Punto crítico**: explica que los plazos de aplicación están escalonados 2025–2027 y que **ya hay obligaciones en vigor** (prácticas prohibidas y alfabetización, desde agosto 2024 / febrero 2025).

**Obligaciones de alto riesgo (Anexo III)**: enfócate en lo auditables:
- Sistema de gestión de calidad (art. 17)
- Registro técnico (art. 18)
- Transparencia y suministro de información (art. 13)
- Supervisión humana (art. 14)
- Robustez, precisión y seguridad (art. 15)
- Garantías de gobernanza (art. 25)

### Bloque 2: ISO/IEC 42001 — Sistema de Gestión de IA (17:15–18:00)

**Mensaje central**: ISO 42001 es a la IA lo que ISO 27001 a la seguridad. Estructura el sistema de gestión. Es **certificable**.

**Estrategia**: recorre las 10 cláusulas PDCA:

1. Planificación (alcance, partes interesadas, riesgos)
2. Liderazgo (política, roles, responsabilidades)
3. Apoyo (recursos, competencia, información)
4. Operación (control de procesos, planificación cambios)
5. Evaluación del desempeño (seguimiento, medición, auditoría interna)
6. Mejora (no conformidad, corrección, mejora continua)

**Punto crítico**: el Anexo A contiene controles específicos. No es obligatorio seguirlos todos, pero hay que justificar los que no se aplican.

**Ejercicio rápido (10 min)**: cada pareja recibe una cláusula concreta de ISO 42001 y la traduce a "qué evidencia buscaría yo si fuera auditor". Puesta en común.

### Pausa (18:00–18:15)

### Bloque 3: ISO/IEC 23894 — Gestión de riesgos de IA (18:15–19:00)

**Mensaje central**: ISO 23894 es la adaptación de ISO 31000 (gestión de riesgos) a IA. Ofrece un marco para identificar, analizar y evaluar riesgos específicos de IA.

**Estrategia**: presenta el proceso de gestión de riesgos en 7 pasos:
1. Comunicación y consulta
2. Establecimiento del contexto
3. Identificación de riesgos
4. Análisis de riesgos
5. Evaluación de riesgos
6. Tratamiento de riesgos
7. Seguimiento y revisión

**Diferencia con riesgos clásicos**: los riesgos de IA son específicos (sesgo, opacidad, deriva, shadow AI). No se reducen a riesgos de TI.

**Matriz de evaluación**: muestra la tabla Probabilidad × Impacto que ya conocen de auditoría tradicional. Insiste en que es la herramienta básica, pero con fuentes de riesgo específicas.

### Bloque 4: NIST AI RMF + Ciclos de vida (19:00–19:45)

**Mensaje central**: NIST AI RMF complementa los marcos europeos. Es voluntario, pero muy influyente. Introduce la idea de **ciclo de vida** como marco de auditoría.

**Estrategia**: dibuja las 7 fases del ciclo de vida (ISO/IEC 22989 + NIST):
1. Planificación
2. Datos
3. Entrenamiento
4. Validación
5. Despliegue
6. Operación
7. Retirada

**Punto crítico**: la auditoría no se limita al momento del despliegue. Cada fase tiene controles específicos. Por ejemplo, retirada: ¿cómo se da de baja un modelo? ¿Qué pasa con los datos entrenados?

### Taller 2: Clasificación de riesgos en Centro Lingua (19:45–20:00)

**Consigna**: *"Partiendo de los sistemas del caso Centro Lingua, clasificad cada uno según el AI Act (prohibido / alto / limitado / mínimo) y justificadlo usando criterios del Anexo III."*

Recoge resultados. Habrá divergencias: aprovecha para mostrar las zonas grises del AI Act.

**Tarea para casa**: leer dossier S2 antes de la próxima sesión.

---

## SESIÓN 3 — 23 de septiembre

**Título**: Riesgos, competitividad y ciberseguridad

### Apertura (16:00–16:15)

Repaso rápido. Anuncia que hoy es **día de profundización en riesgos específicos**: IA generativa, concentración de mercado, dependencia de proveedores y ciberseguridad.

Pregunta: *"¿Cuántos de vosotros usáis ChatGPT o similar en el trabajo? ¿Sabéis qué modelo es? ¿Quién lo hospeda?"*. La respuesta suele ser "no". Eso es vendor lock-in.

### Bloque 1: IA generativa — riesgos específicos (16:15–17:00)

**Mensaje central**: la IA generativa añade riesgos que no existen en IA clásica. El auditor necesita identificarlos y evaluarlos.

**Estrategia**: estructura los riesgos en categorías:

1. **Alucinaciones**: inventa facts plausible-sounding.
2. **Copyright**: entrenamiento con obras protegidas sin permiso.
3. **Deep-fakes**: suplantación de identidad (voz, video).
4. **Fuga de información**: prompt leakage, datos corporativos en modelos públicos.
5. **Prompt injection**: ataques a través del prompt.

**Ejemplos reales que funcionan**:
- Abogado USA usa ChatGPT, cita casos que no existen (alucinación).
- Deep-fake de CEO de empresa pide transferencia urgente (fraude).
- Empleo Samsung sube código propietario a ChatGPT (fuga info).

**Punto crítico**: el AI Act dedica obligaciones específicas a GPAI (General Purpose AI) en Capítulo V. Los modelos base tienen obligaciones de documentación y derechos de autor.

### Bloque 2: Dimensión competitiva y de mercado (17:00–17:45)

**Mensaje central**: la concentración de proveedores de IA añade una **dimensión competitiva** a la auditoría. Vendor lock-in es riesgo estratégico.

**Estrategia**: presenta el mercado de IA:
- Pocos proveedores de modelos base (OpenAI, Google, Meta, Anthropic...).
- Fusiones y adquisiciones (ej. Microsoft/OpenAI).
- Dependencia de ecosistema (cloud + compute + modelo).

**Preguntas del auditor**:
- *"¿Qué pasa si el proveedor sube precios un 300%?"*
- *"¿Qué pasa si el proveedor es adquirido por un competidor?"*
- *"¿Podemos migrar a otro proveedor? ¿A qué coste?"*
- *"¿Tenemos cláusulas de escape en el contrato?"*

**Matriz de dependencias de proveedores**: preséntala como herramienta. Explica cómo se audita: nivel de dependencia (alto/medio/bajo), coste de salida, planes de contingencia.

### Pausa (17:45–18:00)

### Bloque 3: Ciberseguridad — IA ofensiva y defensiva (18:00–18:45)

**Mensaje central**: la IA es tanto **víctima** (sistemas de IA que atacan) como **agresor** (IA usada para atacar). El auditor cubre ambas dimensiones.

**Estrategia**: divide en dos bloques.

**IA ofensiva** (ataques con IA):
- Phishing automatizado (LLMs generan correos convincentes).
- Deep-fakes para ingeniería social.
- Malware generado por IA.
- Prompt injection en sistemas de producción.

**IA defensiva** (protección de sistemas de IA):
- Adversarial attacks (ruido imperceptible confunde al modelo).
- Model inversion (extraer datos de entrenamiento).
- Membership inference (saber si un dato estaba en training).
- Data poisoning (introducir datos maliciosos).

**Punto crítico**: estos ataques no son teóricos. Hay ejemplos reales. El auditor pregunta: *"¿Se han testado ataques adversariales? ¿Con qué frecuencia?"*

### Bloque 4: Taller integrador — Matriz de dependencias (18:45–19:30)

**Objetivo**: aplicar la dimensión competitiva al caso Centro Lingua.

**Material**: ficha del caso + plantilla de matriz de dependencias.

**Consigna**: *"Centro Lingua depende de varios proveedores de IA. Identificad: (1) ¿Qué proveedores?, (2) ¿Nivel de dependencia (alto/medio/bajo)?, (3) ¿Coste estimado de cambio?, (4) ¿Plan de contingencia?"*

**Cierre (15 min)**: puesta en común de matrices. Discusión sobre riesgos estratégicos que quizás no habían considerado.

**Tarea para casa**: leer dossier S3 antes de la próxima sesión.

---

## SESIÓN 4 — 30 de septiembre

**Título**: Práctica auditora integral

### Apertura (16:00–16:15)

Repaso rápido. Anuncia que hoy es **día de práctica intensiva**. El producto del día es un plan de auditoría completo para Centro Lingua, integrando todo lo aprendido: técnica, normativa, ética y competitividad.

### Bloque 1: Metodología de auditoría de IA (16:15–17:00)

**Mensaje central**: una auditoría seria sigue una metodología estructurada. No es improvisación.

**Estrategia**: presenta las 6 fases de la auditoría:
1. **Carta de encargo** (definir alcance, criterios, entregables)
2. **Planificación** (equipo, cronograma, métodos)
3. **Ejecución** (análisis documental, entrevistas, pruebas técnicas)
4. **Hallazgos** (identificación, clasificación, evidencia)
5. **Informe** (redacción, revisión, presentación)
6. **Seguimiento** (verificación de acciones correctoras)

**Punto crítico**: cada fase produce deliverables. La auditoría no es solo el informe final.

### Bloque 2: Auditoría del ciclo de vida + gobernanza (17:00–17:45)

**Mensaje central**: una auditoría seria recorre todo el ciclo de vida y evalúa la gobernanza, no solo el modelo.

**Recurso visual recomendado**: el organigrama de gobernanza (Comité dirección → Comité IA → AI Officer / DPO → equipos). Explícalo paso a paso.

**Punto crítico**: el rol del comité de empresa / representación legal de trabajadores. En sistemas que afecten al trabajo (gestión de personas, evaluación, asignación), hay derechos de información y consulta. Esto es importante en el contexto español.

### Pausa (17:45–18:00)

### Bloque 3: Taller integrador — Plan de auditoría completo (18:00–19:15)

**El núcleo práctico del curso**.

**Material**: ficha final del caso Centro Lingua + plantilla de plan de auditoría.

**Consigna**: *"Vuestro grupo recibe el encargo de auditar Centro Lingua. Tenéis 75 minutos para preparar el esqueleto del plan de auditoría: alcance, criterios, fases, métodos, entregables, cronograma, equipo. Debe incluir las tres dimensiones: técnica, ética y competitiva. Al final, lo presentaréis al resto."*

**Errores frecuentes en este taller** (anticípalos):
- Plan demasiado ambicioso para los plazos.
- Olvidan el aspecto laboral / consulta a representación trabajadores.
- Confunden auditoría con consultoría (recomiendan en vez de evaluar).
- No clarifican criterios (¿auditan contra ISO 42001? ¿AI Act? ¿interno?).
- **Olvidan la dimensión competitiva** (vendor lock-in, concentración).
- No incluyen ciberseguridad (ataques adversariales, prompt injection).

**Tu rol durante el taller**: paseo continuo entre grupos. Resiste la tentación de dar respuestas; redirige con preguntas. Ofreced pistas más que respuestas.

### Bloque 4: Comunicación triple dimensión + informe (19:15–19:45)

**Mensaje central**: una auditoría no comunicada es inútil. La forma del informe es tan importante como el fondo. Y ahora hay **tres dimensiones** que comunicar: técnica, ética y competitiva.

**Estrategia**: muestra un ejemplo de hallazgo bien formulado vs. mal formulado.

> **Mal**: "El sistema no es muy transparente."
>
> **Bien (técnica)**: "No se ha localizado documentación técnica del sistema de evaluación automática conforme al Anexo IV del AI Act (criterios 1.4, 2.1, 2.3). Riesgo: incumplimiento normativo, imposibilidad de explicar decisiones a personas afectadas. Recomendación: elaborar model card y datasheet en plazo de 90 días."
>
> **Bien (ética)**: "El sistema de evaluación de profesores no tiene prueba formal de ausencia de sesgo de género. Riesgo: discriminación indirecta, reclamaciones, daño reputacional. Recomendación: auditoría de sesgo con dataset representativo antes de próxima convocatoria."
>
> **Bien (competitiva)**: "Centro Lingua depende de un único proveedor de LLM sin cláusula de escape. Coste de migración estimado: 6 meses + 150k€. Riesgo estratégico: vendor lock-in. Recomendación: negociar cláusula de portabilidad + plan de contingencia con proveedor alternativo."

**Plantilla de informe**: muéstrala estructurada. Que vean dónde encaja cada cosa.

### Presentación de planes, evaluación y cierre (19:45–20:00)

Cada grupo presenta su plan en 3-4 min. Tú haces feedback constructivo rápido por grupo.

**Cierre**:
- Recapitulación: ¿qué nos llevamos? Pide tres palabras a cada uno.
- Próximos pasos: bibliografía, certificaciones (ISO 42001 lead auditor), comunidades profesionales (AESIA, ENAC).
- Cuestionario de verificación (entregable).
- Agradecimiento.

---

## Anexo: gestión de situaciones difíciles

### "Yo no soy auditor, ¿esto me sirve?"
Sí, porque toda persona implicada en procesos de IA es susceptible de ser auditada. Conocer la auditoría es saber qué te van a preguntar y por qué.

### "Esto va a quedar obsoleto en seis meses con los avances de la IA"
La tecnología sí evoluciona rápido. Los **principios de auditoría** son más estables: rigor metodológico, gestión de riesgos, gobernanza, transparencia, competitividad. Eso es lo que se enseña aquí.

### "¿Y si la empresa no quiere auditarse?"
Hay obligaciones legales (AI Act lo hace obligatorio para alto riesgo). Más allá: presión del mercado, requisitos de clientes, riesgo reputacional, riesgo de litigio.

### "ChatGPT/Claude me hace mejor el informe"
Sí, en parte. Pero genera contenido plausible, no garantiza rigor profesional. La responsabilidad sigue siendo del auditor, no de la herramienta. Y conviene declarar el uso de IA generativa en la metodología (coherencia con lo que auditamos).

### Conflicto entre participantes
Habrá momentos en que un auditor tradicional y un técnico no se entiendan. Aprovéchalo: pide al técnico que explique lo que ha dicho en términos para el otro. Es justo el tipo de comunicación que la auditoría exige.

### "¿Por qué 16 horas? No podría ser 12?"
Este curso se ha diseñado en 16 horas porque el campo ha crecido. Hace 2 años, 12 horas bastaban para cubrir lo básico. Hoy hay que añadir: IA generativa (4h), dimensión competitiva (2h), ciberseguridad (1h), enfoques regulatorios comparados (1h). Son contenidos nuevos que no existían en los cursos iniciales.

---

## Anexo: lectura mínima del docente antes del curso

Si no tienes tiempo de leer todo lo del dossier, prioriza:

1. **AI Act (Reglamento UE 2024/1689)**: al menos artículos 3 (definiciones), 5 (prohibidas), 6 (alto riesgo), 16-29 (obligaciones), 50 (transparencia), 95 (códigos de conducta).
2. **ISO/IEC 42001:2023**: Resumen y Anexo A.
3. **ISO/IEC 23894:2023**: Capítulos 4-7.
4. **NIST AI RMF 1.0**: capítulo introductorio.
5. **Estudio de Prospeción Tecnológica en IA (Ministerio de Economía, 2025)**: al menos executive summary y capítulos de regulación comparada.

---

**[|]**
