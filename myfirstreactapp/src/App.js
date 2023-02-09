import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import logo from "./logo.svg";
import CustomNav from "./CustomNav";
import MyFooter from "./MyFooter";
import Welcome from "./Welcome";
import CustomHeader from "./CustomHeader";
import SingleBook from "./SingleBook";
import AllTheBooks from "./AllTheBooks";

function App() {
  return (
    <>
      <CustomHeader bgColor="danger" />
      <Welcome bgButtonColor="secondary" />
      <AllTheBooks />
    </>
  );
}

export default App;
