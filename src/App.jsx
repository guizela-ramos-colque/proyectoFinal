import './App.css'
import Inicio from './Incio';
import Pelicula from './Pelicula';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';

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
  NavbarText,
} from 'reactstrap';

function MenuNabar(props) {

  const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <Navbar color="light" light expand="md">
  <NavbarBrand tag={Link} to="/">Principal</NavbarBrand>
  <NavbarToggler onClick={toggle} />
  <Collapse isOpen={isOpen} navbar>
    <Nav className="me-auto" navbar>
      <NavItem>
        <NavLink
  tag={RRNavLink}
  to="/Oferta"
  className="nav-link"
  activeClassName="active"
>
  Peliculas
</NavLink>

      </NavItem>
    </Nav>
  </Collapse>
</Navbar>
    </>
    
  );
}
function App() {

  return (
    <>
      <header>
        <h1>CINEMATECA BOLIVIANA</h1>
      </header>
      <nav>
        <MenuNabar></MenuNabar>
      </nav>
      <section>
        <Routes>
          <Route path='/' element={<Inicio></Inicio>} ></Route>
          <Route path='/Oferta' element={<Pelicula></Pelicula>} ></Route>
        </Routes>
      </section>
    </>
  )
}

export default App
