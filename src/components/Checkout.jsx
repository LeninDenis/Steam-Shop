import React from 'react';
import '../styles/Checkout.css';

const Checkout = ({ cartItems }) => {
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="checkout">
      <h2>Оформление заказа</h2>
      <div className="cart-items">
        {cartItems.map((item) => (
          <div key={item.id} className="cart-item">
            <h3>{item.title}</h3>
            <p>Цена: {item.price} тг</p>
            <p>Количество: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="total">
        <h3>Общая стоимость: {calculateTotal()} тг</h3>
      </div>
      <form>
        <label htmlFor="name">Имя:</label>
        <input type="text" id="name" name="name" required />
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" required />
        <label htmlFor="address">Адрес:</label>
        <textarea id="address" name="address" required></textarea>
        <button type="submit">Оформить заказ</button>
      </form>
    </div>
  );
};

export default Checkout;
