import classnames from "classnames";
import Image from "next/image";
import connect from "@/assets/images/connect.webp";
import graphs from "@/assets/images/graphs.webp";
import infinity from "@/assets/images/infinity.png";
import award from "@/assets/images/award.webp";
import {
  ClockIcon,
  MapPinIcon,
  ServerStackIcon,
  TrophyIcon
} from "@heroicons/react/20/solid";
import { PodiumIcon } from "@/components/ui/icons/podium-icon";

interface TournamentOverviewProps {
  classNames?: string;
}

export const TournamentOverview: React.FC<TournamentOverviewProps> = ({
  classNames
}) => {
  const howItWorksCards = [
    {
      image: connect,
      title: "Connect & Join",
      description:
        "Once you've joined a Tournament, all you have to do is play games as you usually do"
    },
    {
      image: graphs,
      title: "Automated Results",
      description:
        "Repeat is a unique platform because we track your results automatically - you just have to connect your account"
    },
    {
      image: infinity,
      title: "Unlimited Play",
      description:
        "Did you know you can play multiple Tournaments at the same time? Actually you can play as much as you want"
    },
    {
      image: award,
      title: "Get Rewarded",
      description:
        "Once a Tournament has ended you are rewarded based on your score which is based on the games you've played"
    }
  ];

  const tournamentDetails = [
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
      description: "All Regions"
    },
    {
      icon: ServerStackIcon,
      title: "Servers",
      description: "All Servers"
    },
    {
      icon: TrophyIcon,
      title: "Modes",
      description: "Ranked"
    }
  ];

  return (
    <main
      className={classnames("m-auto flex max-w-5xl flex-col gap-6", classNames)}
    >
      <section className="flex w-full flex-col gap-4">
        <div>
          <h3 className="text-left text-base font-bold tracking-tighter md:text-xl">
            How it works
          </h3>
          <span className="text-sm text-slate-500">
            Fully Automated Tournament Experience
          </span>
        </div>
        <ul className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6">
          {howItWorksCards.map((card) => (
            <li
              key={card.title}
              className="divide-y divide-slate-700 rounded-lg shadow-highlight-all"
            >
              <figure>
                <Image
                  alt="connected dots in purple background"
                  src={card.image}
                  className="w-full rounded-t-lg"
                />
              </figure>
              <div className="flex flex-col gap-2 p-4 text-center">
                <h5 className="text-md font-bold">{card.title}</h5>
                <p className="text-xs">{card.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
      <section className="flex w-full flex-col gap-4 rounded-xl">
        <div>
          <h3 className="text-left text-base font-bold tracking-tighter md:text-xl">
            Tournament Details
          </h3>
          <span className="text-sm text-slate-500">How tournaments work</span>
        </div>
        <ul className="grid grid-cols-1 divide-x divide-y divide-slate-700 rounded-lg shadow-highlight-all lg:grid-cols-5">
          {tournamentDetails.map((detail) => (
            <li key={detail.title} className="flex flex-col gap-4 p-4">
              <figure className="flex justify-center">
                {<detail.icon className="w-5 fill-slate-400" />}
              </figure>
              <div className="flex flex-col gap-2 text-center">
                <h5 className="text-xs text-slate-500">{detail.title}</h5>
                <p className="text-xs">{detail.description}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
};
