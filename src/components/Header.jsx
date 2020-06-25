import React, { useState } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  
} from 'reactstrap'
import Link from 'react-router-dom';


const Example = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarBrand classname= ''href="/">MASAKNDIRI</NavbarBrand>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/">HOME</NavLink>
            </NavItem>
            <NavItem>          
              <NavLink href="/raditra">OUR CHEF</NavLink>
            </NavItem>
            <NavItem>          
              <NavLink href="/raditra">ORDERS</NavLink>
            </NavItem>
          </Nav>

          <Nav className="ml-auto" navbar>
          <NavItem>
            <NavLink href="">
              Register
            </NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="">
              Login
            </NavLink>
          </NavItem>
        </Nav>
          
      </Navbar>
    </div>
  );
}

export default Example;
