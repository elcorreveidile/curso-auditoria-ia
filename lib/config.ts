/**
 * Configuración centralizada del curso.
 *
 * IMPORTANTE: ACCESS_PASSWORD es una protección client-side, no es seguridad real.
 * Es una barrera para alumnado matriculado. Para producción seria,
 * migrar a una ruta protegida en laclasedigital.com con backend.
 */

export const COURSE_CONFIG = {
  // Contraseña de acceso a la zona de materiales
  ACCESS_PASSWORD: 'auditoria2026',

  // Clave para localStorage (AccessGate)
  STORAGE_KEY: 'curso-auditoria-ia-access',

  // Links de pago de Stripe (Payment Links)
  STRIPE_LINK_FUNDADOR: 'https://buy.stripe.com/9B6eVec61cWX8dV2f3bII00',
  STRIPE_LINK_GENERAL: 'https://buy.stripe.com/dRmcN61rncWX2TB4nbbII01',
} as const;
