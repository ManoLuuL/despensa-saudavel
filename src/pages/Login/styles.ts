import styled from "styled-components";
import { GetColorVariant } from "../../styles";

export const LeftContent = styled.div`
  padding: 3.5rem 3.5rem 3.5rem 3rem;

  max-width: 760px;
  width: 100%;
  margin-top: 10rem;
`;

export const Container = styled.div`
  height: 50rem;
  border-radius: 12px;

  display: flex !important;
  justify-content: space-between;
  background-color: black;

  .main-content {
    width: 55rem;
    @media only screen and (max-width: ${(p) => p.theme.breakPoints.sm}) {
      width: 95vw;
    }
  }
`;

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;

  display: flex;
  align-items: center;
  justify-content: center;

  background: linear-gradient(
    to top right,
    ${GetColorVariant("primary", "600")},
    ${GetColorVariant("primary", "900")}
  );
`;

export const PasswordDiv = styled.div`
  .p-inputtext.p-component.p-password-input {
    width: 100%;
  }
`;

export const ButtonsLogin = styled.div`
  display: flex;
  justify-content: space-between;
`;
