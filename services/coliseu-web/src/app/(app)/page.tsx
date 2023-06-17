"use client";
import { GameList } from "@/components/games/game-list";
import { Team } from "@/types/team";
import LeagueOfLegendsThumb from "@/assets/images/games/league-of-legends.jpg";
import CsGo from "@/assets/images/games/cs-go.jpg";

const team: Team = {
  id: "1",
  name: "Team 1",
  ownerId: "1",
  gameId: 1,
};

export default function Home() {
  return (
    <main className="px-auto container mx-auto h-[100vh] space-y-10 pt-6">
      <h1 className="text-left text-xl font-bold leading-tight tracking-tighter text-white md:text-2xl">
        O que você deseja jogar hoje?
      </h1>

      <GameList
        games={[
          {
            id: 1,
            name: "League of Legends",
            thumbnail: LeagueOfLegendsThumb,
            slug: "league-of-legends",
          },
          {
            id: 2,
            name: "Counter-Strike: Global Offensive",
            thumbnail: CsGo,
            slug: "cs-go",
          },
        ]}
      />
    </main>
  );
}
