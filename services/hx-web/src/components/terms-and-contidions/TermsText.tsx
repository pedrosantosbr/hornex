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
    <h4 className={classnames("indent-8 text-sm md:text-base", className)}>
      {children}
    </h4>
  );
};
