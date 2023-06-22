import { Game } from "@/types/game";
import { GameListItem } from "./GameListItem";
import { useRouter } from "next/router";
import Link from "next/link";

export type GameListProps = {
  games: Game[];
};

export const GameList = ({ games }: GameListProps) => {
  return (
    <div className="flex gap-10">
      {games.map((game) => (
        <Link href={`/${game.slug}`} key={game.id}>
          <GameListItem key={game.id} game={game} />
        </Link>
      ))}
    </div>
  );
};
