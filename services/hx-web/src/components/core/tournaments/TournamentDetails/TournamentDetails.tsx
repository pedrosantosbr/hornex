import classnames from "classnames";
import styles from "./TournamentDetails.module.scss";
import { TicketIcon, TrophyIcon, UsersIcon } from "@heroicons/react/20/solid";
import Badge from "@/components/ui/Badge";

const TournamentDetails = () => {
  return (
    <div className="flex justify-between">
      <div className="tournament_header">
        <h4 className="text-2xl font-extrabold  tracking-tighter text-white">
          Tourname Info
        </h4>
        <span className="text-sm text-slate-400">
          Informations about tournament
        </span>
      </div>
      <div className="flex">
        <div className={classnames(styles.tournament_badge_info)}>
          <span className={classnames(styles.tournament_badge_label)}>
            {" "}
            <UsersIcon className="mr-2 h-4 w-4" /> Max Teams
          </span>
          <span className="text-right text-lg font-medium text-slate-200">
            16
          </span>
        </div>
        <div className={classnames(styles.tournament_badge_info)}>
          <span className={classnames(styles.tournament_badge_label)}>
            <TrophyIcon className="mr-2 h-4 w-4" /> Max Prize
          </span>
          <span className="text-right font-medium text-slate-200">
            1500 BRL
          </span>
        </div>

        <div className={classnames(styles.tournament_badge_info)}>
          <span className={classnames(styles.tournament_badge_label)}>
            <UsersIcon className="mr-2 h-4 w-4" /> Ello
          </span>
          <span className="text-center text-sm font-medium text-slate-200">
            Silver II
          </span>
        </div>
        <div className={classnames(styles.tournament_badge_info)}>
          <span className={classnames(styles.tournament_badge_label)}>
            <TicketIcon className="mr-2 h-4 w-4" /> Entry fee
          </span>
          <Badge>Free Entry</Badge>
        </div>
      </div>
    </div>
  );
};

export default TournamentDetails;
