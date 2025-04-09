import React from 'react';
import { NavContainer, Logo, NavLinks, NavLink } from './Header.styles';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalculator } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
  
  return (
    <NavContainer>
      <Logo>
        <FontAwesomeIcon icon={faCalculator} />
      </Logo>
      <NavLinks>
        <NavLink className={location.pathname === '/' ? 'active' : ''}>
          <Link to="/">Calculator</Link>
        </NavLink>
        <NavLink className={location.pathname === '/about' ? 'active' : ''}>
          <Link to="/about">About</Link>
        </NavLink>
      </NavLinks>
    </NavContainer>
  );
};

export default Header;