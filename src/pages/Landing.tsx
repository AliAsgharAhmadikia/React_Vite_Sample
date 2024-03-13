import Button from "../components/atoms/button/button";
import Typography from "../components/atoms/typography/typography";
import Header from "../components/molcules/header";
import image from "../assets/Assets/hero-Illustration.png";
import StarComponent from "../assets/Assets/star";
import CheckMarkesComponent from "../assets/Assets/checkMarkes";
import ClockComponent from "../assets/Assets/clock";
import Card from "../components/molcules/card";
import CodeComponent from "../assets/Assets/code";
import ResponsiveComponent from "../assets/Assets/Responsive";
import imageContent from "../assets/Assets/Page Image.png";
import AvatarOne from "../assets/Assets/avatarOne";
import PortfolioCard from "../components/molcules/portfolioCard";
import AvatarTwo from "../assets/Assets/avatar2";
import Avatar3 from "../assets/Assets/avatar3";
import Footer from "../components/molcules/footer";
type dataType = {
  Icon: JSX.Element;
  name: string;
  title: string;
  content: string;
};
const LandingPage = () => {
  let data: dataType[] = [
    {
      Icon: <AvatarOne />,
      name: "Sara Andrews",
      title: "$100k in revenue",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed beatae odio fuga iste magnam deserunt tempore, nulla consequuntur sapiente earum in, minus repudiandae libero quidem ullam accusamus ab provident enim. Alias unde tempora eligendi necessitatibus rem neque, qui animi minima?",
    },
    {
      Icon: <AvatarTwo />,
      name: "Mathew Higgins",
      title: "$20k in revenue",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed beatae odio fuga iste magnam deserunt tempore, nulla consequuntur sapiente earum in, minus repudiandae libero quidem ullam accusamus ab provident enim. Alias unde tempora eligendi necessitatibus rem neque, qui animi minima?",
    },
    {
      Icon: <Avatar3 />,
      name: "Janice Dave",
      title: "$30k in revenue",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed beatae odio fuga iste magnam deserunt tempore, nulla consequuntur sapiente earum in, minus repudiandae libero quidem ullam accusamus ab provident enim. Alias unde tempora eligendi necessitatibus rem neque, qui animi minima?",
    },
    {
      Icon: <Avatar3 />,
      name: "Janice Dave",
      title: "$30k in revenue",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed beatae odio fuga iste magnam deserunt tempore, nulla consequuntur sapiente earum in, minus repudiandae libero quidem ullam accusamus ab provident enim. Alias unde tempora eligendi necessitatibus rem neque, qui animi minima?",
    },
    {
      Icon: <Avatar3 />,
      name: "Janice Dave",
      title: "$30k in revenue",
      content:
        "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sed beatae odio fuga iste magnam deserunt tempore, nulla consequuntur sapiente earum in, minus repudiandae libero quidem ullam accusamus ab provident enim. Alias unde tempora eligendi necessitatibus rem neque, qui animi minima?",
    },
  ];
  return (
    <>
      <div className="bg-orange-50 px-16 flex flex-col">
        <Header />
        <div className="flex flex-row justify-center mt-8 mb-16">
          <section className="flex flex-col w-[50%] items-end mt-16 ">
            <section className="flex flex-col  w-[87%]    justify-center ">
              <section className="flex flex-row gap-4 ">
                <StarComponent />
                <StarComponent />
                <StarComponent />
                <StarComponent />
                <StarComponent />
                <Typography
                  typeOfTag="psmall"
                  content={"Rated 4.8/5 (243 reviews)"}
                />
              </section>
              <section className="mt-8">
                <Typography
                  typeOfTag="titlemainLand"
                  color="text-black"
                  className=""
                  content="Create your portfolio in minutes."
                />
              </section>
              <section className="mt-4">
                <Typography
                  typeOfTag="p"
                  className=""
                  content="Lorem ipsum dolor sit amt ducimus! Soluta fugiat inventore fuga modi voluptas maxime.
                  "
                />
              </section>
              <section className="flex flex-row gap-4  mt-4 ">
                <section className="w-[150px] mt-2">
                  <Button title="Start Free Trial" type="purplefill" />
                </section>
                <button className="p-4 font-bold underline text-purple-800">
                  View Examples
                </button>
              </section>
              <section className="mt-8 flex flex-row gap-4">
                <section className="flex flex-row gap-2">
                  <CheckMarkesComponent />
                  <Typography
                    typeOfTag="p"
                    content={"No credit card required"}
                  />
                </section>
                <section className="flex flex-row gap-2">
                  <CheckMarkesComponent />
                  <Typography typeOfTag="p" content={"Ten Free Templates"} />
                </section>
              </section>
            </section>
          </section>
          <section className="w-[50%]  flex flex-col justify-center ">
            <section className="flex flex-col gap-4 justify-center w-full">
              <img src={image} alt="" className="w-[100%] mx-auto" />
            </section>
          </section>
        </div>
      </div>
      <div className="px-28 flex flex-col  ">
        <p className="p-4 font-bold  text-purple-800">Why Fiber?</p>
        <section className="mt-4">
          <Typography
            typeOfTag="title"
            color="text-black"
            className=""
            content="A good portfolio means good employability"
          />
        </section>
        <section className="mt-8 flex flex-row">
          <Card
            Icon={<ClockComponent />}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, esse."
            title="Build in minutes"
          />
          <Card
            Icon={<CodeComponent />}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, esse."
            title="Add custom Css"
          />
          <Card
            Icon={<ResponsiveComponent />}
            content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae, esse."
            title="Responsive"
          />
        </section>
        <section className=" mt-16 flex flex-row bg-purple-900 p-8 pb-0 rounded-md">
          <section className="w-[50%] flex flex-col  justify-center">
            <Typography
              typeOfTag="title"
              color="text-white"
              className=""
              content="Diversify your portfolio"
            />
            <Typography
              typeOfTag="psmall"
              color="text-white"
              className=""
              content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, optio sunt odit modi expedita excepturi explicabo fuga molestias nulla eveniet?
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima perferendis culpa alias nulla ullam tempora, aut quod corporis quisquam perspiciatis.
              "
            />
            <section className="w-[150px] mt-4">
              <Button title={"Start Free Terial"} type={"purpleoutline"} />
            </section>
          </section>
          <section className="w-[50%]">
            <img src={imageContent} alt="" className=" mx-auto" />
          </section>
        </section>
        <section className="mt-16 flex flex-row gap-4 w-full overflow-x-scroll ">
       

          {data.map((item: dataType) => (
            <PortfolioCard
              Icon={item.Icon}
              content={item.content}
              name={item.name}
              title={item.title}
            />
          ))}
        </section>
      </div>
      <Footer/>
    </>
  );
};

export default LandingPage;
