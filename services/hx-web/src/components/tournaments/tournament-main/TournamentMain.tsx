import classnames from "classnames";
import React from "react";

interface TournamentMainProps {
  classNames?: string;
  children: React.ReactNode;
}

export const TournamentMain: React.FC<TournamentMainProps> = ({
  children,
  classNames
}) => {
  return (
    <main className={classnames("flex pt-4 md:pt-8", classNames)}>
      {children}
    </main>
  );
};
