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
    <div className={classNames(styles.card, className)} {...rest}>
      <div className="border-b border-slate-800 p-4">
        <Title>{rest.title}</Title>
        {rest.subtitle && <p className="text-sm">{rest.subtitle}</p>}
      </div>
      <div className="p-4 text-sm">{children}</div>
    </div>
  );
};

export default Card;
