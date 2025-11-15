
import { formatDate } from "@/lib/utils";
import Link from "next/link";

type Tournament = {
  id: string;
  name: string;
  date: string;
  time: string;
  entryFee: string;
  status: string;
  description: string;
  type: string;
  result?: string;
  location?: string;
  maxTeams?: number;
  contactPhone?: string;
  contactEmail?: string;
  standings?: any[];
  matches?: any[];
};

type TournamentListProps = {
  title?: string;
  description?: string;
  items: Tournament[];
  enableRegistration?: boolean;
};

export function TournamentList({
  title,
  description,
  items,
  enableRegistration = false,
}: TournamentListProps) {
  return (
    <section className="space-y-6">
      <div className="space-y-3">
        <h2 className="text-2xl font-semibold text-white">{title}</h2>
        {description ? (
          <p className="text-sm text-white/60">{description}</p>
        ) : null}
      </div>
      <div className="space-y-6">
        {items.map((tournament) => (
          <article
            key={tournament.id}
            className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 h-[200]"
          >
            <div className="flex flex-col h-full justify-between gap-6 md:flex-row md:items-center">
              <div className="flex flex-col h-full justify-between">
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold text-white">
                    {tournament.name}
                  </h3>
                  <p className="text-sm text-white/60">{tournament.description}</p>
                </div>
                <div className="flex flex-wrap items-center gap-3 text-xs uppercase tracking-[0.35em] text-white/50">
                  <time dateTime={tournament.date}>
                    {formatDate(tournament.date)} · {tournament.time}
                  </time>
                </div>
                
              </div>
              <div className="flex flex-col h-full justify-between text-sm text-white/70 md:text-right">
    
                {tournament.type === "upcoming" ? <div className="text-lg font-semibold text-lime-200">
                  {tournament.entryFee}
                </div> : <span/>}
                {enableRegistration && tournament.type === "upcoming" ? (
                  <Link
                    href={`/tournaments/${tournament.id}`}
                    className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
                  >
                    Зарегистрироваться →
                  </Link>
                ) : <Link
                href={`/tournaments/${tournament.id}`}
                className="inline-flex items-end justify-end gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
              >
                Посмотреть результаты →
              </Link>}
              </div>
            </div>
          </article>
        ))}
        {items.length === 0 ? (
          <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 text-sm text-white/60">
            Пока нет записей.
          </div>
        ) : null}
      </div>
    </section>
  );
}
