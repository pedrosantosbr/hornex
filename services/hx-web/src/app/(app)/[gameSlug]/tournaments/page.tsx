"use client";
import classnames from "classnames";
import { TournamentTable } from "@/components/tournaments/TournamentTable";
import { LinkButton } from "@/components/ui/LinkButton";
import Button from "@/components/ui/button/button";
import { ArrowLongLeftIcon } from "@/components/ui/icons/arrow-long-left-icon";
import Link from "next/link";

import Teemo from "@/assets/images/teemo.png";
import Gnar from "@/assets/images/gnar.png";
import Lulu from "@/assets/images/lulu.png";
import LolThumb from "@/assets/images/league-of-legends-thumb.png";
import Image from "next/image";
import {
  ArrowLongRightIcon,
  CurrencyDollarIcon,
} from "@heroicons/react/20/solid";

type GamePageProps = {
  params: {
    gameSlug: string;
  };
};

export default function GamePage({ params }: GamePageProps) {
  return (
    <main className="px-auto space-y-10 pt-6">
      <div className="mx-auto px-8">
        {/* Page title */}
        <Link href="/">
          {" "}
          <div className="flex text-gray-300 hover:text-white">
            <ArrowLongLeftIcon className="mr-2 w-5" />
            <span className="text-sm font-medium tracking-tight">Voltar</span>
          </div>
        </Link>
        <h1 className="text-left text-xl font-bold tracking-tighter text-white md:text-2xl">
          Tournaments
        </h1>
      </div>
      {/* <div className="mx-auto px-8">
        <h1 className="mb-5 text-left text-sm font-bold tracking-tighter text-gray-200 md:text-xl">
          How to play?
        </h1>
        <ol className="w-full items-center space-y-4 sm:flex sm:space-x-8 sm:space-y-0">
          <li className="flex items-center space-x-2.5 text-green-600 dark:text-green-500">
            <Image className="w-[58px]" src={Lulu} alt="Gnar Champion" />
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-green-600 dark:border-green-500">
              1
            </span>
            <span>
              <h3 className="text-sm font-medium leading-tight">Tournament</h3>
              <p className="text-xs">Select one tournament</p>
            </span>
            <svg
              aria-hidden="true"
              className="ml-2 h-4 w-4 sm:ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </li>
          <li className="flex items-center space-x-2.5 text-gray-500 dark:text-gray-400">
            <Image className="w-[52px]" src={Teemo} alt="Gnar Champion" />

            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-500 dark:border-gray-400">
              2
            </span>
            <span>
              <h3 className="text-sm font-medium leading-tight">
                Join to tournament
              </h3>
              <p className="text-xs">Select one tournament and join</p>
            </span>
            <svg
              aria-hidden="true"
              className="ml-2 h-4 w-4 sm:ml-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M13 5l7 7-7 7M5 5l7 7-7 7"
              ></path>
            </svg>
          </li>
          <li className="flex items-center space-x-2.5 text-gray-500 dark:text-gray-400">
            <Image className="w-[64px]" src={Gnar} alt="Gnar Champion" />
            <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-gray-500 dark:border-gray-400">
              3
            </span>
            <span>
              <h3 className="text-sm font-medium leading-tight">Play</h3>
              <p className="text-xs">Give your best to win</p>
            </span>
          </li>
        </ol>
      </div> */}
      <div className="mx-auto lg:px-8">
        <div className="">
          <ul className="grid grid-cols-1 gap-6 lg:grid-cols-4 lg:gap-8">
            {new Array(4).fill(null).map((_, i) => (
              <li className="divide-y divide-slate-700 rounded-lg bg-slate-800 shadow-highlight-200 ">
                <figure>
                  <Image
                    alt="league of legends thumb"
                    src={LolThumb}
                    className="w-full rounded-t-lg"
                  />
                </figure>
                <div className="p-6">
                  <h4 className="text-sm font-semibold tracking-tighter text-white">
                    AVDU#0001
                  </h4>
                  <div className="flex flex-wrap">
                    <span className="mr-2 rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-slate-400">
                      Featured
                    </span>
                  </div>
                </div>
                <div className="p-6 pt-4">
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
                </div>
                <div className="">
                  <div className="grid grid-cols-2 text-center ">
                    <div className="flex flex-col items-center justify-center border-r border-dashed border-gray-600 ">
                      <div className="flex items-center">
                        <CurrencyDollarIcon className="mr-1 h-4 w-4 text-green-400" />
                        <span className="text-semibold text-sm text-white">
                          BRL 1.500,00
                        </span>
                      </div>
                      <span className="text-xs">Prize Pool</span>
                    </div>
                    <div className="flex items-center justify-center">
                      <Link
                        href="/tournaments/1"
                        className="flex h-full w-full items-center justify-center rounded-br-lg p-4 hover:bg-sky-500"
                      >
                        <span className="text-semibold text-sm text-white">
                          Join
                        </span>
                        <ArrowLongRightIcon className="ml-1 h-4 w-4 text-white" />
                      </Link>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </main>
  );
}
