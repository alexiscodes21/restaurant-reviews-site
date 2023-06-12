import React from 'react';
import './App.css';
// import { Container, Navbar, NavbarBrand } from "reactstrap";
// import PlantopiaLogo from "./assets/img/plantopia.png";
// import RestaurantsList from "./features/restaurants/RestaurantsList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RestaurantsDirectoryPage from './pages/RestaurantsDirectoryPage';

function App() {
  return (
    <div className="App">
      <Header />
      <RestaurantsDirectoryPage />
      <Footer />
    </div>
  );
}

export default App;
