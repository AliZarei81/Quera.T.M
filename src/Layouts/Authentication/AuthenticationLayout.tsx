import { Outlet } from "react-router-dom";
import "./style.css";

const AuthenticationLayout: React.FC = (): React.JSX.Element => {
  return (
    <div className="w-full h-screen overflow-hidden">
      <div className="w-3/4 my-xl mx-auto h-screen">
        <Outlet />
      </div>
      <div className="linear__gradient"></div>
    </div>
  );
};

export default AuthenticationLayout;
