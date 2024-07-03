import React, { useState, useEffect } from 'react';
import { Modal, FormControl, FormGroup, FormLabel, Button, ModalFooter, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Nav.css';
import '../font/font.css';

const ShoppingNavbar = () => {
	const [expanded, setExpanded] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(() => {
		const savedTheme = localStorage.getItem('darkMode');
		return savedTheme === 'true';
	});

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

	const [show, setShow] = useState(false);
	const handleClose = () => setShow(false);
	const handleShow = () => setShow(true);

	const inputStyle = { height: '50px' };
	const buttonn = {
		height: '37px',
		width: '100%',
		marginBottom: '15px',
		borderRadius: '1px'
	};

	return (
		<nav className="shopping-navbar fontv d-flex" dir="rtl">
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
						<a href="product">محصولات</a>
						<div className="dropdown-content">
							<a href="#electronics">الکترونیک</a>
							<a href="#clothing">لباس</a>
							<a href="#home-appliances">لوازم خانگی</a>
							<a href="#sale">تخفیف ها</a>
						</div>
					</div>
					<a href="about" className="icon-link">درباره ما</a>
				</div>
				<div className="navbar-search">
					<button>جستجو</button>
					<input type="text" placeholder="دنبال چه می گردید؟..." />
				</div>
				<div className="navbar-icons">
					<a href="login" className="icon-link" onClick={handleShow}>
						<i className="icon">👤</i>حساب کاربری
					</a>
					<a href="cart" className="icon-link"><i className="icon">🛒</i> سبد خرید (0)</a>
				</div>
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
