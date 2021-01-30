import React from "react";
import { Nav } from "react-bootstrap";
import "./style.css";
import { NavLink } from "react-router-dom";

function Navigation() {

    return (
      <div>
        <Nav className="justify-content-center">
          <Nav.Link as={NavLink} className="navBar" to="/home">Home</Nav.Link>
          <Nav.Link as={NavLink} className="navBar" to="/contact">Contact Me</Nav.Link>
          <Nav.Link as={NavLink} className="navBar" to="/portfolio">Portfolio</Nav.Link>          
        </Nav>
      </div>
    );
}

export default Navigation;
