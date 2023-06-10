import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from "reactstrap";
import PlantopiaLogo from "./assets/img/plantopia.png";


function App() {
  return (
    <div className="App">
      <Navbar dark color="primary" sticky="top" expand="md">
        <Container>
          <NavbarBrand href="/">
            <img src={PlantopiaLogo} alt="Plantopia Logo" />
          </NavbarBrand>
        </Container>
      </Navbar>
      Plantopia
    </div>
  );
}

export default App;
