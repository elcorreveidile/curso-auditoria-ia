import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();

    // Verificar la contraseña desde variable de entorno (solo servidor)
    const correctPassword = process.env.ACCESS_PASSWORD;

    if (!correctPassword) {
      return NextResponse.json(
        { error: 'Servidor no configurado' },
        { status: 500 }
      );
    }

    const isValid = password === correctPassword;

    return NextResponse.json({ isValid });
  } catch {
    return NextResponse.json(
      { error: 'Solicitud inválida' },
      { status: 400 }
    );
  }
}
