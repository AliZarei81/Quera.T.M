import { ChangeEvent, useState } from "react";
import Design from "./components/Design";
import Input from "./components/Input";
import { AiOutlineMail } from "react-icons/ai";
function App() {
  const [password, setPassword] = useState<string>("");
  const handlePasswordChange = (event: ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };
  return (
    <div className="App">
      <Design></Design>
      {/* <Input
        type="email"
        id="email"
        placeholder="جست و جو  کنید"
        label={{ text: "رمز عبور جدید را وارد کنید", for: "email" }}
        onChange={handlePasswordChange}
        value={password}
        icon={<AiOutlineMail />}
      /> */}
    </div>
  );
}

export default App;
