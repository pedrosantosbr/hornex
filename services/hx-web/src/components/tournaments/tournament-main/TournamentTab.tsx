import { useState } from "react";
import { Tab } from "@headlessui/react";

import {
  TournamentRules,
  TournamentOverview,
  TournamentTeams,
} from "@/components/tournaments/tournament-main";

function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(" ");
}

export function TournamentTab() {
  let [categories] = useState({
    Overview: <TournamentOverview />,
    Teams: <TournamentTeams />,
    Rules: <TournamentRules />,
  });

  return (
    <div className="flex w-full flex-col gap-6">
      <Tab.Group>
        <Tab.List className="flex gap-4 overflow-auto border-b border-slate-800 py-1 no-scrollbar sm:overflow-visible md:gap-10">
          {Object.keys(categories).map((category) => (
            <Tab
              key={category}
              className={({ selected }) =>
                classNames(
                  "-mb-1.5 py-2 text-sm font-medium text-slate-400 outline-none transition-colors hover:text-red-400",
                  selected
                    ? "border-b-2 border-red-400 !text-red-400"
                    : "text-slate-400"
                )
              }
            >
              {category}
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels>
          {Object.values(categories).map((component, idx) => (
            <Tab.Panel key={idx}>{component}</Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
}
