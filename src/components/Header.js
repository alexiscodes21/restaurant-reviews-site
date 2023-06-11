import { Navbar, NavbarBrand } from "reactstrap";
import Plantopia from "../assets/img/plantopia.png";

const Header = () => {
  return (
    <Navbar dark color="primary" sticky="top" expand="md">
      <NavbarBrand href="/">
        <img src={Plantopia} alt="Plantopia Logo" />
      </NavbarBrand>
    </Navbar>
  );
};

export default Header;
