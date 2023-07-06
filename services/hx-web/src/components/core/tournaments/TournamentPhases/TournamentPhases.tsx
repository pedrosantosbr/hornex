import { ClockIcon } from "@heroicons/react/20/solid";
import TournamentFooter from "../TournamentFooter";
import TournamentStepper from "../TournamentStepper";

export type TournamentPhasesProps = {
  className?: string;
};

const TournamentPhases = ({ className }: TournamentPhasesProps) => {
  return (
    <div className="relative flex h-full flex-grow flex-col md:border-l md:border-dashed md:border-gray-700 md:pl-8">
      {/* sidebar header */}
      <div className="mt-6 space-y-6 md:mt-0">
        <h4 className="text-2xl font-extrabold tracking-tighter text-white">
          Tournament Phases
        </h4>
        <span className="text-sm text-slate-400">
          Keep track of tournament status
        </span>

        <div className="pl-4">
          <TournamentStepper />
        </div>
      </div>

      {/* sidebar footer */}

      <TournamentFooter
        className="mt-8 hidden md:block"
        isJoined={false}
        joinTournament={() => console.log("join tournament")}
      />
    </div>
  );
};

export default TournamentPhases;
