import classnames from "classnames";

import Card from "@/components/ui/Card";
import { PodiumIcon, MedalIcon, TeamIcon } from "@/components/ui/Icons";
import {
  CalendarDaysIcon,
  ClockIcon,
  CurrencyDollarIcon,
  FlagIcon,
  MapPinIcon,
  ServerStackIcon,
  TrophyIcon
} from "@heroicons/react/20/solid";
import Tag from "@/components/ui/Tag";

interface OverviewProps {
  classNames?: string;
}

export const Overview: React.FC<OverviewProps> = ({ classNames }) => {
  const tournamentDetails = [
    {
      icon: TeamIcon,
      title: "Teams",
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

  const countries = [
    { flag: "🇦🇷", name: "Argentina" },
    { flag: "🇧🇴", name: "Bolivia" },
    { flag: "🇧🇷", name: "Brazil" },
    { flag: "🇨🇱", name: "Chile" },
    { flag: "🇨🇴", name: "Colombia" },
    { flag: "🇪🇨", name: "Ecuador" },
    { flag: "🇵🇪", name: "Peru" }
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
          <div className="mt-2 flex flex-wrap gap-2">
            {countries.map((country) => (
              <Tag key={country.name}>
                <div className="flex items-center">
                  <span className="mr-1">{country.flag}</span>
                  <span className="text-xs">{country.name}</span>
                </div>
              </Tag>
            ))}
          </div>
        </div>

        {/* date & time */}
        <div className="block py-6">
          <div className="flex space-x-2 text-gray-400">
            <p className="text-sm">Date & Time</p>
            <CalendarDaysIcon className="w-3.5" />
          </div>

          <div className="flex items-center text-lg font-extralight -tracking-wider text-white lg:text-2xl">
            <div className="flex items-center">Jun, 12th 2023</div>
          </div>
          <p className="mt-2 text-white">8:00 PM -03</p>
        </div>

        {/* format */}
        <div className="block py-6">
          <p className="text-sm text-gray-400">Format</p>
          <div className="flex items-center text-lg font-extralight -tracking-wider text-white lg:text-2xl">
            <div className="flex items-center">5v5</div>
          </div>
          <p className="mt-2 text-sm text-white">
            Pre-Made Team & Free Agent Registrations are allowed
          </p>
        </div>

        {/* game map & type */}
        <div className="block py-6">
          <p className="text-sm text-gray-400">Game Map & Type</p>
          <div className="flex items-center text-lg font-extralight -tracking-wider text-white lg:text-2xl">
            <div className="flex items-center">Summoners Rift</div>
          </div>
          <p className="mt-2 text-sm text-white">Tournament Draft</p>
        </div>
      </div>
    </div>
  );
};
