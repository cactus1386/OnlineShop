import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation, Navigate } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/ProfileCart';
import Login from './components/Login';
import RPP from './components/RecentlyPurchasedPrdcts';
import ShoppingNavbar from './components/Nav';
import SignIn from './components/Login';
import Profile from './components/UserInfo';
import HCart from './components/HCart';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import PI from './components/ProductsInfo';
import Test from './components/MultiItemSlider';
import Footer from './components/Footer';

const AppContent = ({ isLoggedIn, handleLogout }) => {
  const location = useLocation();
  const hideFooterPaths = ['/login', '/register'];
  const showFooter = !hideFooterPaths.includes(location.pathname);

  return (
    <>
      <ShoppingNavbar isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/login' element={!isLoggedIn ? <Login /> : <Navigate to="/" />} />
          <Route path='/register' element={!isLoggedIn ? <SignIn /> : <Navigate to="/" />} />
          <Route path='/cart' element={<HCart />} />
          <Route path='/rpp' element={<RPP />} />
          <Route path='/user' element={isLoggedIn ? <Profile /> : <Navigate to="/login" />} />
          <Route path='/pi' element={<PI />} />
          <Route path='/test' element={<Test />} />
        </Routes>
      </div>
      {showFooter && <Footer/>}
    </>
  );
};

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setIsLoggedIn(false);
  };

  return (
    <Router>
      <AppContent isLoggedIn={isLoggedIn} handleLogout={handleLogout} />
    </Router>
  );
}

export default App;
