import { Outlet } from "react-router-dom";
import ProfileSideBar from "../../components/Profile/ProfileSideBar";

const ProfileLayout: React.FC = (): React.JSX.Element => {
  return (
    <div className="flex">
      <ProfileSideBar />
      <Outlet />
    </div>
  );
};

export default ProfileLayout;
