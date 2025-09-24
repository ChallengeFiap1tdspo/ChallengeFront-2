import { Outlet } from "react-router-dom";
import Cabecalho from "./components/Header";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Cabecalho />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
