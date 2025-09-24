import React from 'react';
import CameraIcon from '../img/fotoCamera.png';

const MainComponent: React.FC = () => {
  return (
    <main className="container mx-auto px-4 lg:px-6 my-10 lg:my-16">
      <section className="text-center py-10 px-4 md:px-0">
        <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
          Portal de Telemedicina do Hospital das Clínicas
        </h1>
        <p className="text-base md:text-lg text-gray-90 max-w-2xl mx-auto">
          Guia completo para acesso aos serviços de Teleconsulta e recursos digitais
        </p>
      </section>

      <section className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-10">
        <h2 className="relative text-center text-2xl md:text-3xl lg:text-4xl text-blue-800 mb-10 pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-blue-500">
          Como Funciona
        </h2>
        <div className="space-y-6">
 
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-lg p-6 md:p-8 shadow-lg transition-all duration-300 ease-in-out border-l-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">
              1
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">Primeiro acesso</h3>
              <p className="text-base text-gray-700">Acesse o portal do Paciente HC pelo site ou aplicativo.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-lg p-6 md:p-8 shadow-lg transition-all duration-300 ease-in-out border-l-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">
              2
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">Cadastrar Senha</h3>
              <p className="text-base text-gray-700">Clique na opção "Cadastrar Senha".</p>
            </div>
          </div>
       
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-lg p-6 md:p-8 shadow-lg transition-all duration-300 ease-in-out border-l-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">
              3
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">Localizar Paciente</h3>
              <p className="text-base text-gray-700">Digite o número do CPF do paciente e clique na opção "Localizar Paciente".</p>
            </div>
          </div>
  
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-lg p-6 md:p-8 shadow-lg transition-all duration-300 ease-in-out border-l-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">
              4
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">Confirmar Dados</h3>
              <p className="text-base text-gray-700">Informe dados para contato, confirme as informações pessoais e registre uma senha de acesso.</p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-lg p-6 md:p-8 shadow-lg transition-all duration-300 ease-in-out border-l-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">
              5
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">Acessar Portal</h3>
              <p className="text-base text-gray-700">Clique novamente em "Cadastrar Senha" e "Acessar Agora".</p>
            </div>
          </div>
         
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-lg p-6 md:p-8 shadow-lg transition-all duration-300 ease-in-out border-l-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">
              6
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">Login</h3>
              <p className="text-base text-gray-700">Digite o CPF e a senha cadastrada.</p>
            </div>
          </div>
        
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-lg p-6 md:p-8 shadow-lg transition-all duration-300 ease-in-out border-l-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">
              7
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">Teleconsultas</h3>
              <p className="text-base text-gray-700">Acesse o Portal, selecione a opção "Teleconsultas" e aceite o termo de autorização se estiver de acordo.</p>
            </div>
          </div>
 
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-lg p-6 md:p-8 shadow-lg transition-all duration-300 ease-in-out border-l-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">
              8
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">Iniciar Atendimento</h3>
              <p className="text-base text-gray-700">Selecione o teleatendimento desejado. Habilite câmera, microfone e aguarde o profissional entrar na sala.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">

        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg flex flex-col items-center text-center transition-all duration-300 ease-in-out border-t-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl">
     
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
            <img src={CameraIcon} alt="Ícone de vídeo" className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">Primeiro Acesso ao Portal</h3>
            <p className="text-base text-gray-700 mb-4">Assista a um tutorial simples mostrando cada passo do login.</p>
            <a
              href="https://drive.google.com/file/d/19GFDe1AETkPKZTzSg7ld1IKye0t4CS6-/view?usp=sharing"
              className="inline-block bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-blue-900 hover:scale-[1.05]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Assistir
            </a>
          </div>
        </div>
     
        <div className="bg-white rounded-lg p-6 md:p-8 shadow-lg flex flex-col items-center text-center transition-all duration-300 ease-in-out border-t-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl">
         
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
            <img src={CameraIcon} alt="Ícone de vídeo" className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">Vídeo Explicativo</h3>
            <p className="text-base text-gray-700 mb-4">Tutorial completo mostrando como acessar o portal e iniciar a consulta.</p>
            <a
              href="https://drive.google.com/file/d/1_0PZ1fi3FKTEP9mPQ2QC2JBMCdBslFLE/view?usp=sharing"
              className="inline-block bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-blue-900 hover:scale-[1.05]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Assistir
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainComponent;