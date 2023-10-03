import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ForgetPassword from "./components/Authentication/Forgot";
import ResetPassword from "./components/Authentication/Reset";
import Profile from "./pages/Profile/Profile";
import AuthenticationLayout from "./components/Authentication/Layout";
import ProfileLayout from "./components/Profile/Layout";
import ProfileForm from "./components/Profile/ProfileForm";
import AccountForm from "./components/Profile/AccountForm";
import SettingForm from "./components/Profile/SettingForm";
import CammonDropdown from "./components/Common/CommonDropdown";

function App() {
  return (
       <div className="flex justify-between">
       <CammonDropdown type="fullaccess"></CammonDropdown>
       <CammonDropdown type="search between filters"></CammonDropdown>
       <CammonDropdown type="select"></CammonDropdown>
       <CammonDropdown type="is and is not"></CammonDropdown>
       </div> 
  );
}

export default App;
