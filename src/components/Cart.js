import React from 'react';
import { Link } from 'react-router-dom';

function Cart() {
  return (
    <div>
      {/* Header */}
      <header className="bg-gradient-to-r from-purple-200 to-blue-200 p-4 w-full fixed">
        <div className="flex flex-col items-center mb-2 mt-2 justify-between">
          <div className="w-full text-center">
            <span className="font-bold text-blue-700">My Cart</span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex items-center justify-center min-h-screen bg-white">
        <div className="text-center">
          {/* Cart Icon */}
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

          {/* Text Content */}
          <h2 className="text-xl font-semibold text-gray-800 mb-2">Are you hungry?</h2>
          <p className="text-gray-600">Your cart is empty.</p>
          <p className="text-gray-600 mb-6">Please add items to the menu.</p>

          {/* Browse Button */}
          <Link to="/menus" className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300 hover:bg-gradient-to-r hover:from-purple-700 hover:to-blue-700">
            Browse
          </Link>
        </div>
      </main>

    </div>
  );
}

export default Cart;
