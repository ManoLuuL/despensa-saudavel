import { Divider } from "primereact/divider";
import { Container } from "../../components/atmos/container";
import Navbar from "../../components/organism/Navbar";

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
            <p>
              Em resumo, o projeto tem como objetivo fornecer uma plataforma
              online que simplifique a busca por receitas personalizadas, unindo
              tecnologia, nutrição e praticidade. O uso de um banco de dados,
              algoritmo de satisfação, vínculo com a área de nutrição e cálculo
              do IMC tornam esse projeto abrangente e relevante para promover
              uma alimentação equilibrada e saudável.
            </p>
            <Divider />
            <h3 className="flex justify-content-center">Desenvolvedores:</h3>
            <p>Luis Ricardo C. Couto</p>
            <p>Vitor Molina Correia do Nascimento</p>
            <Divider />
            <h3 className="flex justify-content-center">
              Tecnologias Utilizadas
            </h3>
            <p>
              Este website será desenvolvido utilizando as seguintes
              tecnologias: Front-end: HTML, CSS, TypeScript e React
            </p>
            <p>Back-end: Python, PSQL</p>

            <Divider />
            <h3 className="flex justify-content-center">
              Fontes nutricionais:
            </h3>
            <p>https://vitat.com.br/dieta-detox/</p>
          </>
        }
      />
    </>
  );
};
