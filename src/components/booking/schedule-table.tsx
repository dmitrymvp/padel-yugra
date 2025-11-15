"use client";

import { scheduleSlots } from "@/lib/mock-data";
import { useState, useEffect } from "react";

const courts = ["Корт №1"];

function getWeekDates() {
  const dates = [];
  const today = new Date();
  for (let i = 0; i < 7; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    dates.push(date);
  }
  return dates;
}

function formatDateForInput(date: Date): string {
  return date.toISOString().split("T")[0];
}

function formatDateDisplay(date: Date): string {
  const days = ["Вс", "Пн", "Вт", "Ср", "Чт", "Пт", "Сб"];
  const months = ["янв", "фев", "мар", "апр", "май", "июн", "июл", "авг", "сен", "окт", "ноя", "дек"];
  return `${days[date.getDay()]}, ${date.getDate()} ${months[date.getMonth()]}`;
}

// Функция для получения расписания по дате
async function getScheduleForDate(date: string) {
  try {
    // В реальном приложении здесь будет запрос к API
    const response = await fetch(`/api/booking?date=${date}`);
    if (response.ok) {
      const data = await response.json();
      return data.slots || scheduleSlots;
    }
  } catch (error) {
    console.error("Ошибка загрузки расписания:", error);
  }
  // Возвращаем статичные данные по умолчанию
  // Можно варьировать в зависимости от даты для демонстрации
  return scheduleSlots;
}

type ScheduleTableProps = {
  selectedDate: string;
  onDateChange: (date: string) => void;
  onSlotSelect: (time: string, court: string) => void;
};

export function ScheduleTable({ selectedDate, onDateChange, onSlotSelect }: ScheduleTableProps) {
  const weekDates = getWeekDates();
  const [selectedSlot, setSelectedSlot] = useState<{ time: string; court: string } | null>(null);
  const [currentSchedule, setCurrentSchedule] = useState(scheduleSlots);
  const [isLoading, setIsLoading] = useState(false);

  // Устанавливаем первую дату по умолчанию
  useEffect(() => {
    if (!selectedDate && weekDates.length > 0) {
      onDateChange(formatDateForInput(weekDates[0]));
    }
  }, []);

  // Загружаем расписание при смене даты
  useEffect(() => {
    if (selectedDate) {
      setIsLoading(true);
      getScheduleForDate(selectedDate).then((slots) => {
        setCurrentSchedule(slots);
        setIsLoading(false);
      });
    }
  }, [selectedDate]);

  // Сбрасываем выбранный слот при смене даты
  useEffect(() => {
    setSelectedSlot(null);
  }, [selectedDate]);

  const handleSlotClick = (time: string, status: string) => {
    if (status === "free") {
      setSelectedSlot({ time, court: courts[0] });
      onSlotSelect(time, courts[0]);
    }
  };

  return (
    <div className="space-y-6">
      <div className="flex gap-2 overflow-x-auto pb-2">
        {weekDates.map((date) => {
          const dateStr = formatDateForInput(date);
          const isSelected = selectedDate === dateStr;
          const isToday = dateStr === formatDateForInput(new Date());

          return (
            <button
              key={dateStr}
              onClick={() => onDateChange(dateStr)}
              className={`flex-shrink-0 rounded-2xl border px-4 py-3 text-sm font-semibold transition ${
                isSelected
                  ? "border-lime-200/50 bg-lime-200/10 text-lime-200"
                  : "border-white/10 bg-white/[0.04] text-white/70 hover:border-white/20"
              }`}
            >
              <div className="text-xs uppercase tracking-[0.35em] text-white/50 mb-1">
                {isToday ? "Сегодня" : formatDateDisplay(date).split(",")[0]}
              </div>
              <div>{formatDateDisplay(date).split(",")[1].trim()}</div>
            </button>
          );
        })}
      </div>

      {isLoading ? (
        <div className="text-center py-12 text-white/60">Загрузка расписания...</div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
          {currentSchedule.map((slot) => {
            const isSelected =
              selectedSlot?.time === slot.time && selectedSlot?.court === courts[0];
            const isClickable = slot.status === "free";

            return (
              <button
                key={slot.time}
                type="button"
                onClick={() => handleSlotClick(slot.time, slot.status)}
                disabled={!isClickable}
                className={`rounded-2xl border p-4 text-center transition ${
                  isSelected
                    ? "border-lime-200/50 bg-lime-200/20 text-lime-200"
                    : isClickable
                    ? "border-white/20 bg-white/[0.04] text-white hover:border-lime-200/30 hover:bg-lime-200/10 cursor-pointer"
                    : "border-white/10 bg-white/5 text-white/40 cursor-not-allowed opacity-50"
                }`}
              >
                <div className="text-lg font-semibold mb-1">{slot.time}</div>
                <div className="text-xs uppercase tracking-wide">
                  {slot.status === "free" ? "Свободно" : "Занято"}
                </div>
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
}





