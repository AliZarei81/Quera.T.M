import React, { ChangeEvent, useState } from "react";
import Modal from "..";
import Input from "../../Input";
// import Button from "../../Button";
import CopyLinkButton from "../../CopyLinkButton";
import User from "../../User";
import CammonDropdown from "../../CommonDropdown";
interface IUser {
  userName: string;
  userProfilePicture?: string;
  hasProfilePicture: boolean;
  isOwner: boolean;
  userNameShow?: boolean;
  userColor: string;
  email: string;
  access?:string;
}
interface IShareModalProbs {
    type:'workSpace'|'project'|'task'
  privateLink: string;
  users: IUser[];
  projects?:string[];
  // userAccess: IUser;
}
const ShareModal: React.FC<IShareModalProbs> = ({
  privateLink,
  users,
  type,
  projects
  // userAccess,
}): JSX.Element => {
  const [email, setEmail] = useState<string>("");
  const handleEmailChange = (event: ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handleSend = () => {};
  const renderTitle = () => {
    switch (type) {
        case 'workSpace':
            return 'به اشتراک گذاری ورک اسپیس';
        case 'project':
            return 'به اشتراک گذاری پروژه';
        case 'task':
            return 'به اشتراک گذاری تسک';
        default:
            return 'به اشتراک گذاری';
    }
}

  
  const renderUsers = () => {
    return users.map((user, index) => (
      <div className="flex justify-between">
        <User
            hasProfilePicture={user.hasProfilePicture}
            isOwner={user.isOwner}
            userName={user.userName}
            className={user.userColor}
            userNameShow={true}
            userProfilePicture={user.userProfilePicture}
            email={user.email}
            showEmailOrUser={false}
        />
        <div className="felx justify-between ">
            {(user.isOwner)&&(<div className="bg-white w-[90px] h-[30px] text-[12px] flex justify-center items-center rounded-[6px] border border-[#E9EBF0]">دسترسی کامل</div>) }
            {!user.isOwner && (
                <div className="flex justify-between gap-xs ">
                    <CammonDropdown type="fullaccess"  />
                    {type === "workSpace" && (
                    <CammonDropdown type="Wich Project Access" projects={projects} />
                    )}
                </div>
            )}
        </div>
      </div>
    ));
  };
  const child = () => {
    return (
      <div className="w-[600px] bg-white relative flex flex-col gap-m">
        <div className="w-full ">
          <Input
            type="email"
            value={email}
            placeholder="دعوت با ایمیل"
            onChange={handleEmailChange}
            className="w-full bg-[#F0F1F3] pl-[100px]"
          />
          {/* <Button
            type="submit"
            disabled={false}
            className="rounded-l-[8px] w-1/3 h-[40px] bg-brand-primary text-white text-[14px] absolute top-[0] left-[0px] px-[30px] "
            onClick={handleSend}
            title="ارسال"
          /> */}
          <button
            onClick={handleSend}
            className="rounded-l-[8px] w-[91px] h-[40px] bg-brand-primary text-white text-[14px] absolute top-[0] left-[0px] px-[30px] "
          >
            ارسال
          </button>
        </div>
        <div>
          <CopyLinkButton linkToCopy={privateLink} />
        </div>
        <div id="user">
          <p className="text-gray-primary">اشتراک گذاشته شده با</p>
          <div >
            <ul className="flex flex-col gap-xs" id="user">{renderUsers()}</ul>
          </div>
        </div>
      </div>
    );
  };
  return (
    <Modal
      hasPaginationBulet={false}
      hasFooter={false}
      modalClassname="w-[600px] rounded-[12px] gap-xl p-[20px]   "
      modalTitle={renderTitle()}
      totalPages={1}
      currentPage={1}
      mBody={child()}
    />
  );
};
export default ShareModal;
