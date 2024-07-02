// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductSlider from './components/ProfileCart';
import Login from './components/Login';
import RPP from './components/RecentlyPurchasedPrdcts';
import ShoppingNavbar from './components/Nav';
import SignIn from './components/SignIn';
import Profile from './components/UserInfo';
import HCart from './components/HCart';
import MainSlider from './components/MainSlider';
import HomeProducts from './components/HProducts';
import AboutUs from './components/AboutUs';

function App() {
  return (
    <Router>
      <ShoppingNavbar />
      <MainSlider />
      <div className="main-content">
        <Routes>
          <Route path='/' element={<HomeProducts />} />
          <Route path='/product' element={<ProductList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignIn />} />
          <Route path='/cart' element={<HCart />} />
          <Route path='/rpp' element={<RPP />} />
          <Route path='/user' element={<Profile />} />
          <Route path='/about' element={<AboutUs />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
