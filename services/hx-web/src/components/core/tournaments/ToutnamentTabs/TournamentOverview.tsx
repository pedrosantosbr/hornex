import classnames from "classnames";

import Card from "@/components/ui/Card";
import { PodiumIcon, MedalIcon, TeamIcon } from "@/components/ui/Icons";
import {
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  ServerStackIcon,
  TrophyIcon
} from "@heroicons/react/20/solid";

interface TournamentOverviewProps {
  classNames?: string;
}

export const TournamentOverview: React.FC<TournamentOverviewProps> = ({
  classNames
}) => {
  const tournamentDetails = [
    /* {
      icon: CurrencyDollarIcon,
      title: "Prize Pool",
      description: <span className="font-bold">1.800,00</span>
    }, */
    {
      icon: TeamIcon,
      title: "Team",
      description: "16 Teams Compete"
    },
    {
      icon: TrophyIcon,
      title: "Modes",
      description: "Ranked"
    },
    {
      icon: MedalIcon,
      title: "Elo",
      description: "Platinum"
    },
    {
      icon: ClockIcon,
      title: "Score Update",
      description: "Every 90 minutes"
    },
    {
      icon: PodiumIcon,
      title: "Total Score",
      description: "Top 10 games"
    },
    {
      icon: MapPinIcon,
      title: "Regions",
      description: "Gold Coast - Au"
    },
    {
      icon: ServerStackIcon,
      title: "Servers",
      description: "All Servers"
    }
  ];

  return (
    <div
      className={classnames("m-auto flex max-w-5xl flex-col gap-2", classNames)}
    >
      <div className="flex flex-col gap-6 md:flex-row md:gap-0">
        <div className="flex flex-col items-center md:items-start">
          <h2 className="text-xl font-bold text-slate-300">East Cup</h2>
          <div className="flex gap-2 text-xs">
            {new Date().toLocaleDateString("en-US", {
              dateStyle: "medium"
            })}
            <ArrowRightIcon className="w-3" />
            {new Date(Date.now() + 9000000000).toLocaleDateString("en-US", {
              dateStyle: "medium"
            })}
          </div>
        </div>
        <div className="flex justify-evenly gap-6 md:ml-auto">
          <div className="flex flex-col items-center justify-center">
            <span className="text-sm">Prize Pool</span>
            <div className="flex items-center">
              <CurrencyDollarIcon className="mr-1 h-4 w-4 text-green-400" />
              <span className="text-md font-bold text-white">1.500,00</span>
            </div>
          </div>
          <div className="flex flex-col items-center">
            <span className="text-sm">Entry Fee</span>
            <span className="rounded bg-green-100 px-2.5 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300">
              Free Entry
            </span>
          </div>
        </div>
      </div>

      <section className="mt-3 flex w-full flex-col gap-4 rounded-xl">
        <ul className="grid grid-cols-2 gap-4 rounded-lg lg:grid-cols-4">
          {tournamentDetails.map((detail) => (
            <li
              key={detail.title}
              className="flex flex-col gap-4 rounded-lg bg-slate-800 p-4"
            >
              <div className="">
                <detail.icon className="w-7 fill-slate-400" />
              </div>
              <div className="flex flex-col gap-1">
                <h5 className="text-sm font-bold text-slate-300">
                  {detail.title}
                </h5>
                <p className="text-xs">{detail.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};
