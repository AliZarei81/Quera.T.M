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
import TaskInfo from "./components/TaskInformation/TaskInfo";

function App() {
  return (
       <div className="flex justify-between ">
       <TaskInfo BuildDate="۱ اردیبهشت ۱۴۰۲" Deadline="پس فردا"></TaskInfo>
       </div> 
  );
}

export default App;
