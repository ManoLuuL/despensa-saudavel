import { Container } from "../../components/atmos/container";
import { Divider } from "primereact/divider";
import { Navbar } from "../../components/organism";

export const AboutPage = () => {
  return (
    <>
      <Navbar />
      <Container
        content={
          <>
            <h3 className="flex justify-content-center">Sobre o projeto</h3>
            <Divider />
            <p>
              Este projeto de Desenvolvimento de Website de busca de receitas
              por ingredientes é resultado de um trabalho de conclusão de curso
              (TCC) que busca unir tecnologia, nutrição e praticidade. A
              proposta é desenvolver um website que permita aos usuários
              encontrarem receitas personalizadas com base nos ingredientes
              disponíveis em sua despensa. Para isso, será implementado um banco
              de dados para armazenar as receitas, um algoritmo de satisfação
              para oferecer sugestões relevantes, um vínculo com a área de
              nutrição para fornecer informações nutricionais e um cálculo do
              Índice de Massa Corporal (IMC) para auxiliar na promoção de uma
              alimentação saudável.
            </p>
            <Divider />

            <h3 className="flex justify-content-center">Desenvolvedores:</h3>
            <p>
              Luis Ricardo Coelho Couto - Front-End e estruturação do Back-End e
              banco de dados
            </p>
            <p>
              Vitor Molina Correia do Nascimento - Back-End, UX, gerenciamento
              do banco de dados
            </p>

            <Divider />
            <h2 className="flex justify-content-center">
              Tecnologias Utilizadas
            </h2>
            <h3>Front-end</h3>
            <p>
              O front-end do site é desenvolvido com a tecnologia React, que é
              uma biblioteca JavaScript de código aberto, e TypeScript, uma
              linguagem de programação que adiciona tipagem estática ao
              JavaScript. A estrutura do site é construída com componentes
              reutilizáveis e mantidos de forma organizada, com a ajuda das
              bibliotecas "styled-components" para estilização avançada e
              "primeicons" para ícones atraentes. A biblioteca "primereact" é
              usada para fornecer componentes visuais ricos, enquanto "formik" é
              usado para a criação e gerenciamento de formulários. O
              "react-router-dom" é utilizado para a navegação entre diferentes
              páginas do site, seguindo as melhores práticas do React Router v6.
              A visualização de dados é enriquecida com gráficos interativos,
              onde a biblioteca "chart.js" é integrada através do pacote
              "react-chartjs-2", permitindo a exibição de informações de maneira
              clara e visualmente atraente.
            </p>
            <p>
              Além disso, a biblioteca "@radix-ui/react-tooltip" é incorporada
              para fornecer dicas contextuais úteis e melhorar a usabilidade. A
              integração com o servidor é realizada usando a biblioteca "axios"
              para facilitar as solicitações HTTP e o "react-query" para
              gerenciamento de estado e cache de dados. A exibição de
              notificações ao usuário é tratada pela biblioteca
              "react-toastify", proporcionando uma experiência de usuário mais
              informativa e amigável.
            </p>
            <h3>Back-end</h3>
            <p>
              O servidor é construído usando o framework Flask, que é um
              framework web leve para Python. Ele fornece rotas, controladores e
              a lógica de negócios necessária para suportar as funcionalidades
              do site. O banco de dados PostgreSQL é utilizado para armazenar
              dados de maneira confiável e escalável.
            </p>
            <p>
              A comunicação entre o front-end e o back-end é realizada através
              de solicitações HTTP, onde o front-end envia requisições para as
              rotas correspondentes no back-end. Isso permite a interação do
              usuário com o site, como enviar formulários, recuperar dados
              dinâmicos e executar operações que afetam o estado do aplicativo.
            </p>

            <Divider />
            <h2 className="flex justify-content-center">
              Arquitetura Micro Front-End
            </h2>
            <p>
              O projeto segue a arquitetura de Micro Front-End utilizando a
              biblioteca "single-spa" e "single-spa-react". Isso permite a
              construção de múltiplos aplicativos React independentes, que podem
              ser integrados de forma harmoniosa em uma única página, oferecendo
              uma experiência de usuário coesa, mesmo que diferentes partes do
              site sejam desenvolvidas e mantidas separadamente.
            </p>
            <Divider />
            <h3 className="flex justify-content-center">
              Fontes nutricionais das dietas:
            </h3>
            <p>https://vitat.com.br/dieta-detox/</p>
            <p>
              https://nutritotal.com.br/publico-geral/material/cardapio-para-emagrecer-barato/
            </p>
            <p>https://www.tuasaude.com/dieta-para-emagrecer/</p>
            <p>https://farmanaturallis.com.br/tipos-de-dieta-para-emagrecer/</p>
          </>
        }
      />
    </>
  );
};
