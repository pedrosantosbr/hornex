"use client";
import classnames from "classnames";
import Button from "@/components/ui/button/button";
import { ArrowLongLeftIcon } from "@/components/ui/icons/arrow-long-left-icon";
import Link from "next/link";
import TournamentTab from "@/components/tournaments/TournamentTab";

type TournamentProps = {
  params: {
    id: string;
  };
};

export default function Tournament({ params }: TournamentProps) {
  return (
    <main className="px-auto pt-6">
      <div className="mx-auto px-6 lg:px-8">
        {/* Page title */}
        <Link href="/">
          {" "}
          <div className="flex text-gray-300 hover:text-white">
            <ArrowLongLeftIcon className="mr-2 w-5" />
            <span className="text-sm font-medium tracking-tight">Voltar</span>
          </div>
        </Link>

        {/* TODO: Create a standard for spacing in page title */}
        <div className="flex flex-col py-4">
          <h1 className="text-left text-xl font-bold tracking-tighter text-white md:text-2xl">
            Tournament #{params.id}
          </h1>
          <span className="dark:hover:text-whit pb-2 text-xs font-medium hover:text-green-900 dark:text-green-400">
            <div className="flex items-center">
              <span className="relative right-1 flex h-3 w-3 items-center justify-center">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-80"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500"></span>
              </span>
              <span>Started</span>
            </div>
          </span>
        </div>

        {/* Main */}
        <div className="grid grid-cols-12 gap-6 py-4">
          <div className="col-span-9">
            <div className="flex flex-col pr-6">
              <h2 className="text-lg font-bold tracking-tighter text-white">
                Tournament Information
              </h2>
            </div>
          </div>
          {/* Sidebar */}
          <div className="col-span-3">
            <div className="flex flex-col  px-6">
              <h2 className="text-lg font-bold tracking-tighter text-white">
                Tournament Phases
              </h2>

              <div className="mb-10 px-4 pt-8">
                <ol className="relative border-l border-gray-200 text-gray-500 dark:border-gray-700 dark:text-gray-400">
                  <li className="mb-10 ml-6">
                    <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-green-200 ring-4 ring-white dark:bg-green-900 dark:ring-green-600">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-green-500 dark:text-green-400"
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
                      <h3 className="text-sm font-medium leading-tight">
                        Regitration Open
                      </h3>
                      <p className="text-xs">Step for teams get enrolled</p>
                    </div>
                  </li>
                  <li className="mb-10 ml-6">
                    <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-600">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
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
                  <li className="mb-10 ml-6">
                    <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-600">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
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
                  <li className="ml-6">
                    <span className="absolute -left-4 flex h-8 w-8 items-center justify-center rounded-full bg-gray-100 ring-4 ring-white dark:bg-gray-700 dark:ring-gray-600">
                      <svg
                        aria-hidden="true"
                        className="h-5 w-5 text-gray-500 dark:text-gray-400"
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
              <div className="flex w-full flex-col py-4">
                <div className="mb-2 flex justify-between">
                  <span className="text-xs text-gray-400">8/12</span>
                  <span className="text-xs font-bold uppercase italic text-green-400">
                    Open
                  </span>
                </div>
                <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                  <div
                    className={classnames(
                      "h-2 rounded-full bg-green-600",
                      "w-[70%]"
                    )}
                  ></div>
                </div>
                <Button className="mt-4 w-full" shape="rounded" color="info">
                  Join for <span className="font-bold">R$ 40,00</span>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
