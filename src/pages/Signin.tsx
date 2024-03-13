import { useState } from "react";
import image from "../assets/Assets/Sign Up Image.png";
import Typography from "../components/atoms/typography/typography";
import Button from "../components/atoms/button/button";
import { useNavigate } from "react-router-dom";
import {  toast } from "react-toastify";
import { useAppDispatch } from "../hooks/hooks";
import { addName } from "../store/slice/NameSlice";

const SignIn = () => {
  const dispatch = useAppDispatch();

  const [showPassword, setShowPassword] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();
  let passPattern = /^(?=.*[a-zA-Z0-9]).{8,}$/;
  let namePattern = /^(?=.*[a-zA-Z]).{2,}$/;
  let emailPattern = /^[a-z][a-z0-9_.]+@[a-z0-9-]{2,}\.[a-z]{2,10}$/i;
  const checkData = () => {
    if (!passPattern.test(password)) {
      toast.error(" You didn't choose a suitable password");
      console.log("password");
    } else if (!namePattern.test(name)) {
      toast.error(" You didn't choose a suitable Name");
      console.log("name");
    } else if (!emailPattern.test(email)) {
      toast.error(" You didn't choose a suitable Email");
        console.log("email");
        console.log(email)
    } else {
      dispatch(addName(name));
      navigate("/Landing");
    }
  };

  // let cellPattern = /^[0-9]{10}$/;
  // if (cellPattern.test(String(cellPhoneNumber)) && cellFocus) {
  //   setCellCheck(true);
  //   setCellPhoneError("");
  // }

  return (
    <>
      <div className={`w-full h-screen flex flex-row`}>
        <section className="flex flex-col w-[50%] h-full justify-center">
          <section className="flex flex-col  w-[50%] mx-auto h-screen  mt-8">
            <Typography
              typeOfTag="titlemain"
              color="text-black"
              className="ml-4"
              content="Fiber"
            />
            <section className="mt-8">
              <Typography
                typeOfTag="title"
                color="text-black"
                className="text-center"
                content="Create your Fiber account"
              />
            </section>
            <section className="mt-8">
              <Typography
                typeOfTag="titlemain"
                color="text-black"
                className="ml-4"
                content="Your Name"
              />
              <input
                type="text"
                className="w-[90%] mx-4 border outline-none rounded-lg h-[42px] p-4 hover:shadow-xl hover:shadow-inner"
                placeholder="John Doe"
                onChange={(e)=>setName(e.target.value)}
              />
            </section>
            <section className="mt-8">
              <Typography
                typeOfTag="titlemain"
                color="text-black"
                className="ml-4"
                content="E-mail"
              />
              <input
                type="text"
                className="w-[90%] mx-4 border outline-none rounded-lg h-[42px]  p-4 hover:shadow-xl hover:shadow-inner"
                placeholder="john@example.com"
                onChange={(e)=>setEmail(e.target.value)}
              />
            </section>
            <section className="mt-8 relative">
              <div className="absolute mt-[10%] ml-[85%]">
                <button onClick={() => setShowPassword(!showPassword)}>
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M15 12C15 13.654 13.654 15 12 15C10.346 15 9 13.654 9 12C9 10.346 10.346 9 12 9C13.654 9 15 10.346 15 12ZM24 11.551C24 11.551 19.748 20 12.015 20C4.835 20 0 11.551 0 11.551C0 11.551 4.446 4 12.015 4C19.709 4 24 11.551 24 11.551ZM17 12C17 9.243 14.757 7 12 7C9.243 7 7 9.243 7 12C7 14.757 9.243 17 12 17C14.757 17 17 14.757 17 12Z"
                      fill={showPassword ? "#FF0000" : "#A9A9A9"}
                    />
                  </svg>
                </button>
              </div>
              <Typography
                typeOfTag="titlemain"
                color="text-black"
                className="ml-4"
                content="Password"
              />
              <input
                type={showPassword ? "text" : "password"}
                className="w-[90%] mx-4 border outline-none rounded-lg h-[42px] p-4 hover:shadow-xl hover:shadow-inner"
                placeholder="at least 8 characters "
                onChange={(e)=>setPassword(e.target.value)}
              />
            </section>
            <section className="mt-8 flex flex-row gap-4">
              <input
                type="checkbox"
                className=" ml-4 border h-5 w-6 rounded-sm hover:shadow-xl hover:shadow-inner "
              />
              <p>
                By creating an account on Fiber,you agree to the{" "}
                <a href="#" className="underline font-bold text-purple-900">
                  Terms & conditions
                </a>{" "}
              </p>
            </section>
            <section className="mt-8">
              <Button
                title="Create Fiber Account"
                type="purplefill"
                onClick={checkData}
              />
            </section>
            <section className="mt-8">
              <p className="text-center">
                Already have an account?{" "}
                <a href="#" className="text-purple-600">
                  Sign in
                </a>
              </p>
            </section>
          </section>
        </section>
        <section className="w-[50%] min-h-full bg-purple-700 flex flex-col justify-center items-center">
          <section className="flex flex-col gap-4 justify-center w-full">
            <img src={image} alt="" className="w-[60%] mx-auto" />
            <Typography
              typeOfTag="title"
              color="text-white"
              className="text-center"
              content="UnParalleled Templates"
            />
            <Typography
              typeOfTag="psmall"
              color="text-white"
              className="text-center"
              content="Crafted by a team of professional designers, our templates are really good!"
            />
          </section>
              </section>
      </div>
    </>
  );
};

export default SignIn;
