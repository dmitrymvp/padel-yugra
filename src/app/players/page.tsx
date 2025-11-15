import { SectionHeading } from "@/components/section-heading";
import { PlayerRankingTable } from "@/components/players/player-ranking-table";

export default function PlayersPage() {
  return (
    <div className="space-y-16">
      <section className="space-y-8">
        <SectionHeading
          eyebrow="Игроки клуба"
          title="Рейтинг и профили участников PADEL YUGRA"
          description="Следите за рейтингом клуба, статистикой побед и знакомьтесь с игроками, которые готовы к паре или командной игре."
        />
        <PlayerRankingTable />
      </section>
    </div>
  );
}


