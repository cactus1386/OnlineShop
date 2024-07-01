// src/App.js

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import Cart from './components/Cart';
import Login from './components/Login';

import RPP from './components/RecentlyPurchasedPrdcts';
import ShoppingNavbar from './components/Nav';
import Register from './components/Register';
import Sidebar from './components/SideBarM';


function App() {
  return (
    <Router>

// <div className="App">
// <ShoppingNavbar />
// </div>

// <div className="App">
// <Sidebar />
// <div className="content p-4" style={{ paddingTop: '120px', padding: '100px' }}>
//   <h1>خوش آمدید دنبال چه هستید</h1>
//   <p>به جدید ترین تخفیف ها و جشنواره های ما سر بزنید</p>
//  
// </div>
// </div>
      
      <div className="main-content">
        <Routes>
          <Route path='/product' element={<ProductList />} />
          <Route path='/login' element={<Login />} />
          <Route path='/register' element={<Register />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='/rpp' element={<RPP />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;