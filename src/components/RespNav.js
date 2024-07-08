import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const MobileNavbar = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <Navbar expanded={expanded} expand="lg" bg="light" variant="light" className="mb-3">
      <Navbar.Brand href="#">
        <img
          src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="Logo"
        />
        فروشگاه
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : 'expanded')} />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">خانه</Nav.Link>
          <NavDropdown title="محصولات" id="basic-nav-dropdown">
            <NavDropdown.Item href="#electronics">الکترونیک</NavDropdown.Item>
            <NavDropdown.Item href="#clothing">لباس</NavDropdown.Item>
            <NavDropdown.Item href="#home-appliances">لوازم خانگی</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#sale">تخفیف ها</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#about">درباره ما</Nav.Link>
        </Nav>
        <Form className="d-flex">
          <FormControl type="search" placeholder="دنبال چه می گردید؟..." className="me-2" aria-label="Search" />
          <Button variant="outline-success">جستجو</Button>
        </Form>
        <Nav>
          <Nav.Link href="#cart"><i className="bi bi-cart"></i> سبد خرید (0)</Nav.Link>
          <Nav.Link href="#account"><i className="bi bi-person"></i> حساب کاربری</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default MobileNavbar;




