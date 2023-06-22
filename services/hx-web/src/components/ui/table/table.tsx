import classnames from "classnames";
import styles from "./table.module.scss";

export const THead = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead className="border-b border-slate-700/40 text-xs font-bold uppercase tracking-tighter">
      {children}
    </thead>
  );
};

export const THeader = ({
  children,
  className,
  colsPan = 1,
}: {
  children: React.ReactNode;
  className?: string;
  colsPan?: number;
}) => {
  return (
    <th
      scope="col"
      colSpan={colsPan}
      className={classnames(styles.th, className)}
    >
      {children}
    </th>
  );
};

export const TData = ({
  children,
  className,
  colSpan = 1,
}: {
  children: React.ReactNode;
  className?: string;
  colSpan?: number;
}) => {
  return (
    <td colSpan={colSpan} className={classnames(styles.td, className)}>
      {children}
    </td>
  );
};

export const TRow = ({
  children,
  className,
  onClick,
}: {
  children: React.ReactNode;
  className?: string;
  onClick: () => void;
}) => {
  return (
    <tr onClick={() => onClick()} className={classnames(styles.tr, className)}>
      {children}
    </tr>
  );
};

const Table = ({ children }: { children: React.ReactNode }) => {
  return (
    <table
      className={classnames(
        styles.table,
        "w-full table-fixed rounded-lg bg-white shadow-highlight-100 ring-1 ring-slate-900/5 dark:bg-slate-800 dark:ring-0"
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
