import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../assets/css/Nav.css';
import '../font/font.css';
import CWin from './headers/CollapseWin';

const ShoppingNavbar = () => {
	const [expanded, setExpanded] = useState(false);

	const handleToggle = () => setExpanded(!expanded);
	const closeNav = () => setExpanded(false);

	return (
		<nav className={`shopping-navbar fontv ${expanded ? 'expanded' : ''}`} dir="rtl">
			<div className="navbar-container">
				<div className="navbar-logo">
					<img
						src="https://www.svgrepo.com/show/217771/shopping-logo.svg"
						alt="Logo"
						className="logo-image"
					/>
					<span className="brand-name">فروشگاه</span>
				</div>
				<div className={`navbar-links ${expanded ? 'expanded' : ''}`}>
					<a href="home" onClick={closeNav}>خانه</a>
					<div className="dropdown">
						<button className="btnn">محصولات</button>
						<div className="dropdown-content">
							<a href="#electronics" onClick={closeNav}>الکترونیک</a>
							<a href="#clothing" onClick={closeNav}>لباس</a>
							<a href="#home-appliances" onClick={closeNav}>لوازم خانگی</a>
							<a href="#sale" onClick={closeNav}>تخفیف ها</a>
						</div>
					</div>
					<a href="login" onClick={closeNav}>وارد شوید</a>
					<a href="#contact" className="icon-link" onClick={closeNav}>
						<i className="icon"></i>تماس با ما
					</a>
				</div>
				<div className="navbar-search">
					<button>جستجو</button>
					<input type="text" placeholder="دنبال چه می گردید؟..." />
				</div>
				<button className="navbar-toggler" onClick={handleToggle}>
					{expanded ? '✖' : '☰'}
				</button>
				<CWin />
			</div>
		</nav>
	);
};

export default ShoppingNavbar;
