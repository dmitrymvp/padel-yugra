"use client";

import { FormEvent, useState } from "react";
import { wait } from "@/lib/utils";

type FormState = "idle" | "loading" | "success" | "error";

export function ContactForm() {
  const [formState, setFormState] = useState<FormState>("idle");
  const [message, setMessage] = useState<string | null>(null);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setFormState("loading");
    setMessage(null);

    const formData = new FormData(event.currentTarget);

    try {
      await wait(900);
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(Object.fromEntries(formData.entries())),
      });

      if (!response.ok) {
        throw new Error("Ошибка отправки");
      }

      event.currentTarget.reset();
      setFormState("success");
      setMessage("Сообщение отправлено. Мы ответим в течение рабочего дня.");
    } catch (error) {
      console.error(error);
      setFormState("error");
      setMessage("Не удалось отправить сообщение. Попробуйте ещё раз позже.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8"
    >
      <div className="grid gap-6 md:grid-cols-2">
        <div className="flex flex-col gap-2">
          <label htmlFor="name" className="text-xs uppercase tracking-[0.35em] text-white/60">
            Имя
          </label>
          <input
            id="name"
            name="name"
            required
            placeholder="Ваше имя"
            className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-lime-200/50 focus:outline-none"
          />
        </div>
        <div className="flex flex-col gap-2">
          <label htmlFor="email" className="text-xs uppercase tracking-[0.35em] text-white/60">
            Email
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            placeholder="you@example.com"
            className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-lime-200/50 focus:outline-none"
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="topic" className="text-xs uppercase tracking-[0.35em] text-white/60">
          Тема
        </label>
        <select
          id="topic"
          name="topic"
          className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-lime-200/50 focus:outline-none"
        >
          <option value="booking">Бронирование</option>
          <option value="membership">Клубная карта</option>
          <option value="events">Мероприятия</option>
          <option value="other">Другое</option>
        </select>
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="message" className="text-xs uppercase tracking-[0.35em] text-white/60">
          Сообщение
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          required
          placeholder="Опишите вопрос или запрос"
          className="rounded-2xl border border-white/15 bg-slate-950/60 px-4 py-3 text-sm text-white focus:border-lime-200/50 focus:outline-none"
        />
      </div>
      <button
        type="submit"
        disabled={formState === "loading"}
        className="w-full rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-white disabled:cursor-not-allowed disabled:opacity-70"
      >
        {formState === "loading" ? "Отправляем..." : "Отправить"}
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
