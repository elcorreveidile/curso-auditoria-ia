# CLAUDE.md

> Contexto del proyecto para agentes Claude (Claude Code, CLI, etc.).
> Última actualización: mayo 2026

-----

## Quién soy yo

Javier Benítez Láinez. Profesor de español como lengua extranjera. Fundador de **La Clase Digital** ([laclasedigital.com](https://laclasedigital.com)), marca desde la que ofrezco cursos online especializados.

Mi marca personal es el símbolo `[|]` (bracket-pipe). Aparece en todos mis proyectos. Representa cursor de texto, separador editorial, operador lógico “or” y conector entre mundos.

**Importante para comunicarte conmigo:**

- Háblame en español, tono directo y natural, no cloying ni de chatbot.
- Llámame Javier (no Javi).
- No me propongas continuaciones a menos que lo pida explícitamente.
- Si una información es inferencial, especulativa o no verificada, márcalo con `[Inferencial]`, `[Especulación]` o `[No verificado]` al inicio.
- Si te falta información, pregúntame en lugar de inferir.

-----

## Qué es este proyecto

Sitio web del curso **“Auditoría de Procesos de Inteligencia Artificial”** que imparto en La Clase Digital.

- **Dominio:** [auditoria.laclasedigital.com](https://auditoria.laclasedigital.com)
- **Repo GitHub:** [github.com/elcorreveidile/curso-auditoria-ia](https://github.com/elcorreveidile/curso-auditoria-ia)
- **Hosting:** Vercel (auto-deploy desde `main`)
- **Stack:** Next.js 14 (App Router) + TypeScript + Tailwind CSS

### Datos del curso

|Dato           |Valor                                                                                      |
|---------------|-------------------------------------------------------------------------------------------|
|Modalidad      |Online en directo + grabaciones disponibles                                                |
|Fechas         |9, 10, 11 de septiembre de 2026                                                            |
|Horario        |16:00–20:00                                                                                |
|Duración       |12 horas (3 sesiones de 4 h)                                                               |
|Plazas máximas |30                                                                                         |
|Precio fundador|149 € · solo 20 plazas                                                                     |
|Precio general |249 € · resto de plazas                                                                    |
|Público        |Mixto: auditores, técnicos, gestores, docentes universitarios, responsables de cumplimiento|

-----

## Estructura del repositorio

```
curso-auditoria-ia/
├── app/                           # Rutas Next.js (App Router)
│   ├── page.tsx                   # Portada
│   ├── layout.tsx                 # Layout con Nav y Footer
│   ├── globals.css                # Estilos globales + tipografías
│   ├── programa/page.tsx          # Programa detallado
│   ├── caso/page.tsx              # Caso transversal (Centro Lingua)
│   ├── bibliografia/page.tsx      # Normativa y referencias
│   ├── matricula/page.tsx         # Matrícula con tarifas y Stripe
│   ├── gracias/page.tsx           # Post-pago: clave automática
│   ├── acceso/page.tsx            # Gateway con contraseña
│   └── materiales/                # Zona privada (alumnado)
│       ├── sesion-1/page.tsx
│       ├── sesion-2/page.tsx
│       ├── sesion-3/page.tsx
│       ├── plantillas/page.tsx
│       ├── guion-docente/page.tsx
│       └── slides/page.tsx
├── components/
│   ├── Nav.tsx                    # Navegación superior
│   ├── Footer.tsx                 # Pie
│   ├── AccessGate.tsx             # Gateway con clave compartida
│   └── ProtectedDoc.tsx           # Renderizado de markdown protegido
├── content/                       # FUENTE EDITABLE del contenido
│   ├── sesion-1.md                # Dossier teórico Sesión 1
│   ├── sesion-2.md                # Dossier teórico Sesión 2
│   ├── sesion-3.md                # Dossier teórico Sesión 3
│   ├── plantillas.md              # 7 plantillas profesionales
│   ├── guion-docente.md           # Notas para impartir
│   └── caso-completo.md           # Caso Centro Lingua (3 entregas)
├── lib/
│   └── markdown.ts                # Utilidad para cargar markdowns
├── public/
│   └── slides/index.html          # Slides HTML autocontenidas
├── next.config.js                 # Config Next.js
├── vercel.json                    # Config Vercel
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

- Titulares con números entre paréntesis o italics (ej. *Auditoría de procesos*).
- Mono uppercase con tracking ancho para etiquetas (`MATRÍCULA · ONLINE`).
- Bordes finos (1px) sobre fondo claro, no sombras.
- Animaciones suaves de hover, no scroll-triggered.

-----

## Estado del proyecto · mayo 2026

### Hecho

- Sitio Next.js desplegado en Vercel con dominio `auditoria.laclasedigital.com`.
- Páginas públicas completas: portada, programa, caso, bibliografía.
- Zona privada con clave compartida (`AccessGate.tsx`).
- Materiales (dossiers, plantillas, guion docente, slides) renderizados desde markdown.
- Flujo de matrícula con dos tarifas (149 € fundador / 249 € general).
- Página `/gracias` que muestra la clave automáticamente tras el pago.
- Logo separado en dos: `[|] LA CLASE DIGITAL` (enlaza fuera) · `AUDITORÍA IA` (enlaza al inicio).
- Creado los dos Payment Links en Stripe.
- Implementado **contador dinámico de plazas fundador** vinculado a Stripe API.

### Plan estratégico

**Fase 1 (ahora hasta junio 2026):** matrícula manual sencilla en este repo. Clave compartida + Stripe Payment Links. Sin login real. Pensado para 20-30 alumnos primera edición.

**Fase 2 (julio-agosto 2026):** refactor del backend de IA-ELE (repo `elcorreveidile/curso-ia-ele`, FastAPI + MongoDB + Stripe + magic links + admin) para soportar **multi-curso**. Migración del sitio de Auditoría a la plataforma SaaS. Magic links reales, certificados PDF, panel admin unificado.

**Fase 3 (septiembre 2026):** primera edición del curso, ya con sistema profesional.

-----

## Contraseña de acceso a materiales

Actualmente **`auditoria2026`**. Está hardcodeada en:

- `components/AccessGate.tsx` (línea con `const ACCESS_PASSWORD`)
- `app/gracias/page.tsx` (línea con `const ACCESS_PASSWORD`)

**Tarea pendiente:** centralizar la constante en `lib/config.ts` para evitar fuentes de error futuras.

⚠️ Seguridad: la protección es **client-side**, no es seguridad real, solo una barrera para alumnado matriculado. Cualquiera con dev tools puede ver los markdowns. Cuando llegue Fase 2 (refactor), se reemplaza por autenticación real con magic links.

-----

## Stripe

- **Cuenta activa** del autor (la misma que se usa para el curso de IA-ELE).
- Pagos directos vía Payment Links (no integración por código backend).
- Tras pago, redirección a `https://auditoria.laclasedigital.com/gracias`.
- Dos Payment Links definitivos y pegar las URLs en `app/matricula/page.tsx` (constantes `STRIPE_LINK_FUNDADOR` y `STRIPE_LINK_GENERAL` al principio del archivo).
- “Limit number of payments” en el link fundador con valor 20.

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

-----

## Reglas para agentes Claude

Cuando un agente Claude (Claude Code, terminal, etc.) trabaja en este repo:

1. **Antes de tocar `content/*.md`**: estos archivos contienen contenido didáctico revisado del curso. No reformatear ni reescribir sin pedirme confirmación.
1. **Antes de tocar la identidad visual**: las decisiones de tipografía, paleta y disposición están tomadas. No cambiar sin pedírmelo.
1. **Branding institucional**: este curso es de **La Clase Digital**, no de la UGR. Mi vínculo con el CLM/UGR existe pero no se menciona en este sitio. Tampoco “doctor en Informática”: uso “estudios de doctorado en Informática” (el título no está convalidado en España).
1. **Marca**: el símbolo `[|]` debe aparecer en cabeceras y pies de páginas y archivos importantes.
1. **Caso transversal Centro Lingua**: es ficción inspirada en el CLM real donde trabajo. **No revelar la inspiración real en ningún documento público**. Si surge la pregunta, “caso ficticio”.
1. **Acoplamiento con `curso-ia-ele`**: este repo es independiente, pero estratégicamente convergerá con el repo `elcorreveidile/curso-ia-ele` en verano 2026. No replicar aquí infraestructura backend que ya existe allí.
1. **Producción real**: el sitio está ya en producción en `auditoria.laclasedigital.com`. Cualquier push a `main` lo despliega. Hacer pruebas antes de subir cambios significativos.
1. **Confirma antes de**:
- Borrar archivos.
- Refactorizar estructura de carpetas.
- Cambiar dependencias en `package.json`.
- Modificar la lógica de `AccessGate.tsx`.
- Tocar la configuración de Vercel (`vercel.json`, `next.config.js`).
1. **Si dudas, pregunta.** Es mejor una pregunta clara que una asunción incorrecta.

-----

## Recursos externos relacionados

- **Repo de IA-ELE** (otro curso, plataforma SaaS): [github.com/elcorreveidile/curso-ia-ele](https://github.com/elcorreveidile/curso-ia-ele)
- **Web matriz:** [laclasedigital.com](https://laclasedigital.com)
- **Vercel dashboard:** desde mi cuenta de GitHub.
- **Stripe dashboard:** misma cuenta que IA-ELE.

-----

**[|]**