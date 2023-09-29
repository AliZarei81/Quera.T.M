import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Layout from "./components/Profile/Layout";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ForgetPassword from "./components/Authentication/Forgot";
import ResetPassword from "./components/Authentication/Reset";
import DarkMode from "./components/Common/Switch";
import SettingForm from "./components/Profile/SettingForm";

function App() {
  return (
    // <Router>
    //   <Routes>
    //     <Route element={<Authentication />}>
    //       <Route element={<Layout />}>
    //         <Route index element={<Login />} />
    //         <Route path="/register" element={<Register />} />
    //         <Route path="/forgot" element={<ForgetPassword />} />
    //         <Route path="/reset" element={<ResetPassword />} />
    //       </Route>
    //     </Route>
    //   </Routes>
    // </Router>
    <Layout />
  );
}

export default App;
