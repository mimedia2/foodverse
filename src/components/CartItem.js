// src/components/CartItem.js
import React from 'react';

function CartItem({ item }) {
  return (
    <div className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md">
      <img src="./img/burgerR.png" alt={item.name} className="w-16 h-16 rounded-md object-cover" />
      <div className="ml-3 flex-grow">
        <h3 className="font-semibold text-gray-800">{item.name}</h3>
        <p className="text-blue-600">{item.category}</p>
        <p className="text-gray-800">৳ {item.price}</p>
      </div>
      <div className="flex items-center space-x-2">
        <button className="bg-gray-200 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center">-</button>
        <span>{item.quantity}</span>
        <button className="bg-gray-200 text-gray-800 rounded-full w-8 h-8 flex items-center justify-center">+</button>
      </div>
    </div>
  );
}

export default CartItem;

