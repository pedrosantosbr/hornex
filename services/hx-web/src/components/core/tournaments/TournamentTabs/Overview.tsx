import classnames from "classnames";

import Card from "@/components/ui/Card";
import { PodiumIcon, MedalIcon, TeamIcon } from "@/components/ui/Icons";
import {
  ArrowRightIcon,
  ClockIcon,
  CurrencyDollarIcon,
  MapPinIcon,
  ServerStackIcon,
  TrophyIcon,
} from "@heroicons/react/20/solid";

interface TournamentOverviewProps {
  classNames?: string;
}

export const TournamentOverview: React.FC<TournamentOverviewProps> = ({
  classNames,
}) => {
  const tournamentDetails = [
    /* {
      icon: CurrencyDollarIcon,
      title: "Prize Pool",
      description: <span className="font-bold">1.800,00</span>
    }, */
    {
      icon: TeamIcon,
      title: "Teams",
      description: "16 Teams Compete",
    },
    {
      icon: TrophyIcon,
      title: "Modes",
      description: "Ranked",
    },
    {
      icon: MedalIcon,
      title: "Elo",
      description: "Platinum",
    },
    {
      icon: ClockIcon,
      title: "Score Update",
      description: "Every 90 minutes",
    },
    {
      icon: PodiumIcon,
      title: "Total Score",
      description: "Top 10 games",
    },
    {
      icon: MapPinIcon,
      title: "Regions",
      description: "Gold Coast - Au",
    },
    {
      icon: ServerStackIcon,
      title: "Servers",
      description: "All Servers",
    },
  ];

  return (
    <div className={classnames("m-auto flex max-w-5xl p-4", classNames)}>
      {/* Tournament Info */}
      <div className="col-span-4 grid">
        <div className="flex flex-col items-center rounded-lg border border-slate-700">
          <TrophyIcon className="h-7 w-7 fill-slate-300" />
          <h4 className="font-inter tracking-tighter text-slate-200">
            Max Prize Pool
          </h4>
        </div>
      </div>
    </div>
  );
};
