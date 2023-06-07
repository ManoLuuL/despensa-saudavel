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
            <p>Desenvolvedores:</p>
            <p>Luis Ricardo C. Couto</p>
            <p>Vitor Molina Correia do Nascimento</p>
          </>
        }
      />
    </>
  );
};
