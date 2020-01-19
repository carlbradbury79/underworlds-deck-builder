import React from 'react';
import styled from 'styled-components';

const NavBar = styled.nav`
  background: grey;
  color: white;

  ul {
    display: flex;
  }
  ul li {
    list-style: none;
    margin-right: 10px;
  }
`;

const Nav = () => {
  return (
    <NavBar>
      <ul>
        <li>Objectives</li>
        <li>Ploys</li>
        <li>Upgrades</li>
        <li>View Deck</li>
        <li>Filter Cards</li>
      </ul>
    </NavBar>
  );
};

export default Nav;
