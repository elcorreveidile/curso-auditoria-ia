/**
 * Configuración centralizada del curso.
 *
 * IMPORTANTE: ACCESS_PASSWORD ahora se almacena en variable de entorno (process.env.ACCESS_PASSWORD)
 * para no estar expuesta en el repositorio. La verificación se hace vía API route server-side.
 * Sigue siendo una protección client-side, no es seguridad real. Para producción seria,
 * migrar a una ruta protegida en laclasedigital.com con backend.
 */

export const COURSE_CONFIG = {
  // Clave para localStorage (AccessGate)
  STORAGE_KEY: 'curso-auditoria-ia-access',

  // Links de pago de Stripe (Payment Links)
  STRIPE_LINK_FUNDADOR: 'https://buy.stripe.com/9B6eVec61cWX8dV2f3bII00',
  STRIPE_LINK_GENERAL: 'https://buy.stripe.com/dRmcN61rncWX2TB4nbbII01',
} as const;
