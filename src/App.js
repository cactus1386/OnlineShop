// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import './font/font.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';
import Slider from './components/Slider';
import RPP from './components/RecentlyPurchasedPrdcts';
import ShoppingNavbar from './components/Nav';
<<<<<<< HEAD
=======
import Sidebar from './components/SideBarM';

function App() {
  const menuItems = ['Item 1', 'Item 2', 'Item 3'];
  return (
    
    <><Router>
    <div className="App">
      <ShoppingNavbar />
    </div>

    <div className="App">
      <Sidebar />
      <div className="content p-4" style={{ paddingTop: '120px', padding: '100px' }}>
        <h1>خوش آمدید دنبال چه هستید</h1>
        <p>به جدید ترین تخفیف ها و جشنواره های ما سر بزنید</p>
        {/* Add more content here */}
      </div>
    </div>

      <Routes>
        <Route path='home' element={<ProductList />} />
        <Route path='/detail' element={<ProductInfo />} />
        <Route path='login' element={<Login />} />
        <Route path='/header' element={<Header />} />
        <Route path='/filter' element={<Filter />} />
        <Route path='/slider' element={<Slider />} />
        <Route path='cart' element={<Cart />} />
        <Route path='/info' element={<Info />} />
        <Route path='/rpp' element={<RPP />} />
        
      </Routes>
>>>>>>> fbe2cd20684a0990893fbf5c358bdeeed81ff102

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
