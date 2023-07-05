import classnames from "classnames";
import TournamentCountdown from "./TournamentCountdown";
import Button from "../../ui/Button/button";
import {
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  UsersIcon,
} from "@heroicons/react/20/solid";

interface TournamentFooterProps {
  className?: string;
  isJoined: boolean;
  joinTournament: () => void;
}

export default function TournamentFooter({
  className,
  isJoined,
  joinTournament,
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
          <div className="mb-2 flex justify-between">
            {/* current prize pool */}
            <div className="flex items-center">
              <CurrencyDollarIcon className="mr-1 h-5 w-4 fill-slate-300" />
              <span className="text-xs font-bold text-slate-300">
                120 of 1500 BRL
              </span>
            </div>
            {/* phase status */}
            <div className="relative flex">
              <span className="absolute -left-3 top-1 h-2 w-2 rounded-full bg-green-400"></span>
              <span className="text-xs font-bold uppercase text-green-400">
                open
              </span>
            </div>
          </div>
          <div className="flex items-center">
            {/* registered teams status */}
            <div className="flex">
              <UsersIcon className="mr-1 h-5 w-4 fill-slate-300" />
              <span className="pr-4 text-xs font-bold text-slate-300">
                4/16
              </span>
            </div>
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
        <div className="flex items-center">
          {isJoined ? "Leave" : "Join"}
          <ArrowRightIcon className="ml-1 h-3.5 w-3.5" />
        </div>
      </Button>
    </div>
  );
}
