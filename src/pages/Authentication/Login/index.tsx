import { useState, ChangeEvent, FormEvent } from "react";
import { Form, Link } from "react-router-dom";
import Button from "../../../components/Common/Button";
import Input from "../../../components/Common/Input";
import Header from "../../../components/Authentication/Header";

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
    <div className="h-full">
      <Header text="ثبت نام نکرده ای؟" title="ثبت نام" to="register" />
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px]  bg-white shadow-2xl rounded-b-2xl">
          <h3 className="w-[509px] h-[55px] text-[32px] font-black text-center">
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
            <div className="self-start text-[13px] font-extrabold   text-brand-primary">
              <Link to="forgot">رمز عبور را فراموش کرده‌ای؟</Link>
            </div>
            <Button
              type="submit"
              disabled={!email || !password}
              className="h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center justify-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
              title="ورود"
            />
            <div className=" text-[16px]  font-extrabold   flex items-center justify-center gap-[5px]">
              <p>ثبت نام نکرده ای؟</p>
              <Link className="text-brand-primary" to="register">
                ثبت نام
              </Link>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Login;
