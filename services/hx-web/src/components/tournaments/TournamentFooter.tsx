// import { useModal } from "@/components/modal-views/context";
import classnames from "classnames";
import Button from "../ui/button/button";
import TournamentCountdown from "./TournamentCountdown";
import Link from "next/link";

interface TournamentFooterProps {
  className?: string;
  auctionTime: Date | string | number;
  isAuction?: boolean;
  prizePool?: number;
}

export default function TournamentFooter({
  className = "md:hidden",
  auctionTime,
  prizePool,
}: TournamentFooterProps) {
  // const { openModal } = useModal();
  return (
    <div
      className={classnames(
        "bg-body dark:bg-dark sticky bottom-0 z-10 md:-mx-2",
        className
      )}
    >
      <div className="-mx-4 border-t-2 border-gray-900 px-4 pb-5 pt-4 dark:border-gray-700 sm:-mx-6 sm:px-6 md:mx-2 md:px-0 md:pt-5 lg:pb-7 lg:pt-6">
        <div className="flex gap-4 pb-3.5 md:pb-4 xl:gap-5">
          <div className="block w-1/2 shrink-0 md:w-2/5">
            <h3 className="text-13px mb-1 truncate font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:mb-1.5 sm:text-sm">
              Current bid <span className="md:hidden">by</span>{" "}
              <Link
                href={"#"}
                className="normal-case text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:hidden"
              >
                @Pedro
              </Link>
            </h3>
            <div className="text-lg font-medium -tracking-wider md:text-xl xl:text-2xl">
              20000 BRL
            </div>
            <Link
              href="#"
              className="mt-2 hidden items-center text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white md:inline-flex"
            >
              @Pedro
            </Link>
          </div>
          <div className="block w-1/2 shrink-0 md:w-3/5">
            <h3 className="text-13px mb-1 truncate font-medium uppercase tracking-wider text-gray-900 dark:text-white sm:mb-1.5 sm:text-sm">
              Auction ends in
            </h3>
            <TournamentCountdown date={auctionTime} />
          </div>
        </div>

        <div className="">
          <Button className="w-full" color="info" shape="rounded">
            Join
          </Button>
        </div>
      </div>
    </div>
  );
}
