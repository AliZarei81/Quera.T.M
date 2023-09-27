import { useState, MouseEvent, ChangeEvent } from "react";
import Input from "../Input";
import Button from "../Button";
import Form from "../Form";
import Profile from "../Profile";
const ProfileForm: React.FC = () => {
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [phoneNumber, setPhoneNumber] = useState<string>("");

  const handleFirstNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: ChangeEvent<HTMLInputElement>) => {
    setLastName(event.target.value);
  };

  const handlePhoneNumberChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPhoneNumber(event.target.value);
  };

  const handleSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log("FirstName: ", firstName);
    console.log("LastName: ", lastName);
    console.log("PhoneNumber: ", phoneNumber);
  };

  return (
    <div className="flex flex-col items-start justify-center w-[640px] gap-[32px] p-[24px]  [background-color:#ffff]">
      <h3 className="text-[32px] font-black">اطلاعات فردی</h3>
      <Form>
        <div className="flex gap-s w-[592px]">
          <Profile
            hasProfilePicture={false}
            isOwner={false}
            className="bg-yellow-secondary"
            userName="Nilofar Mojodi"
            userNameShow={false}
          />
          <div className="flex flex-col gap-xs">
            <div className="border-brand-primary border-solid border-2 rounded-md p-xs">
              <Button
                title="ویرایش تصویر پروفایل"
                disabled={false}
                type="button"
                className="text-brand-primary"
              />
            </div>
            <p className="text-[12px] text-[#8A8989]">
              این تصویر برای عموم قابل نمایش است.
            </p>
          </div>
        </div>
        <Input
          type="text"
          value={firstName}
          id="firstName"
          onChange={handleFirstNameChange}
          label={{ text: "نام", for: "firstName" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="text"
          value={lastName}
          id="lastName"
          onChange={handleLastNameChange}
          label={{ text: "نام خانوادگی", for: "lastName" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />
        <Input
          type="text"
          value={phoneNumber}
          id="phoneNumber"
          onChange={handlePhoneNumberChange}
          label={{ text: "شماره موبایل", for: "phoneNumber" }}
          className="ring-2 ring-gray-primary w-[592px]"
        />

        <Button
          type="submit"
          disabled={!lastName || !firstName || !phoneNumber}
          className="h-12 px-3 py-3 mt-l p-[10px] gap-8 text-lg font-bold text-center bg-brand-primary text-gray-secondary rounded cursor-pointer"
          onClick={handleSubmit}
          title="ثبت تغییرات"
        />
      </Form>
    </div>
  );
};

export default ProfileForm;
