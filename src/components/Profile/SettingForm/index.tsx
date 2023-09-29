import { useState, MouseEvent, ChangeEvent } from "react";
import Input from "../../Common/Input";
import Button from "../../Common/Button";
import Form from "../../Common/Form";
import Switch from "../../Common/Switch";
const SettingForm: React.FC = () => {
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
      <div className="flex flex-col">
        <h3 className="text-[32px] font-black">تنظیمات</h3>
        <Form>
          <Switch />
          <Button
            type="submit"
            disabled={!username || !email || !oldPassword}
            className="h-12 px-3 py-3 mt-l p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
            onClick={handleSubmit}
            title="ثبت تغییرات"
          />
        </Form>
      </div>
    </div>
  );
};

export default SettingForm;
