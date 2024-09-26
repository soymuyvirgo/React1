import React from 'react';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

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
      <Container fluid> {/* Cambiado a Container fluid para ocupar todo el ancho */}
        <Navbar.Brand href="#home">Pizzería Alexander</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">🍕 Home</Nav.Link>
          </Nav>
          <Nav className="ms-auto d-flex align-items-center"> {/* Usamos ms-auto para empujar hacia la derecha */}
            {token ? (
              <>
                <Nav.Link href="#profile">🔓 Profile</Nav.Link>
                <Button variant="outline-dark" className="ms-2">🔒 Logout</Button>
              </>
            ) : (
              <>
                <Button variant="outline-dark" className="ms-2">🔐 Login</Button>
                <Button variant="outline-dark" className="ms-2">🔐 Register</Button>
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
