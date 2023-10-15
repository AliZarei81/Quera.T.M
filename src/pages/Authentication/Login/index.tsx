import Header from "../../../components/Authentication/Header";
import LoginForm from "../../../components/Authentication/LoginForm";

const Login: React.FC = () => {
  return (
    <div className="h-full">
      <Header text="ثبت نام نکرده ای؟" title="ثبت نام" to="register" />
      <LoginForm />
    </div>
  );
};

export default Login;
