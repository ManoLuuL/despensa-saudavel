import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: auto;
  background-color: transparent;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.25rem 0.85rem;
`;

export const Content = styled.div`
  padding: 1rem;
  height: auto;
  width: 100%;
  background-color: ${(p) => p.theme.surface.content};
  border-radius: ${(p) => p.theme.borderRadii.md};
  box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;
