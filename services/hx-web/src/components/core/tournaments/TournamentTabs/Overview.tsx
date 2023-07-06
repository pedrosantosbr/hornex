import classnames from "classnames";

import Card from "@/components/ui/Card";
import { PodiumIcon, MedalIcon, TeamIcon } from "@/components/ui/Icons";
import {
  ArrowRightIcon,
  CalendarIcon,
  ClockIcon,
  CurrencyDollarIcon,
  FlagIcon,
  MapPinIcon,
  ServerStackIcon,
  TrophyIcon,
} from "@heroicons/react/20/solid";
import Tag from "@/components/ui/Tag";

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
    <div className={classnames("m-auto flex max-w-5xl", classNames)}>
      <div className="block w-full divide-y divide-slate-800">
        {/* game & region */}
        <div className="block pb-6">
          <p className="text-sm text-gray-400">Game & Region</p>
          <p className="text-lg font-extralight -tracking-wider text-white lg:text-2xl">
            League Of Legends
          </p>
          <div className="mt-2 flex">
            <Tag>
              <div className="flex items-center">
                <span className="mr-1">🇧🇷</span>
                <span className="text-xs">Brazil</span>
              </div>
            </Tag>
          </div>
        </div>

        {/* date & time */}
        <div className="block py-6">
          <p className="text-sm text-gray-400">Date & Time</p>
          <div className="flex items-center text-lg font-extralight -tracking-wider text-white lg:text-2xl">
            <div className="flex items-center">Jun, 12th 2023</div>
          </div>
        </div>
      </div>
    </div>
  );
};
