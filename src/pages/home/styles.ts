import styled from "styled-components";
import fundo from "../../assets/livro.jpg";

export const Container = styled.div`
  height: 100vh;
`;

export const BackgroundMain = styled.div`
  height: 100%;
  background-image: url("${fundo}");
  background-size: cover;
  background-position: center;
`;

export const CardsContainer = styled.div`
  height: 90%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
