# Curso de Auditoría de Procesos de IA

Sitio web del curso **Auditoría de Procesos de Inteligencia Artificial** de [La Clase Digital](https://laclasedigital.com).

> Curso online · 9, 10 y 11 de septiembre de 2026 · 12 horas en directo
> Docente: Javier Benítez Láinez · [laclasedigital.com](https://laclasedigital.com)

---

## Estructura

- **`app/`** — páginas Next.js (App Router).
  - `page.tsx` — portada
  - `programa/` — programa completo (pública)
  - `caso/` — descripción del caso transversal (pública)
  - `bibliografia/` — referencias normativas y lecturas (pública)
  - `acceso/` — gateway con contraseña a materiales (privada)
  - `materiales/` — dossiers por sesión, plantillas, guion, slides (privadas)
- **`components/`** — Nav, Footer, AccessGate, ProtectedDoc.
- **`content/`** — markdowns de los dossiers (fuente editable).
- **`lib/`** — utilidades.
- **`public/slides/`** — presentación HTML autocontenida.

---

## Desarrollo local

```bash
npm install
npm run dev
```

Disponible en http://localhost:3000.

---

## Despliegue

### Vercel (recomendado y activo)

El sitio está configurado para desplegar automáticamente en Vercel cada vez que se hace push a `main`. Configuración inicial:

1. Iniciar sesión en [vercel.com](https://vercel.com) con la cuenta de GitHub.
2. Importar el repositorio `elcorreveidile/curso-auditoria-ia`.
3. Vercel detecta automáticamente el framework Next.js. No requiere configuración manual.
4. Click en **Deploy**.

A partir de ese momento:
- Cada push a `main` lanza un despliegue de producción.
- Cada PR genera una preview URL automática.

### Build local (verificación)

```bash
npm install
npm run build
npm start
```

### Otros destinos posibles

Si en algún momento se necesita desplegar como sitio estático (GitHub Pages, Netlify, subruta de laclasedigital.com), descomentar en `next.config.js`:

```js
output: 'export',
trailingSlash: true,
```

Y ejecutar `npm run build`. La carpeta `out/` contendrá el sitio estático.

---

## Acceso a materiales privados

La clave por defecto es **`auditoria2026`**. Para cambiarla, editar `components/AccessGate.tsx`:

```ts
const ACCESS_PASSWORD = 'auditoria2026';
```

> ⚠️ **Nota de seguridad:** la protección con contraseña client-side **no es seguridad real**. Cualquier persona con conocimientos técnicos puede inspeccionar el código y ver el contenido. Sirve como **barrera para alumnado matriculado**, no como protección de información confidencial. Para protección real, migrar la zona privada a una ruta protegida en el backend de laclasedigital.com.

---

## Editar contenido

Los dossiers están en `content/*.md`. Edítalos como markdown estándar; las páginas los renderizan automáticamente.

Para añadir una nueva sesión:

1. Crear `content/sesion-N.md`.
2. Crear `app/materiales/sesion-N/page.tsx` siguiendo el patrón de los existentes.
3. Añadir tarjeta de acceso en `app/acceso/page.tsx`.

---

## Despliegue como subruta de laclasedigital.com

Si finalmente se integra dentro del dominio principal:

**Opción A — Mantener Vercel y configurar dominio personalizado:**

1. En Vercel: añadir `auditoria.laclasedigital.com` como dominio.
2. En tu DNS: crear un registro CNAME apuntando a `cname.vercel-dns.com`.

**Opción B — Migrar a sitio estático e integrar en el repo principal:**

1. En `next.config.js`, descomentar `output: 'export'` y `basePath: '/cursos/auditoria-ia'`.
2. Compilar: `npm run build`.
3. Copiar contenido de `out/` al servidor de laclasedigital.com bajo `/cursos/auditoria-ia/`.

---

## Identidad visual

- **Tipografías:** Cormorant Garamond (serif), Inter Tight (sans), JetBrains Mono (mono).
- **Paleta:** crema `#f4f1e8` · tinta `#1a1a1a` · granate `#a73838` · dorado `#d4a55a`.
- **Marca:** `[|]` en cabeceras y pies.
- Coherente con la identidad de [laclasedigital.com](https://laclasedigital.com).

---

## Licencia

Contenido © Javier Benítez Láinez. Todos los derechos reservados.

---

**[|]**
