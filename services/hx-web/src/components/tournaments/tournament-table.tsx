import Image from "next/image";
import classnames from "classnames";

import LeagueOfLegendsThumb from "@/assets/images/games/league-of-legends.jpg";
import Table from "../ui/table";

export type TournamentTableProps = {
  children: React.ReactNode;
  className?: string;
};

export const TournamentTable = () => {
  return (
    <Table>
      <Table.THead>
        <tr>
          <Table.THeader>Tournament</Table.THeader>
          <Table.THeader>Price pool</Table.THeader>
          <Table.THeader>Teams</Table.THeader>
        </tr>
      </Table.THead>
      <tbody>
        <Table.TRow>
          <Table.TData>
            <div className="flex items-center">
              <div className="rounded border border-gray-700">
                <Image
                  className="rounded"
                  alt="league of legends"
                  src={LeagueOfLegendsThumb}
                  height={100}
                  width={100}
                />
              </div>
              <div className="flex flex-col px-3 py-1">
                <h4 className="text-xs font-bold text-gray-200">TVXU#0002</h4>
                <span className="text-xs text-gray-400">League of Legends</span>
                <span className="text-xs text-gray-400">Ranked</span>
              </div>
            </div>
          </Table.TData>
          <Table.TData>
            <span className="text-sm font-bold tracking-tighter text-gray-200">
              R$ 1.500,00
            </span>
          </Table.TData>
          <Table.TData>
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
                <div className="flex justify-between">
                  <span className="text-xs text-gray-400">100%</span>
                </div>
              </div>
            </div>
          </Table.TData>

          <Table.TData>
            <a
              href="#"
              className="flex h-12 w-full items-center justify-center rounded-lg bg-sky-500 px-6 text-center text-base font-semibold text-white shadow-card hover:bg-sky-400"
            >
              Join
              <svg
                className="ml-2 h-3 w-3"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            </a>
          </Table.TData>
        </Table.TRow>
      </tbody>
    </Table>
  );
};
