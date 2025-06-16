import './App.css'
import Inicio from './Incio';
import Pelicula from './Pelicula';
import { BrowserRouter, Routes, Route, Link} from "react-router-dom";
import React, { useState } from 'react';
import { NavLink as RRNavLink } from 'react-router-dom';
import Pie from './Pie';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

function MenuNabar(props) {

  const [isOpen, setIsOpen] = useState(false);
  
    const toggle = () => setIsOpen(!isOpen);

  return (
    <>
      <div className="body-nav">

        <Navbar className="color-nav" light expand="md">
          <NavbarBrand className='blanco' tag={Link} to="/"><h2>Principal</h2></NavbarBrand>
          <NavbarToggler onClick={toggle} />
            <Collapse isOpen={isOpen} navbar>
            <Nav className="me-auto" navbar>
              <NavItem>
                <NavLink tag={RRNavLink} to="/Oferta" className="nav-link blanco" activeClassName="active"> <h4>Peliculas</h4> </NavLink>

              </NavItem>
            </Nav>
            </Collapse>
      </Navbar>
      </div>
    </>
    
  );
}
function App() {

  return (
    <>
      <div className="all">
        <div>

        <header >
          <div className="centro">
            <h1 className='titulo1'>Cinemateca</h1> 
            <h1 className='titulo2' >BOLIVIANA</h1>
          </div>
        </header>
        <nav>
          <MenuNabar></MenuNabar>
        </nav>
        </div>
        <section>
          <Routes>
            <Route path='/' element={<Inicio></Inicio>} ></Route>
            <Route path='/Oferta' element={<Pelicula></Pelicula>} ></Route>
          </Routes>
        </section>
        <Pie></Pie>
      </div>
    </>
  )
}

export default App
