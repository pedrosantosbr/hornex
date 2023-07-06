import classnames from "classnames";

interface PrizesProps {
  classNames?: string;
}

interface TextProps {
  children: React.ReactNode;
  className?: string;
}
const Heading = ({ children, className }: TextProps) => (
  <h2
    className={classnames("font-bold tracking-tighter md:text-xl", className)}
  >
    {children}
  </h2>
);

interface UnorderedListProps {
  className?: string;
  children: React.ReactNode;
}

export const UnorderedList: React.FC<UnorderedListProps> = ({
  children,
  className
}) => {
  return (
    <ul
      className={classnames("list-disc space-y-2 p-2 pl-8 text-sm", className)}
    >
      {children}
    </ul>
  );
};

export const Prizes: React.FC<PrizesProps> = ({ classNames }) => {
  return (
    <div className={classnames("text-slate-300", classNames)}>
      <section className="flex flex-col gap-4 divide-y divide-slate-800">
        <div>
          <Heading>Tournament Prizes</Heading>
          <UnorderedList>
            <li>First Place: 2,400 RP + triumphant ryze.</li>
            <li>Runner-up: 2,000 RP.</li>
            <li>Third Place: 1,600 RP.</li>
            <li>Fourth place: 800 RP.</li>
            <li>Other placements: Experience for the next tournaments.</li>
          </UnorderedList>
        </div>
        <div className="pt-2">
          <Heading>Warnings</Heading>
          <UnorderedList>
            <li>
              Players who went to receive awards cannot CHANGE THE NICK AND RIOT
              ID until the deadline for sending them has been met (which is
              currently 15 working days, from the organizer&quot;s report). If
              the player makes the change within this period, the award will not
              be sent.
            </li>
            <li>
              The prize pool is limited to only 5 players that have played in
              the tournament, we always send the prize money to the line up that
              played the last game in the tournament
            </li>
            <li>
              For the tournament to be valid, it must have at least 16 PLAYING
              TEAMS.
            </li>
            <li>
              This tournament{" "}
              <strong>
                does not receive any kind of sponsorship from{" "}
                <em>Riot Games</em>
              </strong>
              , it only makes the tournament prize pool available through the
              community tournament support program!
            </li>
          </UnorderedList>
        </div>
      </section>
    </div>
  );
};
