import { Team } from "@/types/team";
import { FC } from "react";

export type TeamDetailsProps = {
  team: Team;
};

const TeamDetails: FC<TeamDetailsProps> = ({
  team: { id, name, ownerId, gameId },
}) => {
  return (
    <div className="grid rounded border border-slate-700 bg-gradient-to-br from-gray-950 to-gray-900 p-6">
      {name}, {gameId}
    </div>
  );
};

export default TeamDetails;
