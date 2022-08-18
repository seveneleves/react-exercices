import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import "./CollapsibleNavbar.css";

const CollapsibleNavbar = () => {
  const activeLinkStyle = {
    fontWeight: "bold",
  };

  return (
    <Navbar
      className="px-4"
      collapseOnSelect
      expand="sm"
      bg="light"
      variant="light"
      sticky="top"
    >
      <Navbar.Brand>
        <NavLink to="/">
          <img
            id="navbrand-logo"
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
          />
        </NavLink>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="ms-auto">
          <NavLink
            to="/todo"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            To-Do
          </NavLink>
          <NavLink
            to="/connexion"
            style={({ isActive }) => (isActive ? activeLinkStyle : undefined)}
          >
            Connexion
          </NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default CollapsibleNavbar;
