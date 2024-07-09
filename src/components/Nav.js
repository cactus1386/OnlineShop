import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Nav.css'; // Keep this for dark mode specific styles
import { AuthContext } from '../context/AuthContext';
import { Navbar, Nav, Container, Form, FormControl, Button, NavDropdown } from 'react-bootstrap';

const ShoppingNavbar = () => {
  const [expanded, setExpanded] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('darkMode');
    return savedTheme === 'true';
  });

  const { isLoggedIn, logout } = useContext(AuthContext);

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
    localStorage.setItem('darkMode', isDarkMode);
  }, [isDarkMode]);

  const handleToggle = () => setExpanded(!expanded);
  const closeNav = () => setExpanded(false);
  const handleModeSwitch = () => setIsDarkMode(!isDarkMode);

  return (
    <Navbar
      expand="lg"
      expanded={expanded}
      className="shopping-navbar"
      dir="rtl"
      onToggle={handleToggle}
    >
      <Container className="navbar-container">
        <Navbar.Brand href="/" className="d-flex align-items-center">
          <img
            src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
            alt="Logo"
            className="logo-image"
            height="40"
          />
          <span className="brand-name">فروشگاه</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">خانه</Nav.Link>
            <NavDropdown title="محصولات" id="basic-nav-dropdown">
              <NavDropdown.Item href="#electronics">الکترونیک</NavDropdown.Item>
              <NavDropdown.Item href="#clothing">لباس</NavDropdown.Item>
              <NavDropdown.Item href="#home-appliances">لوازم خانگی</NavDropdown.Item>
              <NavDropdown.Item href="#sale">تخفیف ها</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="about">درباره ما</Nav.Link>
          </Nav>
          <Form className="d-flex me-auto">

			<Button variant="outline-success btn-success  text-light">جستجو</Button>
            <FormControl
              type="search"
              placeholder="دنبال چه می گردید؟..."
              className="me-2"
              aria-label="Search"
            />
            
          </Form>
          <Nav>
            <Nav.Link href="cart">
              <i className="icon">🛒</i> سبد خرید (0)
            </Nav.Link>
            {isLoggedIn ? (
              <NavDropdown title={<span><i className="icon">👤</i> پروفایل</span>} id="user-dropdown">
                <NavDropdown.Item href="user">مشخصات</NavDropdown.Item>
                <NavDropdown.Item onClick={logout}>خروج</NavDropdown.Item>
              </NavDropdown>
            ) : (
              <Nav.Link href="login">
                <i className="icon">👤</i> حساب کاربری
              </Nav.Link>
            )}
          </Nav>
          <div className="mode-switch-container ms-3">
            <span>{isDarkMode ? '🌙' : '☀️'}</span>
            <input
              type="checkbox"
              className="mode-switch"
              id="mode-switch"
              checked={isDarkMode}
              onChange={handleModeSwitch}
            />
            <label htmlFor="mode-switch" className="mode-switch-label"></label>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default ShoppingNavbar;
