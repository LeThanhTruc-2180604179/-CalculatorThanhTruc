import styled from 'styled-components';

export const NavContainer = styled.nav`
  display: flex;
  align-items: center;
  padding: 1rem 2rem;
  border-bottom: 1px solid #eaeaea;
`;

export const Logo = styled.div`
  font-weight: bold;
  font-size: 1.5rem;
`;

export const NavLinks = styled.div`
  display: flex;
  margin-left: 2rem;
`;

export const NavLink = styled.div`
  padding: 0.5rem 1rem;
  cursor: pointer;
  position: relative;
  
  a {
    text-decoration: none;
    color: inherit;
  }
  
  &.active {
    color: #ff3333;
    &::after {
      content: '';
      position: absolute;
      bottom: -1px;
      left: 0;
      width: 100%;
      height: 2px;
      background-color: #ff3333;
    }
  }
`;