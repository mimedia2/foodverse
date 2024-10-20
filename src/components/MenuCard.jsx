import React, { useState } from "react";
import toast from "react-hot-toast";

export default function MenuCard({ detail }) {
  const [showModal, setShowModal] = useState(false);
  const [quantity, setQuantity] = useState(1);
  const price = detail?.offerPrice;

  const handleCardClick = () => {
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  // increase quantity
  function handleIncreaseQuantity() {
    setQuantity((prev) => prev + 1);
  }

  // decreaase quantity
  function handleDecreaseQuantity() {
    if (quantity === 1) {
      return false;
    }
    setQuantity((prev) => prev - 1);
  }

  // handle add to cart
  function handleAddToCart() {
    const data = detail;

    console.log(data);
    toast.success("add to cart successful.");
    setShowModal(false);
  }

  return (
    <>
      <div
        className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition cursor-pointer"
        onClick={handleCardClick}
      >
        <img
          src={detail?.image || "/img/burger.png"}
          alt={detail?.name}
          className="w-full h-32 sm:h-48 object-cover rounded-md"
        />
        <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
          {detail?.name}
        </h3>
        {/*  <div>
          <span className="px-2 py-1 rounded-sm bg-orange-100 my-2 inline-block">
            {detail?.category}
          </span>
        </div> */}
        <div className="flex items-center justify-between px-2">
          {/*  <p className="line-through text-orange-500 text-sm">
            TK {detail?.basedPrice}
          </p> */}
          <p className="text-gray-600 my-1 ">TK {detail?.offerPrice}</p>
          <div className="flex items-center justify-between">
            <img src="/img/biriyani.png" alt="itemsphoto" />
            <p className="px-2 font-bold text-gray-700">4.3</p>
          </div>
        </div>
        {/* <div>
          <button className="px-3 py-1 bg-blue-600 text-white mx-auto block my-4 rounded-sm">
            add to cart
          </button>
        </div> */}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-end z-50">
          <div
            className={`bg-white p-4  rounded-t-lg w-full transform transition-transform ${
              showModal ? "translate-y-0" : "translate-y-full"
            }`}
            style={{ transition: "transform 0.3s ease-in-out" }}
          >
            <button
              className="absolute top-2 right-2 text-red-600 "
              onClick={handleCloseModal}
            >
              &times;
            </button>
            <div className="flex flex-grow items-center">
              <img
                src={detail?.image || "/img/burger.png"}
                alt={detail?.name}
                className="w-36 h-32 object-cover rounded-md"
              />
              <div className="flex flex-col items-start">
                <h3 className="text-xl font-semibold text-gray-800 pl-2">
                  {detail?.name}
                </h3>
                <p className="text-blue-400 font-semibold pl-2">
                  Restaurant Name{detail?.restaurant}
                </p>
              </div>
            </div>
            <p className="font-semibold mt-2">Description</p>
            <p className="text-gray-500 mt-1">{detail?.description}</p>
            <div className="flex items-center justify-between mt-4 border-t-2 pt-2 ">
              <p className="font-semibold mt-2">Total Amount:</p>
              <p className="text-gray-800 font-bold">
                TK {(price * quantity).toFixed()}
              </p>
            </div>

            <div className="mt-4 flex flex-row items-center">
              <div className="flex flex-row items-center pr-2">
                <span className="w-8 h-8 text-gray-700 ">
                  <button
                    className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold"
                    onClick={handleDecreaseQuantity}
                  >
                    -
                  </button>
                </span>
                <span className="font-bold text-xl px-2">{quantity}</span>
                <span>
                  <button
                    className="w-8 h-8 rounded-full bg-blue-500 text-white font-bold"
                    onClick={handleIncreaseQuantity}
                  >
                    +
                  </button>
                </span>
              </div>
              <button
                className="bg-blue-500 w-full text-white py-2 rounded-lg"
                onClick={handleAddToCart}
              >
                Add To Cart
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
