import "./style.css";
import Button from "../Button";
import ForgetPassword from "../Forgot";
import ResetPassword from "../Reset";
import Login from "../Login";
import Register from "../Register";
const Design: React.FC = () => {
  return (
    <div className="w-full h-screen fixed m-auto ">
      <header className="w-full h-[51px] fixed top-[50px] px-[80px] flex justify-between">
        <h1 className="w-full h-[51px] font-iran-yekan font-bold text-[32px] leading-[37.5px] m-0 text-right bg-gradient-to-r from-[#118c80] to-[#4ab7d8]  bg-clip-text [-webkit-text-fill-color:transparent] justify-center items-center">
          کوئرا تسک منیجر
        </h1>
        <div className="w-[227px] h-[51px] gap-[7px] flex justify-center items-center">
          <div className="w-[150px] h-[24px] flex font-iran-yekan  text-[16px] leading-[19px] tracking-normal text-rightbg-black bg-clip-text text-transparent [-webkit-text-fill]">
            قبلا ثبت‌نام کرده‌ای؟
          </div>
          <Button
            title="ثبت نام"
            disabled={false}
            className=" bg-brand-primary cursor-pointer w-[95px] h-[40px] p-[6px] rounded-[10px] border-none gap-[10px] text-gray-secondary font-iran-yekan  "
          />
        </div>
      </header>

      <div className="flex justify-center items-center h-screen ">
        {/* <ForgetPassword/> */}
        <ResetPassword></ResetPassword>
        {/* <Login></Login> */}
        {/* <Register></Register> */}

        <div className="linear__gradient"></div>
      </div>
    </div>
  );
};

export default Design;
