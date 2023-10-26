import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { Toaster } from "react-hot-toast";

import { QueryClient, QueryClientProvider } from "react-query";

import { ReactQueryDevtools } from "react-query/devtools";

// layouts
import AuthenticationLayout from "./Layouts/Authentication/AuthenticationLayout";
import ProfileLayout from "./Layouts/Profile/ProfileLayout";
import WorkspaceLayout from "./Layouts/Workspace";
import BoardLayout from "./Layouts/Workspace/Board/BoardLayout";

// pages
import Login from "./pages/Authentication/Login";
import Register from "./pages/Authentication/Register";
import ForgetPassword from "./pages/Authentication/Forgot";
import ResetPassword from "./pages/Authentication/Reset";
import EmailRecieved from "./pages/Authentication/EmailRecieved";
import ProfileInfo from "./pages/Profile/ProfileInfo";
import Account from "./pages/Profile/Account";
import Setting from "./pages/Profile/setting";
import BoardView from "./pages/Workspace/Board/BoardView";
import ListViewPage from "./pages/Workspace/Board/ListView";
import MainPage from "./pages/Workspace/MainPage";
import CalendarView from "./pages/Workspace/Board/CalendarView";
import { AppContextProvider } from "./context/userStore/store";
import PrivateRoute from "./routes/PrivateRoute";
import { SettingContextProvider } from "./context/settingStore/SettingStore";
import WorkspaceAddMemeberPage from "./pages/Workspace/WorkspaceAddMemeberPage";

const queryClient = new QueryClient();

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
      <Route
        path="profile"
        element={
          <PrivateRoute>
            <ProfileLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<ProfileInfo />} />
        <Route path="account" element={<Account />} />
        <Route path="setting" element={<Setting />} />
      </Route>
      <Route
        path="workspace"
        element={
          <PrivateRoute>
            <WorkspaceLayout />
          </PrivateRoute>
        }
      >
        <Route index element={<MainPage />} />
        <Route path=":workspaceid">
          <Route path="addMember" element={<WorkspaceAddMemeberPage />} />
          <Route path="project/:projectid" element={<BoardLayout />}>
            <Route index element={<BoardView />} />
            <Route path="list" element={<ListViewPage />} />
            <Route path="calendar" element={<CalendarView />} />R
          </Route>
        </Route>
      </Route>
    </Route>
  )
);

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <SettingContextProvider>
        <AppContextProvider>
          <RouterProvider router={router} />
          <ReactQueryDevtools initialIsOpen={false} />
          <Toaster />
        </AppContextProvider>
      </SettingContextProvider>
    </QueryClientProvider>
  );
}

export default App;
