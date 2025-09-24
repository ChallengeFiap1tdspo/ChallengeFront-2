import React, { useState } from "react";
// import "..global.css";
// import { Link } from "react-router-dom";

const faqsHTML = [
  {
    pergunta: <>1. Qual é o objetivo principal do projeto?</>,
    resposta: (
      <p>
        Nosso projeto tem como objetivo desenvolver um site para facilitar o acesso,
        especialmente pensado para pessoas idosas ou com pouca familiaridade com
        tecnologia. Queremos democratizar o acesso à saúde digital.
      </p>
    ),
  },
  {
    pergunta: <>2. A plataforma será gratuita?</>,
    resposta: (
      <p>
        Sim. Nosso projeto foi desenvolvido para facilitar o acesso à saúde digital,
        oferecendo uma versão totalmente gratuita.
      </p>
    ),
  },
  {
    pergunta: <>3. É seguro usar meus dados no aplicativo?</>,
    resposta: (
      <p>
        Sim, utilizamos criptografia avançada e seguimos todas as normas de proteção de
        dados.
      </p>
    ),
  },
  {
    pergunta: <>4. Quais são os requisitos técnicos para usar a plataforma?</>,
    resposta: (
      <p>
        Nenhum, nosso site foi pensado para atender todos os públicos, de celulares a
        computadores.
      </p>
    ),
  },
  {
    pergunta: <>5. Quando a plataforma estará disponível ao público?</>,
    resposta: (
      <p>
        Estamos na fase final de desenvolvimento e testes. Previsão de lançamento para
        o final de 2025.
      </p>
    ),
  },
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const handleClick = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <main className="flex-grow">
        <section className="faq-container mx-auto px-4 sm:px-6 lg:px-8 py-8 flex flex-col max-w-4xl">
          {/* Título */}
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-blue-700 mb-8 text-center">
            Perguntas Frequentes
          </h2>

          {faqsHTML.map((faq, index) => (
            <div
              key={index}
              className="faq-item bg-blue-100 rounded-lg shadow-md overflow-hidden"
              style={{
                marginBottom: '5%', // espaçamento de 5% entre cada pergunta
              }}
            >
              <button
                className="faq-question w-full flex justify-between items-center px-5 py-4 font-bold transition-colors focus:outline-none"
                onClick={() => handleClick(index)}
                style={{
                  background: 'linear-gradient(135deg, #005b96 0%, #005b96 100%)',
                  color: 'white',
                  fontSize: '130%', // pergunta 30% maior
                }}
              >
                <span className="text-white">{faq.pergunta}</span>
                <span className="ml-2 text-2xl sm:text-3xl text-white">
                  {openIndex === index ? "➖" : "➕"}
                </span>
              </button>

              <div
                className="faq-answer overflow-hidden transition-all duration-300 ease-in-out mt-2"
                style={{
                  maxHeight: openIndex === index ? "500px" : "0px",
                  padding: openIndex === index ? "20px" : "0px",
                  backgroundColor: '#f0f9ff',
                  color: '#1e40af',
                }}
              >
                {faq.resposta}
              </div>
            </div>
          ))}

          <div className="contact-promo p-6 bg-gradient-to-r from-blue-50 to-indigo-100 rounded-lg text-center mt-4 shadow-md">
            <h3 className="text-blue-900 text-lg font-semibold mb-2">
              Não encontrou sua dúvida?
            </h3>
            <p className="mb-4 text-blue-800">
              Entre em contato conosco e teremos prazer em ajudar!
            </p>
            <a
              href="contato.html"
              className="contact-link inline-block px-6 py-3 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg"
              style={{
                background: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
                color: 'white',
                fontWeight: '600',
                textDecoration: 'none',
                border: '2px solid #1d4ed8',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #00a1e0 0%, #00a1e0 100%)';
                e.currentTarget.style.transform = 'scale(1.05)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background =
                  'linear-gradient(135deg, #00a1e0 0%, #00a1e0 100%)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              Fale Conosco
            </a>
          </div>
        </section>
      </main>
    </div>
  );
};

export default FAQ;
