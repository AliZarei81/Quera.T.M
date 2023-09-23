import { useState, MouseEvent, ChangeEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import Form from "../Form";
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
          onChange={handleNameChange}
          label="نام کامل"
        />
        <Input
          type="email"
          value={email}
          onChange={handleEmailChange}
          label="ایمیل"
        />
        <Input
          type="password"
          value={password}
          onChange={handlePasswordChange}
          label="رمز عبور"
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
          className="font-iran-yekan w-148 h-12 px-3 py-3 p-[10px] gap-8 text-lg font-bold text-center text-white bg-brand-primary text-gray-secondary rounded cursor-pointer"
          onClick={handleSubmit}
          title="ثبت نام"
        />
      </Form>
    </div>
  );
};

export default Register;