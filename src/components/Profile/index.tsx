import React from "react";
interface IProfileProbs {
  userName: string;
  userProfilePicture?: string;
  hasProfilePicture: boolean;
}

const Profile: React.FC<IProfileProbs> = ({
  userName,
  userProfilePicture,
  hasProfilePicture,
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
        <div className="w-[36px] h-[37px] rounded-full bg-indigo-secondary flex items-center justify-center">
          <span className="text-xs font-normal text-indigo-primary ">
            {initials}
          </span>
        </div>
      );
    }
  };

  return (
    <div className="flex h-[37px] gap-xs justify-start items-center ">
      {renderProfilePicture()}
      <h1 className="flex ">{userName}</h1>
    </div>
  );
};

export default Profile;
