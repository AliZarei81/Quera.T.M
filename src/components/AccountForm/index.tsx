import { useState, MouseEvent, ChangeEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import Form from "../Form";
const AccountForm: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [username, setUserName] = useState<string>("");
  const [oldPassword, setOldPassword] = useState<string>("");
  const [newPassword, setNewPassword] = useState<string>("");
  const [repeatNewPassword, setRepeatNewPassword] = useState<string>("");

  const handleUserNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUserName(event.target.value);
  };

  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };

  const handleOldPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setOldPassword(event.target.value);
  };

  const handleNewPasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setNewPassword(event.target.value);
  };

  const handleRepeatNewPasswordChange = (
    event: ChangeEvent<HTMLInputElement>
  ) => {
    setRepeatNewPassword(event.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("Username: ", username);
    console.log("Email: ", email);
    console.log("oldPassword: ", oldPassword);
    console.log("newPassword: ", newPassword);
  };

  return (
    <div className="flex flex-col items-start justify-center w-[640px] gap-[32px] p-[24px]  [background-color:#ffff]">
      <h3 className="text-[32px] font-black">اطلاعات حساب</h3>
      <Form>
        <Input
          type="email"
          value={email}
          id="email"
          onChange={handleEmailChange}
          label={{ text: "ایمیل", for: "email" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="text"
          value={username}
          id="userName"
          onChange={handleUserNameChange}
          label={{ text: "نام کاربری", for: "userName" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="password"
          value={oldPassword}
          id="oldPassword"
          onChange={handleOldPasswordChange}
          label={{ text: "رمز عبور فعلی", for: "oldPassword" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="password"
          value={newPassword}
          id="newPassword"
          onChange={handleNewPasswordChange}
          label={{ text: "رمز عبور جدید", for: "newPassword" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="password"
          value={repeatNewPassword}
          id="repeatNewPassword"
          onChange={handleRepeatNewPasswordChange}
          label={{ text: "تکرار رمز عبور جدید", for: "repeatNewPassword" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />

        <Button
          type="submit"
          disabled={!username || !email || !oldPassword}
          className="h-12 px-3 py-3 mt-l p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
          onClick={handleSubmit}
          title="ثبت تغییرات"
        />
      </Form>
    </div>
  );
};

export default AccountForm;
