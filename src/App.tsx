import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Authentication from "./pages/Authentication/Authentication";
import Layout from "./components/Authentication/Layout";
import Login from "./components/Authentication/Login";
import Register from "./components/Authentication/Register";
import ForgetPassword from "./components/Authentication/Forgot";
import ResetPassword from "./components/Authentication/Reset";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<Authentication />}>
          <Route element={<Layout />}>
            <Route index element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/forgot" element={<ForgetPassword />} />
            <Route path="/reset" element={<ResetPassword />} />
          </Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
