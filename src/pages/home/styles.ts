import styled from "styled-components";

export const ContainerGlobalHome = styled.div`
  height: 100vh;
  background-color: black;
`;

export const Overlay = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  text-align: left;
  max-width: 52vw;
`;

export const TitlePage = styled.h1`
  font-size: 6rem;
  color: white;
  margin: 0;
  padding: 0;
  display: flex;
`;

export const Description = styled.span`
  text-align: justify;
  font-size: 1.5rem;
`;

export const ContainerImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContainerHome = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
  padding: 30px;
`;

export const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  button {
    margin: 0 1rem;
    width: 250px;
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
`;
