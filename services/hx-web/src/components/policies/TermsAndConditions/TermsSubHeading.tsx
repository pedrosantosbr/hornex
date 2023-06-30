import classnames from "classnames";
import React from "react";

interface TermsSubHeadingProps {
  className?: string;
  children: React.ReactNode;
}

export const TermsSubHeading: React.FC<TermsSubHeadingProps> = ({
  children,
  className
}) => {
  return (
    <h4
      className={classnames(
        "pt-2 text-sm font-bold md:pt-4 md:text-base",
        className
      )}
    >
      {children}
    </h4>
  );
};
