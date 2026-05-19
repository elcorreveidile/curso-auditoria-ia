# Dossier del alumno — Sesión 3

## Riesgos, mercados y ciberseguridad

---

## 1. Riesgos operativos asociados a sistemas de IA (profundización)

Esta sesión profundiza en los riesgos ya introducidos en S2, con foco en aspectos que a menudo se pasan por alto en auditorías superficiales.

### 1.1 Riesgo de deuda técnica en pipelines de IA

La deuda técnica en IA es más peligrosa que en software tradicional porque es **invisible** hasta que causa fallos graves.

**Fuentes comunes:**
- **Pipelines mal documentados**: nadie sabe cómo se entrenó el modelo en producción.
- **Datasets sin versionado**: imposible reproducir el entrenamiento.
- **Hiperparámetros "mágicos"**: valores elegidos sin justificación.
- **Dependencias no actualizadas**: librerías de ML con vulnerabilidades conocidas.
- **Falta de pruebas unitarias**: el código de entrenamiento no está testeado.

**Para el auditor:**
1. ¿Existe un *model card* para cada modelo en producción?
2. ¿Están versionados los datasets (incluido semilla de split train/test)?
3. ¿Hay un registro de hiperparámetros y semillas?
4. ¿Se hace pruebas de regresión cuando se actualiza el pipeline?

### 1.2 Riesgo de deriva (data drift y concept drift)

La deriva es el cambio en la distribución de datos o en la relación entre entradas y salidas **después del despliegue**. Es la causa #1 de degradación de modelos en producción.

**Tipos:**
- **Data drift**: la distribución de entrada cambia (ej. cambian los usuarios, el contexto económico, las estaciones).
- **Concept drift**: la relación entre entrada y salida cambia (ej. el comportamiento del fraude evoluciona).

**Señales de alerta:**
- Caída gradual de métricas de rendimiento.
- Aumento de predicciones en el borde (probabilidad cercana a 0.5).
- Cambios en la distribución de predicciones.

**Controles auditables:**
- **Monitorización continua** con alertas automáticas.
- **Pruebas periódicas de validación** con datos recientes.
- **Política de reentrenamiento** (cada cuánto tiempo, bajo qué condiciones).
- **Documentación de derivas detectadas** y acciones tomadas.

**Pregunta del auditor:** "¿El sistema tiene monitorización de deriva? ¿Cuándo fue la última validación con datos recientes? ¿Hay política de reentrenamiento documentada?"

### 1.3 Riesgo de dependencias críticas (lock-in técnico)

Más allá del lock-in de mercado (sección 2), existe el **lock-in técnico**: dependencias que hacen muy costoso cambiar de proveedor.

**Fuentes de lock-in técnico:**
- **APIs propietarias**: solo funcionan con un proveedor.
- **Formatos de datos cerrados**: datos en un formato que solo una herramienta lee.
- **Conocimiento tácito**: el equipo interno solo sabe usar una herramienta específica.
- **Integraciones profundas**: el sistema está integrado en la infraestructura del proveedor.

**Para el auditor:**
1. ¿Hay un **mapa de dependencias técnicas** por sistema?
2. ¿Se ha evaluado el **coste de migración** a otro proveedor?
3. ¿Existen **estándares abiertos** en la arquitectura (REST, JSON, etc.)?
4. ¿El equipo interno tiene **capacidades multi-proveedor** o solo sabe usar uno?

### 1.4 Riesgo de sombra de IA (*shadow AI*)

La sombra de IA es el uso no autorizado de herramientas de IA por empleados, sin conocimiento ni control de la organización.

**Ejemplos:**
- Un empleado usa ChatGPT para generar código propietario.
- Un equipo de marketing usa Midjourney para crear campañas sin revisión legal.
- Un analista introduce datos de clientes en una herramienta externa para análisis.

**Riesgos:**
- Fuga de datos (datos confidenciales en herramientas externas).
- Incumplimiento normativo (sin evaluar riesgos del AI Act).
- Dependencia oculta (el proceso crítico depende de una herramienta no aprobada).

**Controles auditables:**
- **Política de uso de IA** clara y comunicada.
- **Inventario periódico** de herramientas usadas por empleados (encuestas, monitorización de red).
- **Whistleblowing** seguro para reportar uso no autorizado.
- **Sanciones** proporcionadas por incumplimiento.

**Pregunta del auditor:** "¿Se han hecho auditorías de shadow IA? ¿Cuándo fue la última? ¿Se detectaron casos? ¿Se tomaron medidas?"

### 1.5 Riesgo de falta de robustez ante ataques adversariales

Los modelos de IA son vulnerables a **ataques adversariales**: inputs manipulados para causar errores.

**Tipos de ataques:**
- **Evasion attack**: modificaciones imperceptibles en inputs para engañar al modelo (ej. cambiar 3 píxeles en una imagen para que un perro sea clasificado como gato).
- **Poisoning attack**: introducir datos maliciosos en el conjunto de entrenamiento para manipular el modelo.
- **Model extraction**: hacer muchas consultas al modelo para reconstruirlo (robo de propiedad intelectual).
- **Inference attack**: usar las salidas del modelo para inferir si un dato concreto formó parte del entrenamiento (ataque a privacidad).

**Controles auditables:**
- **Pruebas adversariales** periódicas con herramientas como ART, CleverHans.
- **Validación de entradas** para detectar anomalías.
- **Rate limiting** para evitar model extraction.
- **Differential privacy** para proteger contra inference attacks.

**Pregunta del auditor:** "¿Se hacen pruebas adversariales? ¿Con qué frecuencia? ¿Se han detectado vulnerabilidades? ¿Se han mitigado?"

---

## 2. Dimensión competitiva y de mercado

El **Estudio del Ministerio (Vol. 9)** identifica que la concentración de poder en ecosistemas de IA es un riesgo estratégico que las auditorías tradicionales ignoran.

### 2.1 Cuatro frentes de concentración

| Frente | Descripción | Ejemplo | Riesgo para el auditado |
|--------|-------------|---------|------------------------|
| **Compute** | GPUs, HPC, cloud services concentrados en pocos proveedores | NVIDIA para GPUs, AWS/Azure/GCP para cloud | Precios abusivos, falta de alternativas |
| **Datos** | Datasets masivos accesibles solo a big tech | Google, Meta, Microsoft tienen datos que nadie más tiene | Barreras de entrada insalvables |
| **Modelos** | LLMs base solo entrenables por actores con 10²⁵ FLOPs | GPT-4, Claude, Gemini (solo big tech puede entrenar) | Dependencia de modelos propietarios |
| **Aplicaciones** | Plataformas que capturan valor y crean lock-in | Salesforce, Microsoft Office, Adobe con IA integrada | Costes de switching muy altos |

### 2.2 Riesgos específicos de concentración

#### Riesgo 1: Vendor lock-in

**Descripción:** Dependencia crítica de un proveedor único que hace muy costoso cambiar.

**Señales:**
- >70% de sistemas de IA dependen de 1-2 proveedores.
- No existe plan de salida (*exit plan*) documentado.
- El personal interno solo sabe usar las herramientas del proveedor.
- Los contratos tienen cláusulas de exclusividad o mínimos garantizados.

**Impacto:**
- **Precios predatory**: el proveedor sube precios sabiendo que no puedes irte.
- **Innovación cautiva**: dependes de la roadmap del proveedor.
- **Riesgo de discontinuidad**: si el proveedor desaparece o cambia el producto, estás expuesto.

**Preguntas del auditor:**
1. ¿Qué porcentaje de sistemas críticos dependen de un solo proveedor?
2. ¿Existe un plan de contingencia si el proveedor discontinúa el servicio?
3. ¿Se han evaluado alternativas en los últimos 12 meses?

#### Riesgo 2: Fusión de IA con competencia tradicional

La Comisión Europea y la CNMC están integrando **análisis de IA en revisiones de fusiones**.

**Ejemplo real (ficticio pero basado en casos reales):**
> Una big tech adquiere una startup de IA para detección de fraude. Posteriormente, solo clientes del ecosistema de la big tech pueden acceder al servicio de detección de fraude avanzado. Competidores quedan en desventaja estructural.

**Para el auditor:**
- Identificar fusiones recientes en la cadena de valor de IA del auditado.
- Evaluar impacto en precios, calidad, innovación.
- Documentar riesgos de dependencia incrementados por concentración.

#### Riesgo 3: Precios predatorios y subvención cruzada

**Descripción:** Un proveedor ofrece IA a precios artificialmente bajos (incluso gratis) para capturar mercado, luego sube precios cuando hay lock-in.

**Señales:**
- Precio muy por debajo de coste de desarrollo.
- Proveedor con otras líneas de negocio que pueden subvencionar (ej. búsqueda online, publicidad).
- Cláusulas contractuales que permiten aumentar precios unilateralmente.

**Pregunta del auditor:** "¿El proveedor de IA principal tiene otras líneas de negocio que pueden subvencionar esta? ¿Hay cláusulas de control de precios?"

### 2.3 Auditoría de lock-in y dependencias

#### 2.3.1 Matriz de dependencias de proveedores

| Sistema | Proveedor | % uso | ¿Crítico? | Lock-in técnico | Lock-in de datos | Coste salida (€, meses) | Alternativas |
|---------|-----------|-------|-----------|-----------------|-----------------|-------------------------|--------------|
| Chatbot web | OpenAI | 100% | Sí | Alto | Alto | 150.000€, 8 meses | Anthropic, Cohere, open-source |
| Análisis fraude | Stripe (prop.) | 100% | Sí | Alto | Medio | 200.000€, 12 meses | No claras |
| Generación informes | Microsoft (Copilot) | 80% | No | Medio | Bajo | 20.000€, 2 meses | Google Duet, open-source |

**Interpretación:**
- **Riesgo alto**: sistemas críticos con lock-in alto y coste de salida elevado.
- **Acción**: priorizar diversificación en estos sistemas.

#### 2.3.2 Contratos: cláusulas peligrosas

**Cláusulas que revisar:**
- **Exclusividad**: "el cliente no usará proveedores competidores durante la vigencia".
- **Mínimos garantizados**: "el cliente pagará mínimo X €/año incluso si no usa el servicio".
- **Propiedad de mejoras**: "las mejoras y derivados del modelo son propiedad del proveedor".
- **No competencia post-contrato**: "durante 12 meses tras finalizar, el cliente no usará competidores".
- **Jurisdicción extranjera**: "cualquier litigio se resuelve en tribunales de Delaware".

**Para el auditor:** "¿Se han revisado estas cláusulas con legal? ¿Hay margen de renegociación?"

### 2.4 Estrategias de mitigación de lock-in

| Estrategia | Descripción | Ejemplo de implementación |
|------------|-------------|---------------------------|
| **Multi-proveedor** | Usar ≥2 proveedores para sistemas no críticos | 70% Proveedor A, 30% Proveedor B |
| **Sandbox regulatorio interno** | Espacio para evaluar alternativas sin riesgo | Equipo dedicado a evaluar nuevas opciones |
| **Estándares abiertos** | Usar formatos y APIs abiertos | REST, JSON, contenedores Docker |
| **Capacidades internas** | Formar equipo en múltiples plataformas | Rotación de personal por tecnologías |
| **Cláusulas de escape** | Negociar portabilidad y escape en contratos | Derecho a exportar datos y modelos en cualquier momento |

**Pregunta del auditor:** "¿Existe una estrategia formal de diversificación de proveedores? ¿Está documentada? ¿Tiene budget asignado?"

---

## 3. Ciberseguridad: IA como ofensiva y defensiva

El **Estudio del Ministerio (Vol. 8)** identifica que la IA es tanto **arma ofensiva** (para ciberataques) como **herramienta defensiva**. Las auditorías deben cubrir ambas dimensiones.

### 3.1 IA para ciberataques (ofensiva)

#### 3.1.1 Phishing hiper-personalizado

**Descripción:** LLMs que generan correos de phishing indistinguibles de los legítimos, usando datos públicos sobre la víctima.

**Características:**
- Sin errores gramaticales ni de estilo (antes delimitaba el phishing).
- Personalizados con datos de redes sociales (LinkedIn, Facebook, Twitter).
- Generados en masa (miles de variantes por campaña).
- En múltiples idiomas y dialectos.

**Ejemplo:**
> Un atacante scrapea LinkedIn de empleados de una empresa, alimenta un LLM con perfiles, y genera correos de "el CEO" pidiendo transferencias urgentes, con el estilo exacto del CEO.

**Contra-medidas:**
- **Autenticación fuerte** (MFA obligatorio, hardware keys).
- **Canales de verificación** (confirmar por teléfono/video llamadas inusuales).
- **Formación específica** en phishing hiper-personalizado con ejemplos reales.
- **Análisis de estilo** (herramientas que detectan cambios en el estilo de escritura del remitente).

**Pregunta del auditor:** "¿Hay MFA obligatorio para operaciones sensibles? ¿Se forma al personal en phishing con IA? ¿Hay protocolos de verificación?"

#### 3.1.2 Deep-fakes de voz y vídeo

**Descripción:** IA sintética que clona voz o rostro de personas para suplantación de identidad en ingeniería social.

**Casos reales (informes 2024-2025):**
- CEO de una empresa recibe llamada de sí mismo (voz clonada) pidiendo transferencia urgente.
- Empleado de RRHH recibe vídeo de "director financiero" en videoconferencia pidiendo datos de empleados.
- Familia recibe llamada de "secuestrado" (voz clonada) pidiendo rescate.

**Contra-medidas:**
- **Verificación biométrica avanzada** (detección de deep-fake en tiempo real).
- **Códigos de emergencia** (códigos secretos para verificar identidad en crisis).
- **Canales confiables** (comunicación oficial solo por canales verificados).
- **Herramientas de detección** (software que analiza inconsistencies en vídeo/voz).

**Pregunta del auditor:** "¿Existen protocolos para deep-fakes de voz/vídeo? ¿Se usan herramientas de detección? ¿Hay códigos de emergencia establecidos?"

#### 3.1.3 Malware generado por IA

**Descripción:** IA que genera código de malware polimórfico (que cambia cada vez) para evadir antivirus.

**Características:**
- Código muta cada infección (firmas antivirus no funcionan).
- Optimizado para no ser detectado por análisis heurístico.
- Generado a escala (miles de variantes por hora).

**Contra-medidas:**
- **Behavioral analysis** (detectar comportamiento anormal más que código).
- **Sandboxing** (ejecutar código sospechoso en entorno aislado).
- **AI-powered antivirus** (usar IA contra IA).
- **Zero Trust** (asumir que el malware entrará y minimizar daño).

**Pregunta del auditor:** "¿Se usa análisis de comportamiento? ¿Los antivirus son tradicionales o AI-powered? ¿Hay sandboxing?"

#### 3.1.4 Automatización de ataques

**Descripción:** Bots potenciados por IA que escalan explotación de vulnerabilidades.

**Ejemplos:**
- Bots que encuentran y explotan vulnerabilidades en segundos (antes días).
- Bots que hacen credential stuffing a escala masiva.
- Bots que crawlean webs para encontrar datos expuestos.

**Contra-medidas:**
- **Rate limiting** agresivo (bloquear después de N intentos).
- **WAFs (Web Application Firewalls)** con IA para detectar patrones de ataque.
- **Bug bounty programs** (encontrar vulnerabilidades antes que los atacantes).
- **Monitoreo de logs** con análisis de anomalías.

**Pregunta del auditor:** "¿Hay rate limiting? ¿WAF con IA? ¿Programa de bug bounty? ¿Análisis de logs?"

### 3.2 IA para ciberdefensa

#### 3.2.1 Detección de anomalías en tráfico de red

**Descripción:** IA que aprende el patrón normal de tráfico y alerta de desviaciones.

**Casos de uso:**
- Detección de intrusiones (IDS/IPS potenciados por IA).
- Identificación de exfiltración de datos.
- Detección de botnets.

**Preguntas del auditor:** "¿Se usa IA para detección de intrusiones? ¿Con qué tasa de falsos positivos? ¿Hay ajuste continuo?"

#### 3.2.2 Clasificación automática de malware

**Descripción:** IA que clasifica malware en familias sin necesidad de firmas.

**Ventajas:**
- Detecta malware nuevo (no solo conocido).
- Clasificación más rápida que analistas humanos.
- Permite respuesta automatizada.

**Preguntas del auditor:** "¿Se usa ML para clasificación de malware? ¿Hay revisión humana de clasificaciones? ¿Qué tasa de precisión?"

#### 3.2.3 Respuesta automatizada (SOAR + IA)

**Descripción:** Sistemas que orquestan respuesta a incidentes con IA para tomar decisiones.

**Ejemplos:**
- Aislar automáticamente un equipo comprometido.
- Bloquear IPs que muestran comportamiento de ataque.
- Escalar incidentes complejos a analistas humanos.

**Riesgos:**
- Falsos positivos pueden aislar sistemas críticos.
- Dependencia excesiva de automatización.

**Preguntas del auditor:** "¿Hay SOAR con IA? ¿Qué decisiones se automatizan? ¿Hay override manual?"

#### 3.2.4 Priorización de alertas

**Descripción:** IA que clasifica y prioriza miles de alertas de seguridad para que los analistas se enfoquen en las críticas.

**Métricas:**
- Reducción del tiempo de respuesta (MTTR).
- Aumento de precisión de priorización.
- Satisfacción de analistas (menos fatiga por alertas).

**Preguntas del auditor:** "¿Se usa IA para priorizar alertas? ¿Cómo se mide la precisión? ¿Analistas pueden sobreescribir?"

### 3.3 Tensiones privacidad vs seguridad

La IA para ciberseguridad a menudo **choca con privacidad**. El auditor debe evaluar este trade-off.

#### 3.3.1 Monitorización de empleados con IA

**Descripción:** Sistemas que analizan comportamiento de empleados para detectar amenazas internas.

**Tensiones:**
- **Seguridad**: detectar empleados que roban datos o cometen fraude.
- **Privacidad**: los empleados tienen derecho a no ser vigilados constantemente.

**Marco normativo:**
- **RGPD**: consentimiento necesario, minimización de datos, propósito legítimo.
- **AI Act**: sistemas de monitoreo de empleados pueden ser alto riesgo (Anexo III.4).
- **LOPDGDD**: garantías de empleo y derechos digitales.

**Preguntas del auditor:**
1. ¿Se ha informado a los empleados y obtenido consentimiento?
2. ¿El sistema cumple AI Act (alto riesgo) → evaluación de impacto?
3. ¿Hay representantes legales de trabajadores informados?
4. ¿Se minimiza la recogida de datos (solo lo necesario)?

#### 3.3.2 Scoring de riesgo interno

**Descripción:** IA que clasifica empleados como "de riesgo" (ej. probable robo de datos, fraude).

**Problemas éticos:**
- **Presunción de culpabilidad**: el sistema asume riesgo sin evidencia.
- **Sesgos**: puede marcar a empleados de ciertos grupos como más riesgosos.
- **Efecto chilling**: empleados temen hacer algo legítimo por si el sistema lo marca como sospechoso.

**Preguntas del auditor:**
1. ¿Hay transparencia sobre cómo funciona el scoring?
2. ¿Se ha evaluado sesgos demográficos?
3. ¿Los empleados pueden impugnar su clasificación?
4. ¿La dirección usa el scoring para decisiones (despidos, promociones)?

#### 3.3.3 Biometría de comportamiento

**Descripción:** IA que aprende patrones de comportamiento (tecleo, ratón, ubicación) para autenticación continua.

**Tensiones:**
- **Seguridad**: difícil de suplantar.
- **Privacidad**: recoge datos muy sensibles continuamente.

**Preguntas del auditor:**
1. ¿Se ha hecho evaluación de impacto (RGPD art. 35)?
2. ¿Los datos se almacenan cifrados?
3. ¿Hay política de retención limitada?
4. ¿Los empleados pueden optar por métodos de autenticación alternativos?

### 3.4 Para el auditor: checklist de ciberseguridad IA

**Dimensiones a auditar:**

| Dimensión | Preguntas clave |
|-----------|-----------------|
| **IA ofensiva** | ¿Hay formación en phishing con IA? ¿Protocolos para deep-fakes? ¿WAF con detección de bots IA? |
| **IA defensiva** | ¿Se usa IA para IDS/IPS? ¿SOAR con IA? ¿Priorización de alertas con ML? |
| **Tensiones privacidad** | ¿Monitorización de empleados cumple RGPD/AI Act? ¿Scoring de riesgo interno es transparente? |
| **Contramedidas** | ¿Hay MFA obligatorio? ¿Canales de verificación? ¿Códigos de emergencia? |
| **Gobernanza** | ¿Legal y representantes de trabajadores informados? ¿Evaluación de impacto hecha? |

---

## 4. Marcos de trabajo en auditoría de IA

### 4.1 Frameworks propios de auditoría

- **ICO Auditing Framework for AI** (UK Information Commissioner's Office) — enfocado en RGPD.
- **CNIL — Modelo de auditoría algorítmica** (Francia) — marco metodológico completo.
- **AESIA — Guías técnicas** (España) — en construcción, basadas en AI Act.
- **Algorithmic Audit Framework** (Mökander et al.) — académico pero riguroso.

### 4.2 Enfoques metodológicos

| Enfoque | Descripción | Ventajas | Limitaciones |
|---------|-------------|----------|--------------|
| **Basado en riesgo** | Prioriza sistemas según clasificación de riesgo | Enfoque eficiente, alineado con AI Act | Puede perder sistemas de riesgo aparentemente bajo |
| **Basado en cumplimiento** | Verifica obligaciones normativas | Claro, defendible legalmente | No captura riesgos no regulados |
| **Basado en principios** | Parte de los 7 principios HLEG | Flexible, adaptable a contexto | Subjetivo, difícil de medir |
| **Basado en ciclo de vida** | Cubre todas las fases del sistema | Completo | Requiere mucho tiempo |

**Recomendación:** Una **auditoría integral combina los cuatro enfoques**.

---

**[|]**

*Continúa en Dossier Sesión 4*
