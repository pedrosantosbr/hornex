"use client";
import { TournamentTable } from "@/components/tournaments/tournament-table";
import { ArrowLongLeftIcon } from "@/components/ui/icons/arrow-long-left-icon";
import Link from "next/link";

type GamePageProps = {
  params: {
    gameSlug: string;
  };
};

export default function GamePage({ params }: GamePageProps) {
  return (
    <main className="px-auto h-[100vh] space-y-10 pt-6">
      <div className="mx-auto md:container">
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

        <section className="py-10">
          {/* table */}
          <div className="flex rounded text-left">
            <TournamentTable />
          </div>
        </section>
      </div>
    </main>
  );
}
