import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../../global.css";

const Cadastro: React.FC = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    nome: "",
    cpf: "",
    dataNasc: "",
    email: "",
    telefone: "",
    endereco: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.nome || !formData.cpf || !formData.email) {
      alert("Preencha os campos obrigatórios!");
      return;
    }

  
    navigate("/PrimeiroContato");
  };

  return (
    <div className="container">
      <h1>Cadastro de Paciente</h1>

      <form id="cadastroForm" onSubmit={handleSubmit}>
        <div className="form-item">
          <label htmlFor="nome" className="required">
            Nome Completo
          </label>
          <input
            type="text"
            id="nome"
            name="nome"
            value={formData.nome}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="cpf" className="required">
            CPF
          </label>
          <input
            type="text"
            id="cpf"
            name="cpf"
            maxLength={14}
            placeholder="Somente números"
            value={formData.cpf}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="dataNasc" className="required">
            Data de Nascimento
          </label>
          <input
            type="date"
            id="dataNasc"
            name="dataNasc"
            value={formData.dataNasc}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="email" className="required">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="telefone" className="required">
            Telefone
          </label>
          <input
            type="tel"
            id="telefone"
            name="telefone"
            placeholder="Somente números"
            value={formData.telefone}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-item">
          <label htmlFor="endereco">Endereço</label>
          <input
            type="text"
            id="endereco"
            name="endereco"
            value={formData.endereco}
            onChange={handleChange}
          />
        </div>

        <button type="submit">Cadastrar e Continuar</button>
      </form>
    </div>
  );
};

export default Cadastro;
