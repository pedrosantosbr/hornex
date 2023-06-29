import classnames from "classnames";

interface TournamentOverviewProps {
  classNames?: string;
}

export const TournamentOverview: React.FC<TournamentOverviewProps> = ({
  classNames
}) => {
  return (
    <main className={classnames("p-6", classNames)}>
      <h2 className="text-left text-base font-bold tracking-tighter text-slate-400 md:text-xl">
        How it works
      </h2>

      <h2 className="text-left text-base font-bold tracking-tighter text-slate-400 md:text-xl">
        Tournament Details
      </h2>

      <section className="m-auto my-4 flex max-w-4xl flex-col gap-2"></section>
    </main>
  );
};
