import { Outlet, Link } from "react-router-dom";
import styles from "./Menu.module.css";
import Menu from "./menu";
import main from "./assets/2.jpg";

function App() {
  return (
    <>
      <Menu />
      <img src={main} alt="waves" />
    </>
  );
}

export default App;
