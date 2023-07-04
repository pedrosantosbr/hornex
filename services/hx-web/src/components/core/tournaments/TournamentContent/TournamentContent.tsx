import classnames from "classnames";
import React from "react";

interface TournamentMainProps {
  classNames?: string;
  children: React.ReactNode;
}

export const TournamentContent: React.FC<TournamentMainProps> = ({
  children,
  classNames
}) => {
  return <div className={classnames("mt-6 flex", classNames)}>{children}</div>;
};
