import { useState, MouseEvent, ChangeEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import Form from "../Form";
import { BiSearch, BiAlarm } from "react-icons/bi";
const Register: React.FC = () => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

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
    console.log("Name: ", name);
    console.log("Email: ", email);
    console.log("Password: ", password);
  };

  return (
    <div className="flex flex-col items-center justify-center w-[640px] gap-[32px] p-[24px]  [background-color:#ffff] shadow-2xl rounded-b-2xl">
      <h3 className="font-iran-yekan w-[509px] h-[55px] text-[32px] font-black text-center">
        ثبت‌نام در کوئرا تسک منیجر
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
            className="font-iran-yekan  text-[16px] font-normal self-start"
            htmlFor="demoCheckbox"
          >
            قوانین و مقررات را می‌پذیرم.
          </label>
        </div>

        <Button
          type="submit"
          disabled={!name || !email || !password}
          className="h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
          onClick={handleSubmit}
          title="ثبت نام"
        />
      </Form>
    </div>
  );
};

export default Register;
