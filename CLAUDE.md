# CLAUDE.md

> Contexto del proyecto para agentes Claude (Claude Code, CLI, etc.).
> Última actualización: 19 mayo 2026 (reingeniería completa)

-----

## Quién soy yo

Javier Benítez Láinez. Profesor de español como lengua extranjera. Fundador de **La Clase Digital** ([laclasedigital.com](https://laclasedigital.com)), marca desde la que ofrezco cursos online especializados.

Mi marca personal es el símbolo `[|]` (bracket-pipe). Aparece en todos mis proyectos. Representa cursor de texto, separador editorial, operador lógico "or" y conector entre mundos.

**Importante para comunicarte conmigo:**

- Háblame en español, tono directo y natural, no cloying ni de chatbot.
- Llámame Javier (no Javi).
- No me propongas continuaciones a menos que lo pida explícitamente.
- Si una información es inferencial, especulativa o no verificada, márcalo con `[Inferencial]`, `[Especulación]` o `[No verificado]` al inicio.
- Si te falta información, pregúntame en lugar de inferir.

-----

## Qué es este proyecto

Sitio web del curso **"Auditoría de Sistemas de Inteligencia Artificial"** que imparto en La Clase Digital.

- **Dominio:** [auditoria.laclasedigital.com](https://auditoria.laclasedigital.com)
- **Repo GitHub:** [github.com/elcorreveidile/curso-auditoria-ia](https://github.com/elcorreveidile/curso-auditoria-ia)
- **Hosting:** Vercel (auto-deploy desde `main`)
- **Stack:** Next.js 14.2 (App Router) + TypeScript + Tailwind CSS

### Datos del curso (actualizados mayo 2026)

|Dato           |Valor                                                                                      |
|---------------|-------------------------------------------------------------------------------------------|
|Modalidad      |Online en directo + grabaciones disponibles                                                |
|Fechas         |9, 16, 23, 30 de septiembre de 2026 (miércoles)                                           |
|Horario        |16:00–20:00                                                                                |
|Duración       |16 horas (4 sesiones de 4 h)                                                               |
|Plazas máximas |30                                                                                         |
|Precio fundador|299 € · solo 20 plazas                                                                     |
|Precio general |399 € · resto de plazas                                                                    |
|Público        |Mixto: auditores, técnicos, gestores, docentes universitarios, responsables de cumplimiento|

### Contenido del curso (reingeniería mayo 2026)

El curso ha sido **completamente reestructurado** para integrar el **Estudio de Prospeción Tecnológica en Inteligencia Artificial** (Ministerio de Economía, Comercio y Empresa, 2025, 308 pp, 1800+ referencias).

**Nuevos ejes transversales:**
- NLPUE (Nuevo Problema Lógica Utilidad y Ética) — IA como disruptor de la lógica de la utilidad
- 4 dilemas del algoritmo (agencia, atribución, transparencia, sesgo)
- Enfoques regulatorios comparados (UE vs EEUU vs China)
- IA generativa como categoría específica de riesgo
- Dimensión competitiva (vendor lock-in, concentración, fusiones)
- Ciberseguridad IA (ofensiva y defensiva)

**Estructura por sesiones:**
- **S1 (9 sept)**: Disrupción algorítmica y nueva lógica de la utilidad
- **S2 (16 sept)**: Marco regulatorio y sistemas de gestión (AI Act, ISO 42001, ISO 23894, NIST AI RMF)
- **S3 (23 sept)**: Riesgos, competitividad y ciberseguridad (IA generativa, concentración, dependencia de proveedores)
- **S4 (30 sept)**: Práctica auditora integral (metodología completa, gobernanza, comunicación triple dimensión)

-----

## Estructura del repositorio

```
curso-auditoria-ia/
├── app/                           # Rutas Next.js (App Router)
│   ├── page.tsx                   # Portada
│   ├── layout.tsx                 # Layout con Nav y Footer
│   ├── globals.css                # Estilos globales + tipografías
│   ├── programa/page.tsx          # Programa detallado (4 sesiones)
│   ├── caso/page.tsx              # Caso transversal (Centro Lingua)
│   ├── bibliografia/page.tsx      # Normativa y referencias
│   ├── matricula/page.tsx         # Matrícula con tarifas y Stripe
│   ├── gracias/page.tsx           # Post-pago: mensaje de email
│   ├── acceso/page.tsx            # Zona del alumnado (4 sesiones)
│   ├── api/                       # API routes
│   │   ├── verify-password/route.ts  # Verificación server-side
│   │   └── plazas/route.ts           # Contador dinámico plazas fundador
│   └── materiales/                # Zona privada (alumnado)
│       ├── sesion-1/page.tsx      # NLPUE + dilemas + comparado
│       ├── sesion-2/page.tsx      # AI Act + ISO 42001 + NIST
│       ├── sesion-3/page.tsx      # GenAI + competitividad + ciber
│       ├── sesion-4/page.tsx      # Práctica integral (NUEVA)
│       ├── plantillas/page.tsx    # 9 plantillas profesionales
│       ├── guion-docente/page.tsx # Guion completo 4 sesiones
│       └── slides/page.tsx        # Slides HTML autocontenidas
├── components/
│   ├── Nav.tsx                    # Navegación superior
│   ├── Footer.tsx                 # Pie
│   ├── AccessGate.tsx             # Gateway + API route
│   └── ProtectedDoc.tsx           # Renderizado markdown + navegación
├── content/                       # FUENTE EDITABLE del contenido
│   ├── sesion-1.md                # Dossier S1 (actualizado)
│   ├── sesion-2.md                # Dossier S2 (actualizado)
│   ├── sesion-3.md                # Dossier S3 (actualizado)
│   ├── sesion-4.md                # Dossier S4 (NUEVO)
│   ├── plantillas.md              # 9 plantillas (antes 7)
│   ├── guion-docente.md           # Guion 4 sesiones (reescrito)
│   └── caso-completo.md           # Caso Centro Lingua + dimensión competitiva
├── lib/
│   ├── config.ts                  # Configuración centralizada
│   └── markdown.ts                # Utilidad para cargar markdowns
├── public/
│   └── slides/index.html          # Slides (13 slides, botón salir)
├── .env.local                     # Variables de entorno (NO en GitHub)
│   └── ACCESS_PASSWORD            # Contraseña de acceso
├── next.config.js                 # Config Next.js
├── tailwind.config.js             # Paleta + tipografías
└── README.md
```

-----

## Identidad visual

- **Tipografías:**
  - Serif (titulares): Cormorant Garamond — italic 500 / 600
  - Sans (texto general): Inter Tight
  - Mono (etiquetas, código): JetBrains Mono
- **Paleta:**
  - Crema (paper): `#f4f1e8`
  - Crema cálido (paper-warm): `#ebe6d6`
  - Tinta (ink): `#1a1a1a`
  - Granate (accent): `#a73838`
  - Dorado (gold): `#d4a55a`
- **Marca:** símbolo `[|]` en cabecera, pie y momentos clave.
- **Estética:** editorial, sobria, espacio generoso, sin ornamento gratuito. Coherente con la sensibilidad literaria del autor.

**Reglas de tipografía y estilo:**

- Titulares con números entre paréntesis o italics (ej. *Auditoría de Sistemas*).
- Mono uppercase con tracking ancho para etiquetas (`MATRÍCULA · ONLINE`).
- Bordes finos (1px) sobre fondo claro, no sombras.
- Animaciones suaves de hover, no scroll-triggered.

-----

## Estado del proyecto · 19 mayo 2026

### Hecho (reingeniería completa)

**Estructura general:**
- ✅ Curso expandido de 12h (3 sesiones) a **16h (4 sesiones)**
- ✅ Cambio de formato: días consecutivos → **miércoles alternados** (9, 16, 23, 30 sept)
- ✅ Nombre actualizado: "Auditoría de **procesos**" → "Auditoría de **Sistemas** de IA"
- ✅ Precios actualizados: 149€/249€ → **299€/399€**

**Contenido:**
- ✅ Integración completa del Estudio Ministerio 2025 (NLPUE, 4 dilemas, comparado UE/EEUU/China)
- ✅ S1 actualizada: NLPUE, dilemas del algoritmo, enfoques regulatorios comparados
- ✅ S2 actualizada: AI Act, ISO 42001, ISO 23894, NIST AI RMF, ciclos de vida
- ✅ S3 reescrita: IA generativa (profundización), dimensión competitiva, ciberseguridad
- ✅ S4 creada: práctica auditora integral, comunicación triple dimensión
- ✅ Caso Centro Lingua: añadida dimensión competitiva (9º sistema, lock-in, adquisición proveedor)
- ✅ 9 plantillas profesionales (antes 7): + matriz dependencias, + ficha dilema
- ✅ Bibliografía: añadidos informes oficiales y normativa internacional

**Sitio web:**
- ✅ Todas las páginas actualizadas con 4 sesiones
- ✅ Portada: nuevos título, fechas, precios, enlaces a marcos regulatorios
- ✅ Programa: 4 sesiones con nuevos títulos y metodología
- ✅ Matrícula: nuevos precios, duración 16h, 120 páginas

**Seguridad y acceso:**
- ✅ **Password movida a .env.local** (no hardcodeada en código)
- ✅ **API route `/api/verify-password`** para verificación server-side
- ✅ AccessGate actualizado para llamar a la API
- ✅ Navegación entre sesiones (botones Anterior/Siguiente al final de cada dossier)
- ✅ Página `/acceso` actualizada con 4 sesiones y nuevos títulos

**Slides:**
- ✅ 13 slides (antes 12) con 4 sesiones
- ✅ Portada actualizada: título, fechas, duración 16h
- ✅ Índice: 4 sesiones con nuevos títulos
- ✅ S1, S2, S3, S4: contenidos actualizados
- ✅ **Botón de salida** "✕ Salir" en navegación flotante

**Guion docente:**
- ✅ **Rescrito completamente** para 4 sesiones (16h)
- ✅ Estructura detallada por bloques horarios
- ✅ Nuevos talleres: dilemas del algoritmo (S1), matriz dependencias (S3), plan completo (S4)
- ✅ Comunicación triple dimensión (técnica + ética + competitiva)
- ✅ Material para imprimir actualizado
- ✅ Lectura mínima del docente incluye Estudio Ministerio

### Plan estratégico

**Fase 1 (mayo–septiembre 2026):** Curso en producción con plataforma simple:
- Clave compartida + API route server-side
- Stripe Payment Links con contador dinámico
- Sin login real, solo barrera client-side (documentado como tal)
- Pensado para 20-30 alumnos primera edición

**Fase 2 (julio-agosto 2026):** Refactor del backend de IA-ELE (repo `elcorreveidile/curso-ia-ele`, FastAPI + MongoDB + Stripe + magic links + admin) para soportar **multi-curso**. Migración del sitio de Auditoría a la plataforma SaaS. Magic links reales, certificados PDF, panel admin unificado.

**Fase 3 (septiembre 2026):** Primera edición del curso, ya con sistema profesional si se completa Fase 2. Si no, seguir con Fase 1 para ediciones futuras.

-----

## Contraseña de acceso a materiales

Actualmente **`auditoria2026`** (almacenada en `.env.local`, NO en GitHub).

**Implementación:**
- Variable de entorno: `process.env.ACCESS_PASSWORD`
- API route: `/api/verify-password` (verificación server-side)
- AccessGate: llamada fetch a la API, no comparación client-side
- LocalStorage: token `'ok'` una vez verificada

**Archivos que usan la contraseña:**
- `components/AccessGate.tsx` — gateway principal
- NO está en `app/gracias/page.tsx` (allí solo se dice "recibirás email")

⚠️ **Seguridad:** La protección es **client-side** con verificación server-side de la contraseña, pero no es seguridad real. Es una barrera para alumnado matriculado. Cualquiera con dev tools puede ver los markdowns. Cuando llegue Fase 2 (refactor), se reemplaza por autenticación real con magic links.

-----

## Stripe

- **Cuenta activa** del autor (la misma que se usa para el curso de IA-ELE).
- **Dos Payment Links** actualizados con nuevos precios:
  - Fundador (299€): limitado a 20 plazas
  - General (399€): sin límite
- URLs almacenadas en `lib/config.ts` (`STRIPE_LINK_FUNDADOR`, `STRIPE_LINK_GENERAL`)
- **API route `/api/plazas`**: contador dinámico de plazas fundador restantes (vinculado a Stripe API)
- Tras pago, redirección a `https://auditoria.laclasedigital.com/gracias`
- Página gracias: mensaje "recibirás tu clave por email en 24h"

-----

## Comandos habituales

```bash
# Desarrollo local
npm install              # solo la primera vez
npm run dev              # arrancar en localhost:3000

# Build de prueba
npm run build

# Workflow de cambios
git add .
git commit -m "mensaje claro"
git push                 # Vercel despliega automáticamente
```

⚠️ **Producción real:** el sitio está en `auditoria.laclasedigital.com`. Cualquier push a `main` lo despliega. Hacer `npm run build` antes de cambios significativos.

-----

## Reglas para agentes Claude

Cuando un agente Claude (Claude Code, terminal, etc.) trabaja en este repo:

1. **Antes de tocar `content/*.md`**: estos archivos contienen contenido didáctico revisado del curso. No reformatear ni reescribir sin pedirme confirmación.
2. **Antes de tocar la identidad visual**: las decisiones de tipografía, paleta y disposición están tomadas. No cambiar sin pedírmelo.
3. **Branding institucional**: este curso es de **La Clase Digital**, no de la UGR. Mi vínculo con el CLM/UGR existe pero no se menciona en este sitio. Tampoco "doctor en Informática": uso "estudios de doctorado en Informática" (el título no está convalidado en España).
4. **Marca**: el símbolo `[|]` debe aparecer en cabeceras y pies de páginas y archivos importantes.
5. **Caso transversal Centro Lingua**: es ficción inspirada en centros reales donde trabajo. **No revelar la inspiración real en ningún documento público**. Si surge la pregunta, "caso ficticio".
6. **Acoplamiento con `curso-ia-ele`**: este repo es independiente, pero estratégicamente convergerá con el repo `elcorreveidile/curso-ia-ele` en verano 2026. No replicar aquí infraestructura backend que ya existe allí.
7. **Producción real**: el sitio está ya en producción en `auditoria.laclasedigital.com`. Cualquier push a `main` lo despliega. Hacer pruebas antes de subir cambios significativos.
8. **Confirma antes de**:
   - Borrar archivos.
   - Refactorizar estructura de carpetas.
   - Cambiar dependencias en `package.json`.
   - Modificar la lógica de `AccessGate.tsx` o rutas API.
   - Tocar la configuración de Vercel.
9. **Si dudas, pregunta.** Es mejor una pregunta clara que una asunción incorrecta.

-----

## Recursos externos relacionados

- **Repo de IA-ELE** (otro curso, plataforma SaaS): [github.com/elcorreveidile/curso-ia-ele](https://github.com/elcorreveidile/curso-ia-ele)
- **Web matriz:** [laclasedigital.com](https://laclasedigital.com)
- **Vercel dashboard:** desde mi cuenta de GitHub.
- **Stripe dashboard:** misma cuenta que IA-ELE.

-----

## Referencias clave del curso

**Normativa principal:**
- Reglamento (UE) 2024/1689 (AI Act) — [EUR-Lex](https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=CELEX:32024R1689)
- ISO/IEC 42001:2023 (Sistema de Gestión de IA) — [ISO](https://www.iso.org/standard/81230.html)
- ISO/IEC 23894:2023 (Gestión de riesgos de IA) — [ISO](https://www.iso.org/standard/76977.html)
- NIST AI Risk Management Framework 1.0 — [NIST](https://www.nist.gov/itl/ai-risk-management-framework)

**Informes oficiales:**
- Ministerio de Economía, Comercio y Empresa (2025). *Estudio de Prospeción Tecnológica en Inteligencia Artificial*. 308 pp, 1800+ referencias.

**[|]**
