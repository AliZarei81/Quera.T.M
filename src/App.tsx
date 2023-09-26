import { BiSearch } from "react-icons/bi";
import Design from "./components/Design";
import Input from "./components/Input";
function App() {
  return (
    <div className="App">
      {/* <Design></Design> */}
      <Input
        type="text"
        value="سلام"
        id="test"
        icon={<BiSearch />}
        label={{ text: "test", for: "test" }}
      />
    </div>
  );
}

export default App;
