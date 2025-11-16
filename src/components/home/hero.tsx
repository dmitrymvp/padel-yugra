export function Hero() {
  return (
    <section className="relative overflow-hidden  rounded-3xl border border-white/10 bg-slate-950/60 shadow-[0_0_60px_rgba(15,23,42,0.65)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(190,242,100,0.25),transparent_55%)]" />
      <div className="relative h=[600] grid gap-12 px-8 py-16 sm:px-16 lg:grid-cols-[1.2fr_1fr] lg:items-center">
        <div className="space-y-6">
     
          <h1 className="text-4xl font-semibold sm:text-5xl">
          Только здесь. Настоящий северный падел
          </h1>
          <p className="max-w-xl text-sm leading-relaxed text-white/70 sm:text-base">
          Первый и единственный в Югорске корт класса World Padel Tour. Онлайн-бронирование, персональные и групповые тренировки и турниры. 
          </p>
          <div className="flex flex-col gap-3 sm:flex-row mt-30">
            <a
              href="/booking"
              className="inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-black/80 transition hover:bg-white"
            >
              Забронировать слот
            </a>
            <a
              href="/about"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3 text-sm font-semibold uppercase tracking-wide text-white transition hover:border-white"
            >
              Узнать о корте
            </a>
          </div>
          
        </div>
        <div className="relative flex h-full items-center">
          <div className="relative mx-auto hidden h-full max-w-sm rounded-[2.5rem] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-950 p-6 shadow-[0_35px_80px_rgba(56,189,248,0.15)] lg:flex">
            <div className="flex h-full w-full flex-col justify-between rounded-3xl bg-black/30 p-6">
              <div className="space-y-4">
                <p className="text-xs uppercase tracking-[0.6em] text-lime-200/80">
                  Сегодня
                </p>
                <div className="space-y-2">
                  <h3 className="text-2xl font-semibold">Расписание</h3>
                  <p className="text-sm text-white/60">
                    Ближайшие свободные слоты
                  </p>
                </div>
              </div>
              <div className="space-y-3 text-sm text-white/70">
                {[
                  { time: "19:00", status: "Свободно" },
                  { time: "20:30", status: "Свободно" },
                  { time: "22:00", status: "Свободно" },
                ].map((slot) => (
                  <div
                    key={slot.time}
                    className="flex items-center justify-between rounded-2xl bg-white/5 px-4 py-3"
                  >
                    <div>
                      <div className="text-lg font-semibold text-white">
                        {slot.time}
                      </div>
                    </div>
                    <span className="text-xs font-semibold uppercase tracking-wide text-lime-200">
                      {slot.status}
                    </span>
                  </div>
                ))}
              </div>
              <a
                href="/booking"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.4em] text-white/70 transition hover:border-white"
              >
                Посмотреть всё
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
