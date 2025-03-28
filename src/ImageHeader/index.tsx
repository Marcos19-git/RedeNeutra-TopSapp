import icone1 from "../Image/icone_03.png";
import Adicionar22 from "../Image/imageheader.png";

function ImageHeader() {
  return (
    <div className="divcontrol  w-full min-h-[90vh] flex">
      <div className="img22  w-[50%] min-h-[90vh] relative flex  justify-center overflow-hidden">
        <img
          className="img22  "
          src={Adicionar22}
          alt="Imagem da Rede Neutra"
        />
      </div>

      <div className="control1 flex flex-wrap justify-center w-[70%] min-h-[100vh] pt-[100px]  pb-[30px] gap-x-[40px] gap-y-[10px] h-full">
        <h1 className="flex w-full justify-center  items-center  text-[#1b30d2] font-bold text-[2.2em] italic whitespace-nowrap mt-[-40px] ">
          Principais Recursos
        </h1>
        <div className="w-full sm:w-[45%] p-4">
          <div className="flex">
            <img className="pr-[8px] h-[25px]" src={icone1} alt="Ícone" />
            <h1 className="text-[#1b30d2] font-bold italic text-[1.1em]">
              Autonomia para Provedores Parceiros
            </h1>
          </div>
          <h2 className="italic text-gray-800 text-start">
            O provedor parceiro pode gerenciar seus clientes de forma totalmente
            independente do provedor fornecedor da rede neutra, incluindo o
            provisionamento de ONTs.
          </h2>
        </div>

        <div className="w-full sm:w-[45%] p-4">
          <div className="flex">
            <img className="pr-[8px] h-[25px]" src={icone1} alt="Ícone" />
            <h1 className="text-[#1b30d2] font-bold italic text-[1.1em]">
              Monitoramento Avançado
            </h1>
          </div>
          <h2 className="italic text-gray-800 text-start">
            Acesso completo à análise das ONTs, com informações detalhadas como
            nível de sinal, status da conexão com a OLT, entre outros dados
            essenciais.
          </h2>
        </div>

        <div className="w-full sm:w-[45%] p-4">
          <div className="flex">
            <img className="pr-[8px] h-[25px]" src={icone1} alt="Ícone" />
            <h1 className="text-[#1b30d2] font-bold italic text-[1.1em]">
              Controle de Acesso Personalizado
            </h1>
          </div>
          <h2 className="italic text-gray-800 text-start">
            O provedor fornecedor da rede neutra pode definir e gerenciar os
            níveis de acesso dos provedores parceiros no painel de
            gerenciamento, garantindo que cada parceiro visualize apenas as
            informações pertinentes à sua operação.
          </h2>
        </div>

        <div className="w-full sm:w-[45%] p-4">
          <div className="flex">
            <img className="pr-[8px] h-[25px]" src={icone1} alt="Ícone" />
            <h1 className="text-[#1b30d2] font-bold italic text-[1.1em]">
              Segurança e Eficiência Operacional
            </h1>
          </div>
          <h2 className="italic text-gray-800 text-start">
            Os sistemas e equipamentos operam de forma independente e protegida
            contra acessos não autorizados, garantindo estabilidade e
            confiabilidade para todos os envolvidos.
          </h2>
        </div>

        <div className="w-full sm:w-[45%] p-4">
          <div className="flex">
            <img className="pr-[8px] h-[25px]" src={icone1} alt="Ícone" />
            <h1 className="text-[#1b30d2] font-bold italic text-[1.1em]">
              Integração com o TopMaps
            </h1>
          </div>
          <h2 className="italic text-gray-800 text-start">
            Através do painel, os provedores podem gerenciar os serviços e
            projetos do TopMaps, facilitando a alocação de recursos,
            administração de portas e planejamento da rede para uma operação
            mais eficiente.
          </h2>
        </div>

        <div className="w-full sm:w-[45%] p-4">
          <div className="flex">
            <img className="pr-[8px] h-[25px]" src={icone1} alt="Ícone" />
            <h1 className="text-[#1b30d2] font-bold italic text-[1.1em]">
              Gestão de OLTs e Portas
            </h1>
          </div>
          <h2 className="italic text-gray-800 text-start">
            Controle total sobre a acessibilidade e o uso dos recursos,
            assegurando que cada provedor utilize apenas o necessário para sua
            operação.
          </h2>
        </div>

        <div className="w-full sm:w-[45%] p-4">
          <div className="flex">
            <img className="pr-[8px] h-[25px]" src={icone1} alt="Ícone" />
            <h1 className="text-[#1b30d2] font-bold italic text-[1.1em]">
              Precisão na Identificação de Portas Disponíveis
            </h1>
          </div>
          <h2 className="italic text-gray-800 text-start">
            Localize portas livres com rapidez e eficiência, evitando
            desperdícios e melhorando o planejamento da infraestrutura.
          </h2>
        </div>

        <div className="w-full sm:w-[45%] p-4">
          <div className="flex">
            <img className="pr-[8px] h-[25px]" src={icone1} alt="Ícone" />
            <h1 className="text-[#1b30d2] font-bold italic text-[1.1em]">
              Relatórios Detalhados
            </h1>
          </div>
          <h2 className="italic text-gray-800 text-start">
            Geração de relatórios completos sobre o uso da rede, facilitando
            processos de cobrança e gestão de recursos.
          </h2>
        </div>

        <div className="w-full sm:w-[45%] p-4">
          <div className="flex">
            <img className="pr-[8px] h-[25px]" src={icone1} alt="Ícone" />
            <h1 className="text-[#1b30d2] font-bold italic text-[1.1em]">
              Gestão Inteligente da Rede
            </h1>
          </div>
          <h2 className="italic text-gray-800 text-start">
            Possibilidade de segmentar provedores parceiros por área e ocupação
            da rede, garantindo um uso otimizado da infraestrutura.
          </h2>
        </div>

        <div className="w-full sm:w-[45%] p-4">
          <div className="flex">
            <img className="pr-[8px] h-[25px]" src={icone1} alt="Ícone" />
            <h1 className="text-[#1b30d2] font-bold italic text-[1.1em]">
              Suporte Rede Neutra
            </h1>
          </div>
          <h2 className="italic text-gray-800 text-start">
            Os provedores parceiros podem abrir chamados diretamente pelo
            sistema para solicitar atendimento do provedor fornecedor.
          </h2>
        </div>
      </div>
    </div>
  );
}

export default ImageHeader;
