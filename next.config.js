/** @type {import('next').NextConfig} */
const nextConfig = {
  // Vercel despliega Next.js de forma nativa: no necesitamos output: 'export'.
  // Si en el futuro quieres desplegar como sitio estático en otro proveedor
  // (GitHub Pages, Netlify estático, subruta de laclasedigital.com), descomenta:
  // output: 'export',
  // trailingSlash: true,

  // Si se integra como subruta de laclasedigital.com, descomenta y ajusta:
  // basePath: '/cursos/auditoria-ia',

  images: {
    unoptimized: false, // Vercel optimiza imágenes automáticamente
  },
};

module.exports = nextConfig;
