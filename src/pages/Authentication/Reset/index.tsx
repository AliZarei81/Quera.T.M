import Header from "../../../components/Authentication/Header";
import ResetForm from "../../../components/Authentication/ResetForm";

const ResetPassword: React.FC = () => {
  return (
    <div className="h-full">
      <Header text="قبلا ثبت نام کرده ای؟" title="ورود" to="/" />
      <ResetForm />
    </div>
  );
};

export default ResetPassword;
