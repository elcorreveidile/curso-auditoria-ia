# Dossier del alumno — Sesión 4

## Práctica auditora integral: metodología, documentación y comunicación

---

## 1. Primera aproximación a la auditoría de IA

### 1.1 ¿Qué es y qué no es una auditoría de IA?

**Es**:
- Un proceso sistemático e independiente.
- Una evaluación contra criterios definidos (normativos, técnicos, éticos, competitivos).
- Una emisión de juicio profesional documentado.
- Una contribución a la mejora continua.
- **Tridimensional**: técnica + ética + competitiva.

**No es**:
- Una consultoría (aunque las recomendaciones se incluyan).
- Un test técnico aislado.
- Una garantía absoluta de ausencia de riesgo.
- Una herramienta de marketing reputacional vacía.
- Solo cumplimiento técnico.

### 1.2 Fases generales de la auditoría

```
1. ENCARGO Y PLANIFICACIÓN
   - Carta de encargo
   - Definición de alcance, criterios, plazos
   - Plan de auditoría
   - Equipo auditor

2. TRABAJO DE CAMPO
   - Inventario y mapeo de sistemas
   - Recogida de información (entrevistas, documentación, observación)
   - Pruebas técnicas
   - Identificación de hallazgos preliminares

3. ANÁLISIS Y EVALUACIÓN
   - Verificación de hallazgos
   - Análisis de riesgos (incluyendo dimensión competitiva)
   - Comparación con criterios
   - Valoración profesional

4. INFORME
   - Borrador del informe
   - Contraste con el auditado
   - Informe definitivo
   - Hoja de ruta de mejora

5. SEGUIMIENTO
   - Plan de acción del auditado
   - Verificación de medidas correctivas
   - Cierre de no conformidades
```

### 1.3 Documentos clave que produce el auditor

- **Carta de encargo**: contrato con alcance, plazos, honorarios, responsabilidades.
- **Plan de auditoría**: cronograma, métodos, equipo, recursos.
- **Papeles de trabajo**: registro detallado de la evidencia obtenida.
- **Matriz de hallazgos**: tabla estructurada de todo lo encontrado.
- **Informe ejecutivo**: 2-4 páginas para dirección.
- **Informe técnico**: documento completo (50-150 páginas).
- **Plan de acción**: respuesta del auditado, validada por el auditor.

---

## 2. Auditoría del ciclo de vida completo

Recordatorio del ciclo (S1), ahora con **objetivos de auditoría** en cada fase:

| Fase | Objetivo de auditoría | Preguntas clave |
|------|----------------------|-----------------|
| **Planificación** | Verificar análisis de necesidad, proporcionalidad y stakeholders | ¿Se evaluó si IA era el medio adecuado? ¿Se identificaron stakeholders? |
| **Datos** | Calidad, legalidad, representatividad, sesgos, trazabilidad | ¿Hay linaje de datos? ¿Se midió sesgos? ¿Cumple RGPD? |
| **Entrenamiento** | Reproducibilidad, documentación, control de versiones | ¿Es reproducible el entrenamiento? ¿Están versionados datasets y modelos? |
| **Validación** | Métricas (rendimiento + equidad), pruebas adversariales | ¿Se probaron ataques adversariales? ¿Hay métricas de equidad? |
| **Despliegue** | Documentación al usuario, supervisión humana, transparencia | ¿Se informa al usuario final? ¿Hay override humano? |
| **Operación** | Monitorización, gestión de incidentes, deriva | ¿Hay monitorización de deriva? ¿Se gestionan incidentes? |
| **Retirada** | Plan de sucesión, conservación de datos, comunicación | ¿Hay plan de sucesión? ¿Se conservan datos según retención legal? |

### 2.1 Pruebas y evidencias por fase (ejemplos)

**Datos**
- Solicitar el datasheet del dataset principal.
- Análisis estadístico de representatividad demográfica.
- Revisión del flujo de datos y cumplimiento RGPD.
- Pruebas de re-identificación.

**Modelo**
- Solicitar la model card.
- Comprobar el versionado y la reproducibilidad.
- Análisis de explicabilidad con SHAP/LIME en muestras representativas.

**Producción**
- Auditoría de logs.
- Pruebas de deriva.
- Entrevistas a usuarios del sistema.
- Mystery shopping en sistemas de cara al público.

---

## 3. Gobernanza de IA dentro de las organizaciones

### 3.1 ¿Qué es la gobernanza de IA?

Es el conjunto de **estructuras, procesos y mecanismos** que aseguran que la IA en una organización se desarrolla y usa de forma coherente con sus objetivos, valores y obligaciones legales.

Comprende:

- **Estructuras**: comités, roles, responsabilidades.
- **Políticas**: documentos normativos internos.
- **Procesos**: flujos de aprobación, revisión, escalado.
- **Cultura**: alfabetización en IA, valores compartidos.

### 3.2 Modelo de gobernanza recomendado

```
┌──────────────────────────────────────────────────┐
│              COMITÉ DE DIRECCIÓN                 │
│       Aprueba política y estrategia de IA        │
└────────────────────┬─────────────────────────────┘
                     ↓
┌──────────────────────────────────────────────────┐
│              COMITÉ DE IA / ÉTICA                │
│   Multidisciplinar: técnico, jurídico, ética,    │
│   negocio, representación trabajadores           │
│   Revisa casos de uso, decide sobre alto riesgo  │
└──────────┬───────────────────────────┬───────────┘
           ↓                           ↓
┌────────────────────────┐  ┌───────────────────────┐
│   RESPONSABLE DE IA    │  │  DPO (Datos)          │
│   (AI Officer)         │  │  Articula con IA      │
│   Operativiza política │  │                       │
└──────────┬─────────────┘  └───────────────────────┘
           ↓
┌──────────────────────────────────────────────────┐
│   EQUIPOS OPERATIVOS (Tech, Producto, Negocio)   │
│   Diseñan, despliegan, operan sistemas           │
└──────────────────────────────────────────────────┘
```

### 3.3 Funciones, responsabilidades y roles

| Rol | Funciones principales | Preguntas del auditor |
|-----|----------------------|----------------------|
| **Dirección** | Aprueba estrategia, asigna recursos, asume responsabilidad última | ¿Hay política de IA aprobada? ¿Hay budget específico? |
| **Comité de IA** | Decide sobre casos de uso, supervisa cumplimiento ético y normativo | ¿El comité se reúne? ¿Tienen poder de decisión o solo consultivo? |
| **AI Officer / Responsable de IA** | Operativiza la política, coordina, reporta | ¿Hay alguien designado? ¿Tiene autonomía o está subordinado a IT? |
| **DPO** | Vela por cumplimiento RGPD, lleva registro de tratamientos | ¿Participa en decisiones de IA? ¿Ha hecho EIPDs para sistemas IA? |
| **CISO** | Seguridad de sistemas de IA | ¿Está integrado en ciclo de vida de IA o solo en producción? |
| **Equipos técnicos** | Desarrollan, despliegan, operan | ¿Tienen formación en IA ética? ¿Conocen AI Act? |
| **Auditoría interna** | Verificación continua del cumplimiento | ¿Auditó IA alguna vez? ¿Tiene competencias técnicas? |
| **Representación legal de trabajadores** | Información y consulta en sistemas que afecten al trabajo | ¿Se le consulta sobre sistemas de monitoreo o selección? |

### 3.4 Política de uso de IA

Documento normativo interno mínimo. Debe contener:

1. Ámbito de aplicación (a quién aplica).
2. Principios rectores.
3. Clasificación de usos (permitidos, restringidos, prohibidos).
4. Herramientas autorizadas y vetadas.
5. Datos que pueden y no pueden introducirse en sistemas externos.
6. Obligaciones de transparencia (declarar uso de IA en entregables).
7. Procedimiento de propuesta de nuevos usos.
8. Régimen disciplinario.
9. Formación obligatoria asociada.

**Pregunta del auditor:** "¿Existe política de uso de IA? ¿Está comunicada? ¿Se actualiza? ¿Se hace cumplimiento?"

### 3.5 Alfabetización en IA (AI Act art. 4)

Desde febrero de 2025, los proveedores e implementadores de sistemas de IA **deben asegurar un nivel suficiente de alfabetización en IA** entre su personal.

Esto convierte a la **formación** en una obligación auditable.

**Para el auditor:**
- ¿Existe programa de alfabetización en IA?
- ¿Es obligatorio o voluntario?
- ¿Está adaptado por rol (directivos, técnicos, general)?
- ¿Se registra asistencia y evaluación?
- ¿Se actualiza periódicamente?

---

## 4. Gestión de procesos de IA

### 4.1 Proceso de incorporación de un nuevo sistema de IA

```
PROPUESTA → EVALUACIÓN PRELIMINAR → DECISIÓN
  (negocio)      (Comité IA)          (Dirección)
                       ↓
              CLASIFICACIÓN DE RIESGO
                       ↓
        ┌──────────────┼──────────────┐
        ↓              ↓              ↓
   RIESGO MIN      RIESGO LIM    ALTO RIESGO
   Aprobación      Transparencia  Proceso completo:
   directa         + registro     EIPD, conformidad,
                                  documentación,
                                  registro UE
```

**Para el auditor:** "¿Se sigue este proceso? ¿Hay casos que se saltaron el comité? ¿Hay documentación de decisiones?"

### 4.2 Procesos transversales que la auditoría debe verificar

- **Inventario actualizado** de sistemas de IA.
- **Registro de incidentes** y *near-misses*.
- **Procedimiento de gestión de quejas** del usuario final.
- **Procedimiento de override** humano.
- **Revisiones periódicas** post-implantación.
- **Procedimiento de retirada** del sistema.
- **Procedimiento de comunicación** a autoridades (AESIA, AEPD).
- **Procedimiento de evaluación de proveedores** (incluyendo lock-in).

---

## 5. Gestión de riesgos en IA

### 5.1 Ciclo de gestión del riesgo (ISO 31000 / 23894)

```
1. ESTABLECER CONTEXTO
   ↓
2. IDENTIFICAR RIESGOS
   ↓
3. ANALIZAR RIESGOS (probabilidad × impacto)
   ↓
4. EVALUAR RIESGOS (¿aceptable?)
   ↓
5. TRATAR RIESGOS (evitar / reducir / transferir / aceptar)
   ↓
6. MONITORIZAR Y REVISAR
   ↓
   [retroalimentación a 1]
```

### 5.2 Estrategias de tratamiento del riesgo

| Estrategia | Cuándo aplicarla | Ejemplo |
|------------|------------------|---------|
| **Evitar** | Riesgo crítico no mitigable | No usar reconocimiento emocional en clase |
| **Reducir** | Riesgo controlable | Añadir supervisión humana, mejorar datos |
| **Transferir** | Tercero más capacitado | Externalizar a proveedor certificado, asegurar |
| **Aceptar** | Riesgo bajo y coste de mitigación alto | Asumir formal y documentadamente |

---

## 6. Diseño de controles

Los controles son las **medidas concretas** que mitigan los riesgos. ISO 42001 Anexo A los agrupa así:

### 6.1 Controles de entidad
- Política de IA aprobada por dirección.
- Estructura de gobernanza definida.
- Roles y responsabilidades documentados.
- Programa de formación.
- Revisión por dirección periódica.

### 6.2 Controles técnicos
- Sistemas de detección de sesgo.
- Pipelines de validación de datos.
- Sistemas de logs y monitorización.
- Mecanismos de control de versiones.
- Cifrado, control de acceso, etc.

### 6.3 Controles de aplicación
- Validación en el momento de uso.
- Información al usuario.
- Mecanismos de override.
- Vías de reclamación.

### 6.4 Mapeo controles ↔ riesgos

Una **matriz de controles** cruza riesgos identificados con controles existentes y propuestos. Identifica:

- **Controles redundantes**: varios para el mismo riesgo, oportunidad de simplificar.
- **Controles huérfanos**: no asociados a ningún riesgo, candidatos a revisión.
- **Riesgos descubiertos**: sin controles, prioridad alta.

---

## 7. Evaluación de impacto en procesos de IA

### 7.1 Tipos de evaluación de impacto

- **EIPD / DPIA** (RGPD art. 35): obligatoria cuando hay tratamientos de alto riesgo para los derechos de los interesados.
- **FRIA — Fundamental Rights Impact Assessment** (AI Act art. 27): obligatoria para implementadores de sistemas de alto riesgo en ciertos casos.
- **AIA — Algorithmic Impact Assessment**: instrumento voluntario integral (Canadá lo usa obligatoriamente para administraciones).

### 7.2 Estructura de una FRIA (Reglamento UE 2024/1689, art. 27)

1. Descripción de los procesos en los que se usará el sistema.
2. Período y frecuencia de uso.
3. Categorías de personas físicas afectadas.
4. Riesgos específicos para grupos vulnerables.
5. Medidas de supervisión humana.
6. Medidas para gestionar riesgos identificados.
7. Mecanismos de gobernanza interna y de queja.

### 7.3 Articulación EIPD + FRIA

Cuando ambas son obligatorias, pueden integrarse en un único documento que cubra los requisitos de las dos.

---

## 8. Auditoría de la dimensión competitiva

### 8.1 Qué auditar en esta dimensión

La **triple dimensión** de la auditoría de IA incluye ahora la competitiva:

| Aspecto | Preguntas del auditor | Evidencias |
|---------|----------------------|------------|
| **Concentración de proveedores** | ¿Qué porcentaje de sistemas críticos dependen de 1-2 proveedores? | Inventario, análisis de dependencias |
| **Lock-in técnico** | ¿Es técnicamente posible migrar a otro proveedor en <6 meses? | Análisis de arquitectura, entrevistas técnicas |
| **Lock-in de datos** | ¿Quién es propietario de los datos mejorados por el proveedor? | Revisión de contratos, cláusulas |
| **Costes de salida** | ¿Se han cuantificado los costes de cambio de proveedor? | Análisis de costes, planes de migración |
| **Contratos** | ¿Existen cláusulas de exclusividad o mínimos garantizados? | Revisión legal de contratos |
| **Fusiones recientes** | ¿Ha habido fusiones en la cadena de valor que afecten a la organización? | Análisis de mercado, noticias sectoriales |
| **Alternativas** | ¿Existen 2+ proveedores alternativos viables? | Análisis de mercado, pruebas POC |

### 8.2 Documentación específica

- **Mapa de dependencias** de proveedores de IA.
- **Análisis de portabilidad** de modelos y datos.
- **Matriz de lock-in** por sistema crítico.
- **Plan de multi-proveedor** (si existe).
- **Revisión de cláusulas contractuales** relevantes.
- **Análisis de fusiones** recientes en el sector.

### 8.3 Recomendaciones típicas

- Diversificar proveedores para sistemas no críticos.
- Establecer **sandbox regulatorio** interno para evaluar alternativas.
- Negociar cláusulas de portabilidad y escape.
- Desarrollar capacidades internas para reducir dependencia.
- Monitorizar fusiones en el sector que puedan afectar al ecosistema de IA.

---

## 9. Comunicación de resultados: triple dimensión

### 9.1 Estructura del informe integral

El informe de auditoría de IA debe reflejar **tres dimensiones**:

1. **TÉCNICA**: cumplimiento, riesgos, controles.
2. **ÉTICA**: principios, dilemas del algoritmo, derechos fundamentales.
3. **COMPETITIVA**: concentración, lock-in, dinámicas de mercado.

### 9.2 Sección específica: "Dimensión competitiva y de mercado"

En el informe técnico, añadir sección tras análisis de gobernanza:

#### 9.X. DIMENSIÓN COMPETITIVA

**9.X.1. Mapa de dependencias**
- Porcentaje de sistemas por proveedor.
- Sistemas críticos con proveedor único.

**9.X.2. Análisis de lock-in**
- Portabilidad técnica de modelos.
- Portabilidad de datos.
- Costes de salida estimados.

**9.X.3. Riesgos competitivos**
- Fusiones recientes relevantes.
- Dependencias de ecosistemas controlados por big tech.
- Alternativas disponibles.

**9.X.4. Recomendaciones**
- Estrategia de diversificación.
- Plan de mitigación de lock-in.
- Capacidades internas a desarrollar.

### 9.3 Presentación a dirección

La presentación ejecutiva debe incluir **una diapositiva específica** sobre riesgos competitivos:

- "¿Qué pasaría si nuestro proveedor principal es adquirido por un competidor?"
- "¿Cuánto nos costaría cambiar de proveedor de IA crítico?"
- "¿Tenemos bargaining power o somos cautivos?"

---

## 10. Documentación y comunicación de los resultados

### 10.1 Estructura recomendada del informe de auditoría

**Informe ejecutivo (2-4 pp.)**
1. Resumen ejecutivo
2. Alcance y metodología
3. Principales hallazgos
4. Nivel de cumplimiento
5. Recomendaciones prioritarias

**Informe técnico completo (50-150 pp.)**
1. Introducción y contexto
2. Alcance, criterios y metodología
3. Mapa de sistemas de IA auditados
4. Análisis del cumplimiento por marco (AI Act, ISO 42001, etc.)
5. Análisis de riesgos
6. Análisis de gobernanza
7. **Análisis de dimensión competitiva** (nueva sección)
8. Análisis del ciclo de vida (por sistema)
9. Análisis de aspectos éticos y sociales
10. Hallazgos detallados (matriz)
11. Conclusiones y nivel de madurez
12. Recomendaciones y hoja de ruta
13. Anexos (papeles de trabajo, plantillas, evidencias)

### 10.2 Buenas prácticas en redacción

- **Factual, no opinativo**: "se observa", "no se evidencia", evitar "creemos".
- **Constructivo**: cada hallazgo crítico acompañado de recomendación.
- **Trazable**: cada conclusión referenciada a evidencia documentada.
- **Adaptado al lector**: el ejecutivo y el técnico tienen audiencias distintas.
- **Sin jerga innecesaria**: si el destinatario es directivo, no abusar de tecnicismos.
- **Claro en niveles de criticidad**: usar consistentemente la escala de no conformidades.

### 10.3 Presentación de resultados

- **Reunión de contraste** con el auditado antes del informe final (derecho a alegar sobre hallazgos).
- **Presentación a dirección**: 30-45 min, foco en riesgos críticos y hoja de ruta.
- **Sesión con representación de trabajadores** cuando proceda.
- **Comunicación al personal**: resultados agregados, sin información identificable.

### 10.4 Comunicación a autoridades

El AI Act introduce obligaciones de notificación a autoridades:
- **Incidentes graves** (art. 73): notificación a la autoridad nacional en plazos tasados.
- **Modificaciones sustanciales** del sistema.
- **Riesgos sistémicos** detectados en GPAI.

El auditor debe verificar que la organización conoce y aplica estos circuitos.

---

## 11. Evaluación de resultados

### 11.1 Métricas de rendimiento técnico

| Métrica | Cuándo usarla |
|---------|---------------|
| **Accuracy** | Clases balanceadas, errores simétricos |
| **Precision / Recall / F1** | Clases desbalanceadas |
| **AUC-ROC** | Comparar clasificadores |
| **MAE / RMSE** | Regresión |
| **BLEU / ROUGE / BERTScore** | Generación de texto |
| **Perplejidad** | Modelos de lenguaje |

### 11.2 Métricas de equidad

| Métrica | Definición intuitiva |
|---------|---------------------|
| **Paridad demográfica** | Mismo % de decisiones positivas en cada grupo |
| **Igualdad de oportunidades** | Mismo % de verdaderos positivos en cada grupo |
| **Igualdad de odds** | Mismas tasas de error en cada grupo |
| **Calibración por grupo** | Probabilidades igualmente informativas |
| **Predictive parity** | Mismo PPV en cada grupo |

**Trade-off fundamental**: estas métricas son matemáticamente incompatibles entre sí en la mayoría de casos. El auditor debe verificar que la elección esté justificada y documentada.

### 11.3 Métricas de robustez

- Tasa de éxito de ataques adversariales conocidos.
- Robustez ante perturbaciones (ruido, transformaciones).
- Comportamiento ante datos fuera de distribución.

### 11.4 Métricas de explicabilidad

- Fidelidad de las explicaciones al modelo.
- Estabilidad de las explicaciones.
- Comprensibilidad para el usuario destinatario (medible mediante estudios con usuarios).

---

## 12. Mejora continua: no conformidades y medidas correctoras

### 12.1 Clasificación de no conformidades

| Tipo | Descripción | Plazo típico |
|------|-------------|--------------|
| **Crítica** | Incumplimiento que puede causar daño grave o sanción severa | Inmediato |
| **Mayor** | Incumplimiento sistémico de un requisito | 30-90 días |
| **Menor** | Incumplimiento puntual o de impacto limitado | 90-180 días |
| **Observación** | Oportunidad de mejora, no incumplimiento | Próxima revisión |

### 12.2 Tratamiento de una no conformidad

```
1. DETECCIÓN
   ↓
2. ANÁLISIS DE CAUSAS RAÍZ (5 porqués, diagrama Ishikawa, etc.)
   ↓
3. CORRECCIÓN INMEDIATA (resolver el síntoma)
   ↓
4. ACCIÓN CORRECTIVA (eliminar la causa raíz)
   ↓
5. VERIFICACIÓN DE EFICACIA
   ↓
6. CIERRE FORMAL Y DOCUMENTACIÓN
```

### 12.3 Diferencia clave: corrección vs acción correctiva

- **Corrección**: arregla el problema concreto. Ejemplo: corregir manualmente la decisión sesgada.
- **Acción correctiva**: elimina la causa para que no vuelva a ocurrir. Ejemplo: rebalancear el dataset y reentrenar.

Una auditoría que solo exija correcciones y no acciones correctivas no cumple su función.

---

## 13. Glosario S4

| Término | Definición |
|---------|------------|
| **EIPD / DPIA** | Evaluación de Impacto en Protección de Datos |
| **FRIA** | Fundamental Rights Impact Assessment |
| **AIA** | Algorithmic Impact Assessment |
| **No conformidad** | Incumplimiento de un requisito |
| **Causa raíz** | Origen subyacente de un problema |
| **Acción correctiva** | Medida que elimina la causa de una no conformidad |
| **Hoja de ruta** | Plan temporalizado de implementación |
| **Quick win** | Acción de bajo coste y alto impacto inmediato |
| **Modelo de madurez** | Marco para evaluar el grado de desarrollo de una capacidad |
| **Mejora continua** | Ciclo PDCA aplicado a la gestión de IA |
| **Triple dimensión** | Enfoque auditor que integra técnica + ética + competitiva |
| **Lock-in** | Dependencia que hace costoso cambiar de proveedor |
| **Bargaining power** | Poder de negociación frente a proveedores |

---

## Cierre del curso

> La auditoría de sistemas de IA no es un fin, es un instrumento. Su objetivo último no es certificar el cumplimiento, sino contribuir a que los sistemas de IA sirvan efectivamente a las personas y a las organizaciones. El auditor profesional combina rigor técnico, conocimiento normativo, sensibilidad ética, comprensión de dinámicas competitivas y capacidad de comunicación. Ninguna de estas dimensiones por separado basta.
>
> En un mundo donde la IA redefine qué problemas son resolubles y quién tiene legitimidad para resolverlos, el auditor de IA es un guardián de la agencia humana, la responsabilidad y la competencia.

---

**[|]**
