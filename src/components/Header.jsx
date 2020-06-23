import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">reactstrap</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem><NavItem>
              <NavLink href="/yogikrisnawan">YOGIKRISNAWAN</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/kunto">KUNTO</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/triv">Triv</NavLink>
            </NavItem>
            <NavItem>          
              <NavLink href="/raditra">RADITRA</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/fadil">Fadil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/ghalib">GHALIB</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/fadil">Fadil</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/dhimasf">DhimasF</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/kharis">kharis</NavLink>
            </NavItem>
          </Nav>
      </Navbar>
    </div>
  );
}

export default Example;
