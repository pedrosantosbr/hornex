import { GameList } from "@/components/games/GameList";
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
    <main className="px-auto h-[100vh] space-y-10 pt-6">
      <div className="container mx-auto  flex h-[80vh] flex-col items-center justify-center">
        <h1 className="mb-10 text-center text-3xl font-bold leading-tight tracking-tighter text-white md:text-4xl">
          Pick one game
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
      </div>
    </main>
  );
}
