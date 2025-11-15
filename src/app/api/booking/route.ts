import { NextResponse } from "next/server";
import { scheduleSlots } from "@/lib/mock-data";

function isWeekend(dateString: string): boolean {
  const date = new Date(dateString + "T00:00:00");
  const dayOfWeek = date.getDay();
  return dayOfWeek === 0 || dayOfWeek === 6; // 0 = воскресенье, 6 = суббота
}

function filterSlotsByDay(slots: typeof scheduleSlots, dateString: string) {
  const isWeekendDay = isWeekend(dateString);
  
  return slots.filter((slot) => {
    const [hour, minute] = slot.time.split(":").map(Number);
    const slotTime = hour * 60 + minute;
    const maxTimeMinutes = isWeekendDay ? 21 * 60 + 30 : 21 * 60;
    return slotTime <= maxTimeMinutes;
  });
}

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const date = searchParams.get("date");

  if (!date) {
    return NextResponse.json(
      { message: "Укажите дату" },
      { status: 400 }
    );
  }

  // Фильтруем слоты в зависимости от дня недели
  const filteredSlots = filterSlotsByDay(scheduleSlots, date);

  return NextResponse.json({
    date,
    slots: filteredSlots,
  });
}

export async function POST(request: Request) {
  const body = await request.json();

  if (!body?.date || !body?.time || !body?.name || !body?.phone) {
    return NextResponse.json(
      { message: "Заполните обязательные поля" },
      { status: 400 }
    );
  }

  return NextResponse.json({
    status: "ok",
    message: "Бронирование успешно создано (заглушка)",
    booking: {
      id: "mock-booking-id",
      ...body,
      createdAt: new Date().toISOString(),
    },
  });
}


