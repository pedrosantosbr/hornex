"use client";
import Image from "next/image";
import { GameList } from "@/components/games/GameList";
import { Team } from "@/types/team";
import LeagueOfLegends from "@/assets/images/league-of-legends-icon.png";
import CsGo from "@/assets/images/cs-go-icon.png";
import BullHorn from "@/assets/images/bull-horn.png";

import Screen1 from "@/assets/images/screen-1.png";

const team: Team = {
  id: "1",
  name: "Team 1",
  ownerId: "1",
  gameId: 1,
};

export default function HeroPage() {
  return (
    <main>
      <nav className="w-full border-b border-gray-800 bg-black">
        <div className="mx-auto flex max-w-screen-xl flex-wrap items-center justify-between p-4">
          <a href="https://flowbite.com/" className="flex items-center">
            <span className="self-center text-3xl font-bold tracking-tighter dark:text-white">
              Hornex
            </span>
          </a>
          <div className="flex md:order-2">
            <button
              type="button"
              className="mr-3 rounded-lg bg-blue-700 px-4 py-2 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800 md:mr-0"
            >
              Get started
            </button>
            <button
              data-collapse-toggle="navbar-sticky"
              type="button"
              className="inline-flex items-center rounded-lg p-2 text-sm text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600 md:hidden"
              aria-controls="navbar-sticky"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                aria-hidden="true"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                ></path>
              </svg>
            </button>
          </div>
          <div
            className="hidden w-full items-center justify-between md:order-1 md:flex md:w-auto"
            id="navbar-sticky"
          >
            <ul className="mt-4 flex flex-col rounded-lg border border-gray-100 p-4 font-medium dark:border-gray-700 md:mt-0 md:flex-row md:space-x-8 md:border-0  md:p-0">
              <li>
                <a
                  href="#"
                  className="block rounded bg-blue-700 py-2 pl-3 pr-4 text-white md:bg-transparent md:p-0 md:text-blue-700 md:dark:text-blue-500"
                  aria-current="page"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block rounded py-2 pl-3 pr-4 text-gray-900 hover:bg-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:p-0 md:hover:bg-transparent md:hover:text-blue-700 md:dark:hover:bg-transparent md:dark:hover:text-blue-500"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section className="">
        <div className="mx-auto max-w-screen-xl px-4 py-8 text-center lg:px-12 lg:py-16">
          <a
            href="#"
            className="mb-7 inline-flex items-center justify-between rounded-full bg-gray-100 px-1 py-1 pr-4 text-sm text-gray-700 hover:bg-gray-200 dark:bg-gray-800 dark:text-white dark:hover:bg-gray-700"
            role="alert"
          >
            <span className="bg-primary-600 mr-3 rounded-full px-4 py-1.5 text-xs text-white">
              Coming soon
            </span>{" "}
            <span className="text-sm font-medium">Hx is launching soon. </span>
            <svg
              className="ml-2 h-5 w-5"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </a>

          <div className="flex flex-col items-center">
            <Image src={BullHorn} alt="horn" width={250} height={250} />
          </div>
          <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            Compete in Tournaments within a few clicks
          </h1>
          <p className="mb-8 text-lg font-normal text-gray-500 dark:text-gray-400 sm:px-16 lg:text-xl xl:px-48">
            The newest online sports betting company. A trustable company that
            allow you to bet on your favorite e-sports.
          </p>
          <div className="mb-8 flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0 lg:mb-16">
            <a
              href="#"
              className="bg-primary-700 hover:bg-primary-800 focus:ring-primary-300 dark:focus:ring-primary-900 inline-flex items-center justify-center rounded-lg px-5 py-3 text-center text-base font-medium text-white focus:ring-4"
            >
              Learn more
              <svg
                className="-mr-1 ml-2 h-5 w-5"
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
            <a
              href="#"
              className="inline-flex items-center justify-center rounded-lg border border-gray-300 px-5 py-3 text-center text-base font-medium text-gray-900 hover:bg-gray-100 focus:ring-4 focus:ring-gray-100 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 dark:focus:ring-gray-800"
            >
              <svg
                className="-ml-1 mr-2 h-5 w-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M2 6a2 2 0 012-2h6a2 2 0 012 2v8a2 2 0 01-2 2H4a2 2 0 01-2-2V6zM14.553 7.106A1 1 0 0014 8v4a1 1 0 00.553.894l2 1A1 1 0 0018 13V7a1 1 0 00-1.447-.894l-2 1z"></path>
              </svg>
              Watch video
            </a>
          </div>
          <div className="mx-auto px-4 text-center md:max-w-screen-md lg:max-w-screen-lg lg:px-36">
            <span className="font-semibold uppercase text-gray-400">
              SUPPORTED GAMES
            </span>
            <div className="mt-8 flex flex-wrap items-center justify-center text-gray-500 ">
              <a
                href="#"
                className="mb-5 mr-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
              >
                <Image
                  src={LeagueOfLegends}
                  style={{ filter: "grayscale(100%)" }}
                  alt="League of Legends icon"
                  width={150}
                  height={150}
                />
              </a>
              <a
                href="#"
                className="mb-5 mr-5 hover:text-gray-800 dark:hover:text-gray-400 lg:mb-0"
              >
                <Image
                  src={CsGo}
                  style={{ filter: "grayscale(100%)" }}
                  alt="Counter Strike Global Offensive icon"
                  width={150}
                  height={150}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-gray-800 bg-black">
        <div className="container mx-auto p-6 py-14 text-center">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded border border-gray-800 bg-gradient-to-tr from-slate-950 to-slate-900 p-6 text-left">
              <h2 className="mb-10 text-3xl font-bold tracking-tighter text-white">
                Tournements
              </h2>

              <h4 className="text-xl font-bold text-gray-300">About</h4>
              <p className="text-md mb-8 leading-7 tracking-wide text-gray-300">
                A tournament is a competition involving a relatively large
                amount of teams competing against each other. The competition
                can be open by any team and the winner will be the team that
                wins the most matches.
              </p>
              <h4 className="text-xl font-bold text-gray-300">Price Pool</h4>
              <div className="pl-6 leading-7 tracking-wide text-gray-300">
                <ul className="list-disc">
                  <li>
                    The competition has the final price pool according to the
                    number of teams participating
                  </li>
                  <li>
                    The price pool will be divided between the 3 best teams
                  </li>
                  <li>
                    Each team will receive a percentage of the total price pool
                    according to their final position
                  </li>
                </ul>
              </div>
            </div>

            <div className="rounded border border-gray-800 bg-gradient-to-tr from-slate-950 to-slate-900 p-6 text-left">
              <h2 className="mb-4 text-3xl font-bold tracking-tighter text-white">
                Arena Battle
              </h2>
              <p className="text-md leading-7 tracking-wide text-gray-300">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum,
                quasi! Voluptas rerum, harum porro modi soluta atque beatae
                iusto illo aliquam similique totam nostrum earum neque incidunt
                quidem reprehenderit,
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-black">
        <div className="container mx-auto p-6 py-14 text-center">
          <h2 className="mb-20 text-4xl font-extrabold leading-none tracking-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl">
            How to play?
          </h2>
          <div className="block w-[500px] skew-y-12 rounded border border-gray-800 shadow-2xl">
            <Image src={Screen1} alt="League of Legends icon" width={500} />
          </div>
        </div>
      </section>
    </main>
  );
}
