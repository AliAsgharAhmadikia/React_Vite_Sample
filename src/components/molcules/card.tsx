import Typography from "../atoms/typography/typography";

type cardType = {
    Icon: JSX.Element;
    title: string;
    content: string;
}
const Card = ({Icon,title,content}:cardType) => {
  return (
    <>
      <section className="flex flex-col hover:shadow-lg">
              {
                  Icon
            }
        <Typography
          typeOfTag="titlemain"
          className="mt-2"
          content={title}
        />
        <Typography
          typeOfTag="p"
          className="mt-2"
          content={
            content
          }
        />
      </section>
    </>
  );
};

export default Card;
