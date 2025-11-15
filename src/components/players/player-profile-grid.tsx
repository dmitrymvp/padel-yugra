import { playerProfiles } from "@/lib/mock-data";

export function PlayerProfileGrid() {
  return (
    <div className="grid gap-6 md:grid-cols-3">
      {playerProfiles.map((player) => (
        <article
          key={player.id}
          className="space-y-4 rounded-3xl border border-white/10 bg-white/[0.04] p-6"
        >
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-semibold text-white">{player.name}</h3>
            <span className="rounded-full border border-white/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.35em] text-white/60">
              {player.level}
            </span>
          </div>
          <p className="text-sm text-white/60">{player.bio}</p>
          <div className="space-y-3 text-sm text-white/70">
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">Стиль игры</span>
              <p className="mt-1 text-white/80">{player.plays}</p>
            </div>
            <div>
              <span className="text-xs uppercase tracking-[0.35em] text-white/50">Достижения</span>
              <ul className="mt-2 space-y-1 text-white/70">
                {player.achievements.map((achievement) => (
                  <li key={achievement}>• {achievement}</li>
                ))}
              </ul>
            </div>
          </div>
          <a
            href={`/players/${player.id}`}
            className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.35em] text-white/70 transition hover:text-white"
          >
            Подробнее →
          </a>
        </article>
      ))}
    </div>
  );
}


