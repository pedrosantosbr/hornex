import { ClockIcon } from "@heroicons/react/20/solid";
import TournamentFooter from "../TournamentFooter";
import TournamentStepper from "../TournamentStepper";

export type TournamentPhasesProps = {
  className?: string;
};

const TournamentPhases = ({ className }: TournamentPhasesProps) => {
  return (
    <div className="relative flex h-full flex-grow flex-col md:border-l md:border-dashed md:border-slate-800 md:pl-8">
      {/* sidebar header */}
      <div className="mt-6 space-y-6 md:mt-0">
        <h4 className="text-2xl font-extrabold tracking-tighter text-slate-300">
          Tournament Phases
        </h4>
        <span className="text-sm text-slate-400">
          Keep track of tournament status
        </span>

        <div className="flex items-center rounded-lg bg-green-400/30 p-3 text-sm">
          <ClockIcon className="mr-2 h-5 w-5 text-green-400" />
          <h3 className="text-xs font-medium dark:text-green-100">
            Registration ends in:{" "}
            <span className="text-green-500">25 days</span>
          </h3>
          {/* <TournamentCountdown date={Date.now() + 4000000 * 40} /> */}
        </div>
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
