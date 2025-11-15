import Link from "next/link";
import { notFound } from "next/navigation";
import { tournaments } from "@/lib/mock-data";
import { formatDate } from "@/lib/utils";

type TournamentPageProps = {
  params: Promise<{ id: string }>;
};

export function generateStaticParams() {
  return tournaments.map((tournament) => ({ id: tournament.id }));
}

export default async function TournamentRegistrationPage({ params }: TournamentPageProps) {
  const { id } = await params;
  const tournament = tournaments.find((item) => item.id === id);

  if (!tournament) {
    notFound();
  }

  const isUpcoming = tournament.type === "upcoming";
  const hasResults = !isUpcoming && "standings" in tournament && tournament.standings;

  return (
    <div className="space-y-10">
      <div className="space-y-4">
        <Link
          href="/tournaments"
          className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
        >
          ← назад к турнирам
        </Link>
        <h1 className="text-3xl font-semibold text-white sm:text-4xl">
          {tournament.name}
        </h1>
        <p className="text-sm text-white/60 max-w-2xl">{tournament.description}</p>
      </div>

      {isUpcoming ? (
        // <div className="grid gap-6 md:grid-cols-2">
        //   <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70">
        //     <h2 className="text-lg font-semibold text-white">Основная информация</h2>
        //     <dl className="space-y-2">
        //       <div>
        //         <dt className="text-xs uppercase tracking-[0.35em] text-white/50">
        //           Дата и время
        //         </dt>
        //         <dd className="mt-1 text-white">
        //           {formatDate(tournament.date)} · {tournament.time}
        //         </dd>
        //       </div>
        //       <div>
        //         <dt className="text-xs uppercase tracking-[0.35em] text-white/50">
        //           Взнос
        //         </dt>
        //         <dd className="mt-1 text-white">{tournament.entryFee}</dd>
        //       </div>
        //       <div>
        //         <dt className="text-xs uppercase tracking-[0.35em] text-white/50">
        //           Место проведения
        //         </dt>
        //         <dd className="mt-1 text-white">{tournament.location}</dd>
        //       </div>
        //       <div>
        //         <dt className="text-xs uppercase tracking-[0.35em] text-white/50">
        //           Статус
        //         </dt>
        //         <dd className="mt-1 rounded-full border border-lime-200/30 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-lime-200 inline-block">
        //           {tournament.status}
        //         </dd>
        //       </div>
        //     </dl>
        //   </div>

        //   <div className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70">
        //     <h2 className="text-lg font-semibold text-white">Как зарегистрироваться</h2>
        //     <p>
        //       Заполните форму и наш администратор свяжется с вами, чтобы подтвердить
        //       участие. Оплата взноса производится на площадке в день турнира.
        //     </p>
        //     <div className="flex flex-col gap-3 sm:flex-row">
        //       <a
        //         href={`https://wa.me/${tournament.contactPhone.replace(/\D/g, "")}`}
        //         target="_blank"
        //         rel="noopener noreferrer"
        //         className="inline-flex items-center justify-center rounded-full bg-lime-300 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-slate-950 transition hover:bg-white"
        //       >
        //         Написать в WhatsApp
        //       </a>
        //       <a
        //         href={`tel:${tournament.contactPhone.replace(/\s/g, "")}`}
        //         className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold uppercase tracking-[0.35em] text-white/80 transition hover:border-white"
        //       >
        //         Позвонить
        //       </a>
        //     </div>
        //   </div>
        // </div>
        <h2 className="text-2xl font-semibold text-white">ЗДЕСЬ БУДЕТ ФОРМА ДЛЯ РЕГИСТРАЦИИ НА ТУРНИР</h2>
      ) : hasResults ? (
        <div className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6">
            <h2 className="text-2xl font-semibold text-white mb-6">Итоговые результаты</h2>
            {tournament.result && (
              <p className="text-sm text-white/70 mb-6">{tournament.result}</p>
            )}
            
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white mb-4">Турнирная таблица</h3>
                <div className="overflow-hidden rounded-2xl border border-white/10">
                  <table className="w-full border-collapse bg-white/[0.02] text-sm">
                    <thead className="bg-white/5 text-xs uppercase tracking-[0.35em] text-white/60">
                      <tr>
                        <th className="px-4 py-3 text-left">Место</th>
                        <th className="px-4 py-3 text-left">Команда</th>
                        <th className="px-4 py-3 text-center">Победы</th>
                        <th className="px-4 py-3 text-center">Поражения</th>
                        <th className="px-4 py-3 text-center">Сеты</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tournament.standings.map((team) => (
                        <tr
                          key={team.team}
                          className={`border-t border-white/5 ${
                            team.position === 1
                              ? "bg-lime-200/10"
                              : team.position === 2
                              ? "bg-white/5"
                              : team.position === 3
                              ? "bg-white/[0.02]"
                              : ""
                          }`}
                        >
                          <td className="px-4 py-3 text-white/70">
                            {team.position === 1 && "🥇"}
                            {team.position === 2 && "🥈"}
                            {team.position === 3 && "🥉"}
                            {team.position > 3 && team.position}
                          </td>
                          <td className="px-4 py-3 font-semibold text-white">{team.team}</td>
                          <td className="px-4 py-3 text-center text-lime-200">{team.wins}</td>
                          <td className="px-4 py-3 text-center text-white/60">{team.losses}</td>
                          <td className="px-4 py-3 text-center text-white/70">
                            {team.setsWon}:{team.setsLost}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {"matches" in tournament && tournament.matches && (
                <div>
                  <h3 className="text-lg font-semibold text-white mb-4">Результаты матчей</h3>
                  <div className="space-y-4">
                    {Object.entries(
                      tournament.matches.reduce((acc: Record<string, typeof tournament.matches>, match) => {
                        if (!acc[match.round]) {
                          acc[match.round] = [];
                        }
                        acc[match.round].push(match);
                        return acc;
                      }, {})
                    ).map(([round, matches]) => (
                      <div key={round} className="space-y-3">
                        <h4 className="text-sm font-semibold uppercase tracking-[0.35em] text-white/50">
                          {round}
                        </h4>
                        <div className="space-y-2">
                          {matches.map((match, idx) => (
                            <div
                              key={idx}
                              className="flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.02] p-4"
                            >
                              <div className="flex-1 text-sm text-white">
                                <div className="font-medium">{match.team1}</div>
                                <div className="text-xs text-white/50 mt-1">vs</div>
                                <div className="font-medium mt-1">{match.team2}</div>
                              </div>
                              <div className="flex items-center gap-3 text-lg font-semibold">
                                <span className="text-lime-200">{match.score1}</span>
                                <span className="text-white/40">:</span>
                                <span className="text-white/70">{match.score2}</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      ) : (
        <div className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70">
          <p>
            Турнир уже прошёл. Совсем скоро мы объявим новый набор — следите за расписанием
            или напишите администратору, чтобы попасть в список участников заранее.
          </p>
        </div>
      )}
    </div>
  );
}


