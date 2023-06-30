import classnames from "classnames";
import React from "react";

interface TermsTextProps {
  className?: string;
  children: React.ReactNode;
}

export const TermsText: React.FC<TermsTextProps> = ({
  children,
  className
}) => {
  return (
    <p
      className={classnames(
        "indent-8 text-sm text-justify",
        className
      )}
    >
      {children}
    </p>
  );
};
