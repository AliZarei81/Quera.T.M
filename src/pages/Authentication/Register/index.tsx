import Header from "../../../components/Authentication/Header";
import RegisterForm from "../../../components/Authentication/RegisterForm";

const Register: React.FC = () => {
  return (
    <div className="h-full">
      <Header text="قبلا ثبت نام کرده ای؟" title="ورود" to="/" />
      <RegisterForm />
    </div>
  );
};

export default Register;
