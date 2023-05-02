import styled from "styled-components";

export const ContainerImc = styled.div`
  .p-card-header {
    text-align: center;
    font-size: 1.5rem;
    font-weight: bold;
  }

  .p-card-body {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }

  .p-field {
    margin-bottom: 1rem;
  }

  @media (min-width: 576px) {
    .p-card-body {
      height: 300px;
    }
  }
`;
