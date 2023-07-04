import { Game } from "@/types/game";
import { on } from "events";
import Image from "next/image";
import { useRouter } from "next/router";

export const GameListItem = ({ game }: { game: Game }) => {
  return (
    <div className="hover:shadow-xs hover:rin-1 flex w-[300px] flex-col rounded-lg from-gray-950 to-slate-800 p-3 text-xs transition-all hover:scale-105 hover:cursor-pointer hover:bg-slate-800 hover:shadow-highlight">
      <Image
        className="h-[150px] w-full rounded-lg"
        alt={game.name}
        src={game.thumbnail}
      />
      <div className="info flex flex-col p-2">
        <span className="mb-1 text-sm font-medium">{game.name}</span>
        <span className="font-medium text-gray-400">Times ativos: 20</span>
        <span className="font-medium text-gray-400">Torneios abertos: 159</span>
      </div>
    </div>
  );
};
