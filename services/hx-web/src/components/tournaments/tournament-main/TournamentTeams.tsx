import classnames from "classnames";

interface TournamentTeamsProps {
  classNames?: string;
}

export const TournamentTeams: React.FC<TournamentTeamsProps> = ({
  classNames,
}) => {
  const teams = [
    {
      name: "Team Phoenix",
      members: [
        {
          username: "ShadowSlayer",
          elo: "Diamond",
          wins: 15,
          losses: 5,
        },
        {
          username: "BlazeFire",
          elo: "Platinum",
          wins: 10,
          losses: 8,
        },
        {
          username: "MysticSorcerer",
          elo: "Gold",
          wins: 12,
          losses: 6,
        },
        {
          username: "DragonFang",
          elo: "Silver",
          wins: 8,
          losses: 10,
        },
        {
          username: "StarGazer",
          elo: "Bronze",
          wins: 5,
          losses: 15,
        },
      ],
    },
    {
      name: "Team Titans",
      members: [
        {
          username: "WarriorKing",
          elo: "Platinum",
          wins: 12,
          losses: 7,
        },
        {
          username: "StormBreaker",
          elo: "Gold",
          wins: 11,
          losses: 9,
        },
        {
          username: "Thunderstrike",
          elo: "Silver",
          wins: 9,
          losses: 11,
        },
        {
          username: "IronClad",
          elo: "Bronze",
          wins: 6,
          losses: 14,
        },
        {
          username: "BattleMaiden",
          elo: "Iron",
          wins: 4,
          losses: 16,
        },
      ],
    },
    {
      name: "Team Legends",
      members: [
        {
          username: "EternalChampion",
          elo: "Diamond",
          wins: 13,
          losses: 7,
        },
        {
          username: "MythicalSword",
          elo: "Platinum",
          wins: 9,
          losses: 11,
        },
        {
          username: "ArcaneMage",
          elo: "Gold",
          wins: 11,
          losses: 9,
        },
        {
          username: "ValiantKnight",
          elo: "Silver",
          wins: 7,
          losses: 13,
        },
        {
          username: "MagicWarden",
          elo: "Bronze",
          wins: 6,
          losses: 14,
        },
      ],
    },
    {
      name: "Team Guardians",
      members: [
        {
          username: "SwiftArrow",
          elo: "Platinum",
          wins: 14,
          losses: 6,
        },
        {
          username: "IronShield",
          elo: "Gold",
          wins: 10,
          losses: 10,
        },
        {
          username: "StormDancer",
          elo: "Silver",
          wins: 8,
          losses: 12,
        },
        {
          username: "SoulBinder",
          elo: "Bronze",
          wins: 7,
          losses: 13,
        },
        {
          username: "GuardianSpirit",
          elo: "Iron",
          wins: 3,
          losses: 17,
        },
      ],
    },
  ];

  return (
    <main className={classnames("p-6", classNames)}>
      <section className="flex w-full flex-col gap-4">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 xl:grid-cols-3 xl:gap-8">
            {teams.map((team, index) => (
              <div
                key={index}
                className="rounded-lg p-4 text-white shadow-highlight-all"
              >
                <h3 className="text-md mb-3 border-b border-slate-700 p-1 text-center font-semibold">
                  {team.name}
                </h3>
                <div className="grid grid-cols-6 justify-items-center p-2 text-xs text-slate-400">
                  <span className="col-span-3 place-self-start">Player</span>

                  <span>Elo</span>

                  <span>Wins</span>

                  <span>Loss</span>
                </div>
                <ul className="flex flex-col gap-2">
                  {team.members.map((member, i) => (
                    <li
                      key={i}
                      className="grid grid-cols-6 justify-items-center rounded-md p-2 text-xs"
                    >
                      <span className="col-span-3 place-self-start text-sky-200 underline">
                        {member.username}
                      </span>

                      <span className="">{member.elo}</span>

                      <pre className="text-green-400">{member.wins}</pre>

                      <pre className="text-rose-400">{member.losses}</pre>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};
