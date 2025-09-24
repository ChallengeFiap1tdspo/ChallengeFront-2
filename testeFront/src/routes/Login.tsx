import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../global.css";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [cpf, setCpf] = useState("");
  const [idade, setIdade] = useState<number | "">("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!cpf || idade === "") {
      alert("Preencha todos os campos!");
      return;
    }
    navigate("/ajuda"); 
  };

  return (
    <div className="container">
      <h1>Login de Paciente</h1>

      <form id="paciente-form" onSubmit={handleSubmit}>
        <fieldset>
          <legend>Dados de Login</legend>

          <div className="row">
            <div className="form-item">
              <label htmlFor="idCpf" className="required">
                CPF:
              </label>
              <input
                type="text"
                id="idCpf"
                name="cpf"
                maxLength={14}
                placeholder="000.000.000-00"
                value={cpf}
                onChange={(e) => setCpf(e.target.value)}
                required
              />
            </div>

            <div className="form-item">
              <label htmlFor="idIdade" className="required">
                Idade:
              </label>
              <input
                type="number"
                id="idIdade"
                name="idade"
                min={0}
                placeholder="Digite sua idade"
                value={idade}
                onChange={(e) => setIdade(Number(e.target.value))}
                required
              />
            </div>
          </div>

          <button type="submit" id="btnEnviar">
            ENTRAR
          </button>
        </fieldset>
      </form>
    </div>
  );
};

export default Login;
