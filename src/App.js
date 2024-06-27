import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import ProductList from './components/ProductList';
import ProductInfo from './components/Products';
import Cart from './components/Cart';
import Login from './components/Login';
import Header from './components/header';
import Filter from './components/filter';
import Slider from './components/Slider';
import Info from './components/PersonalInfo';
import RPP from './components/RecentlyPurchasedPrdcts';
import MiniSlider from './components/MinilSlider';
import Nav from './components/Nav';
import MenuButton from './components/NanMenue';
import ShoppingCartPage from './components/KharidSabad';
import ShoppingNavbar from './components/Nav';
function App() {
  const menuItems = ['Item 1', 'Item 2', 'Item 3'];
  return (
    
    <><Router>
    <div className="App">
      <ShoppingNavbar />
      <div style={{ paddingTop: '120px', padding: '100px' }}>
      
        <h1>Welcome to ShopMate</h1>
        <p>Your favorite place to shop online for all your needs.</p>
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

    </Router></>
  );
}

export default App;
