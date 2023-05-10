import styled from "styled-components";
import { GetColorVariant } from "../../styles";

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 40rem;

  .linkText {
    font-size: 1.6rem;
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  }
`;

export const Text404 = styled.p`
  font-size: 10rem;
  margin-right: 20px;
  -webkit-text-stroke: 1px white;
  font-family: fantasy;
  background: linear-gradient(
    to top right,
    ${GetColorVariant("primary", "500")},
    ${GetColorVariant("primary", "900")}
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`;
