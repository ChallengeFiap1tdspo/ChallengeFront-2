import { Link } from "react-router-dom";
import logo_hospital from "../../img/logo_hospital.png";


export default function Menu() {
  return (
    <header>
      <div className="logo-container">
        <img src={logo_hospital} alt="Logo Hospital" />
        <h1>Hospital das Clínicas</h1>
      </div>
      <nav>
        <Link to="/">Início</Link>
        <Link to="/faq">FAQ</Link>
        <Link to="/contato">Contato</Link>
        <Link to="/equipe">Equipe</Link>
      </nav>
    </header>
  );
}
