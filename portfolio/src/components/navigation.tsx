import React from "react";
import styled from "styled-components";

const Navigation = () => {
  // 변경된 컴포넌트 이름
  return (
    <NavWrapper>
      <NavList>
        <NavItem isHome>
          <NavLink href="/">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/about">Experience</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/myskill">My Skills</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/myproject">Projects</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="/contact">Contact</NavLink>
        </NavItem>
      </NavList>
    </NavWrapper>
  );
};

export default Navigation;

const NavWrapper = styled.nav`
  background-color: #222222;
  height: 100vh;
  width: 150px;
  position: fixed;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1001;
`;
const NavList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 100%;
`;
const NavItem = styled.li<{ isHome?: boolean }>`
  width: 100%;
  margin-top: ${({ isHome }) => (isHome ? "25%" : "5%")};
  position: ${({ isHome }) => (isHome ? "absolute" : "static")};
  top: ${({ isHome }) => (isHome ? "1rem" : "auto")};
`;

const NavLink = styled.a`
  display: block;
  padding: 1rem 2rem;
  color: white;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }
`;
