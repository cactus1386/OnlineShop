// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/ProfileCart';
import Login from './components/Login';
import RPP from './components/RecentlyPurchasedPrdcts';
import ShoppingNavbar from './components/Nav';
import SignIn from './components/SignIn';
import Profile from './components/UserInfo';
import HCart from './components/HCart';
import Home from './components/Home';
import AboutUs from './components/AboutUs';
import Footer from './components/footer';
import PI from './components/ProductsInfo';
import Test from './components/MultiItemSlider';

function App() {
  return (
    <Router>
      <ShoppingNavbar />
      <div className="main-content">
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<AboutUs />} />
          <Route path='/products' element={<ProductList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<SignIn />} />
          <Route path='/cart' element={<HCart />} />
          <Route path='/rpp' element={<RPP />} />
          <Route path='/profile' element={<Profile />} />
          <Route path='/pi' element={<PI />} />
          <Route path='/test' element={<Test />} />
         </Routes>
      </div>
      <Footer />
        <Routes>
          
        </Routes>
    </Router>
  );
}

export default App;
