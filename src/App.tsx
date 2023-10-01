import Account from "./components/Account";
import AccountForm from "./components/AccountForm";
import ChangeDate from "./components/ChangeDate";
import Design from "./components/Design";
import Filterstatus from "./components/FilterStatus";
import Header from "./components/Header";
function App() {
  return (
    <div className="App">
      {/* <Design></Design> */}
      {/* <Account /> */}
      <Header>
        {/* <Filterstatus /> */}
        <ChangeDate />
      </Header>
    </div>
  );
}

export default App;
