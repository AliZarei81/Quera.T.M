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
import EmailRecieved from "./pages/Authentication/EmailRecieved";
import ProfileInfo from "./pages/Profile/ProfileInfo";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<AuthenticationLayout />}>
        <Route index element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="forgot">
          <Route index element={<ForgetPassword />} />
          <Route path="email-received" element={<EmailRecieved />} />
        </Route>
        <Route path="Reset-password" element={<ResetPassword />} />
      </Route>
      <Route path="profile" element={<ProfileLayout />}>
        <Route index element={<ProfileInfo />} />
      </Route>
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
