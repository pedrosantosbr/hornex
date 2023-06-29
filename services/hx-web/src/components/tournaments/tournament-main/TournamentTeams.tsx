import classnames from "classnames";

interface TournamentTeamsProps {
  classNames?: string;
}

export const TournamentTeams: React.FC<TournamentTeamsProps> = ({
  classNames
}) => {
  return (
    <main className={classnames("p-6", classNames)}>
      <h2 className="text-left text-base font-bold tracking-tighter text-slate-400 md:text-xl">
        Teams
      </h2>

      <section className="m-auto my-4 flex max-w-4xl flex-col gap-2"></section>
    </main>
  );
};
