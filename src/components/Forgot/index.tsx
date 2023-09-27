import { useState, FormEvent, ChangeEvent } from "react";
import Button from "../Button";
import Input from "../Input";
import Form from "../Form";

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
    <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px]  [background-color:#ffff] shadow-2xl rounded-b-2xl">
      <h3 className="font-iran-yekan w-[237px] h-[55px] text-[32px] font-black text-center">
        فراموشی رمز عبور
      </h3>
      {!isFormSubmitted ? (
        <>
          <Form onSubmit={handleSubmit}>
            <Input
              type="email"
              id="email"
              label={{ text: "ایمیل خود را وارد کنید", for: "email" }}
              onChange={handleEmailChange}
              value={email}
              className="ring-2 ring-gray-primary w-[592px]"
            />
            <Button
              type="submit"
              disabled={!email}
              className="font-iran-yekan w-148 h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
              title="دریافت ایمیل بازیابی رمز عبور"
            />
          </Form>
        </>
      ) : (
        <p className="font-iran-yekan w-[592px] h-[24px] gap-[32px] text-lg  text-center font-light">
          لینک بازیابی رمز عبور برای شما ایمیل شد. لطفا ایمیل خود را بررسی کنید
        </p>
      )}
    </div>
  );
};

export default ForgetPassword;
