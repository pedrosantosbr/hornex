"use client";
import classnames from "classnames";
import LeagueOfLegendsThumb from "@/assets/images/games/league-of-legends.jpg";
import Button from "@/components/ui/button/button";
import style from "./page.module.css";
import Image from "next/image";
import Table from "./table";
import { ArrowLongLeftIcon } from "@/components/ui/icons/arrow-long-left-icon";

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
        <div className="flex rounded border border-b-0 border-gray-800 text-left shadow-2xl">
          <table className={classnames(style.table, "w-full table-auto")}>
            <Table.THead>
              <tr>
                <Table.Th>Tournament</Table.Th>
                <Table.Th>Price pool</Table.Th>
                <Table.Th>Teams</Table.Th>
              </tr>
            </Table.THead>
            <tbody>
              <tr>
                <Table.Td>
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
                      <h4 className="text-xs font-bold text-gray-200">
                        TVXU#0001
                      </h4>
                      <span className="text-xs text-gray-400">
                        League of Legends
                      </span>
                      <span className="text-xs text-gray-400">Ranked</span>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>
                  <span className="text-sm font-bold tracking-tighter text-gray-200">
                    R$ 600,00
                  </span>
                </Table.Td>
                <Table.Td>
                  <div className="flex flex-col ">
                    <div className="mb-2 flex justify-between">
                      <span className="text-xs text-gray-400">4/12</span>
                      <span className="text-xs font-bold uppercase text-green-400">
                        open
                      </span>
                    </div>
                    <div className="h-1.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                      <div
                        className={classnames(
                          "h-1.5 rounded-full bg-green-600",
                          "w-[50%]"
                        )}
                      ></div>
                      <div className="flex justify-between">
                        <span className="text-xs text-gray-400">30%</span>
                      </div>
                    </div>
                  </div>
                </Table.Td>

                <Table.Td>
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center rounded-lg border px-5 py-3 text-center text-base font-medium text-gray-900  focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-slate-900 dark:focus:ring-gray-800"
                  >
                    Join
                    <svg
                      aria-hidden="true"
                      className="h-3 w-3"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </a>
                </Table.Td>
              </tr>
              <tr>
                <Table.Td>
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
                      <h4 className="text-xs font-bold text-gray-200">
                        TVXU#0001
                      </h4>
                      <span className="text-xs text-gray-400">
                        League of Legends
                      </span>
                      <span className="text-xs text-gray-400">Ranked</span>
                    </div>
                  </div>
                </Table.Td>
                <Table.Td>
                  <span className="text-sm font-bold tracking-tighter text-gray-200">
                    R$ 600,00
                  </span>
                </Table.Td>
                <Table.Td>
                  <div className="flex flex-col ">
                    <div className="mb-2 flex justify-between">
                      <span className="text-xs text-gray-400">4/12</span>
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
                </Table.Td>

                <Table.Td>
                  <a
                    href="#"
                    className="inline-flex w-full items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-slate-900 dark:focus:ring-gray-800"
                  >
                    Join
                    <ArrowLongLeftIcon className="ml-2 h-4 w-4" />
                  </a>
                </Table.Td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </main>
  );
}
