import classnames from "classnames";

export type TitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const Title = ({ children, className, ...rest }: TitleProps) => {
  return (
    <h1
      className={classnames(
        "text-lg font-bold leading-3 tracking-tight text-slate-200 lg:text-xl",
        className
      )}
      {...rest}
    >
      {children}
    </h1>
  );
};

export type SubTitleProps = {
  children: React.ReactNode;
  className?: string;
};

export const SubTitle = ({ children, className, ...rest }: SubTitleProps) => {
  return (
    <h2 className={classnames("text-slate-200", className)} {...rest}>
      {children}
    </h2>
  );
};
