import Image from "next/image";
import classnames from "classnames";
import { useRouter } from "next/navigation";

import LeagueOfLegendsThumb from "@/assets/images/games/league-of-legends.jpg";
import Table from "../ui/table";
import { EyeIcon } from "../ui/icons/eye-icon";

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
              <Table.THeader colsPan={3}>Tournament</Table.THeader>
              <Table.THeader>Price pool</Table.THeader>
              <Table.THeader colsPan={1}>Phase</Table.THeader>
              <Table.THeader>Starting in</Table.THeader>
            </tr>
          </Table.THead>
          <tbody>
            {Array.from({ length: 5 }).map((_, index) => (
              <Table.TRow
                key={index}
                onClick={() => router.push("/league-of-legends/tournaments/1")}
                className="transition-all hover:cursor-pointer hover:bg-slate-700/40 group/item "
              >
                <Table.TData colSpan={3}>
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
                      <span className="text-xs text-gray-400">Ranked</span>
                    </div>
                  </div>
                </Table.TData>

                <Table.TData>
                  <span className="text-sm font-bold tracking-tighter text-green-500">
                    R$ 1.500,00
                  </span>
                </Table.TData>

                <Table.TData colSpan={1}>
                  <div className="flex flex-col">
                    <div className="mb-2 flex justify-between">
                      <span className="text-xs text-green-400">8/12</span>
                      <span className="text-xs font-bold uppercase italic text-green-400">
                        open
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className={classnames(
                          "h-1.5 rounded-full bg-green-600",
                          "w-[70%]"
                        )}
                      ></div>
                    </div>
                  </div>
                </Table.TData>
                <Table.TData>
                  <span className="text-xs text-slate-400">10 days</span>
                </Table.TData>
                <Table.TData className="relative overflow-hidden">
                  <div className="flex items-center">
                    <EyeIcon className="mr-2 w-4" />
                    <span className="text-xs italic text-slate-400">
                      See details
                    </span>
                    <div
                      className={classnames(
                        "absolute inset-x-[200px] top-0 flex h-full w-full items-center justify-center rounded-bl-lg bg-green-500 transition-all group-hover/item:inset-x-0"
                      )}
                    >
                      <span className="font-semibold italic text-white">
                        Join
                      </span>
                    </div>
                  </div>
                </Table.TData>
              </Table.TRow>
            ))}
          </tbody>
        </Table>
      </div>
    </div>
  );
};
