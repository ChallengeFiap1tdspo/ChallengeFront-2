import "./../../global.css";

const PrimeiroContato = () => {
  return (
    <main className="container">
      <section className="content">
        <h1>Primeiro Contato com o Hospital das Clínicas</h1>
        <p>Verificamos que você ainda não possuía um cadastro conosco. Seja muito bem-vindo ao Hospital das Clínicas!</p>
        <p>Para começar sua jornada de cuidado conosco, vá até a nossa área de contato</p>
        
        <div>
          <a href="/contato" className="btn">Fale conosco</a>
          <a href="/" className="btn">Retornar à Página Inicial</a>
        </div>
        
        <div style={{ marginTop: "40px" }}>
          <h2>Etapas para se tornar nosso paciente:</h2>
          <ol style={{ textAlign: "left", display: "inline-block", margin: "20px auto" }}>
            <li>Compareça ao hospital com seus documentos pessoais</li>
            <li>Finalize seu cadastro presencialmente na recepção</li>
          </ol>
        </div>
      </section>
    
    </main>
  );
};

export default PrimeiroContato;
