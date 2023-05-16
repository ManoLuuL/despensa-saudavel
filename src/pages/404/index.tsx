import { Container, Text404 } from "./styles";

const ErrorPage = () => {
  return (
    <Container>
      <Text404>
        404
        <p className="linkText">Pagina não encontrada</p>
      </Text404>
    </Container>
  );
};

export default ErrorPage;
