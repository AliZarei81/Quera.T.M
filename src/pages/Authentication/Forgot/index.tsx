import ForgotForm from "../../../components/Authentication/ForgotForm";
import Header from "../../../components/Authentication/Header";

const ForgetPassword: React.FC = () => {
  return (
    <div className="h-full">
      <Header text="قبلا ثبت نام کرده ای؟" title="ورود" to="/" />
      <ForgotForm />
    </div>
  );
};

export default ForgetPassword;
