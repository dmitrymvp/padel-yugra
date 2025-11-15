import { SectionHeading } from "@/components/section-heading";
import { TournamentList } from "@/components/tournaments/tournament-list";
import { tournaments } from "@/lib/mock-data";

const upcoming = tournaments.filter((item) => item.type === "upcoming");
const past = tournaments.filter((item) => item.type === "past");

export default function TournamentsPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Турниры"
          title="Турниры Padel YUGRA"
          description="Проводим небольшие любительские встречи и микст-турниры. Присоединяйтесь — найдём пару и расскажем, как подготовиться."
        />
      </section>

      <section className="space-y-8">
        <SectionHeading
          eyebrow="Предстоящие турниры"
        />
        <TournamentList
          items={upcoming}
          enableRegistration
        />
      </section>
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Прошедшие турниры"
        />
        <TournamentList
          items={past}
        />
      </section>

      <section className="space-y-8">
      <SectionHeading
          eyebrow="Организация турниров"
        />
      <section className="space-y-6 rounded-3xl border border-white/10 bg-white/[0.04] p-8 text-sm text-white/70">
        <h2 className="text-2xl font-semibold text-white">
          Хотите организовать корпоративный турнир?
        </h2>
        <p>
          Подготовим площадку, судей и сервис для вашей команды.
          Напишите нам через форму контактов — предложим сценарий и смету за 24 часа.
        </p>
        <a
          href="/contact"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
        >
          Связаться →
        </a>
      </section>

      </section>
    </div>
  );
}


