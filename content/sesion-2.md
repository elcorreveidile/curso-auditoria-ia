# Dossier del alumno — Sesión 2

## Riesgos operativos, marcos regulatorios y normativos

---

## 1. Riesgos operativos asociados a sistemas de IA

### 1.1 Taxonomía de riesgos

Adaptado de **NIST AI RMF** e **ISO/IEC 23894**:

#### Riesgos técnicos
- **Rendimiento insuficiente** del modelo en producción.
- **Deriva de datos y de concepto** (data/concept drift).
- **Falta de robustez** ante entradas anómalas o adversariales.
- **Dependencias críticas** de proveedores externos (lock-in).
- **Deuda técnica** acumulada en pipelines mal documentados.

#### Riesgos de datos
- **Sesgo en los datos de entrenamiento** (selección, etiquetado, histórico).
- **Datos insuficientes o no representativos**.
- **Filtración de datos personales** (data leakage).
- **Calidad pobre**: ruido, valores faltantes, duplicados.

#### Riesgos éticos y sociales
- **Discriminación** directa o indirecta de grupos protegidos.
- **Erosión de la agencia humana** (sobreconfianza en la máquina).
- **Opacidad** que impide la rendición de cuentas.
- **Desplazamiento laboral** sin acompañamiento.

#### Riesgos legales y reputacionales
- **Incumplimiento normativo** (AI Act, RGPD, sectorial).
- **Litigios** por daños causados por el sistema.
- **Daño reputacional** por incidentes públicos.
- **Sanciones** administrativas.

#### Riesgos de seguridad
- **Ataques adversariales** (manipulación de inputs).
- **Envenenamiento de datos** de entrenamiento.
- **Robo del modelo** (model extraction).
- **Inyección de prompts** en sistemas generativos.
- **Inferencia de membresía** (saber si un dato concreto formó parte del entrenamiento).

#### Riesgos organizativos
- **Gobernanza ausente** o difusa.
- **Falta de formación** del personal.
- **Sombra de IA** (*shadow AI*): uso no controlado de IA por empleados.
- **Resistencia organizativa** al cambio.

### 1.2 Evaluación de riesgos: matriz probabilidad × impacto

| | Impacto bajo | Impacto medio | Impacto alto | Impacto crítico |
|---|---|---|---|---|
| **Prob. alta** | Medio | Alto | Crítico | Crítico |
| **Prob. media** | Bajo | Medio | Alto | Crítico |
| **Prob. baja** | Bajo | Bajo | Medio | Alto |
| **Prob. muy baja** | Mínimo | Bajo | Medio | Alto |

Para cada riesgo identificado, el auditor documenta:
- Descripción.
- Causas.
- Consecuencias potenciales.
- Probabilidad e impacto (con justificación).
- Controles existentes.
- Controles propuestos.
- Riesgo residual tras controles.
- Responsable de gestión.

---

## 2. Herramientas y técnicas para la auditoría de cumplimiento

### 2.1 Documentales
- **Análisis de políticas internas** y su alineación con normativa externa.
- **Revisión de contratos** con proveedores de IA.
- **Análisis de registros y logs**.
- **Revisión de documentación técnica** (model cards, datasheets, EIPDs).

### 2.2 Entrevistas y observación
- **Entrevistas estructuradas y semi-estructuradas** con roles clave.
- **Focus groups** por categoría profesional.
- **Observación participante** de procesos.
- **Mystery shopping** en sistemas de cara al usuario.

### 2.3 Pruebas técnicas
- **Análisis estadístico** de datasets (sesgos, calidad, representatividad).
- **Evaluación de equidad** con herramientas como **AI Fairness 360**, **Fairlearn**, **What-If Tool**.
- **Pruebas adversariales** con **ART (Adversarial Robustness Toolbox)**, **CleverHans**.
- **Análisis de explicabilidad** con **SHAP**, **LIME**, **InterpretML**.
- **Red-teaming** específico para LLMs.
- **Análisis de privacidad diferencial** y riesgo de re-identificación.

### 2.4 Cuestionarios estandarizados
- **Cuestionarios de evaluación de madurez** (modelos AI-RMF, COBIT para IA).
- **Cuestionarios de impacto algorítmico** (Algorithmic Impact Assessment).
- **Cuestionarios HLEG** (Trustworthy AI Assessment List - ALTAI).

---

## 3. Marcos regulatorios y normativos

### 3.1 EU AI Act — Reglamento (UE) 2024/1689

Aprobado el 13 de junio de 2024, en vigor desde el 1 de agosto de 2024. Aplicación escalonada:

| Plazo | Aplicación |
|-------|------------|
| **2 febrero 2025** | Prácticas prohibidas (Capítulo II) y alfabetización en IA (art. 4) |
| **2 agosto 2025** | Modelos de uso general (GPAI), gobernanza, sanciones |
| **2 agosto 2026** | Resto del Reglamento (mayoría de obligaciones) |
| **2 agosto 2027** | Sistemas de alto riesgo del Anexo I |

#### Estructura del AI Act

El Reglamento adopta un **enfoque basado en el riesgo**: clasifica los sistemas de IA en cuatro categorías y aplica obligaciones proporcionales.

##### Categoría 1: Riesgo inaceptable (PROHIBIDOS — art. 5)
- Manipulación subliminal o que explote vulnerabilidades.
- *Social scoring* por autoridades públicas.
- Reconocimiento de emociones en lugares de trabajo y educativos (con excepciones médicas y de seguridad).
- Categorización biométrica para inferir raza, opiniones políticas, orientación sexual, etc.
- Identificación biométrica remota en tiempo real en espacios públicos por las fuerzas del orden (con excepciones tasadas).
- Reconocimiento facial mediante *scraping* indiscriminado de internet o CCTV.
- Predicción de criminalidad basada exclusivamente en perfiles.

##### Categoría 2: Alto riesgo (Anexos I y III — Capítulo III)

**Anexo I**: sistemas que son componentes de seguridad de productos ya regulados (juguetes, dispositivos médicos, vehículos, etc.).

**Anexo III**: sistemas en áreas críticas:
1. Identificación biométrica no prohibida.
2. Infraestructuras críticas.
3. **Educación y formación profesional** (incluye sistemas para admisión, evaluación, detección de fraude en exámenes).
4. **Empleo y gestión de trabajadores** (selección, evaluación de desempeño, asignación de tareas).
5. Acceso a servicios esenciales (crédito, seguros, emergencias).
6. Aplicación de la ley.
7. Migración, asilo y control de fronteras.
8. Justicia y procesos democráticos.

Obligaciones para sistemas de alto riesgo:
- **Sistema de gestión de riesgos** continuo.
- **Gobernanza de datos** de calidad.
- **Documentación técnica** completa (Anexo IV).
- **Registros** automáticos (logs).
- **Transparencia** hacia los implementadores.
- **Supervisión humana** efectiva.
- **Precisión, robustez y ciberseguridad**.
- **Sistema de gestión de calidad** (art. 17).
- **Marcado CE** y registro en base de datos UE.
- **Evaluación de conformidad** previa al mercado.

##### Categoría 3: Riesgo limitado
Obligaciones de transparencia (art. 50):
- Informar al usuario cuando interactúa con un chatbot.
- Marcar contenido sintético (deep-fakes, texto generado).

##### Categoría 4: Riesgo mínimo
Sin obligaciones específicas. Códigos de conducta voluntarios.

#### Modelos de uso general (GPAI — Capítulo V)

Obligaciones específicas para proveedores de modelos como GPT, Claude, Gemini:
- Documentación técnica.
- Política de cumplimiento del derecho de autor.
- Resumen del contenido usado para entrenamiento.

Para modelos con **riesgo sistémico** (umbral: 10²⁵ FLOPs de cómputo, presunción reciente revisada anualmente):
- Evaluación del modelo (incl. red-teaming adversarial).
- Evaluación y mitigación de riesgos sistémicos.
- Reporte de incidentes graves.
- Ciberseguridad reforzada.

### 3.3 IA generativa: categoría específica de riesgos

El **Estudio del Ministerio (Vol. 7)** identifica a la IA generativa como una **categoría regulatoria propia**, distinta de la IA clásica. No es "un tipo más de IA": requiere un tratamiento específico.

#### 3.3.1 ¿Qué hace única a la IA generativa?

| Característica | IA clásica | IA generativa |
|----------------|-----------|--------------|
| **Salida** | Predicción (clase, número, categoría) | Creación (texto, imagen, audio, código) |
| **Entrenamiento** | Tarea específica | Generalista (lenguaje, visión, multimodal) |
| **Riesgo principal** | Error de predicción | Alucinación, contenido falso plausible |
| **Copyright** | No aplicable (generalmente) | Crítico: datos de entrenamiento |
| **Deep-fakes** | No aplicable | Riesgo central |
| **Explicabilidad** | Técnicas existentes (LIME, SHAP) | Más difícil (modelos masivos) |

#### 3.3.2 Riesgos específicos identificados en el estudio

| Riesgo | Descripción | Control típico | Pregunta del auditor |
|--------|-------------|----------------|----------------------|
| **Alucinaciones** | Generación de información plausible pero falsa | Filtros de hechos, supervisión humana, verificación cruzada, límites de temperatura | ¿Hay filtros? ¿Supervisión humana en decisiones de alto impacto? |
| **Copyright** | Entrenamiento con contenido protegido sin licencia | Política de origen de datos, cláusulas contractuales, opt-out de creadores | ¿Está documentado el origen de datos de entrenamiento? ¿Hay política de derechos de autor? |
| **Deep-fakes** | Generación de sintético indistinguible de real | Marcas de agua obligatorias (AI Act art. 50), detección de sintético | ¿Se marca el contenido como IA-generado? ¿Hay sistema de detección? |
| **Fuga de información** | El modelo memoriza y reproduce datos sensibles | Differential privacy, tests de membresía, datos de entrenamiento anonimizados | ¿Se han hecho tests de fuga? ¿Hay garantías de privacidad? |
| **Prompt injection** | Manipulación del modelo mediante inputs maliciosos | Sandboxing, filtros de entrada, red-teaming continuo | ¿Hay protocolos contra prompt injection? ¿Se hace red-teaming? |
| **Sesgo de entrenamiento** | Refleja sesgos del corpus (inglés, occidente, masculino) | Diversificación de datos, debiasing, post-procesamiento | ¿Se han medido sesgos demográficos? ¿Hay plan de mitigación? |

#### 3.3.3 Obligaciones específicas del AI Act para GPAI

El AI Act (Capítulo V) establece obligaciones especiales para **modelos de uso general purpose AI (GPAI)**:

**Transparencia obligatoria (art. 53):**
- Documentación técnica del modelo.
- Política de cumplimiento del derecho de autor.
- Resumen detallado del contenido usado para entrenamiento (copyright, fuentes).
- Información sobre el cómputo usado (FLOPs).

**Para modelos con riesgo sistémico (≥10²⁵ FLOPs):**
- Evaluación del modelo (incluyendo red-teaming adversarial sistemático).
- Evaluación y mitigación de riesgos sistémicos (ej. influencia en procesos electorales, polarización).
- Reporte obligatorio de incidentes graves a la Comisión Europea.
- Ciberseguridad reforzada (garantías de estado del arte).
- Modelo de evaluación por la propia Comisión UE.

#### 3.3.4 Para el auditor

**Preguntas clave:**
1. ¿La organización usa modelos GPAI (ChatGPT, Claude, Gemini, Llama) o solo modelos de tarea específica?
2. ¿Hay un marco de gobernanza de prompts? (¿quién aprueba los prompts en producción?)
3. ¿Se informa a los usuarios finales que están interactuando con IA? (AI Act art. 50)
4. ¿Se marca el contenido sintético como "generado por IA"?
5. ¿Hay pruebas de alucinaciones? ¿Cómo se mitigan?
6. ¿Está documentada la política de derechos de autor sobre datos de entrenamiento?

**Ejemplo de hallazgo de auditoría:**
> "El chatbot de atención al cliente usa GPT-4 sin filtros de alucinaciones ni supervisión humana. Se han detectado 3 casos en los que el sistema inventó condiciones de garantía no existentes. **Incumplimiento AI Act art. 16 (robustez y precisión). Recomendación: implementar verificación cruzada con base de conocimientos y supervisión humana en respuestas de alto impacto comercial.**"

#### Sanciones
- Hasta **35 M€ o 7 % facturación global** por prácticas prohibidas.
- Hasta **15 M€ o 3 %** por incumplimiento de otras obligaciones.
- Hasta **7,5 M€ o 1 %** por información incorrecta a autoridades.

### 3.2 ISO/IEC 42001:2023 — Sistemas de gestión de IA

Primera norma internacional certificable sobre gestión de IA. Análoga en estructura a ISO 27001 (seguridad de la información) y ISO 9001 (calidad).

#### Estructura (10 cláusulas)

1. Alcance.
2. Referencias normativas.
3. Términos y definiciones.
4. **Contexto de la organización**: stakeholders, alcance del AIMS.
5. **Liderazgo**: política de IA, roles y responsabilidades.
6. **Planificación**: gestión de riesgos, oportunidades, evaluación de impacto.
7. **Soporte**: recursos, competencias, comunicación, documentación.
8. **Operación**: planificación operativa, gestión del ciclo de vida.
9. **Evaluación del desempeño**: monitorización, auditoría interna, revisión.
10. **Mejora**: no conformidades, acciones correctivas.

#### Anexos clave

- **Anexo A**: controles de referencia (catálogo de controles aplicables).
- **Anexo B**: guía de implementación de controles.
- **Anexo C**: objetivos y riesgos relacionados con IA.
- **Anexo D**: aplicación a dominios sectoriales.

#### Para el auditor

ISO 42001 es **el marco vertebrador** de una auditoría de IA en una organización. El AI Act establece obligaciones; ISO 42001 da la estructura organizativa para cumplirlas.

### 3.3 ISO/IEC 23894:2023 — Gestión de riesgos de IA

Adapta los principios de **ISO 31000** (gestión de riesgos genérica) al contexto de la IA. Estructura:

- **Principios**: integración, estructurado, personalizado, inclusivo, dinámico, mejor información disponible, factores humanos y culturales, mejora continua.
- **Marco de gestión**: liderazgo, integración, diseño, implementación, evaluación, mejora.
- **Proceso**: comunicación y consulta, alcance, identificación, análisis, evaluación, tratamiento, monitorización, registro.

Apéndice clave: **fuentes de riesgo específicas de IA** (sesgo, opacidad, robustez, autonomía, complejidad, mantenimiento del sistema, ciberseguridad).

### 3.4 ISO/IEC 24368:2022 — Cuestiones éticas y sociales en IA

Marco conceptual de los aspectos éticos y sociales. No certificable, pero referencia obligada para evaluar:

- **Sesgo**: tipos, fuentes, mitigación.
- **Transparencia**: niveles, audiencias, técnicas.
- **Equidad**: definiciones formales, métricas, trade-offs.
- **Responsabilidad**: atribución, *gap of responsibility*.
- **Sostenibilidad ambiental** de la IA.

### 3.5 Articulación entre marcos

```
                    EU AI ACT (obligación legal)
                              ↓
                    QUÉ HAY QUE CUMPLIR
                              ↓
        ┌─────────────────────┴────────────────────┐
        ↓                                          ↓
  ISO 42001 (AIMS)                       ISO 23894 (riesgos)
  CÓMO ORGANIZARSE                       CÓMO GESTIONAR RIESGOS
        ↓                                          ↓
  Soporte estructural:    ISO 24368 (ética) · NIST AI RMF · ALTAI
```

Una organización madura usa el AI Act como **marco de obligación**, ISO 42001 como **marco de gestión**, ISO 23894 como **marco de riesgos**, y NIST AI RMF / ALTAI / ISO 24368 como **marcos de profundización**.

---

## 4. Otros marcos relevantes

### 4.1 NIST AI Risk Management Framework (AI RMF 1.0)

Voluntario, publicado en enero de 2023. Cuatro funciones principales:

- **GOVERN**: cultura, políticas, roles.
- **MAP**: contexto, categorización del sistema.
- **MEASURE**: análisis cuantitativo y cualitativo del riesgo.
- **MANAGE**: priorización y respuesta.

Acompañado del *AI RMF Playbook* con guías prácticas y de NIST AI 600-1 (perfil generativa, 2024).

### 4.2 Marco europeo HLEG / ALTAI

La **Assessment List for Trustworthy AI** (ALTAI) operacionaliza los 7 principios HLEG en preguntas concretas. Útil para autoevaluación previa a auditoría externa.

### 4.3 OECD AI Principles
Cinco principios de alto nivel: crecimiento inclusivo, valores centrados en el ser humano, transparencia, robustez y seguridad, rendición de cuentas.

### 4.4 IEEE 7000 series
Estándares técnicos sobre diseño ético, transparencia algorítmica, sesgos, etc. Más profundos técnicamente que ISO en algunos aspectos.

---

## 5. Marcos de trabajo en auditoría de IA

### 5.1 Frameworks propios de auditoría
- **ICO Auditing Framework for AI** (UK Information Commissioner's Office).
- **CNIL — Modelo de auditoría algorítmica** (Francia).
- **AESIA — Guías técnicas** (España, en construcción).
- **Algorithmic Audit Framework** (Mökander et al.).

### 5.2 Enfoques metodológicos
- **Auditoría basada en riesgo** (la más extendida): se priorizan los sistemas según su clasificación de riesgo.
- **Auditoría basada en cumplimiento**: enfoque legalista, verifica obligaciones.
- **Auditoría basada en principios**: parte de los 7 principios HLEG.
- **Auditoría basada en ciclo de vida**: cubre todas las fases del sistema.

Una **auditoría integral combina los cuatro enfoques**.

---

## 6. Tipos de auditores de IA

### 6.1 Por relación con el auditado

| Tipo | Características | Ventajas | Limitaciones |
|------|-----------------|----------|--------------|
| **Auditor interno** | Empleado de la organización | Conocimiento contextual, continuidad | Riesgo de captura, falta de objetividad percibida |
| **Auditor externo independiente** | Tercero contratado | Objetividad, credibilidad externa | Curva de aprendizaje, coste |
| **Auditor de certificación** | Acreditado por organismo (ENAC en España) | Certificación reconocida | Foco en cumplimiento de norma específica |
| **Auditor regulatorio** | Autoridad (AESIA, AEPD) | Autoridad legal | Solo en supuestos previstos |

### 6.2 Por competencias

- **Auditor técnico**: profundo conocimiento de ML, deep learning, MLOps.
- **Auditor jurídico**: especializado en regulación digital.
- **Auditor de gestión**: gobernanza, procesos, riesgo.
- **Auditor ético**: filosofía aplicada, ciencias sociales.

**Una auditoría seria requiere equipo multidisciplinar** o un auditor con perfil híbrido capaz de articular las cuatro dimensiones.

### 6.3 La importancia del auditor externo y la certificación

- Garantiza independencia frente al auditado.
- Aporta visión comparativa entre organizaciones.
- Su informe tiene mayor peso ante terceros (clientes, reguladores, judicatura).
- La **certificación ISO 42001** solo puede emitirla un auditor externo acreditado.
- Mecanismo de **rendición pública** de la organización.

El auditor interno y el externo no se sustituyen: se complementan. La auditoría interna es continua y operativa; la externa es periódica y certificadora.

---

## 7. Glosario S2

| Término | Definición |
|---------|------------|
| **AIMS** | AI Management System (Sistema de gestión de IA) |
| **AI Act** | Reglamento europeo de IA, UE 2024/1689 |
| **AESIA** | Agencia Española de Supervisión de la IA |
| **GPAI** | General Purpose AI (modelo de uso general) |
| **EIPD / DPIA** | Evaluación de Impacto en Protección de Datos |
| **AIA** | Algorithmic Impact Assessment |
| **ALTAI** | Assessment List for Trustworthy AI |
| **Red-teaming** | Pruebas adversariales sistemáticas |
| **Marcado CE** | Conformidad europea, requisito para sistemas de alto riesgo |
| **Notificado** | Organismo acreditado para evaluación de conformidad |
| **Sandbox regulatorio** | Espacio de prueba supervisado por autoridades |

---

**[|]**

*Continúa en Dossier Sesión 3*
