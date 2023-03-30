import styled from "styled-components";

export const ContainerHome = styled.div`
  .home-page {
    height: 100vh;
    background-color: black;
  }

  .containerHome {
    display: flex;
    justify-content: space-between;
    height: 100%;
    padding: 30px;
  }
  .overlay {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    text-align: left;
    max-width: 52vw;
  }

  .h1_homepage {
    font-size: 6rem;
    color: white;
    margin: 0;
    padding: 0;
    display: flex;
  }

  .description {
    text-align: justify;
    font-size: 1.5rem;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  button {
    margin: 0 1rem;
    padding: 0.75rem 1.5rem;
    font-size: 1.25rem;
    border-radius: 0.5rem;
    border: 3px solid #8000ff;
    background-color: black;
    color: white;
    cursor: pointer;
    font-weight: bold;
    :hover {
      background-color: #8000ff;
    }
  }

  .rightImg {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
