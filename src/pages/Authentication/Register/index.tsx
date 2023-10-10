import { useState, MouseEvent, ChangeEvent } from "react";
import Input from "../../../components/Common/Input";
import Button from "../../../components/Common/Button";
import Form from "../../../components/Common/Form";
import { BiSearch, BiAlarm } from "react-icons/bi";
import Header from "../../../components/Authentication/Header";
import apiClients from "../../../services/api-clients";
import { UserRegisterRequest } from "../../../types/request/userregister-request";
import { UserRegisterResponse } from "../../../types/response/userregister-response";
import { AxiosError } from "axios";
import { useNavigate } from "react-router-dom";
const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  let navigate = useNavigate();

  const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    const user: UserRegisterRequest = {
      username: name,
      email,
      password,
    };
    apiClients
      .post<UserRegisterResponse>("/accounts/", user)
      .then((res) => {
        navigate("/");
      })
      .catch((error) => {
        const err = error as AxiosError;
      });
  };

  return (
    <div className="h-full">
      <Header text="قبلا ثبت نام کرده ای؟" title="ورود" to="/" />
      <div className="h-full flex items-center justify-center">
        <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px]  bg-white shadow-2xl rounded-b-2xl">
          <h3 className="w-[509px] h-[55px] text-[32px] font-black text-center">
            ثبت‌ نام در کوئرا تسک منیجر
          </h3>
          <Form>
            <Input
              type="text"
              value={name}
              id="fullName"
              onChange={handleNameChange}
              label={{ text: "نام کامل", for: "fullName" }}
              className="ring-2 ring-gray-primary w-[592px]"
            />
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
            <div className="self-start flex items-center gap-[5px] ">
              <input
                type="checkbox"
                id="demoCheckbox"
                name="checkbox"
                value={1}
                className="w-[20px] h-[20px]"
              />{" "}
              <label
                className="  text-[16px] font-normal self-start"
                htmlFor="demoCheckbox"
              >
                قوانین و مقررات را می‌پذیرم.
              </label>
            </div>

            <Button
              type="submit"
              disabled={!name || !email || !password}
              className="h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center justify-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
              onClick={handleSubmit}
              title="ثبت نام"
            />
          </Form>
        </div>
      </div>
    </div>
  );
};

export default Register;
