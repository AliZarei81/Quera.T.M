import { Outlet } from "react-router-dom";
import "./style.css";
import TermsAndConditions from "../../components/Authentication/TermsAndConditions";
import { useState } from "react";

const AuthenticationLayout: React.FC = (): React.JSX.Element => {
  const [termsIsOpen, setIsOpen] = useState(false);
  return (
    <>
      <div className="w-full h-screen overflow-hidden relative">
        <div className="w-3/4 my-xl mx-auto h-screen">
          <Outlet context={setIsOpen} />
        </div>
        <div className="linear__gradient"></div>
      </div>
      <TermsAndConditions
        isVisible={termsIsOpen}
        onClose={() => setIsOpen(false)}
      />
    </>
  );
};

export default AuthenticationLayout;
