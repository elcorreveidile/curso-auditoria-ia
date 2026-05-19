# Dossier del alumno — Sesión 1

## Fundamentos de IA, ciclo de vida y principios éticos

---

## 1. Industria y Tecnologías 5.0

La Industria 5.0 no sustituye a la 4.0: la complementa. Si la 4.0 puso el acento en la automatización, la conectividad y los datos masivos, la 5.0 introduce tres ejes complementarios definidos por la Comisión Europea (2021):

- **Centralidad humana** (*human-centricity*): la tecnología al servicio del trabajador, no a la inversa.
- **Sostenibilidad**: ciclo de vida tecnológico responsable con los límites planetarios.
- **Resiliencia**: capacidad de las organizaciones para absorber shocks (pandemias, crisis energéticas, ciberataques).

Para una auditoría de IA, este marco es relevante porque la regulación europea (AI Act incluido) se alinea con estos tres ejes. No se trata solo de cumplir normas técnicas: se trata de demostrar que el sistema auditado respeta la dignidad humana, es sostenible y es resiliente.

---

## 2. El ámbito tecnológico asociado a la IA

### 2.1 Definición operativa

Según **ISO/IEC 22989:2022**, un sistema de IA es un *sistema de ingeniería que genera salidas como contenido, predicciones, recomendaciones o decisiones para un conjunto dado de objetivos definidos por humanos*.

El **AI Act** (art. 3.1) define sistema de IA de forma muy similar, alineada con la OCDE (2024): un sistema basado en máquina diseñado para operar con distintos niveles de autonomía y que, para objetivos explícitos o implícitos, infiere a partir de las entradas que recibe cómo generar salidas tales como predicciones, contenidos, recomendaciones o decisiones que pueden influir en entornos físicos o virtuales.

Dos elementos clave de esta definición:

- **Inferencia**: el sistema deduce reglas o patrones a partir de los datos. No es un programa determinista convencional.
- **Autonomía variable**: desde herramientas asistenciales hasta sistemas que actúan sin supervisión humana directa.

### 2.2 Ecosistema tecnológico

Una organización que implanta IA suele tener:

- **Capa de datos**: data lakes, data warehouses, bases vectoriales, pipelines ETL.
- **Capa de modelos**: modelos clásicos de ML, deep learning, LLMs propietarios o de código abierto.
- **Capa de aplicación**: APIs, integraciones, interfaces de usuario.
- **Capa de gobierno**: políticas, controles, registros de auditoría, sistemas de gestión.

El auditor debe entender las cuatro capas, no solo la de modelos.

---

## 3. Oportunidades asociadas a la IA

Listado no exhaustivo, agrupado por categoría:

**Operativas**
- Automatización de tareas repetitivas.
- Optimización de procesos (logística, planificación, mantenimiento predictivo).
- Mejora de la atención al cliente (asistentes conversacionales).

**Cognitivas**
- Análisis predictivo y descriptivo de grandes volúmenes de datos.
- Soporte a decisiones complejas en sanidad, finanzas, educación.
- Personalización masiva de servicios.

**Creativas**
- Generación de contenidos (texto, imagen, audio, vídeo).
- Diseño asistido (arquitectura, ingeniería, moda).
- Prototipado rápido y simulación.

**Estratégicas**
- Detección temprana de tendencias.
- Vigilancia tecnológica automatizada.
- Modelización de escenarios complejos (clima, mercados, epidemias).

El auditor no juzga las oportunidades: documenta cuáles persigue la organización y verifica que los sistemas implantados respondan efectivamente a esos objetivos declarados.

---

## 4. Sistemas de Big Data e IA

La IA moderna es indisociable del Big Data. Los tres ejes históricos (3V) y los dos añadidos (5V) son:

| Eje | Significado | Relevancia para auditoría |
|-----|-------------|---------------------------|
| **Volumen** | Cantidad de datos | Capacidad de almacenamiento, costes, retención |
| **Velocidad** | Tasa de generación | Procesamiento en tiempo real vs. batch |
| **Variedad** | Tipos y formatos | Calidad, integración, sesgos por fuente |
| **Veracidad** | Confiabilidad | Trazabilidad, calidad del dato |
| **Valor** | Utilidad | Justificación de la inversión, ROI auditable |

Un sistema de IA es tan bueno como los datos que lo alimentan. Por eso, la **auditoría de datos** es parte indispensable de la auditoría de IA: linaje, calidad, sesgos, representatividad, anonimización.

---

## 5. Técnicas, algoritmos y modelos en IA

### 5.1 Taxonomía operativa

```
INTELIGENCIA ARTIFICIAL
│
├── Sistemas basados en reglas (IA simbólica clásica)
│   └── Sistemas expertos, ontologías
│
├── Aprendizaje automático (Machine Learning)
│   ├── Supervisado (clasificación, regresión)
│   ├── No supervisado (clustering, reducción de dimensionalidad)
│   ├── Semi-supervisado
│   ├── Por refuerzo
│   └── Aprendizaje profundo (Deep Learning)
│       ├── Redes convolucionales (CNN) — visión
│       ├── Redes recurrentes (RNN, LSTM) — secuencias
│       └── Transformers — lenguaje, multimodalidad
│
└── IA generativa
    ├── LLMs (GPT, Claude, Gemini, Llama...)
    ├── Modelos de difusión (imagen)
    └── Multimodales
```

### 5.2 Para el auditor: cuestiones clave por tipo

| Tipo | Riesgos principales | Foco de auditoría |
|------|---------------------|-------------------|
| Basados en reglas | Rigidez, mantenimiento | Trazabilidad de reglas, gobernanza del cambio |
| ML supervisado | Sesgos en datos etiquetados, sobreajuste | Calidad del dataset, métricas de equidad |
| Deep Learning | Caja negra, recursos computacionales | Explicabilidad, eficiencia energética |
| Generativa | Alucinaciones, copyright, deep-fakes | Filtros de salida, marcas de agua, supervisión humana |

---

## 6. El ciclo de vida de los procesos de IA

Según **ISO/IEC 22989** y **NIST AI RMF**, el ciclo de vida tiene siete fases. Cada una requiere controles auditables:

```
1. PLANIFICACIÓN Y DISEÑO
   ↓
2. RECOLECCIÓN Y PREPARACIÓN DE DATOS
   ↓
3. CONSTRUCCIÓN Y ENTRENAMIENTO DEL MODELO
   ↓
4. VERIFICACIÓN Y VALIDACIÓN
   ↓
5. DESPLIEGUE
   ↓
6. OPERACIÓN Y MONITORIZACIÓN
   ↓
7. RETIRADA O REENTRENAMIENTO
```

### 6.1 Controles auditables por fase

**Fase 1 — Planificación**
- Análisis de necesidad y proporcionalidad
- Definición de objetivos medibles
- Identificación de stakeholders
- Evaluación preliminar de riesgos

**Fase 2 — Datos**
- Origen y consentimiento (RGPD)
- Calidad, completitud, representatividad
- Detección de sesgos
- Linaje y trazabilidad

**Fase 3 — Modelo**
- Selección justificada del algoritmo
- Documentación del entrenamiento
- Hiperparámetros y semillas (reproducibilidad)
- Versionado

**Fase 4 — Validación**
- Métricas de rendimiento
- Métricas de equidad (paridad demográfica, igualdad de oportunidades)
- Pruebas adversariales
- Validación humana

**Fase 5 — Despliegue**
- Documentación técnica (model cards, datasheets)
- Información al usuario final
- Mecanismos de supervisión humana

**Fase 6 — Operación**
- Monitorización de deriva (data drift, concept drift)
- Logs y auditoría continua
- Gestión de incidentes
- Reentrenamientos programados

**Fase 7 — Retirada**
- Plan de sucesión
- Conservación de datos según retención legal
- Comunicación a usuarios afectados

---

## 7. Principios y conceptos clave

Los **siete principios para una IA confiable** del Grupo de Expertos de Alto Nivel de la UE (HLEG), recogidos parcialmente en el AI Act:

1. **Agencia y supervisión humana**: la IA refuerza al humano, no lo sustituye en decisiones críticas.
2. **Robustez técnica y seguridad**: resistencia a ataques, errores, condiciones adversas.
3. **Privacidad y gobernanza de datos**: cumplimiento RGPD, minimización, propósito legítimo.
4. **Transparencia**: trazabilidad, explicabilidad, información al usuario.
5. **Diversidad, no discriminación y equidad**: prevención de sesgos.
6. **Bienestar social y ambiental**: sostenibilidad, impacto social positivo.
7. **Rendición de cuentas**: auditabilidad, responsabilidad clara, reparación.

A estos hay que añadir, en el lenguaje técnico:

- **Proporcionalidad**: el sistema no debe ser más invasivo de lo necesario.
- **Factibilidad y viabilidad**: realismo técnico y organizativo.
- **Incertidumbre**: gestión explícita de los márgenes de error.
- **Control humano**: posibilidad efectiva de override.

### 7.1 NLPUE: IA como disruptor de la lógica de la utilidad

El **Estudio de Prospeción Tecnológica en IA** del Ministerio de Economía, Comercio y Empresa (2025) introduce el concepto **NLPUE** (Nuevo Problema de la Lógica de la Utilidad y la Ética): la IA no solo resuelve problemas existentes, **redefine qué problemas son resolubles y quién tiene legitimidad para resolverlos**.

#### ¿Qué significa esto?

En economía clásica, la "lógica de la utilidad" describe cómo los agentes toman decisiones racionales para maximizar su bienestar. La IA introduce una ruptura:

1. **Redefinición de problemas**: lo antes resolvía un humano, ahora lo resuelve un algoritmo. Pero no es solo un cambio de herramienta: cambia la naturaleza del problema.
2. **Cambio de agencia**: antes el humano decidía; ahora el sistema decide por él.
3. **Opacidad optimizada**: el algoritmo optimiza una función de utilidad, pero esa función es incomprensible para el humano.

#### Ejemplos por sector

| Sector | Antes (problema clásico) | Ahora (problema NLPUE) |
|--------|-------------------------|------------------------|
| **Salud** | "¿Cómo diagnosticar?" | "¿Debe diagnosticar una máquina o un humano? ¿Quién es responsable si se equivoca?" |
| **Educación** | "¿Cómo evaluar?" | "¿Puede un algoritmo evaluar mejor que un profesor? ¿Perdemos algo humano si delegamos?" |
| **Justicia** | "¿Cómo juzgar este caso?" | "¿Puede un sistema sin empatia juzgar? ¿Qué pasa con la dignidad del proceso?" |
| **RRHH** | "¿Cómo seleccionar candidatos?" | "¿Es legítimo que un algoritmo decida carreras sin posibilidad de explicación?" |
| **Banca** | "¿Cómo evaluar riesgo?" | "¿Puede un modelo opaco negar crédito sin que el afectado entienda por qué?" |

### 7.2 Dilemas del algoritmo

El estudio del Ministerio identifica **cuatro dilemas estructurales** que toda auditoría debe considerar:

#### Dilema 1: Agencia humana

**El problema:** ¿La IA refuerza o erosiona la autonomía humana?

- **Posición refuerzo**: la IA libera al humano de tareas tediosas, le permite concentrarse en lo creativo.
- **Posición erosión**: la IA atrofia capacidades humanas, crea dependencia, reduce el margen de decisión.

**Pregunta del auditor:** ¿El sistema auditado fortalece o debilita la capacidad del humano para decidir?

#### Dilema 2: Atribución de responsabilidad

**El problema:** ¿Quién responde cuando falla: el algoritmo, el proveedor, el usuario, la organización?

- **Gap of responsibility**: nadie asume responsabilidad porque "el sistema lo decidió".
- **Responsabilidad difusa**: el proveedor culpa del mal uso; el usuario culpa del diseño; la organización culpa del proveedor.

**Pregunta del auditor:** ¿Está claramente definido quién responde si el sistema causa daño?

#### Dilema 3: Transparencia vs opacidad

**El problema:** ¿Cuánta opacidad es aceptable en nombre de la eficiencia?

- **Transparencia total**: imposible en sistemas complejos (redes neuronales profundas).
- **Opacidad necesaria**: el secreto comercial protege inversión en I+D.
- **Derecho a explicación**: RGPD art. 22, AI Act art. 86.

**Pregunta del auditor:** ¿El nivel de transparencia es proporcional al riesgo del sistema?

#### Dilema 4: Sesgo estructural

**El problema:** ¿Cómo auditar sistemas que reflejan prejuicios sociales codificados?

- **Bias in, bias out**: si los datos de entrenamiento contienen sesgos históricos, el modelo los reproduce.
- **Sesgo de selección**: las poblaciones marginadas están infra-representadas en los datos.
- **Sesgo de feedback**: el sistema en el mundo y cambia el mundo, reforzando estereotipos.

**Pregunta del auditor:** ¿Se han medido las métricas de equidad? ¿Hay disparidades en el rendimiento entre grupos?

### 7.3 Para el auditor

Estos dilemas no se resuelven con cumplimiento técnico: requieren **juicio profesional contextualizado**. El auditor debe:

1. **Identificar qué dilema del algoritmo está en juego** en cada sistema auditado.
2. **Documentar cómo la organización aborda el dilema** (¿lo ha reconocido? ¿tiene una posición?).
3. **Evaluar si la respuesta es coherente** con los valores declarados de la organización.
4. **Proponer mecanismos de rendición de cuentas** (no solo técnicos, también organizativos).

### 7.4 Definiciones operativas para el auditor

| Concepto | Definición técnica | Pregunta del auditor |
|----------|-------------------|----------------------|
| **Sesgo** | Desviación sistemática del modelo respecto a un grupo | ¿Se han medido las métricas de equidad? |
| **Transparencia** | Visibilidad sobre el funcionamiento del sistema | ¿Existe documentación accesible? |
| **Responsabilidad** | Atribución clara de decisiones | ¿Quién responde si el sistema falla? |
| **Equidad** | Tratamiento justo entre grupos | ¿Hay disparidades en el rendimiento? |
| **Privacidad** | Protección de datos personales | ¿Cumple RGPD/LOPDGDD? |
| **Seguridad** | Resistencia a ataques y errores | ¿Hay tests de robustez? |
| **Proporcionalidad** | Adecuación medio-fin | ¿Es la IA el medio menos invasivo? |
| **Robustez** | Estabilidad ante perturbaciones | ¿Hay pruebas adversariales? |
| **Control humano** | Capacidad de intervención | ¿Hay mecanismos de override? |

---

## 8. Explicabilidad e interpretabilidad

Dos conceptos cercanos pero distintos:

- **Interpretabilidad**: en qué medida un humano puede entender de forma directa cómo el modelo llega a una decisión. Un árbol de decisión simple es interpretable. Una red neuronal profunda, generalmente no.

- **Explicabilidad**: capacidad de generar explicaciones a posteriori sobre decisiones de modelos opacos. Las explicaciones pueden ser:
  - **Globales**: cómo funciona el modelo en general.
  - **Locales**: por qué tomó una decisión concreta en un caso concreto.

### 8.1 Técnicas habituales

| Técnica | Tipo | Cuándo usarla |
|---------|------|---------------|
| **LIME** | Local | Cualquier modelo, explicación caso a caso |
| **SHAP** | Local y global | Análisis riguroso de contribuciones |
| **Permutation importance** | Global | Identificar features relevantes |
| **Counterfactuals** | Local | "¿Qué tendría que cambiar para que la decisión fuese otra?" |
| **Attention maps** | Local | Modelos de atención (transformers, visión) |
| **Concept-based** (TCAV) | Global | Explicación en términos humanos |

### 8.2 Para el auditor

La explicabilidad **no es un fin en sí mismo**: es un requisito derivado del derecho a la información del sujeto afectado (RGPD art. 22, AI Act art. 86 sobre derecho a explicación). El auditor verifica:

1. Que el nivel de explicabilidad sea proporcional al riesgo del sistema.
2. Que las explicaciones sean comprensibles para el destinatario (no para ingenieros).
3. Que existan mecanismos para que el afectado pueda solicitar la explicación.
4. Que la documentación técnica recoja los métodos usados.

---

## 9. IA generativa y datos sintéticos

### 9.1 IA generativa: especificidades

Los modelos generativos (LLMs, modelos de difusión, multimodales) presentan riesgos específicos que cualquier auditoría debe contemplar:

- **Alucinaciones**: el modelo genera información plausible pero falsa.
- **Sesgo de entrenamiento**: refleja los sesgos del corpus original (típicamente sobre-representación de inglés, occidente, perspectiva masculina).
- **Copyright**: el corpus puede incluir material protegido sin licencia.
- **Deep-fakes y desinformación**: capacidad de generar contenido sintético creíble.
- **Inyección de prompts**: ataques que manipulan el comportamiento del modelo.
- **Fuga de información**: el modelo puede memorizar y reproducir datos sensibles del entrenamiento.

El AI Act introduce obligaciones específicas para los **modelos de uso general** (GPAI) y para los sistemas que generan contenido sintético: obligación de marcar el contenido como artificial, evaluación de modelos con riesgo sistémico, transparencia sobre fuentes.

### 9.2 Datos sintéticos

Los datos sintéticos son datos generados artificialmente que imitan las propiedades estadísticas de datos reales. Usos auditables:

- **Aumento de datasets** insuficientes (especialmente en clases minoritarias).
- **Protección de privacidad**: sustituir datos reales por sintéticos en entornos de prueba.
- **Generación de casos adversariales** para tests de robustez.

Riesgos a auditar:

- Pérdida de utilidad estadística (los sintéticos no reproducen la realidad).
- Privacidad ilusoria (si el modelo generador memoriza, los sintéticos pueden filtrar información).
- Refuerzo de sesgos del modelo generador.

---

## 10. Enfoques regulatorios comparados

### 10.1 UE: AI Act + enfoque basado en riesgo

**Características:**
- Reglamento (UE) 2024/1689 (AI Act), aprobado junio 2024.
- Clasificación por niveles de riesgo: inaceptable (prohibido), alto, limitado, mínimo.
- Obligaciones proporcionales al riesgo.
- AESIA (Agencia Española de Supervisión de la IA) como autoridad nacional.
- Enfoque: **precaución, derechos fundamentales, mercado único**.

**Instrumentos:**
- Prohibición de prácticas inaceptables (scoring social, reconocimiento emocional en educación/trabajo).
- Obligaciones estrictas para sistemas de alto riesgo (educación, empleo, justicia).
- Obligaciones de transparencia para sistemas de riesgo limitado.
- Evaluación de conformidad previa para alto riesgo.

**Para el auditor:**
- El AI Act es el marco de obligación legal mínimo.
- La auditoría verifica el cumplimiento artículo por artículo.
- El enfoque es jurídico: o cumples o no cumples.

### 10.2 EEUU: Executive Order 14110 (2023) + enfoque voluntario

**Características:**
- Executive Order 14110 (octubre 2023): "Safe, Secure, and Trustworthy Development and Use of Artificial Intelligence".
- Enfoque voluntario + sectorial (no hay ley federal general de IA).
- NIST AI RMF como marco de referencia (no obligatorio).
- FAA (Office of AI) con mandato limitado de coordinación.
- Enfoque: **innovación, competitividad, seguridad nacional**.

**Instrumentos:**
- NIST AI Risk Management Framework (guía voluntaria).
- Blueprint for an AI Bill of Rights (no vinculante).
- Órdenes ejecutivas sectoriales (defensa, sanidad, finanzas).
- Leyes estatales dispersas (ej. Illinois BIPA sobre biometría).

**Para el auditor:**
- No hay obligación federal directa: el marco es "best practices".
- La auditoría es más matizada: evaluar alineación con guías, no cumplimiento estricto.
- Mayor flexibilidad, menor certeza legal.

### 10.3 China: regulación específica por sector

**Características:**
- No hay ley general de IA, sino reglamentos sectoriales específicos.
- Regulación rápida y proactiva (2022-2023: 3 reglamentos clave).
- Enfoque: **control estatal, estabilidad social, soberanía**.

**Instrumentos clave:**
- **Deep Synthesis Provisions (2022)**: regula deep-fakes y contenido sintético.
- **Regulation on Algorithmic Recommendation (2022)**: algoritmos de recomendación (tipo TikTok).
- **Interim Measures for Generative AI Services (2023)**: IA generativa tipo LLMs.
- Requisitos: licencias estatales, contenido alineado con valores socialistas, identificación obligatoria de sintético.

**Para el auditor:**
- Altamente prescriptivo: detalles técnicos muy específicos.
- No hay espacio para interpretación: cumples o estás fuera del mercado chino.
- Difícil cumplimiento para empresas extranjeras (requiere servidores en China, alianzas locales).

### 10.4 Comparativa rápida

| Aspecto | UE | EEUU | China |
|---------|----|----|-------|
| **Enfoque** | Basado en riesgo, legal | Voluntario, mercado | Sectorial, estatal |
| **Instrumento principal** | AI Act (ley) | NIST AI RMF (guía) | Reglamentos sectoriales |
| **Autoridad** | AESIA | No hay (FAA coordinación) | CAC, Cyberspace Administration |
| **Sanciones** | Hasta 7 % facturación global | No hay federales | Multas + cierre de servicio |
| **Prioridad** | Derechos fundamentales | Innovación + seguridad | Estabilidad social |
| **Velocidad** | Lenta (consenso UE) | Media | Rápida (gobierno decide) |

### 10.5 Para el auditor: organizaciones multinacionales

Una organización que opera en múltiples jurisdicciones debe navegar **tres lógicas distintas**. El auditor debe:

1. **Mapear sistemas por jurisdicción**: ¿qué sistemas operan en qué países?
2. **Identificar conflictos normativos**: ¿sistema cumple EEUU pero no UE?
3. **Proponer estrategias de cumplimiento multinivel**:
   - Enfoque "máximo común denominador": cumplir el estándar más exigente.
   - Enfoque "local compliance": adaptar sistemas por país.
   - Enfoque "ring-fencing": separar sistemas por jurisdicción.

**Ejemplo de conflicto:**
- Sistema de selección de RRHH con IA en una multinacional:
  - **UE**: alto riesgo (Anexo III AI Act) → evaluación de conformidad, FRIA obligatoria.
  - **EEUU**: no hay regulación federal específica → voluntario.
  - **China**: si hay operaciones en China, puede requerir licencia estatal y algoritmos transparentes.

**El auditor informa:** "El sistema cumple las guías EEUU (NIST AI RMF), pero no cumple el AI Act europeo. Recomendación: o bien restringir uso a EEUU, o bien actualizar a cumplimiento UE para uso global."

---

## 11. Términos y definiciones (glosario S1)

| Término | Definición |
|---------|------------|
| **Algoritmo** | Procedimiento computacional finito para resolver un problema |
| **Modelo** | Representación matemática aprendida a partir de datos |
| **Entrenamiento** | Proceso de ajuste de parámetros del modelo usando datos |
| **Inferencia** | Aplicación del modelo entrenado para generar salidas |
| **Overfitting** | Ajuste excesivo a datos de entrenamiento, mala generalización |
| **Underfitting** | Ajuste insuficiente, modelo simplista |
| **Hiperparámetro** | Parámetro configurable que controla el entrenamiento |
| **Feature** | Variable de entrada al modelo |
| **Ground truth** | Etiqueta correcta de referencia |
| **Data drift** | Cambio en la distribución de los datos de entrada |
| **Concept drift** | Cambio en la relación entre entradas y salidas |
| **Model card** | Documento estandarizado sobre un modelo |
| **Datasheet** | Documento estandarizado sobre un dataset |
| **FATE** | Fairness, Accountability, Transparency, Ethics |
| **MLOps** | Prácticas de operacionalización de modelos ML |

---

**[|]**

*Continúa en Dossier Sesión 2*
