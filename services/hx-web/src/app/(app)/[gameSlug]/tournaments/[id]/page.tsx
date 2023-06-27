"use client";
import Link from "next/link";
import Image from "next/image";
import classnames from "classnames";
import {
  CalendarDaysIcon,
  CurrencyDollarIcon
} from "@heroicons/react/20/solid";
import Button from "@/components/ui/button/button";
import TournamentTab from "@/components/tournaments/tournament-main/TournamentTab";

import { useState } from "react";
import TournamentCountdown from "@/components/tournaments/TournamentCountdown";
import TournamentFooter from "@/components/tournaments/TournamentFooter";
import { TournamentMain } from "@/components/tournaments/tournament-main/TournamentMain";

type TournamentProps = {
  params: {
    id: string;
  };
};

export default function Tournament({ params }: TournamentProps) {
  const [isJoined, setJoin] = useState(false);
  const joinTournament = () => setJoin(!isJoined);

  return (
    <div className="flex flex-col gap-4 md:grid md:grid-cols-[1fr_1fr_380px] md:gap-0">
      <div className="col-span-2 border-green-500">
        {/* left side wraper */}
        <TournamentMain>
          <TournamentTab />
        </TournamentMain>
      </div>
      <div>
        <div className="right-0 top-0 flex h-screen flex-col justify-between pb-8 md:fixed md:w-[380px] md:pr-8 md:pt-24">
          {/* sidebar */}
          <div className="relative flex h-full flex-grow flex-col justify-between rounded-lg border-slate-700 bg-slate-800 p-8 shadow-highlight-100">
            {/* sidebar header */}
            <div className="block">
              <h2
                data-docsearch-ignore="true"
                className="mb-3 text-xl font-bold tracking-tight text-slate-900 dark:text-slate-200"
              >
                Tournament Name
              </h2>
              <div className="text-xs text-gray-400">Created by</div>
              <div className="py-6">
                <ol className="relative ml-4 border-l border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <li className="mb-7 ml-3">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-green-200 ring-2 ring-white dark:bg-green-900 dark:ring-green-600">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 text-green-500 dark:text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <div className="pl-4">
                      <h3 className="text-sm font-medium leading-5">
                        Registration Open
                      </h3>
                      <p className="text-xs">Step for teams get enrolled</p>
                    </div>
                  </li>
                  <li className="mb-7 ml-3">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-600">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <div className="pl-4">
                      <h3 className="text-sm font-medium leading-tight">
                        Results tracking
                      </h3>
                      <p className="text-xs">
                        In this step we track the matches results
                      </p>
                    </div>
                  </li>
                  <li className="mb-7 ml-3">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-600">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <div className="pl-4">
                      <h3 className="text-sm font-medium leading-tight">
                        Review
                      </h3>
                      <p className="text-xs">Step details here</p>
                    </div>
                  </li>
                  <li className="ml-3">
                    <span className="absolute -left-3 flex h-6 w-6 items-center justify-center rounded-full bg-gray-100 ring-2 ring-white dark:bg-gray-700 dark:ring-gray-600">
                      <svg
                        aria-hidden="true"
                        className="h-3 w-3 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z"></path>
                        <path
                          fillRule="evenodd"
                          d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm9.707 5.707a1 1 0 00-1.414-1.414L9 12.586l-1.293-1.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </span>
                    <div className="pl-4">
                      <h3 className="text-sm font-medium leading-tight">
                        Confirmation
                      </h3>
                      <p className="text-xs">Step details here</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>

            {/* sidebar footer */}
            <div className="sticky bottom-0 z-10 flex-shrink-0 border-t-2 border-slate-700 bg-slate-800 pt-6">
              <div className="pb-3">
                <div className="grid grid-cols-2 gap-4">
                  <div className="col-span-auto border-r border-dashed border-slate-700">
                    <h3 className="font-mono mb-2 font-medium  dark:text-slate-200  sm:text-sm">
                      Prize pool
                    </h3>

                    <div className="flex items-center">
                      <pre className="preroportional-nums mb-1 text-xl font-extrabold text-white">
                        1.500,00
                      </pre>
                    </div>
                    <span className="text-xs">BRL</span>
                  </div>
                  <div className="col-span-auto">
                    <h3 className="mb-2 font-medium dark:text-slate-200  sm:text-sm">
                      Starts in:
                    </h3>
                    <TournamentCountdown date={Date.now() + 4000000 * 40} />
                  </div>
                </div>
              </div>

              <div className="py-4">
                <div className="flex flex-col">
                  <div className="mb-2 flex justify-between">
                    <span className="text-xs text-green-400">4/16 - Teams</span>
                    <span className="text-xs font-bold uppercase italic text-green-400">
                      open
                    </span>
                  </div>
                  <div className="h-2.5 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                    <div
                      className={classnames(
                        "h-2.5 rounded-full bg-green-600",
                        "w-[70%]"
                      )}
                    ></div>
                  </div>
                </div>
              </div>
              <Button
                className="w-full"
                shape="rounded"
                onClick={joinTournament}
                color="info"
              >
                {isJoined ? "Leave" : "Join"}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
