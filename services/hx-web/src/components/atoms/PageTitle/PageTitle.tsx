import { Title } from "@/components/ui/Typography";

const PageTitle = ({ title }: { title: string }) => {
  return (
    <div>
      <Title>{title}</Title>
    </div>
  );
};

export default PageTitle;
