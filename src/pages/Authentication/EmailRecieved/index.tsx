import EmailRecievedForm from "../../../components/Authentication/EmailReceivedForm";
import Header from "../../../components/Authentication/Header";

const EmailRecieved: React.FC = () => {
  return (
    <div className="h-full">
      <Header text="قبلا ثبت نام کرده ای؟" title="ورود" to="/" />
      <EmailRecievedForm />
    </div>
  );
};

export default EmailRecieved;
