"use client";

import { useRouter } from "next/navigation";
import { playerProfiles } from "@/lib/mock-data";

export function PlayerRankingTable() {
  const router = useRouter();

  return (
    <div className="overflow-hidden rounded-3xl border border-white/10">
      <table className="w-full border-collapse bg-white/[0.02] text-sm text-white/70">
        <thead className="bg-white/5 text-xs uppercase tracking-[0.35em] text-white/60">
          <tr>
            <th className="px-4 py-4 text-left">#</th>
            <th className="px-4 py-4 text-left">Игрок</th>
            <th className="px-4 py-4 text-left">Рейтинг</th>
            <th className="px-4 py-4 text-left">Win rate</th>
            <th className="px-4 py-4 text-left">Турниры</th>
          </tr>
        </thead>
        <tbody>
          {playerProfiles
            .filter((player) => player.rank !== undefined)
            .sort((a, b) => (a.rank || 0) - (b.rank || 0))
            .map((player) => {
            const isClickable = !!player.id;

            return (
              <tr
                key={player.id}
                onClick={() => {
                  if (player.id) {
                    router.push(`/players/${player.id}`);
                  }
                }}
                className={`border-t border-white/5 transition ${
                  isClickable ? "cursor-pointer hover:bg-white/5" : ""
                }`}
              >
                <td className="px-4 py-4 text-white/50">{player.rank}</td>
                <td className="px-4 py-4 text-white">{player.name}</td>
                <td className="px-4 py-4 font-semibold text-lime-200">{player.rating}</td>
                <td className="px-4 py-4">{player.winRate}</td>
                <td className="px-4 py-4">{player.tournaments}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}


