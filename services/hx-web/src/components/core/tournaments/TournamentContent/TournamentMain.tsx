import classnames from "classnames";
import React from "react";

interface TournamentMainProps {
  classNames?: string;
  children: React.ReactNode;
}

export const TournamentMain: React.FC<TournamentMainProps> = ({
  children,
  classNames,
}) => {
  return (
    <main className={classnames("mt-6 flex", classNames)}>{children}</main>
  );
};
