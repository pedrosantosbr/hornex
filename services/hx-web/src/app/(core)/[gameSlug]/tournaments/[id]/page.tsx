"use client";
import { useState } from "react";
import TournamentFooter from "@/components/core/tournaments/TournamentFooter";
import face from "@/assets/images/face.jpg";
import TournamentPhases from "@/components/core/tournaments/TournamentPhases/TournamentPhases";
import { TournamentTabs } from "@/components/core/tournaments/TournamentTabs";
import TournamentDetails from "@/components/core/tournaments/TournamentDetails/TournamentDetails";

type TournamentProps = {
  params: {
    id: string;
  };
};

export default function Tournament({ params }: TournamentProps) {
  const [isJoined, setJoin] = useState(false);
  const joinTournament = () => setJoin(!isJoined);

  const [creator] = useState({
    name: "@ShadowSlayer",
    logo: face
  });

  return (
    <>
      <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_1fr_380px] md:gap-0">
        <div className="col-span-2 space-y-6 pt-4 md:space-y-12 md:pt-8">
          <TournamentDetails />
          <TournamentTabs />
        </div>

        <div className="right-0 top-0 flex flex-col pb-8 md:fixed md:h-screen md:w-[380px] md:pr-8 md:pt-24">
          {/* sidebar */}
          <TournamentPhases />
        </div>
      </div>

      <TournamentFooter
        className="-mx-4 bg-dark p-3 md:hidden"
        isJoined={isJoined}
        joinTournament={joinTournament}
      />
    </>
  );
}
