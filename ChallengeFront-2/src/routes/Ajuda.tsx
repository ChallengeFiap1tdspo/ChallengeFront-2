import React from 'react';
import CameraIcon from '../../img/fotoCamera.png';

const etapas = [
  { numero: '1', titulo: 'Primeiro acesso', descricao: 'Acesse o portal do Paciente HC pelo site ou aplicativo.' },
  { numero: '2', titulo: 'Cadastrar Senha', descricao: 'Clique na opção "Cadastrar Senha".' },
  { numero: '3', titulo: 'Localizar Paciente', descricao: 'Digite o número do CPF do paciente e clique na opção "Localizar Paciente".' },
  { numero: '4', titulo: 'Confirmar Dados', descricao: 'Informe dados para contato, confirme as informações pessoais e registre uma senha de acesso.' },
  { numero: '5', titulo: 'Acessar Portal', descricao: 'Clique novamente em "Cadastrar Senha" e "Acessar Agora".' },
  { numero: '6', titulo: 'Login', descricao: 'Digite o CPF e a senha cadastrada.' },
  { numero: '7', titulo: 'Teleconsultas', descricao: 'Acesse o Portal, selecione a opção "Teleconsultas" e aceite o termo de autorização se estiver de acordo.' },
  { numero: '8', titulo: 'Iniciar Atendimento', descricao: 'Selecione o teleatendimento desejado. Habilite câmera, microfone e aguarde o profissional entrar na sala.' }
];

const tutoriais = [
  {
    titulo: 'Primeiro Acesso ao Portal',
    descricao: 'Assista a um tutorial simples mostrando cada passo do login.',
    link: 'https://drive.google.com/file/d/19GFDe1AETkPKZTzSg7ld1IKye0t4CS6-/view?usp=sharing'
  },
  {
    titulo: 'Vídeo Explicativo',
    descricao: 'Tutorial completo mostrando como acessar o portal e iniciar a consulta.',
    link: 'https://drive.google.com/file/d/1_0PZ1fi3FKTEP9mPQ2QC2JBMCdBslFLE/view?usp=sharing'
  }
];

const MainComponent: React.FC = () => (
  <main className="container mx-auto px-4 lg:px-6 my-10 lg:my-16">
    <section className="text-center py-10 px-4 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold text-blue-800 mb-4">
        Portal de Telemedicina do Hospital das Clínicas
      </h1>
      <p className="text-base md:text-lg text-gray-900 max-w-2xl mx-auto">
        Guia completo para acesso aos serviços de Teleconsulta e recursos digitais
      </p>
    </section>

    <section className="bg-white rounded-lg shadow-lg p-6 md:p-10 mb-10">
      <h2 className="relative text-center text-2xl md:text-3xl lg:text-4xl text-blue-800 mb-10 pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-20 after:h-[3px] after:bg-blue-500">
        Como Funciona
      </h2>

      <div className="space-y-6">
        {etapas.map((etapa) => (
          <div
            key={etapa.numero}
            className="flex flex-col sm:flex-row items-start sm:items-center gap-4 bg-white rounded-lg p-6 md:p-8 shadow-lg transition-all duration-300 ease-in-out border-l-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl"
          >
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-800 text-white flex items-center justify-center font-bold text-lg">
              {etapa.numero}
            </div>
            <div className="flex-grow">
              <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">{etapa.titulo}</h3>
              <p className="text-base text-gray-700">{etapa.descricao}</p>
            </div>
          </div>
        ))}
      </div>
    </section>

    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
      {tutoriais.map((item) => (
        <div
          key={item.titulo}
          className="bg-white rounded-lg p-6 md:p-8 shadow-lg flex flex-col items-center text-center transition-all duration-300 ease-in-out border-t-4 border-blue-500 hover:scale-[1.01] hover:shadow-xl"
        >
          <div className="w-12 h-12 bg-blue-50 rounded-full flex items-center justify-center mb-4 md:mb-6">
            <img src={CameraIcon} alt="Ícone de vídeo" className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-lg md:text-xl font-semibold text-blue-800 mb-2">{item.titulo}</h3>
            <p className="text-base text-gray-700 mb-4">{item.descricao}</p>
            <a
              href={item.link}
              className="inline-block bg-blue-800 text-white font-bold py-3 px-6 rounded-md transition-all duration-300 hover:bg-blue-900 hover:scale-[1.05]"
              target="_blank"
              rel="noopener noreferrer"
            >
              Assistir
            </a>
          </div>
        </div>
      ))}
    </section>
  </main>
);

export default MainComponent;
