import classNames from "classnames";
import { Title } from "@/components/ui/Typography";
import styles from "./Card.module.scss";

export type CardProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  className?: string;
};

const Card = ({ children, className, ...rest }: CardProps) => {
  return (
    <div className={classNames("rounded-lg bg-slate-900", className)} {...rest}>
      <div className="bg rounded-t-lg border-b border-slate-800 bg-slate-900 px-4 py-3 shadow-highlight-100">
        <h4 className="font-bold tracking-tighter text-slate-300">
          {rest.title}
        </h4>
        {rest.subtitle && (
          <p className="text-xs font-medium text-slate-400">{rest.subtitle}</p>
        )}
      </div>
      <div className="p-4">{children}</div>
    </div>
  );
};

export default Card;
