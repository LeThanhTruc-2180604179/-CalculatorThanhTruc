import React from 'react';
import { NavContainer, Logo, NavLinks, NavLink } from './Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons'; // Import icon calculator

const Header = () => {
  return (
    <NavContainer>
      <Logo>
      <FontAwesomeIcon icon={faCalculator} />

      </Logo>
      <NavLinks>
        <NavLink className="active">Calculator</NavLink>
        <NavLink>About</NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Header;
