import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from "reactstrap";
import PlantopiaLogo from "./assets/img/plantopia.png";
import RestaurantsList from "./features/restaurants/RestaurantsList";

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
      <RestaurantsList />
    </div>
  );
}

export default App;
