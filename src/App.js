// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Slider from './components/Slider';
import RPP from './components/RecentlyPurchasedPrdcts';
import ShoppingNavbar from './components/Nav';

function App() {
  return (
    <Router>
      <ShoppingNavbar />
      <div className="main-content">
        <Routes>
          <Route path='/product' element={<ProductList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/slider' element={<Slider />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/rpp' element={<RPP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
