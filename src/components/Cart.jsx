import React from 'react';
import '../styles/Cart.css';

const Cart = ({ cartItems }) => {
  // Функция для подсчета общей суммы покупок в корзине
  const calculateTotal = () => {
    return cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
  };

  return (
    <div className="cart">
      <h2>Корзина</h2>
      <ul>
        {cartItems.map(game => (
          <li key={game.id}>
            <span>{game.title}</span>
            <span>Количество: {game.quantity}</span>
            <span>Цена: {game.price} тг</span>
          </li>
        ))}
      </ul>
      <p>Общая сумма: {calculateTotal()} тг</p>
      <button>Оформить заказ</button>
    </div>
  );
}

export default Cart;