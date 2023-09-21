import { useState, FormEvent, ChangeEvent } from "react";
import Button from "../Button";
import Input from "../Input";

const ResetPassword: React.FC = () => {
  const [password, setPassword] = useState<string>(""); 
  const [isFormSubmitted, setIsFormSubmitted] = useState<boolean>(false);

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    console.log(password);
    setIsFormSubmitted(true);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px] bg-white shadow-2xl rounded-b-2xl">
      <h3 className="font-iran-yekan w-[237px] h-[55px] text-[32px] font-black text-center">
      بازیابی رمز عبور 
      </h3>
    
          <form
            onSubmit={handleSubmit}
            className="flex flex-col items-center justify-center w-[592] h-[140px] gap-[32px]"
          >
            <Input
              type="password"
              label="رمز عبور جدید را وارد کنید"
              onChange={handlePasswordChange}
              value={password}
            />
            <Button
              type="submit"
              disabled={!password}
              className="font-iran-yekan w-148 h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center text-white bg-brand-primary text-gray-secondary rounded cursor-pointer"
              title="تغییر رمز عبور"
            />
          </form>  
    </div>
  );
};

export default ResetPassword;