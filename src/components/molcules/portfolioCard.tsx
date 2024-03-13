import Typography from "../atoms/typography/typography";

type PrortfolioType = {
  Icon: JSX.Element;
  name: string;
  title: string;
  content: string;
};
const PortfolioCard = ({ Icon, name, title, content }: PrortfolioType) => {
  return (
    <>
      <div className="border rounded-md p-4 flex flex-col min-w-[350px] hover:shadow-xl ">
        <section className="mt-4 flex flex-row gap-4">
          {Icon}
          <section className="flex flex-col mt-4">
            <Typography
              typeOfTag="w700"
              color="text-purple-700"
              content={name}
            />
            <Typography typeOfTag="psmall" content={title} />
          </section>
        </section>
        <section className="mt-8">
          <Typography typeOfTag="w500" content={content} />
        </section>
        <button className="border rounded-md text-purplee text-center p-4 font-bold hover:shadow-xl">
          View Portfolio
        </button>
      </div>
    </>
  );
};

export default PortfolioCard;
