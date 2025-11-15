const features = [
  {
    title: "Премиальный корт",
    description:
      "Корт класса World Padel Tour с профессиональным покрытием и продуманным светом.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <rect x="3" y="4" width="18" height="16" rx="3" ry="3" />
        <path d="M7 8h10" />
        <path d="M7 12h10" />
        <path d="M7 16h4" />
      </svg>
    ),
  },
  {
    title: "Онлайн-бронирование",
    description:
      "Интуитивный календарь, мгновенное подтверждение и возможность оплаты прямо на сайте.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M8 7V3" />
        <path d="M16 7V3" />
        <rect x="3" y="5" width="18" height="16" rx="2" ry="2" />
        <path d="M3 11h18" />
        <path d="M7 15h.01" />
        <path d="M11 15h.01" />
        <path d="M15 15h2" />
      </svg>
    ),
  },
  {
    title: "Тренерский штаб",
    description:
      "Персональные и групповые тренировки, видеоналитика и индивидуальные программы для любого уровня подготовки.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4Z" />
        <path d="M7 21v-1a5 5 0 0 1 10 0v1" />
        <path d="M4 10h2" />
        <path d="M18 10h2" />
        <path d="M4.93 6.93 6.34 8.34" />
        <path d="M17.66 8.34l1.41-1.41" />
      </svg>
    ),
  },
  {
    title: "Турниры и комьюнити",
    description:
      "Проводим регулярные рейтинговые турниры, а также организуем корпоративные турниры.",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.5"
        className="h-6 w-6"
      >
        <path d="M9 21h6" />
        <path d="M12 17v4" />
        <path d="M7 4h10l-2 8H9L7 4Z" />
        <path d="M5 4h1" />
        <path d="M18 4h1" />
      </svg>
    ),
  },
];

export function FeatureGrid() {
  return (
    <section className="mt-24">
      <div className="grid gap-6 md:grid-cols-2">
        {features.map((feature) => (
          <article
            key={feature.title}
            className="group rounded-3xl border border-white/10 bg-white/[0.03] p-6 transition hover:border-lime-200/40 hover:bg-white/10"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/5 text-lime-200/90 transition group-hover:border-lime-200/40 group-hover:text-lime-100">
              {feature.icon}
            </div>
            <h3 className="mt-6 text-xl font-semibold text-white">
              {feature.title}
            </h3>
            <p className="mt-3 text-sm text-white/60">{feature.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
