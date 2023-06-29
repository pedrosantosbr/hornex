import classnames from "classnames";
import React from "react";

interface TermsUnorderedListProps {
  className?: string;
  children: React.ReactNode;
}

export const TermsUnorderedList: React.FC<TermsUnorderedListProps> = ({
  children,
  className
}) => {
  return (
    <h4
      className={classnames(
        "list-disc p-2 pl-8 text-sm md:text-base",
        className
      )}
    >
      {children}
    </h4>
  );
};
