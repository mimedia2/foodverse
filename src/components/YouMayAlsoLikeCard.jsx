import React from "react";
import { useCartContext } from "../contexts/CartContext";

export default function YouMayAlsoLikeCard({ detail }) {
  const { handleAddToCart } = useCartContext();

  return (
    <div className="mt-8">
      <div className="flex space-x-4">
        <div className="w-40 bg-white p-2 rounded-lg shadow-md">
          <img
            src="./img/burger.png"
            alt="Chicken Burger"
            className="w-full h-32 object-cover rounded-md"
          />
          <p className="text-sm mt-2">Chicken Burger</p>
          <div className="flex flex-row font-bold py-2">
            <svg
              className="w-4 h-4 text-purple-600 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>

            <p className="text-gray-600 text-xs">4.3</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-blue-600 font-bold">TK 150.00</p>
            <button
              className=""
              onClick={() => handleAddToCart({ ...detail, quantity: 1 })}
            >
              <svg
                className="w-8 h-8  text-blue-700 rounded-full p-1  "
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 4.5v15m7.5-7.5h-15"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
