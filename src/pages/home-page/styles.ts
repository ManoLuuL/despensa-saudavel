import styled from "styled-components";
import img from "../login/assets/image.jpg";

export const ContainerHome = styled.div`
  .home-page {
    background-image: url(${img});
    background-size: cover;
    height: 100vh;
  }

  .overlay {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 52vw;
  }

  h1 {
    font-size: 4rem;
    margin-bottom: 1rem;
    color: #fff;
  }

  p {
    font-size: 1.5rem;
    color: #fff;
    margin-bottom: 2rem;
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
    border-radius: 0.25rem;
    border: none;
    background-color: #fff;
    color: #000;
    cursor: pointer;
  }
`;
