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
import MainPage from "./pages/MainPage/MainPage";
import WorkSpaceLayout from "./components/MainPage/WorkSpace/WorkSpaceLayout";
import BoardLayout from "./components/MainPage/Board/BoardLayout";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Authentication />}>
          <Route element={<AuthenticationLayout />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<ForgetPassword />} />
            <Route path="/reset" element={<ResetPassword />} />
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route element={<Profile />}>
          <Route path="/profile" element={<ProfileLayout />}>
            <Route index element={<ProfileForm />} />
            <Route path="/profile/account" element={<AccountForm />} />
            <Route path="/profile/settings" element={<SettingForm />} />
          </Route>
        </Route>
      </Routes>
      <Routes>
        <Route element={<MainPage />}>
          <Route path="/main" element={<WorkSpaceLayout />}>
            {/* <Route index element={<ProfileForm />} /> */}
          </Route>
          <Route path="/main/board" element={<BoardLayout />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
