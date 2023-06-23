"use client";
import { TournamentTable } from "@/components/tournaments/TournamentTable";
import { LinkButton } from "@/components/ui/LinkButton";
import Button from "@/components/ui/button/button";
import { ArrowLongLeftIcon } from "@/components/ui/icons/arrow-long-left-icon";
import Link from "next/link";

import Teemo from "@/assets/images/teemo.png";
import Gnar from "@/assets/images/gnar.png";
import Lulu from "@/assets/images/lulu.png";
import Image from "next/image";

type GamePageProps = {
  params: {
    gameSlug: string;
  };
};

export default function GamePage({ params }: GamePageProps) {
  return (
    <main className="px-auto min-h-[calc(100vh-53px)] space-y-10 pt-6">
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
          League of Legends
        </h1>
      </div>
      <div className="mx-auto px-8">
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
      </div>
      <div className="mx-auto lg:px-8">
        {/* table */}
        <div className="flex rounded text-left">
          <TournamentTable />
        </div>
      </div>
    </main>
  );
}
