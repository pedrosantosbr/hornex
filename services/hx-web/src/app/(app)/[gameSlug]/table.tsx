import classnames from "classnames";
import styles from "./table.module.scss";

export const THead = ({ children }: { children: React.ReactNode }) => {
  return (
    <thead className="border-b border-gray-700 text-xs font-bold uppercase tracking-tighter">
      {children}
    </thead>
  );
};

export const Th = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <th className={classnames(styles.th, className)}>{children}</th>;
};

export const Td = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return <td className={classnames(styles.td, className)}>{children}</td>;
};

const Table = {
  THead,
  Th,
  Td,
};

export default Table;
