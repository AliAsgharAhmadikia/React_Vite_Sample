import { useNavigate } from "react-router-dom";
import Typography from "../atoms/typography/typography";
import Button from "../atoms/button/button";
import { useAppSelector } from "../../hooks/hooks";
import { RootState } from "../../store";

const Header = () => {
  const navigate = useNavigate();
  let name = useAppSelector((items: RootState) => items.Name.value);
  return (
    <>
      <div className="flex flex-row h-[68px]  justify-between">
        <section className="mt-4 w-full  justify-center">
          <Typography
            typeOfTag="titlemain"
            color="text-black"
            className="p-4  ml-16"
            content="Fiber"
          />
        </section>
        <section className="flex flex-row gap-3 justify-center mt-4 w-full ">
          <button className="p-4">Community</button>
          <button className="p-4">Pricing</button>
          <button className="p-4">Features</button>
        </section>
        <section className="flex flex-row gap-4 justify-center mt-4 w-full ">
          {name.length > 0 && <p className="font-bold mt-4"> Hi, {name} !</p>}
          {name.length == 0 && (
            <>
              <button className="p-4 font-bold">Sign In</button>
              <section className="w-[100px] mt-2">
                <Button
                  title="Sign Up"
                  type="purplefill"
                  onClick={() => navigate("/")}
                />
              </section>
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Header;
