import React, { useState, useEffect } from 'react';
import { Navbar, Nav, Form, FormControl, Button, NavDropdown, Container } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Nav.css';
import '../font/font.css';
import CWin from './headers/CollapseWin';

const ShoppingNavbar = () => {
	const [expanded, setExpanded] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);

	useEffect(() => {
		if (isDarkMode) {
			document.body.classList.add('dark-mode');
		} else {
			document.body.classList.remove('dark-mode');
		}
	}, [isDarkMode]);

	const handleToggle = () => setExpanded(!expanded);
	const closeNav = () => setExpanded(false);
	const handleModeSwitch = () => setIsDarkMode(!isDarkMode);

	return (
		<nav className="shopping-navbar fontv d-flex" dir='rtl'>
			<div className="navbar-container pb-5">
				<div className="navbar-logo">
					<img
						src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
						alt="Logo"
						className="logo-image"
					/>
					<span className="brand-name ml-7 dark mr-3">فروشگاه</span>
				</div>
				<div className="navbar-links">
					<a href="/">خانه</a>

					<div className="dropdown">
						<a className="btnn" href='product'>محصولات</a>
						<div className="dropdown-content">
							<a href="#electronics">الکترونیک</a>
							<a href="#clothing">لباس</a>
							<a href="#home-appliances">لوازم خانگی</a>
							<a href="#sale">تخفیف ها</a>
						</div>
					</div>
					<a href="contact" className="icon-link">تماس با ما</a>
				</div>
				<div className="navbar-search">
					<button>جستجو</button>
					<input type="text" placeholder="دنبال چه می گردید؟..." />
				</div>
				<CWin />
				<div className="mode-switch-container">
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
			</div>
		</nav>
	);
};

export default ShoppingNavbar;
