"use client";

import { FormEvent, useState, useEffect } from "react";
import { wait } from "@/lib/utils";

const durations = [
  { id: "90", label: "90 минут" },
  { id: "180", label: "180 минут" },
];

type FormState = "idle" | "loading" | "success" | "error";

type BookingFormProps = {
  selectedDate?: string;
  selectedTime?: string;
  selectedCourt?: string;
};

export function BookingForm({
  selectedDate = "",
  selectedTime = "",
  selectedCourt = "",
}: BookingFormProps) {
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | null>(null);
  const [date, setDate] = useState(selectedDate);
  const [time, setTime] = useState(selectedTime);
  const [duration, setDuration] = useState("90");
  const [trainer, setTrainer] = useState(false);
  const [equipment, setEquipment] = useState(false);

  useEffect(() => {
    if (selectedDate) setDate(selectedDate);
    if (selectedTime) setTime(selectedTime);
  }, [selectedDate, selectedTime]);

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
    } catch (error) {
      console.error(error);
      setFormState("error");
      setMessage("Ошибка при бронировании. Попробуйте снова или свяжитесь с администратором.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="date" className="text-xs uppercase tracking-[0.35em] text-white/60">
            Дата
          </label>
          <input
            id="date"
            name="date"
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
            required
            className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-lime-200/50 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="time" className="text-xs uppercase tracking-[0.35em] text-white/60">
            Время
          </label>
          <input
            id="time"
            name="time"
            type="time"
            value={time}
            onChange={(e) => setTime(e.target.value)}
            required
            className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-lime-200/50 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="court" className="text-xs uppercase tracking-[0.35em] text-white/60">
            Корт
          </label>
          <input
            id="court"
            name="court"
            type="text"
            value={selectedCourt || "Корт №1"}
            readOnly
            className="rounded-2xl border border-white/15 bg-slate-950/40 px-4 py-3 text-sm text-white/60 cursor-not-allowed"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="duration" className="text-xs uppercase tracking-[0.35em] text-white/60">
            Длительность
          </label>
          <select
            id="duration"
            name="duration"
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-lime-200/50 focus:outline-none"
          >
            {durations.map((dur) => (
              <option key={dur.id} value={dur.id}>
                {dur.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="space-y-4">
        <div className="flex items-center gap-3">
          <input
            id="trainer"
            name="trainer"
            type="checkbox"
            checked={trainer}
            onChange={(e) => setTrainer(e.target.checked)}
            className="h-5 w-5 rounded border-white/20 bg-slate-950/60 text-lime-300 focus:ring-2 focus:ring-lime-200/50"
          />
          <label htmlFor="trainer" className="text-sm text-white/80 cursor-pointer">
            Аренда тренера
          </label>
        </div>
        <div className="flex items-center gap-3">
          <input
            id="equipment"
            name="equipment"
            type="checkbox"
            checked={equipment}
            onChange={(e) => setEquipment(e.target.checked)}
            className="h-5 w-5 rounded border-white/20 bg-slate-950/60 text-lime-300 focus:ring-2 focus:ring-lime-200/50"
          />
          <label htmlFor="equipment" className="text-sm text-white/80 cursor-pointer">
            Аренда инвентаря
          </label>
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

      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {formState === "loading" ? "Отправляем..." : "Подтвердить бронирование"}
      </button>

      {message ? (
        <div
          className={`rounded-2xl border px-4 py-3 text-sm ${
            formState === "success"
              ? "border-lime-200/40 bg-lime-200/10 text-lime-100"
              : "border-red-400/30 bg-red-500/10 text-red-200"
          }`}
        >
          {message}
        </div>
      ) : null}
    </form>
  );
}
