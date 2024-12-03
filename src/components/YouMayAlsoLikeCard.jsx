import React from "react";
import { useCartContext } from "../contexts/CartContext";
import { HiOutlinePlusSm, HiOutlineStar } from "react-icons/hi";

export default function YouMayAlsoLikeCard({ detail }) {
  const { handleAddToCart } = useCartContext();

  return (
    <div className="mt-2">
      <div className="flex space-x-4">
        <div className="w-40 bg-white p-2 rounded-lg shadow-md border">
          <img
            src={detail.image || "./img/burger.png"}
            alt="Chicken Burger"
            className="w-full h-32 object-cover rounded-md"
          />
          <p className="text-sm mt-2">{detail.name}</p>
          <div className="flex flex-row items-center font-bold py-2">
            <HiOutlineStar className="size-4  text-purple-600 mr-1 " />
            <p className="text-gray-600 text-xs">4.3</p>
          </div>
          <div className="flex items-center justify-between">
            <p className="text-blue-600 font-bold">TK {detail.offerPrice}</p>
            <button
              className=""
              onClick={() =>
                handleAddToCart({
                  ...detail,
                  quantity: 1,
                  addons: [],
                  addonValue: 0,
                })
              }
            >
              <HiOutlinePlusSm className="size-8 text-blue-700 " />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
