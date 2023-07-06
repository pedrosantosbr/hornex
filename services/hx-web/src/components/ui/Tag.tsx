type TagProps = {
  children: React.ReactNode;
};

const Tag = ({ children }: TagProps) => (
  <span className="rounded-lg bg-light-dark px-3 font-medium tracking-tighter ring-slate-700">
    {children}
  </span>
);

export default Tag;
