import { useState, FormEvent, ChangeEvent } from "react";
import Button from "../Button";
import Input from "../Input";
import Form from "../Form";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>("");
  const [, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(password);
    setIsFormSubmitted(true);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px]  [background-color:#ffff] shadow-2xl rounded-b-2xl">
      <h3 className="font-iran-yekan w-[237px] h-[55px] text-[32px] font-black text-center">
        بازیابی رمز عبور
      </h3>

      <Form onSubmit={handleSubmit}>
        <Input
          type="password"
          id="password"
          label={{ text: "رمز عبور جدید را وارد کنید", for: "password" }}
          onChange={handlePasswordChange}
          value={password}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Button
          type="submit"
          disabled={!password}
          className="font-iran-yekan w-148 h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
          title="تغییر رمز عبور"
        />
      </Form>
    </div>
  );
};

export default ResetPassword;
