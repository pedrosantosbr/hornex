import classnames from "classnames";
import styles from "./table.module.scss";

export const THead = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead className="border-b border-gray-700 text-xs font-bold uppercase tracking-tighter">
      {children}
    </thead>
  );
};

export const THeader = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <th className={classnames(styles.th, className)}>{children}</th>;
};

export const TData = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <td className={classnames(styles.td, className)}>{children}</td>;
};

export const TRow = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <tr className={classnames(styles.tr, className)}>{children}</tr>;
};

const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table
      className={classnames(
        styles.table,
        "dark:highlight-white/5 w-full table-auto rounded-lg bg-white shadow-card ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-0"
      )}
    >
      {children}
    </table>
  );
};

Table.THead = THead;
Table.THeader = THeader;
Table.TRow = TRow;
Table.TData = TData;

export default Table;
