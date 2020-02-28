import React from "react";
import styled from "styled-components";

const NavWrapper = styled.nav`
  min-width: 100%;
  margin: 0 auto;
  height: 65px;
  display: flex;
  flex-direction: column wrap;
  background-color: #955;
`;

const Ulstyled = styled.ul`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row wrap;
  align-items: center;
  justify-content: space-between;
`;

const LiStyled = styled.li`
  color: #fff;
  font-size: 14px;
  margin: 10px
  margin-left: 50px;
  list-style-type: none;
`;
const Link = styled.a`
  text-decoration: none;
  margin: 10px;
  :hover {
    cursor: pointer;
  }
`;
export default function Header() {
  return (
    <NavWrapper>
      <Ulstyled>
        <LiStyled>
          <Link>Welcome to clone React Europe Relay Workshop</Link>
        </LiStyled>
        <LiStyled>
          <Link>Logout</Link>
        </LiStyled>
      </Ulstyled>
    </NavWrapper>
  );
}
