import { notFound } from "next/navigation";
import Link from "next/link";
import { playerProfiles } from "@/lib/mock-data";

export function generateStaticParams() {
  return playerProfiles.map((player) => ({ id: player.id }));
}

type PlayerPageProps = {
  params: Promise<{ id: string }>;
};

export default async function PlayerProfilePage({ params }: PlayerPageProps) {
  const { id } = await params;
  const player = playerProfiles.find((item) => item.id === id);

  if (!player) {
    return notFound();
  }

  const initials = player.name
    .split(" ")
    .map((part) => part[0])
    .join("");

  return (
    <article className="space-y-8">
      <Link
        href="/players"
        className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/50 transition hover:text-white"
      >
        ← все игроки
      </Link>
      <div className="grid gap-8 md:grid-cols-2 md:items-start">
        <div className="space-y-4">
          <div
            className="aspect-square w-full overflow-hidden rounded-3xl border border-white/10 bg-slate-900/50"
            style={{
              backgroundImage: player.photo ? `url(${player.photo})` : undefined,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            {!player.photo ? (
              <span className="flex h-full w-full items-center justify-center text-6xl font-semibold text-white">
                {initials}
              </span>
            ) : null}
          </div>
        </div>
        <div className="space-y-4">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
            {player.level}
          </span>
          <h1 className="text-4xl font-semibold text-white">{player.name}</h1>
          <p className="text-sm text-white/70">{player.bio}</p>
          {player.rank !== undefined && (
            <div className="grid grid-cols-3 gap-4 pt-4">
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs uppercase tracking-[0.35em] text-white/50">Рейтинг</div>
                <div className="mt-2 text-2xl font-semibold text-lime-200">{player.rating}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs uppercase tracking-[0.35em] text-white/50">Win rate</div>
                <div className="mt-2 text-2xl font-semibold text-white">{player.winRate}</div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-4">
                <div className="text-xs uppercase tracking-[0.35em] text-white/50">Турниры</div>
                <div className="mt-2 text-2xl font-semibold text-white">{player.tournaments}</div>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="grid gap-6 md:grid-cols-2">
        <section className="space-y-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70">
          <h2 className="text-lg font-semibold text-white">Стиль игры</h2>
          <p>{player.plays}</p>
        </section>
        <section className="space-y-3 rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70">
          <h2 className="text-lg font-semibold text-white">Достижения</h2>
          <ul className="space-y-2">
            {player.achievements.map((achievement) => (
              <li key={achievement}>• {achievement}</li>
            ))}
          </ul>
        </section>
      </div>
      <section className="rounded-3xl border border-white/10 bg-white/[0.04] p-6 text-sm text-white/70">
        <h2 className="text-lg font-semibold text-white">Оставить заявку на игру</h2>
        <p className="mt-3">
          Если хотите сыграть с {player.name}, напишите администратору через форму
          <Link href="/contact" className="ml-1 underline decoration-dotted underline-offset-4">
            контактов
          </Link>
          и укажите желаемую дату. Мы передадим запрос игроку.
        </p>
      </section>
    </article>
  );
}


