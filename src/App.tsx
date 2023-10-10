import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

// layouts
import AuthenticationLayout from "./Layouts/Authentication/AuthenticationLayout";

// pages
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgetPassword from "./pages/Authentication/Forgot";
import ResetPassword from "./pages/Authentication/Reset";
import ProfileLayout from "./Layouts/Profile/ProfileLayout";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AuthenticationLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot" element={<ForgetPassword />} />
        <Route path="reset" element={<ResetPassword />} />
      </Route>
      <Route path="/profile" element={<ProfileLayout />}></Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
