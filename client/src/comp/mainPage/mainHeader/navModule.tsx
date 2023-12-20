// NavModule.js

import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import styled from "@emotion/styled";

function NavModule() {
  return (
    <NavContainer bg="light" expand="lg">
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="ml-auto">
          <Link href="/">Download</Link>
          <Link href="/">Nitro</Link>
          <Link href="/">Discover</Link>
          <Link href="/">Support</Link>
          <Link href="/">Blog</Link>
          <Link href="/">Careers</Link>
        </Nav>
      </Navbar.Collapse>
    </NavContainer>
  );
}

export default NavModule;

const NavContainer = styled(Navbar)`
  width: 1900px;
  display: flex;
  justify-content: space-around;
`;

const Link = styled(Nav.Link)`
  margin-right: 20px;
`;
