"use client";

import Link from "next/link";

export function MapSection() {
  return (
    <section className="mt-24  bg-slate-950">
      <div className="mx-auto max-w-6xl ">
        <div className="space-y-8">
          <h2 className="text-3xl font-semibold text-white sm:text-4xl">Как нас найти</h2>

          <div className="relative">
            <div className="overflow-hidden rounded-3xl border border-white/20">
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3Aa491dafcc7ff1df0f26c4a5be00a2ee44adcdccfb26cfc8095b42838d0af0427&amp;source=constructor&amp;lang=ru_RU&amp;scroll=true"
                width="100%"
                height="420"
                frameBorder="0"
                className="hidden h-[420px] w-full lg:block"
                title="Карта Padel Prime Court"
                loading="lazy"
              />
              <iframe
                src="https://yandex.ru/map-widget/v1/?um=constructor%3A731296cf2024f60c091589085c031d0d3e38d0060e781d50f280a6ad377642c4&amp;source=constructor&amp;lang=ru_RU&amp;scroll=true"
                width="100%"
                height="380"
                frameBorder="0"
                className="h-[380px] w-full lg:hidden"
                title="Карта Padel Prime Court"
                loading="lazy"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-slate-950/50 via-slate-950/30 to-transparent mix-blend-overlay" />
              <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(190,242,100,0.12),transparent_65%)]" />
            </div>

            <div className="mt-6 rounded-3xl border border-white/15 bg-slate-950/85 p-8 text-sm text-white/80 backdrop-blur md:mt-8 lg:absolute lg:left-2 lg:top-1/2 lg:h-[410] lg:mt-0 lg:w-full lg:max-w-sm lg:-translate-y-1/2">
              <div className="space-y-7">
                <div>
                  <h3 className="text-lg font-semibold text-white">Адрес</h3>
                  <p>Югорск, ул. Остравская 1</p>
                  <p className="mt-1 text-xs text-white/60">
                    Перекресток ул. Остравская и ул. Дзержинского. Заезд с ул. Дзержинского.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">График работы</h3>
                  <ul className="space-y-1">
                    <li>Пн–Пт: 08:00–22:00</li>
                    <li>Сб–Вс: 08:00–23:00</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">Контакты</h3>
                  <div className="space-y-1">
                    <p>
                      <a href="tel:+79990001122" className="transition hover:text-lime-200">
                        +7 (999) 999-99-99
                      </a>
                    </p>
                    <p>
                      <a href="mailto:padel-yugra@yandex.ru" className="transition hover:text-lime-200">
                        padel-yugra@yandex.ru
                      </a>
                    </p>
                  </div>
                  <div className="mt-6">
                <Link
                  href="/booking"
                  className="inline-flex items-center gap-2 text-sm font-medium text-lime-300 transition hover:text-lime-100"
                >
                  Забронировать слот
                  <span aria-hidden>→</span>
                </Link>
              </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

