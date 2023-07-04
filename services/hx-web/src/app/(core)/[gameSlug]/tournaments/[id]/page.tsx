"use client";
import { useState } from "react";
import TournamentFooter from "@/components/core/tournaments/TournamentFooter";
import {
  TournamentMain,
  TournamentTab,
} from "@/components/core/tournaments/TournamentContent";
import UserCard from "@/components/ui/UserCard";
import face from "@/assets/images/face.jpg";
import TournamentPhases from "@/components/core/tournaments/TournamentPhases/TournamentPhases";

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
    logo: face,
  });

  return (
    <>
      <div className="flex flex-col gap-2 md:grid md:grid-cols-[1fr_1fr_340px] md:gap-0">
        <div className="col-span-2 pt-4 md:pt-8">
          <h4 className="text-2xl font-extrabold  tracking-tighter text-slate-300">
            Tourname Info
          </h4>
          <span className="text-sm text-slate-400">
            Informations about tournament
          </span>
          {/* left side wraper */}
          <TournamentMain>
            <TournamentTab />
          </TournamentMain>
        </div>

        <div className="right-0 top-0 flex h-screen flex-col pb-8 md:fixed md:w-[340px] md:pr-8 md:pt-24">
          {/* sidebar */}
          <TournamentPhases />
        </div>
      </div>

      <TournamentFooter
        className="bg-slate-900 pb-4 md:hidden"
        isJoined={isJoined}
        joinTournament={joinTournament}
      />
    </>
  );
}
