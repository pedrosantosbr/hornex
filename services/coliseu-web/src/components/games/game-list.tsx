import { Game } from "@/types/game";
import { GameListItem } from "./game-list-item";
import { useRouter } from "next/router";
import Link from "next/link";

export type GameListProps = {
  games: Game[];
};

export const GameList = ({ games }: GameListProps) => {
  return (
    <div className="flex">
      {games.map((game) => (
        <Link href={`/play?game=${game.slug}`} key={game.id}>
          <GameListItem key={game.id} game={game} />
        </Link>
      ))}
    </div>
  );
};
