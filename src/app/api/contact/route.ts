import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.name || !body?.email || !body?.message) {
    return NextResponse.json(
      { message: "Заполните обязательные поля" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    status: "ok",
    message: "Сообщение успешно отправлено (заглушка)",
    requestId: "mock-contact-id",
    receivedAt: new Date().toISOString(),
  });
}


