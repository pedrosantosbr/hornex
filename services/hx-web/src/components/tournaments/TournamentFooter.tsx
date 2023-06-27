import classnames from "classnames";
import TournamentCountdown from "./TournamentCountdown";
import Button from "../ui/button/button";

interface TournamentFooterProps {
  className?: string;
  isJoined: boolean;
  joinTournament: () => void;
}

export default function TournamentFooter({
  className,
  isJoined,
  joinTournament
}: TournamentFooterProps) {
  return (
    <div
      className={
        (classnames(
          "sticky bottom-0 z-10 border-t-2 border-slate-700 bg-slate-800 pt-6 md:-mx-2"
        ),
        className)
      }
    >
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
  );
}
