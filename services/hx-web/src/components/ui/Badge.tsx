import classnames from "classnames";

type BadgeProps = {
  children: React.ReactNode;
  className?: string;
};

const Badge = ({ children, className }: BadgeProps) => {
  return (
    <span
      className={classnames(
        "flex items-center justify-center gap-1 rounded bg-green-100 px-1 py-0.5 text-xs font-medium text-green-800 dark:bg-green-900 dark:text-green-300",
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;
