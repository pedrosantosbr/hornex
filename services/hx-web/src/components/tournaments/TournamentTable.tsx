import Image from "next/image";
import classnames from "classnames";
import { useRouter } from "next/navigation";

import LeagueOfLegendsThumb from "@/assets/images/games/league-of-legends.jpg";
import Table from "../ui/table";
import { LinkButton } from "../ui/LinkButton";

export type TournamentTableProps = {
  children: React.ReactNode;
  className?: string;
};

export const TournamentTable = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col">
      <span className="mb-1 text-xs text-slate-400">
        42 open tournaments found
      </span>
      <div className="w-full rounded-lg bg-slate-800 shadow-highlight-100">
        <Table>
          <Table.THead>
            <tr>
              <Table.THeader colsPan={6}>Tournament</Table.THeader>
              <Table.THeader colsPan={2}>Start in</Table.THeader>
              <Table.THeader>Price pool</Table.THeader>
              <Table.THeader>Teams</Table.THeader>
            </tr>
          </Table.THead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <Table.TRow
                onClick={() => router.push("/league-of-legends/tournaments/1")}
                className="transition-all hover:cursor-pointer hover:bg-slate-700/40"
              >
                <Table.TData colSpan={6}>
                  <div className="flex items-center">
                    <div className="rounded border border-gray-700 shadow-highlight-200">
                      <Image
                        className="rounded"
                        alt="league of legends"
                        src={LeagueOfLegendsThumb}
                        height={100}
                        width={100}
                      />
                    </div>
                    <div className="flex flex-col px-3 py-1">
                      <h4 className="text-xs font-bold text-gray-200">
                        TVXU#0002
                      </h4>
                      <span className="text-xs text-gray-400">
                        League of Legends
                      </span>
                      <span className="text-xs text-gray-400">Ranked</span>
                    </div>
                  </div>
                </Table.TData>
                <Table.TData colSpan={2}>
                  <div className="flex flex-col">
                    <div className="mb-2 flex justify-between">
                      <span className="text-xs text-gray-400">12/12</span>
                      <span className="text-xs font-bold uppercase text-red-400">
                        full
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className={classnames(
                          "h-1.5 rounded-full bg-red-600",
                          "w-[100%]"
                        )}
                      ></div>
                    </div>
                  </div>
                </Table.TData>
                <Table.TData>
                  <span className="text-sm font-bold tracking-tighter text-gray-200">
                    R$ 1.500,00
                  </span>
                </Table.TData>
                <Table.TData>
                  <span className="text-sm text-slate-400">10 days</span>
                </Table.TData>
              </Table.TRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
