import styled from "styled-components";

export const LeftContent = styled.div`
  padding: 3.5rem 3.5rem 3.5rem 3rem;

  max-width: 760px;
  width: 100%;
`;

export const Container = styled.div`
  height: 40rem;
  border-radius: 12px;

  display: flex;
  justify-content: space-between;
  background-color: white;

  .main-content {
    width: 55rem;

    @media only screen {
      width: 95vw;
    }
  }
`;
