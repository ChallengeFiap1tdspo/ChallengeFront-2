import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Header/Header";
import Rodape from "./components/Footer/Footer";


export default function App() {
  return (
    <>
      <Cabecalho />
      <Outlet />
      <Rodape />
    </>
  );
}
