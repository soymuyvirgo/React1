import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link de react-router-dom

const CustomNavbar = () => {
  const total = 25000;
  const token = false;

  const formattedTotal = total.toLocaleString('es-CL', {
    style: 'currency',
    currency: 'CLP',
    minimumFractionDigits: 0
  });

  return (
    <Navbar expand="lg" className="bg-body-tertiary" style={{ width: "100%" }}>
      <Container fluid> 
        <Navbar.Brand as={Link} to="/">Pizzería Alexander</Navbar.Brand> 
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/">🍕 Home</Nav.Link> 
          </Nav>
          <Nav className="ms-auto d-flex align-items-center"> 
            {token ? (
              <>
                <Nav.Link as={Link} to="/profile">🔓 Profile</Nav.Link> 
                <Button variant="outline-dark" className="ms-2">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-dark" className="ms-2" as={Link} to="/login">🔐 Login</Button> {/* Para la página de login */}
                <Button variant="outline-dark" className="ms-2" as={Link} to="/register">🔐 Register</Button> {/* Redirige a la página de registro */}
              </>
            )}
            <Button variant="outline-dark" className="ms-3">
              🛒 Total: {formattedTotal}
            </Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default CustomNavbar;
