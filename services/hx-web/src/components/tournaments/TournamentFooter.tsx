import classnames from "classnames";

interface TournamentFooterProps {
  className?: string;
}

export default function NftFooter({ className }: TournamentFooterProps) {
  return (
    <div
      className={classnames(
        "bg-body dark:bg-dark border-2 border-dashed",
        className
      )}
    >
      <div className=" border-t-2 border-gray-900 px-4 pb-5 pt-4 dark:border-gray-700 sm:px-6 md:px-0 md:pt-5 lg:pb-7 lg:pt-6"></div>
    </div>
  );
}
