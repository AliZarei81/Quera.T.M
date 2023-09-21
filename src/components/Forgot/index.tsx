import { useState, FormEvent, ChangeEvent } from "react";
import Button from "../Button";
import Input from "../Input";

const ForgetPassword: React.FC = () => {
  const [email, setEmail] = useState<string>(""); 
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(email);
    setIsFormSubmitted(true);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px] bg-white shadow-2xl rounded-b-2xl">
      <h3 className="font-iran-yekan w-[237px] h-[55px] text-[32px] font-black text-center">
        فراموشی رمز عبور
      </h3>
      {!isFormSubmitted ? (
        <>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-[592] h-[140px] gap-[32px]"
          >
            <Input
              type="email"
              label="ایمیل خود را وارد کنید"
              onChange={handleEmailChange}
              value={email}
            />
            <Button
              type="submit"
              disabled={!email}
              className="font-iran-yekan w-148 h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center text-white bg-brand-primary text-gray-secondary rounded cursor-pointer"
              title="دریافت ایمیل بازیابی رمز عبور"
            />
          </form>
        </>
      ) : (
        <p className="font-iran-yekan w-148 h-6 gap-5 text-lg  text-center">
          لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید.
        </p>
      )}
    </div>
  );
};

export default ForgetPassword;

