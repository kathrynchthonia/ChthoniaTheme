// Cart/index.js
import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/CartActions';

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.cart.items);

  const handleAddToCart = product => {
    dispatch(addToCart(product));
  };

  const handleRemoveFromCart = productId => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Cart</h2>
      {cartItems.map(item => (
        <div key={item.id} className="flex items-center justify-between p-2 bg-gray-100 mb-2">
          <div>
            <h3 className="text-lg font-semibold">{item.name}</h3>
            <p>{item.price}</p>
          </div>
          <button onClick={() => handleRemoveFromCart(item.id)} className="text-red-500">Remove</button>
        </div>
      ))}
    </div>
  );
};

export default Cart;