import { useState } from "react";
import { Tab } from "@headlessui/react";

import { TournamentRules } from "@/components/tournaments/tournament-main/TournamentRules";
import { TournamentOverview } from "@/components/tournaments/tournament-main/TournamentOverview";
import { TournamentTeams } from "@/components/tournaments/tournament-main/TournamentTeams";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export default function TournamentTab() {
  let [categories] = useState({
    Overview: <TournamentOverview />,
    Teams: <TournamentTeams />,
    Rules: <TournamentRules />
  });

  return (
    <div className="w-full rounded-xl bg-slate-800 shadow-highlight-100 sm:px-0">
      <Tab.Group>
        <Tab.List className="mx-6 flex gap-4 overflow-auto border-b-2 border-slate-600 py-1 no-scrollbar sm:overflow-visible md:gap-10">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "-mb-1.5 py-2 text-sm font-medium text-slate-400 outline-none transition-colors hover:text-sky-400",
                  selected
                    ? "border-b-2 border-sky-400 !text-sky-400"
                    : "text-slate-400"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className="md:mx-6">
          {Object.values(categories).map((component, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames("rounded-xl bg-slate-800")}
            >
              {component}
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
