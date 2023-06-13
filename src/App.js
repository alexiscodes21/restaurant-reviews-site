import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import ContactPage from "./pages/ContactPage";
import AboutPage from "./pages/AboutPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import RestaurantsDirectoryPage from "./pages/RestaurantsDirectoryPage";
import RestaurantDetailPage from "./pages/RestaurantDetailPage";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="directory" element={<RestaurantsDirectoryPage />} />
        <Route path="directory/:restaurantId" element={<RestaurantDetailPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
