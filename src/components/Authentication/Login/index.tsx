import { useState, MouseEvent, ChangeEvent, FormEvent } from "react";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import Form from "../../Common/Form";

const Login: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div className="flex flex-col items-center justify-center gap-m p-l bg-white shadow-2xl rounded-2xl">
      <h3 className="text-body-xl font-black text-center">
        به کوئرا تسک منیجر خوش برگشتی :)
      </h3>

      <Form onSubmit={handleSubmit}>
        <Input
          type="email"
          value={email}
          id="email"
          onChange={handleEmailChange}
          label={{ text: "ایمیل", for: "email" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="password"
          value={password}
          id="password"
          onChange={handlePasswordChange}
          label={{ text: "رمز عبور", for: "password" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <div className="font-iran-yekan self-start text-[13px] font-extrabold   text-brand-primary">
          <p>رمز عبور را فراموش کرده‌ای؟</p>
        </div>
        <Button
          type="submit"
          disabled={!email || !password}
          className="px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center justify-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
          title="ورود"
        />
        <div className="font-iran-yekan  text-[16px]  font-extrabold   flex items-center justify-center gap-[5px]">
          <p>ثبت نام نکرده ای؟</p>
          <p className="text-brand-primary">ثبت نام</p>
        </div>
      </Form>
      
    </div>
  );
};

export default Login;
