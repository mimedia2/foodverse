import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  const [items, setItems] = useState([
    { id: 1, name: 'Basmati Kacchi', image: '/img/kacchi.jpg', category: 'Non-Veg', price: 360, quantity: 4 },
    { id: 2, name: 'Chicken Burger', image: '/img/burger.jpg', category: 'Non-Veg', price: 150, quantity: 1 },
  ]);

  const handleIncrease = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecrease = (id) => {
    setItems((prevItems) =>
      prevItems.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
    );
  };

  const totalPrice = items.reduce((total, item) => total + item.price * item.quantity, 0);

  return (
    <div className="p-4">
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-200 to-blue-200 p-4 w-full fixed top-0 left-0">
        <div className="flex flex-col items-center mb-2 mt-2 justify-between">
          <div className="w-full text-center">
            <span className="font-bold text-blue-700">My Cart</span>
          </div>
        </div>
      </header>

      {/* Cart Items */}
      <div className="p-4 mt-20 space-y-4 ">
        {items.map((item) => (
          <div key={item.id} className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md">
            <img src="./img/burger.png " alt={item.name} className="w-16 h-16 rounded-md object-cover" />
            <div className="ml-3 flex-grow">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-gray-800">TK {item.price}</p>
            </div>
            <div className="flex items-center space-x-2">
              <button className=" text-gray-500 rounded-full w-8 h-8 flex items-center justify-center" onClick={() => handleDecrease(item.id)}>
                <svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
                </svg>

              </button>
              <span>{item.quantity}</span>
              <button className=" text-blue-500 rounded-full w-8 h-8 flex items-center justify-center" onClick={() => handleIncrease(item.id)}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
                   <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z" clip-rule="evenodd" />
                </svg>
              </button>
            </div>
          </div>
        ))}

        <div className='flex flex-row items-center text-blue-600 font-bold text-xl ' >
            <svg className="w-10 h-10 pr-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
            </svg>
            <p >Add more items</p>
        </div>

        {/* You May Also Like */}
        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-4">You May Also Like!</h2>
          <div className="flex space-x-4">
            <div className="w-40 bg-white p-2 rounded-lg shadow-md">
              <img src="./img/burger.png" alt="Chicken Burger" className="w-full h-32 object-cover rounded-md" />
              <p className="text-sm mt-2">Chicken Burger</p>
              <div className='flex flex-row font-bold py-2' >
                <svg className='w-4 h-4 text-purple-600 mr-1' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                   <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                </svg>

              <p className="text-gray-600 text-xs">4.3</p>
              </div>
              <div className="flex items-center justify-between">
              <p className="text-blue-600 font-bold">TK 150.00</p>
              <svg className='w-8 h-8  text-blue-700 rounded-full p-1  ' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor">
                 <path stroke-linecap="round" stroke-linejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
              </svg>
              </div>
            </div>
          </div>
          </div>
        </div>

        {/* Order Summary */}
         
        <div className="p-4 bg-white rounded-lg  mb-28">
          <div className="flex justify-between py-2">
            <p className="text-gray-700">Item Price</p>
            <p>TK {totalPrice}</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-gray-700">Discount</p>
            <p>TK 0.00</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-gray-700">Addons</p>
            <p>TK 0.00</p>
        </div>
        </div>
        <div className="fixed w-full bottom-0 left-0 bg-white z-50 px-8 pb-8">
          <div className="flex justify-between py-2 font-bold text-xl border-t-2 text-blue-600">
            <p>Subtotal</p>
            <p>TK {totalPrice}</p>
          </div>
          <button className="bg-blue-500 text-white w-full py-3 rounded-lg mt-2">
            Proceed to Checkout
          </button>
        </div>

      {/* Empty Cart Message */}
      <main className="flex items-center justify-center min-h-screen bg-white hidden">
        <div className="text-center">
          <div className="flex justify-center mb-4">
            <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-full">
              <svg
                className="h-16 w-16 text-blue-600"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25l-2.394-8.978M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
                />
              </svg>
            </div>
          </div>

          <h2 className="text-xl font-semibold text-gray-800 mb-2">Are you hungry?</h2>
          <p className="text-gray-600">Your cart is empty.</p>
          <p className="text-gray-600 mb-6">Please add items to the menu.</p>

          <Link to="/menus" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
            Browse
          </Link>
        </div>
      </main>
    </div>
  );
}

export default Cart;
