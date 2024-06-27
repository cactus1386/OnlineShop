import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'react-bootstrap';
import '../assets/css/sabad.css'
import '../font/font.css'

const CartItem = ({ item, onRemoveItem }) => {
  return (
    <tr>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>
        <img src={item.image} alt={item.name} style={{ width: '50px', height: '50px' }} />
      </td>
      <td>${item.price}</td>
      <td>${(item.quantity * item.price).toFixed(2)}</td>
      <td>
        <button className="btn btn-danger btn-sm" onClick={() => onRemoveItem(item.id)}>
          Remove
        </button>
      </td>
    </tr>
  );
};

const ShoppingCartPage = () => {
  const [cartItems, setCartItems] = useState([
    { id: 1, name: 'Product 1', quantity: 2, price: 10, image: 'path/to/image1.jpg' },
    { id: 2, name: 'Product 2', quantity: 1, price: 25, image: 'path/to/image2.jpg' },
    { id: 3, name: 'Product 3', quantity: 3, price: 5, image: 'path/to/image3.jpg' },
  ]);

  const handleRemoveItem = (itemId) => {
    const updatedCart = cartItems.filter((item) => item.id !== itemId);
    setCartItems(updatedCart);
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.quantity * item.price, 0).toFixed(2);
  };

  return (
    <div className="d-flex justify-content-center fontv">
      <Card className='gray-card mx-auto boxx'>
        <Card.Body>
          <div className="container mt-9">
            <h2>Shopping Cart</h2>
            <table className="table">
              <thead>
                <tr>
                  <th>Product</th>
                  <th>Quantity</th>
                  <th>Image</th> {/* ستون تصویر اضافه شد */}
                  <th>Price</th>
                  <th>Total</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {cartItems.map((item) => (
                  <CartItem key={item.id} item={item} onRemoveItem={handleRemoveItem} />
                ))}
              </tbody>
            </table>
            <div className="row mt-4">
              <div className="col-md-6">
                <h4>Total: ${calculateTotal()}</h4>
              </div>
              <div className="col-md-6 text-right">
                <button className="btn btn-primary">Proceed to Checkout</button>
              </div>
            </div>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
};

export default ShoppingCartPage;
