import React from 'react';
import './App.css';
import { Container, Navbar, NavbarBrand } from "reactstrap";
import PlantopiaLogo from "./assets/img/plantopia.png";
import RestaurantsList from "./features/restaurants/RestaurantsList";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Header />
      <RestaurantsList />
      <Footer />
    </div>
  );
}

export default App;
