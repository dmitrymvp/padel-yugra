"use client";

import { FormEvent, useState, useEffect } from "react";
import { wait } from "@/lib/utils";
import { scheduleSlots } from "@/lib/mock-data";

const durations = [
  { id: "90", label: "90 минут", price: 2000 },
  { id: "180", label: "180 минут", price: 4000 },
];

const trainerPrices = {
  individual: 1000,
  group: 2000,
  "": 0,
};

const equipmentPrices = {
  basic: 400,
  premium: 800,
  "": 0,
};

type FormState = "idle" | "loading" | "success" | "error";

type BookingModalProps = {
  isOpen: boolean;
  onClose: () => void;
  selectedDate: string;
  selectedTime: string;
  selectedCourt: string;
};

function getNextSlotTime(currentTime: string, allSlots: typeof scheduleSlots): string | null {
  const timeIndex = allSlots.findIndex((slot) => slot.time === currentTime);
  if (timeIndex === -1 || timeIndex === allSlots.length - 1) {
    return null;
  }
  return allSlots[timeIndex + 1]?.time || null;
}

function isNextSlotFree(currentTime: string, allSlots: typeof scheduleSlots): boolean {
  const nextTime = getNextSlotTime(currentTime, allSlots);
  if (!nextTime) return false;
  const nextSlot = allSlots.find((slot) => slot.time === nextTime);
  return nextSlot?.status === "free";
}

export function BookingModal({
  isOpen,
  onClose,
  selectedDate,
  selectedTime,
  selectedCourt,
}: BookingModalProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [duration, setDuration] = useState("90");
  const [trainer, setTrainer] = useState<string>("");
  const [equipment, setEquipment] = useState<string>("");
  const [hasSubscription, setHasSubscription] = useState(false);
  const [canBook180, setCanBook180] = useState(false);
  const [availableSlots, setAvailableSlots] = useState(scheduleSlots);

  // Загружаем доступные слоты для выбранной даты
  useEffect(() => {
    if (selectedDate) {
      fetch(`/api/booking?date=${selectedDate}`)
        .then((res) => res.json())
        .then((data) => {
          if (data.slots) {
            setAvailableSlots(data.slots);
          }
        })
        .catch(() => {
          setAvailableSlots(scheduleSlots);
        });
    }
  }, [selectedDate]);

  useEffect(() => {
    if (selectedTime) {
      const canBook = isNextSlotFree(selectedTime, availableSlots);
      setCanBook180(canBook);
      if (!canBook) {
        setDuration("90");
      }
    }
  }, [selectedTime, availableSlots]);

  // Расчет общей цены
  const calculateTotalPrice = () => {
    // При использовании абонемента корт уже оплачен
    const durationPrice = hasSubscription ? 0 : (durations.find((d) => d.id === duration)?.price || 0);
    
    const trainerPrice = trainerPrices[trainer as keyof typeof trainerPrices] || 0;
    const equipmentPrice = equipmentPrices[equipment as keyof typeof equipmentPrices] || 0;
    return durationPrice + trainerPrice + equipmentPrice;
  };

  const totalPrice = calculateTotalPrice();
  const durationPrice = durations.find((d) => d.id === duration)?.price || 0;

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("loading");
    setMessage(null);

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      await wait(1200);
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        throw new Error("Не удалось отправить заявку");
      }

      event.currentTarget.reset();
      setFormState("success");
      setMessage("Бронирование отправлено. Менеджер свяжется с вами в течение 10 минут.");
      setTimeout(() => {
        onClose();
      }, 2000);
    } catch (error) {
      console.error(error);
      setFormState("error");
      setMessage(
        "Ошибка при бронировании. Попробуйте снова или свяжитесь с администратором по телефону +7 (999) 999-99-99."
      );
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto custom-scrollbar rounded-3xl border border-white/10 bg-slate-950 p-8 pr-6 shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute right-6 top-6 text-white/60 transition hover:text-white"
          aria-label="Закрыть"
        >
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        <h2 className="text-2xl font-semibold text-white mb-6">Оформление бронирования</h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">
                Дата
              </label>
              <div className="rounded-2xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white/80 cursor-not-allowed">
                {selectedDate
                  ? new Date(selectedDate + "T00:00:00")
                      .toLocaleDateString("ru-RU", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                      })
                      .replace(/\//g, ".")
                  : "—"}
              </div>
              <input type="hidden" name="date" value={selectedDate} />
            </div>
            <div className="flex flex-col gap-2">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60">
                Время
              </label>
              <div className="rounded-2xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white/80 cursor-not-allowed">
                {selectedTime || "—"}
              </div>
              <input type="hidden" name="time" value={selectedTime} />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="duration"
              className="text-xs uppercase tracking-[0.35em] text-white/60"
            >
              Длительность
            </label>
            <div className="relative">
              <select
                id="duration"
                name="duration"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                disabled={!canBook180 && duration === "180"}
                className="w-full rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 pr-24 text-sm text-white focus:border-lime-200/50 focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {durations.map((dur) => (
                  <option key={dur.id} value={dur.id} disabled={dur.id === "180" && !canBook180}>
                    {dur.label}
                    {dur.id === "180" && !canBook180 ? " (следующий слот занят)" : ""}
                  </option>
                ))}
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
                <span className="text-sm font-semibold text-lime-200">
                  {hasSubscription ? (
                    <>
                      <span className="line-through text-white/40 text-xs mr-1">
                        {durationPrice.toLocaleString("ru-RU")}
                      </span>
                      <span className="text-lime-200">0</span>
                    </>
                  ) : (
                    durationPrice.toLocaleString("ru-RU")
                  )}{" "}
                  ₽
                </span>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60 block mb-2">
                Тренер
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 cursor-pointer transition hover:border-lime-200/30 hover:bg-white/[0.04]">
                  <input
                    type="radio"
                    name="trainer"
                    value="individual"
                    checked={trainer === "individual"}
                    onChange={(e) => setTrainer(e.target.value)}
                    className="h-4 w-4 border-white/20 bg-slate-950/60 text-lime-300 focus:ring-2 focus:ring-lime-200/50"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Индивидуально</div>
                    <div className="text-xs text-white/60">1 000 ₽</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 cursor-pointer transition hover:border-lime-200/30 hover:bg-white/[0.04]">
                  <input
                    type="radio"
                    name="trainer"
                    value="group"
                    checked={trainer === "group"}
                    onChange={(e) => setTrainer(e.target.value)}
                    className="h-4 w-4 border-white/20 bg-slate-950/60 text-lime-300 focus:ring-2 focus:ring-lime-200/50"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Групповое занятие</div>
                    <div className="text-xs text-white/60">2 000 ₽</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 cursor-pointer transition hover:border-lime-200/30 hover:bg-white/[0.04]">
                  <input
                    type="radio"
                    name="trainer"
                    value=""
                    checked={trainer === ""}
                    onChange={(e) => setTrainer(e.target.value)}
                    className="h-4 w-4 border-white/20 bg-slate-950/60 text-lime-300 focus:ring-2 focus:ring-lime-200/50"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-white/70">Не требуется</div>
                  </div>
                </label>
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-xs uppercase tracking-[0.35em] text-white/60 block mb-2">
                Инвентарь
              </label>
              <div className="space-y-2">
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 cursor-pointer transition hover:border-lime-200/30 hover:bg-white/[0.04]">
                  <input
                    type="radio"
                    name="equipment"
                    value="basic"
                    checked={equipment === "basic"}
                    onChange={(e) => setEquipment(e.target.value)}
                    className="h-4 w-4 border-white/20 bg-slate-950/60 text-lime-300 focus:ring-2 focus:ring-lime-200/50"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Базовый</div>
                    <div className="text-xs text-white/60">400 ₽</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 cursor-pointer transition hover:border-lime-200/30 hover:bg-white/[0.04]">
                  <input
                    type="radio"
                    name="equipment"
                    value="premium"
                    checked={equipment === "premium"}
                    onChange={(e) => setEquipment(e.target.value)}
                    className="h-4 w-4 border-white/20 bg-slate-950/60 text-lime-300 focus:ring-2 focus:ring-lime-200/50"
                  />
                  <div className="flex-1">
                    <div className="text-sm font-medium text-white">Премиум</div>
                    <div className="text-xs text-white/60">800 ₽</div>
                  </div>
                </label>
                <label className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/[0.02] p-3 cursor-pointer transition hover:border-lime-200/30 hover:bg-white/[0.04]">
                  <input
                    type="radio"
                    name="equipment"
                    value=""
                    checked={equipment === ""}
                    onChange={(e) => setEquipment(e.target.value)}
                    className="h-4 w-4 border-white/20 bg-slate-950/60 text-lime-300 focus:ring-2 focus:ring-lime-200/50"
                  />
                  <div className="flex-1">
                    <div className="text-sm text-white/70">Не требуется</div>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="name" className="text-xs uppercase tracking-[0.35em] text-white/60">
                Имя
              </label>
              <input
                id="name"
                name="name"
                placeholder="Иван"
                required
                className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-lime-200/50 focus:outline-none"
              />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="phone" className="text-xs uppercase tracking-[0.35em] text-white/60">
                Телефон
              </label>
              <input
                id="phone"
                name="phone"
                type="tel"
                placeholder="+7 (999) 000-11-22"
                required
                className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-lime-200/50 focus:outline-none"
              />
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="comment" className="text-xs uppercase tracking-[0.35em] text-white/60">
              Комментарий (необязательно)
            </label>
            <textarea
              id="comment"
              name="comment"
              rows={3}
              placeholder="Дополнительные пожелания"
              className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-lime-200/50 focus:outline-none"
            />
          </div>

          <input type="hidden" name="court" value={selectedCourt || "Корт №1"} />

          <div className="flex items-center gap-3">
            <input
              id="subscription"
              name="subscription"
              type="checkbox"
              checked={hasSubscription}
              onChange={(e) => setHasSubscription(e.target.checked)}
              className="h-5 w-5 rounded-full border-white/20 bg-slate-950/60 text-lime-300 focus:ring-2 focus:ring-lime-200/50"
            />
            <label htmlFor="subscription" className="text-sm text-white/80 cursor-pointer">
              Использовать абонемент (корт оплачен, доп. услуги отдельно)
            </label>
          </div>

          <div className="space-y-3">
            <div className="flex items-center justify-between rounded-2xl border border-white/10 bg-white/[0.02] px-4 py-3">
              <span className="text-sm font-medium text-white">Итого:</span>
              <span className="text-lg font-semibold text-lime-200">
                {totalPrice.toLocaleString("ru-RU")} ₽
              </span>
            </div>
            <button
              type="submit"
              disabled={formState === "loading"}
              className="w-full rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
            >
              {formState === "loading"
                ? "Отправляем..."
                : `Подтвердить бронирование • ${totalPrice.toLocaleString("ru-RU")} ₽`}
            </button>
          </div>

          {message ? (
            <div
              className={`rounded-2xl border px-4 py-3 text-sm space-y-2 ${
                formState === "success"
                  ? "border-lime-200/40 bg-lime-200/10 text-lime-100"
                  : "border-red-400/30 bg-red-500/10 text-red-200"
              }`}
            >
              <p>{message}</p>
              {formState === "error" && (
                <div className="pt-2 border-t border-red-400/20">
                  <p className="text-xs text-red-200/80 mb-1">Свяжитесь с нами:</p>
                  <a
                    href="tel:+79999999999"
                    className="text-sm font-semibold text-red-100 hover:text-white transition underline"
                  >
                    +7 (999) 999-99-99
                  </a>
                </div>
              )}
            </div>
          ) : null}
        </form>
      </div>
    </div>
  );
}

