import { useOutletContext } from "react-router-dom";
import Header from "../../../components/Authentication/Header";
import RegisterForm from "../../../components/Authentication/RegisterForm";

const Register: React.FC = () => {
  const isOpen = useOutletContext();
  return (
    <div className="h-full">
      <Header text="قبلا ثبت نام کرده ای؟" title="ورود" to="/" />
      <RegisterForm setTermsIsOpen={isOpen} />
    </div>
  );
};

export default Register;
