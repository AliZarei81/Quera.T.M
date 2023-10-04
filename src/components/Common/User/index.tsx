import React from "react";
interface IProfileProbs {
  userName: string;
  userProfilePicture?: string;
  hasProfilePicture: boolean;
  isOwner: boolean;
  userNameShow?: boolean;
  className?: string;
  email?:string;
  showEmailOrUser?:boolean;//user:true  email:false
}

const User: React.FC<IProfileProbs> = ({
  userName,
  userProfilePicture,
  hasProfilePicture,
  isOwner = false,
  className,
  userNameShow = true,
  email,
  showEmailOrUser= true
}): JSX.Element => {
  // Extract initials from the user's name

  const initials = userName
    .split(" ")
    .map((namePart) => namePart.charAt(0))
    .join("");
  // Function to load the profile picture or show initials

  const renderProfilePicture = () => {
    if (hasProfilePicture) {
      return (
        <img
          src={userProfilePicture}
          alt=""
          className="w-[36px] h-[37px] rounded-full  "
        />
      );
    } else {
      return (
        <div
          className={` w-[36px] h-[36px]  rounded-full flex items-center justify-center ${className}`}
        >
          <span className="text-[14px] font-normal text-yellow-primary ">
            {initials}
          </span>
        </div>
      );
    }
  };
  //Funcion to set username
  const user = () => {
    if (isOwner) return "من";
    if(!showEmailOrUser) return email;
    else return userName;
  };
  return (
    <div className="flex justify-start  gap-xs items-center">
      <div className=" h-[37px] gap-xs justify-start items-center flex">
        {renderProfilePicture()}
        {userNameShow && <h1 className="flex ">{user()}</h1>}
      </div>
      {isOwner && (
        <div className="rounded-md flex text-center justify-center items-center bg-blue-secondary text-blue-primary text-[12px] w-[114px] h-[29px] px-[8px] py-[4px] ">
          Workspace Owner
        </div>
      )}
    </div>
  );
};

export default User;
