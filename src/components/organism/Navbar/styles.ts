import styled from "styled-components";

export const NavContainer = styled.nav`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    padding: 0 2rem;
    height: 4.5rem;
    border-bottom-left-radius: 2rem;
    border-bottom-right-radius: 2rem;
    background-color: #ffffff;
  }
`;

export const Logo = styled.div`
  font-size: 3rem;
  color: #4b5563;
  margin-bottom: -0.25rem;
`;

export const NavItems = styled.nav`
  display: flex;
  flex-direction: row;
  align-self: end;
  height: 3rem;

  .SelectedNavItem {
    color: #4b5563;
    border-bottom: 2px solid #4b5563;
    background-image: linear-gradient(to bottom, #ffffff, #d1d5db);
  }

  .NavItem {
    width: 5.5rem;
    color: #9ca3af;
    cursor: pointer;
    font-weight: 500;
    font-size: 0.875rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #4b5563;
    }
  }
`;

export const Actions = styled.button`
  background-color: #ffffff;
  color: #1f2937;
  border: 2px solid #1f2937;
  font-size: 0.875rem;
  padding: 0.75rem 1.25rem;
  border-radius: 0.5rem;
  font-weight: 500;
  letter-spacing: 0.025rem;
  line-height: 1;
  cursor: pointer;

  &:hover {
    background-color: #f3f4f6;
  }
`;

export const TabbarContainer = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  padding: 0 8px;
  height: 18px;
  background-color: #ffffff;
  visibility: visible;
  position: fixed;
  bottom: 0;
  width: 100%;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
  font-size: 2rem;

  @media (min-width: 768px) {
    visibility: hidden;
  }

  .TabItem {
    color: #a0aec0;
    cursor: pointer;
    width: 18px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

    &:hover {
      color: #4a5568;
    }
  }

  .TabItemActive {
    background: linear-gradient(to top, #ffffff, #f7fafc);
    border-top: 3px solid #4a5568;
    color: #4a5568;
  }
`;

export const Icon = styled.div`
  margin-bottom: -1px;
`;
