import classNames from "classnames";

interface TooltipProps {
  children: React.ReactNode;
  id: string;
  className?: string;
}

const Tooltip: React.FC<TooltipProps> = ({ children, className, id }) => {
  return (
    <div
      id={id}
      role="tooltip"
      className={classNames(
        "tooltip invisible absolute z-10 inline-block rounded-lg bg-gray-900 px-3 py-2 text-sm font-medium text-white opacity-0 shadow-sm transition-opacity duration-300 dark:bg-gray-700",
        className
      )}
    >
      {children}
      <div className="tooltip-arrow" data-popper-arrow></div>
    </div>
  );
};

export default Tooltip;
