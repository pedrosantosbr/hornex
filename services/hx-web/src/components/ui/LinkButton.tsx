import Link from "next/link";
import React from "react";
import classnames from "classnames";

export const LinkButton = ({
  children,
  href,
  className,
}: {
  children: React.ReactNode;
  href: string;
  className?: string;
}) => {
  return (
    <Link
      href={href}
      className={classnames(
        "shadow-highlight flex h-12 items-center justify-center rounded-lg bg-slate-900 px-6 font-semibold text-white shadow-highlight-200 hover:bg-slate-700 focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 dark:bg-sky-500 dark:hover:bg-sky-400",
        className
      )}
    >
      {children}
    </Link>
  );
};
