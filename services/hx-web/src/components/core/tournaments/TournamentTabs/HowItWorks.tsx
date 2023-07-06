import Card from "@/components/ui/Card/Card";
import classnames from "classnames";
import Image from "next/image";
import connect from "@/assets/images/connect.webp";
import graphs from "@/assets/images/graphs.webp";
import infinity from "@/assets/images/infinity.png";
import award from "@/assets/images/award.webp";

interface HowItWorksProps {
  classNames?: string;
}

export const HowItWorks: React.FC<HowItWorksProps> = ({ classNames }) => {
  const howItWorksCards = [
    {
      image: connect,
      title: "Connect & Join",
      description:
        "Once you've joined a Tournament, all you have to do is play games as you usually do"
    },
    {
      image: graphs,
      title: "Automated Results",
      description:
        "Repeat is a unique platform because we track your results automatically - you just have to connect your account"
    },
    {
      image: infinity,
      title: "Unlimited Play",
      description:
        "Did you know you can play multiple Tournaments at the same time? Actually you can play as much as you want"
    },
    {
      image: award,
      title: "Get Rewarded",
      description:
        "Once a Tournament has ended you are rewarded based on your score which is based on the games you've played"
    }
  ];

  return (
    <div className={classnames("m-auto flex max-w-5xl", classNames)}>
      <Card
        title="How it works"
        subtitle="Fully Automated Tournament Experience"
      >
        <section className="flex w-full flex-col gap-4">
          <ul className="grid grid-cols-1 gap-4 lg:grid-cols-4 lg:gap-6">
            {howItWorksCards.map((card) => (
              <li
                key={card.title}
                className="shadow-highlight-all divide-y divide-slate-700 rounded-lg"
              >
                <figure>
                  <Image
                    alt="connected dots in purple background"
                    src={card.image}
                    className="w-full rounded-t-lg"
                  />
                </figure>
                <div className="flex flex-col gap-2 p-4 text-center">
                  <h5 className="text-md font-bold">{card.title}</h5>
                  <p className="text-xs">{card.description}</p>
                </div>
              </li>
            ))}
          </ul>
        </section>
      </Card>
    </div>
  );
};
