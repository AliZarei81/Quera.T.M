import { Navigate } from "react-router-dom";

interface IPrivateRouteProps extends React.PropsWithChildren {}
const PrivateRoute: React.FC<IPrivateRouteProps> = ({
  children,
}): JSX.Element => {
  const isAuthenticated =
    localStorage.getItem("accessToken") &&
    localStorage.getItem("refreshToken") &&
    localStorage.getItem("user");
  return isAuthenticated ? <>{children}</> : <Navigate to="/" />;
};

export default PrivateRoute;
