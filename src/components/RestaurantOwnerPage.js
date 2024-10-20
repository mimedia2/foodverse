import React from 'react';
import { Link } from 'react-router-dom';
const RestaurantOwnerPage = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-purple-200 to-blue-200">
      {/* Header Section */}
      <header className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="img/burger.png"
            alt="Boom Boom Burger"
            className="w-20 h-16 rounded-md object-cover shadow-md"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-800">Boom Boom Burger</h1>
            <p className="text-xs">Lakshmipur, Bangladesh</p>
          </div>
        </div>
      </header>

      {/* Delivery Info Section */}
      <section className="bg-white mt-4 p-4 rounded-lg shadow-lg">
        <div className="flex items-center space-x-2">
          <svg
            className="h-6 w-6 text-purple-600"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
            />
          </svg>
          <span className="text-lg font-semibold text-gray-800">4.7</span>
          <span className="text-sm text-gray-600">5000+ ratings</span>
        </div>
      </section>

      {/* Dashboard Section */}
      <section className="bg-white mt-4 p-4 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6 text-purple-600"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 10.5V6a3.75 3.75 0 1 0-7.5 0v4.5m11.356-1.993 1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 0 1-1.12-1.243l1.264-12A1.125 1.125 0 0 1 5.513 7.5h12.974c.576 0 1.059.435 1.119 1.007ZM8.625 10.5a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm7.5 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
            />
          </svg>
          <span className="font-bold text-slate-800">Order</span>
        </div>
        <div>
          <Link to='#' className="font-bold text-blue-600 p-2">Dashboard</Link>
        </div>
      </section>

      {/* Items Section */}
      <section className="mt-4">
        <div className="bg-white my-4 p-4 rounded-lg shadow-lg flex items-center justify-between">
          <h2 className="text-xl font-bold text-gray-800">All items</h2>
          <span className="font-bold text-blue-600 px-2">Add item</span>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
          {/* Item 1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
            <img
              src="img/burger.png"
              alt="Smokey BBQ Chicken Cheese Burger"
              className="w-full h-32 sm:h-48 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
              Smokey BBQ Chicken Cheese Burger
            </h3>
            <p className="text-gray-600 mx-2 my-1">Tk 240</p>
          </div>
          {/* Item 2 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
            <img
              src="img/burger.png"
              alt="Chicken Sausage Delight Burger"
              className="w-full h-32 sm:h-48 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
              Chicken Sausage Delight Burger
            </h3>
            <p className="text-gray-600 mx-2 my-1">Tk 269</p>
          </div>
          {/* Item 3 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
            <img
              src="img/burger.png"
              alt="Double Decker Chicken Burger"
              className="w-full h-32 sm:h-48 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
              Double Decker Chicken Burger
            </h3>
            <p className="text-gray-600 mx-2 my-1">Tk 329</p>
          </div>
          {/* Item 4 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
            <img
              src="img/burger.png"
              alt="Chicken Meatbox"
              className="w-full h-32 sm:h-48 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
              Chicken Meatbox
            </h3>
            <p className="text-gray-600 mx-2 my-1">Tk 268</p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantOwnerPage;