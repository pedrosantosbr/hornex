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
    <ul
      className={classnames(
        "list-disc p-2 pl-8 text-sm font-bold",
        className
      )}
    >
      {children}
    </ul>
  );
};