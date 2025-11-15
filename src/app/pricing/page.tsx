import { SectionHeading } from "@/components/section-heading";
import { PricingGrid } from "@/components/pricing/pricing-grid";

const addOns = [
  {
    title: "Аренда ракетки (базовый)",
    price: "400 ₽",
    description: "Премиальные модели Bullpadel и Nox",
  },
  {
    title: "Аренда ракетки (премиум)",
    price: "800 ₽",
    description: "Премиальные модели Bullpadel и Nox",
  },
  {
    title: "Услуги тренера (индивидуально)",
    price: "1 000₽",
    description: "90 минут с тренером.",
  },
  {
    title: "Услуги тренера (групповое)",
    price: "2 000₽",
    description: "90 минут с тренером от 2 до 4 человек.",
  },

];

export default function PricingPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Цены"
          title="Выберите подходящий формат игры"
          description="Все тарифы доступны для покупки онлайн."
        />
        <PricingGrid />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Дополнительно"
          title="Расширьте тренировочный опыт"
          description="Опции, которые можно добавить к любому тарифу при бронировании."
        />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {addOns.map((item) => (
            <article
              key={item.title}
              className="flex h-full flex-col justify-between rounded-3xl border border-white/10 bg-white/[0.04] p-6"
            >
              <div className="flex items-baseline justify-between text-white">
                <h3 className="text-lg font-semibold">{item.title}</h3>
                <span className="text-sm font-semibold text-lime-200">
                  {item.price}
                </span>
              </div>
              <p className="mt-3 text-sm text-white/60">{item.description}</p>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}





