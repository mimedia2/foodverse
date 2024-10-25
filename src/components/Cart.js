import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import { FaDeleteLeft } from "react-icons/fa6";
import { api_path_url, authToken } from "../secret";
import YouMayAlsoLikeCard from "./YouMayAlsoLikeCard";
import Loading from "./Loading";

function Cart() {
  const {
    cart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
    cartTotal,
    handleRemoveItem,
  } = useCartContext();

  // loading
  const [loading, setLoading] = useState(false);

  // special discount
  const [discount, setDiscount] = useState(50);
  const [alsoLike, setAlsoLike] = useState(null);

  useEffect(() => {
    const cartRest = localStorage.getItem("cartRest");
    console.log(cartRest);
    async function handleFetchAlsoLike() {
      setLoading(true);
      try {
        const apiResponse = await fetch(
          `${api_path_url}/menu/you-may-like?restaurant-id=${cartRest}`,
          {
            method: "GET",
            headers: {
              "x-auth-token": authToken,
            },
          }
        );

        const result = await apiResponse.json();
        if (result?.success) {
          setLoading(false);
          setAlsoLike(result?.items);
        }
      } catch (error) {
        setLoading(false);
        console.log(error);
        throw new Error("There is an error: ", error.message);
      }
    }
    handleFetchAlsoLike();
  }, []);

  return (
    <div className="">
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
        {cart.length > 0 &&
          cart?.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between bg-white p-3 rounded-lg shadow-md relative text-red-500"
            >
              <button
                className="absolute bottom-1 right-3"
                onClick={() => handleRemoveItem(item._id)}
              >
                <FaDeleteLeft />
              </button>
              <img
                src="./img/burger.png "
                alt={item.name}
                className="w-16 h-16 rounded-md object-cover"
              />
              <div className="ml-3 flex-grow">
                <h3 className="font-semibold text-gray-800">{item.name}</h3>
                <p className="text-gray-800">
                  TK {item.offerPrice * item.quantity}
                </p>
              </div>
              <div className="flex items-center space-x-2">
                <button
                  className=" text-gray-500 rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={() => handleDecreaseQuantity(item._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    />
                  </svg>
                </button>
                <span>{item.quantity}</span>
                <button
                  className=" text-blue-500 rounded-full w-8 h-8 flex items-center justify-center"
                  onClick={() => handleIncreaseQuantity(item._id)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25ZM12.75 9a.75.75 0 0 0-1.5 0v2.25H9a.75.75 0 0 0 0 1.5h2.25V15a.75.75 0 0 0 1.5 0v-2.25H15a.75.75 0 0 0 0-1.5h-2.25V9Z"
                      clip-rule="evenodd"
                    />
                  </svg>
                </button>
              </div>
            </div>
          ))}

        {/* You May Also Like */}

        {loading ? (
          <div className="w-full flex items-center justify-center my-4">
            <Loading />
          </div>
        ) : null}

        {cart.length > 0 ? (
          <>
            <div className="flex items-center flex-col justify-center text-blue-600 font-bold text-xl">
              <p>Add more items</p>
              <h1 className="text-center font-bold text-lg">
                You may also like
              </h1>
            </div>
            <div className="flex items-center justify-center gap-4 flex-wrap">
              {alsoLike &&
                alsoLike.map((item) => (
                  <YouMayAlsoLikeCard key={item._id} detail={item} />
                ))}
            </div>
          </>
        ) : null}
      </div>

      {/* Order Summary */}

      {cart.length > 0 ? (
        <>
          <div className="p-4 bg-white rounded-lg  mb-28">
            <div className="flex justify-between py-2">
              <p className="text-gray-700">Sub total</p>
              <p>TK {cartTotal}</p>
            </div>
            <div className="flex justify-between py-2">
              <p className="text-gray-700">Discount</p>
              <p>TK {discount}</p>
            </div>
            <div className="flex justify-between py-2">
              <p className="text-gray-700">Addons</p>
              <p>TK 0.00</p>
            </div>
          </div>
          <div className="fixed w-full bottom-0 left-0 bg-white z-50 px-4 pb-4">
            <div className="flex justify-between py-2 font-bold text-xl border-t-2 text-blue-600">
              <p>Total</p>
              <p>TK {cartTotal - discount}</p>
            </div>
            <button className="bg-blue-500 text-white w-full py-3 rounded-lg mt-2">
              Proceed to Checkout
            </button>
          </div>
        </>
      ) : null}
      {/* Empty Cart Message */}
      {cart.length === 0 ? (
        <main className="flex items-center justify-center min-h-screen bg-white">
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

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Are you hungry?
            </h2>
            <p className="text-gray-600">Your cart is empty.</p>
            <p className="text-gray-600 mb-6">Please add items to the menu.</p>

            <Link
              to="/Favorites"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Browse
            </Link>
          </div>
        </main>
      ) : null}
    </div>
  );
}

export default Cart;
