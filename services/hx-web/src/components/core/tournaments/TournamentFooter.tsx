import classnames from "classnames";
import TournamentCountdown from "./TournamentCountdown";
import Button from "../../ui/Button/button";
import { ClockIcon } from "@heroicons/react/20/solid";

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
      className={classnames(
        "sticky bottom-0 z-10 flex-shrink-0 border-t-2 border-slate-700 pb-4 pt-2",
        className
      )}
    >
      <div className="py-4">
        <div className="flex flex-col px-1">
          <div className="mb-2 flex justify-end">
            <span className="text-xs font-bold uppercase text-green-400">
              open
            </span>
          </div>
          <div className="flex items-center">
            <span className="pr-4 text-xs font-bold text-green-400">4/16</span>
            <div className="h-2 w-full rounded-full bg-gray-200 dark:bg-gray-700">
              <div
                className={classnames(
                  "h-2 rounded-full bg-green-400",
                  "w-[70%]"
                )}
              ></div>
            </div>
          </div>
        </div>
      </div>
      <Button
        className="w-full hover:bg-sky-500"
        shape="rounded"
        onClick={joinTournament}
        color="info"
      >
        {isJoined ? "Leave" : "Join"}
      </Button>
    </div>
  );
}
