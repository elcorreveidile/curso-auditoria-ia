import { NextResponse } from 'next/server';

// ID del Payment Link fundador en Stripe (modo live)
const PAYMENT_LINK_FUNDADOR_ID = 'plink_1TYoO2KkVGDlSSxqgeIsojek';
const PLAZAS_TOTALES_FUNDADOR = 20;

// Cache de 5 minutos para no abusar de la API de Stripe
export const revalidate = 300;

export async function GET() {
  const stripeKey = process.env.STRIPE_SECRET_KEY;

  if (!stripeKey) {
    return NextResponse.json(
      { error: 'STRIPE_SECRET_KEY no configurada', vendidas: 0, restantes: PLAZAS_TOTALES_FUNDADOR },
      { status: 500 }
    );
  }

  try {
    // Consultamos las sesiones de checkout completadas que vinieron de este Payment Link
    // Usamos paginación para sumar todas las páginas si hubiera muchas
    let vendidas = 0;
    let startingAfter: string | undefined = undefined;
    let hasMore = true;
    let safetyCounter = 0;

    while (hasMore && safetyCounter < 10) {
      const url = new URL('https://api.stripe.com/v1/checkout/sessions');
      url.searchParams.set('payment_link', PAYMENT_LINK_FUNDADOR_ID);
      url.searchParams.set('limit', '100');
      url.searchParams.set('status', 'complete');
      if (startingAfter) {
        url.searchParams.set('starting_after', startingAfter);
      }

      const res = await fetch(url.toString(), {
        headers: {
          Authorization: `Bearer ${stripeKey}`,
        },
        // Vercel cachea esta respuesta 5 minutos
        next: { revalidate: 300 },
      });

      if (!res.ok) {
        const errorText = await res.text();
        console.error('Stripe API error:', res.status, errorText);
        return NextResponse.json(
          { error: 'Error consultando Stripe', vendidas: 0, restantes: PLAZAS_TOTALES_FUNDADOR },
          { status: 502 }
        );
      }

      const data: {
        data: Array<{ id: string; payment_status: string; status: string }>;
        has_more: boolean;
      } = await res.json();

      // Contamos solo las sesiones realmente pagadas
      const pagadas = data.data.filter(
        (s) => s.payment_status === 'paid' || s.status === 'complete'
      );
      vendidas += pagadas.length;

      hasMore = data.has_more;
      if (hasMore && data.data.length > 0) {
        startingAfter = data.data[data.data.length - 1].id;
      }
      safetyCounter++;
    }

    const restantes = Math.max(0, PLAZAS_TOTALES_FUNDADOR - vendidas);
    const agotadas = restantes === 0;

    return NextResponse.json({
      total: PLAZAS_TOTALES_FUNDADOR,
      vendidas,
      restantes,
      agotadas,
    });
  } catch (err) {
    console.error('Error en /api/plazas:', err);
    return NextResponse.json(
      {
        error: 'Error interno',
        vendidas: 0,
        restantes: PLAZAS_TOTALES_FUNDADOR,
        total: PLAZAS_TOTALES_FUNDADOR,
        agotadas: false,
      },
      { status: 500 }
    );
  }
}
