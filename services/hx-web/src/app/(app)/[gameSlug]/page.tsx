"use client";
import classnames from "classnames";
import { GameList } from "@/components/games/game-list";
import { Team } from "@/types/team";
import LeagueOfLegendsThumb from "@/assets/images/games/league-of-legends.jpg";
import CsGo from "@/assets/images/games/cs-go.jpg";
import Button from "@/components/ui/button/button";
import style from "./page.module.css";

type GamePageProps = {
  params: {
    gameSlug: string;
  };
};

export default function GamePage({ params }: GamePageProps) {
  return (
    <main className="px-auto h-[100vh] space-y-10 pt-6">
      <div className="container mx-auto">
        <h1 className="mb-10 text-3xl font-bold leading-tight tracking-tighter text-white md:text-4xl">
          League of Legends
        </h1>

        {/* table */}
        <div className="flex rounded border border-gray-800 text-left shadow-2xl">
          <table className={classnames(style.table, "w-full table-auto")}>
            <thead className="border-b border-gray-800 text-xs font-bold uppercase tracking-tighter">
              <tr>
                <th className={classnames(style.th)}>Tournament</th>
                <th className={classnames(style.th)}>Participants</th>
                <th className={classnames(style.th)}>Price pool</th>
                <th className={classnames(style.th)}>Entries</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>TVXU#0001</td>
                <td>30/100</td>
                <td>R$ 50,00</td>
                <td>
                  <Button shape="rounded" size="mini">
                    Join
                  </Button>
                </td>
              </tr>
              <tr>
                <td>TVXU#0001</td>
                <td>30/100</td>
                <td>R$ 50,00</td>
                <td>
                  <Button shape="rounded" size="mini">
                    Join
                  </Button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
