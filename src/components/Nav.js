import React, { useState, useEffect, useContext } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';


const ShoppingNavbar = () => {
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

    const handleModeSwitch = () => setIsDarkMode(!isDarkMode);

    return (
        <Navbar expand="lg" className="shopping-navbar fontv" dir="rtl">
            <Navbar.Brand href="#home">
                <img
                    src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
                    width="30"
                    height="30"
                    className="d-inline-block align-top"
                    alt="Logo"
                />
                <span className="brand-name ml-2 dark">فروشگاه</span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">خانه</Nav.Link>
                    <NavDropdown title="محصولات" id="basic-nav-dropdown">
                        <NavDropdown.Item href="#electronics">الکترونیک</NavDropdown.Item>
                        <NavDropdown.Item href="#clothing">لباس</NavDropdown.Item>
                        <NavDropdown.Item href="#home-appliances">لوازم خانگی</NavDropdown.Item>
                        <NavDropdown.Item href="#sale">تخفیف ها</NavDropdown.Item>
                    </NavDropdown>
                    <Nav.Link href="about" className="icon-link">درباره ما</Nav.Link>
                </Nav>
                <Form inline className="navbar-search">
                    <FormControl type="text" placeholder="دنبال چه می گردید؟..." className="mr-sm-2" />
                    <Button variant="outline-success">جستجو</Button>
                </Form>
                <Nav className="ml-auto navbar-icons">
                    <Nav.Link href="cart" className="icon-link">
                        <i className="icon">🛒</i> سبد خرید (0)
                    </Nav.Link>
                    {isLoggedIn ? (
                        <NavDropdown title={<><i className="icon">👤</i> پروفایل</>} id="basic-nav-dropdown">
                            <NavDropdown.Item href="user">مشخصات</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item onClick={logout} className='btn btn-outline-danger w-100'>خروج</NavDropdown.Item>
                        </NavDropdown>
                    ) : (
                        <Nav.Link href="login" className="icon-link">
                            <i className="icon">👤</i> حساب کاربری
                        </Nav.Link>
                    )}
                </Nav>
                <div className="mode-switch-container">
                    <span>{isDarkMode ? '🌙' : '☀️'}</span>
                    <Form.Check
                        type="switch"
                        id="custom-switch"
                        label=""
                        checked={isDarkMode}
                        onChange={handleModeSwitch}
                    />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
};

export default ShoppingNavbar;
