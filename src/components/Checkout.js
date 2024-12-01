import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { api_path_url, authToken } from "../secret";
import toast from "react-hot-toast";
import Header from "./Header";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";
import { useCartContext } from "../contexts/CartContext";
import { useSocket } from "../contexts/SocketIo";
import { useAuth } from "../contexts/AuthContext";
import Cookies from "js-cookie";

const CheckoutPage = () => {
  const location = useLocation();

  //payment status
  const [paymentStatus, setPaymentStatus] = useState(null);

  // const queryParams = new URLSearchParams(location.search);
  // const passedSubtotal = parseFloat(queryParams.get("subtotal")) || 0; // Retrieve subtotal from URL query parameters
  // console.log(passedSubtotal);

  const { cartTotal, discount, addonTotal } = useCartContext();

  const { user } = useAuth();

  const [tip, setTip] = useState(0);
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery");
  const [instructions, setInstructions] = useState("");
  const [selectedAddress, setSelectedAddress] = useState("");
  // const [totalAmount, setTotalAmount] = useState(passedSubtotal); // Cart subtotal amount
  const [deliveryCharge, setDeliveryCharge] = useState(25); // Delivery charge
  const [showBkashModal, setShowBkashModal] = useState(false); // Modal for Bkash
  const [isProcessing, setIsProcessing] = useState(false); // Processing state

  // cart
  const { cart, setCart } = useCartContext();
  const navigate = useNavigate();

  // socket
  const socket = useSocket();

  // user data
  // console.log(user);
  // useEf  fect(() => {
  //   if (socket) {
  //     const user = JSON.parse(localStorage.getItem("user"));
  //     socket.emit("auth", user.id);
  //   }
  // }, [socket]);

  // console.log(cart);

  // useEffect(() => {
  //   setTotalAmount(passedSubtotal); // Ensure totalAmount is updated with passedSubtotal initially
  // }, [passedSubtotal]);

  const handlePlaceOrder = () => {
    if (selectedAddress === undefined || selectedAddress === "") {
      toast.error("please select delivery location");
      return;
    }

    if (paymentMethod === "Bkash") {
      setShowBkashModal(true); // Show Bkash modal if Bkash is selected
      return;
    } else {
      placeOrder(); // Directly place order for Cash on Delivery
    }
  };

  // Define handleTipChange to update the tip amount
  const handleTipChange = (amount) => {
    setTip(amount);
  };

  const placeOrder = async () => {
    const user = JSON.parse(localStorage.getItem("user"));
    setIsProcessing(true);
    try {
      const orderData = {
        tip,
        paymentMethod,
        totalAmount: cartTotal + tip + deliveryCharge,
        restaurantId: cart[0].restaurantId,
        userId: user.id,
        items: [...cart],
        deliveryAmount: deliveryCharge,
        dropLocation: selectedAddress,
        restaurantLocation: "unknown location",
        customerMessage: instructions,
        discount,
        addonTotal,
      };

      const response = await axios.post(
        `${api_path_url}/order/create`,
        { data: orderData },
        {
          headers: {
            "x-auth-token": authToken,
            "Content-Type": "application/json",
          },
        }
      );

      if (response.data.success) {
        navigate("/");
        toast.success("Order placed successfully!");
        localStorage.setItem("cartRest", "");
        setCart([]);
        socket.emit("sendOrderToRider", response.data.order);

        // why this line is not working?
        socket.emit("sendOrderToRestaurant", response.data.order);
      } else {
        toast.error("Failed to place order.");
      }
    } catch (error) {
      console.error("Order error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
      setShowBkashModal(false);
    }
  };

  useEffect(() => {
    const queryParams = new URLSearchParams(location.search);
    const result = queryParams.get("payment");
    setPaymentStatus(result);

    console.log(result);
  }, [location]);

  // send order when status is changing
  useEffect(() => {
    if (paymentStatus === "success") {
      placeOrder();
    } else if (paymentStatus === "cancel") {
      toast.error(paymentStatus);
    } else if (paymentStatus === "failure") {
      toast.error(paymentStatus);
    }
  }, [paymentStatus]);

  const handleBkashPayment = async () => {
    // Simulating Bkash API call with provided credentials
    setIsProcessing(true);
    try {
      const id = Cookies.get("id");

      if (!id) {
        toast.error("failed to get user id. Please re-login.");
        return;
      }
      const orderData = {
        tip,
        paymentMethod,
        totalAmount: cartTotal + tip + deliveryCharge,
        restaurantId: cart[0].restaurantId,
        userId: id,
        items: [...cart],
        deliveryAmount: deliveryCharge,
        dropLocation: selectedAddress,
        restaurantLocation: "unknown location",
        customerMessage: instructions,
        discount,
        addonTotal,
      };

   //   console.log("alert method: ");

      const { data } = await axios.post(
        `${api_path_url}/bkash/payment/create`,
        {
          ...orderData,
        },
        {
          headers: {
            "x-auth-token": process.env.REACT_APP_API_TOKEN,
          },
          withCredentials: true,
        }
      );

      console.log(data);

      if (data.success) {
        window.location.href = data.bkashURL;
      }
    } catch (error) {
      console.error("Bkash payment error:", error);
      toast.error("Bkash payment failed. Try again.");
    } finally {
      setIsProcessing(false);
      setShowBkashModal(false);
    }
  };

  useEffect(() => {
    console.log(selectedAddress);
  }, [selectedAddress]);

  return (
    <div className="relative">
      <Header title={"Checkout"} />
      <div className="max-w-lg mx-auto p-4 space-y-6 mb-24 pt-24">
        {/* Delivery Section */}
        <section className="space-y-2 border rounded-md py-2">
          <h2 className="text-xl font-bold text-center">Estimated Delivery</h2>
          <div className="flex item-center justify-center">
            <MdDeliveryDining className="size-6 mx-1 text-purple-600" />
            <p className="text-center text-blue-600 font-bold">Asap (33 min)</p>
          </div>
        </section>
        {/* Delivery fee */}
        <section className="text-center">
          <p>Delivery Change: 25 TK</p>
        </section>

        {/* Delivery Address Section */}
        <section className="space-y-2">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-semibold">Delivery Address</h3>
            <Link to="/AddressManager">
              <h2 className="text-blue-600 font-bold">Edit Address</h2>
            </Link>
          </div>
          <div className="flex space-x-4">
            <button
              className={`flex-1 p-3 border ${
                selectedAddress === "home"
                  ? "border-blue-600"
                  : "border-gray-300"
              } rounded-lg flex items-center`}
              onClick={() => setSelectedAddress(user.address.home.address)}
            >
              <p className="ml-2">Home</p>
            </button>
            <button
              className={`flex-1 p-3 border ${
                selectedAddress === "current"
                  ? "border-blue-600"
                  : "border-gray-300"
              } rounded-lg flex items-center`}
              onClick={() => setSelectedAddress(user.address.office.address)}
            >
              <p className="ml-2">Current</p>
            </button>

            <button
              className={`flex-1 p-3 border ${
                selectedAddress === "current"
                  ? "border-blue-600"
                  : "border-gray-300"
              } rounded-lg flex items-center`}
              onClick={() => setSelectedAddress(user.address.others.address)}
            >
              <p className="ml-2">others</p>
            </button>
          </div>

          <div>
            {selectedAddress !== undefined ? (
              <>
                <h1 className="text-lg font-semibold">Selected location</h1>
                <span>{selectedAddress}</span>

                {console.log(user?.address)}
              </>
            ) : null}
          </div>
        </section>

        {/* Tip Section */}
        <section className="space-y-2">
          <h3 className="text-lg font-semibold">Tip your rider</h3>
          <div className="flex justify-between">
            {[0, 10, 20, 30, 50].map((amount) => (
              <button
                key={amount}
                onClick={() => handleTipChange(amount)}
                className={`px-2 py-1 border rounded-md ${
                  tip === amount
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 text-gray-700"
                }`}
              >
                TK {amount}
              </button>
            ))}
          </div>
        </section>

        {/* Payment Method Section */}
        <section className="space-y-2">
          <h3 className="text-lg font-semibold">Payment Method</h3>
          <div className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex items-center">
              <GiTakeMyMoney className="size-6 text-purple-600" />
              <p className="ml-2 font-bold">{paymentMethod}</p>
            </div>
            <button
              onClick={() =>
                setPaymentMethod(
                  paymentMethod === "Cash on Delivery"
                    ? "Bkash"
                    : "Cash on Delivery"
                )
              }
              className="text-blue-600 font-semibold"
            >
              Change
            </button>
          </div>
        </section>

        {/* Additional Instructions Section */}
        <section className="space-y-2">
          <h3 className="text-lg font-semibold">Add additional instructions</h3>
          <textarea
            className="w-full p-3 border rounded-lg"
            placeholder="Add some instructions for the restaurant"
            value={instructions}
            onChange={(e) => setInstructions(e.target.value)}
          ></textarea>
        </section>
        {/* Order Details */}
        <div className="bg-white rounded-lg">
          <div className="flex justify-between py-2">
            <p className="text-gray-700">Subtotal</p>
            <p>TK {cartTotal}</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-gray-700">Rider Tip</p>
            <p>TK {tip}</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-gray-700">Delivery Charge</p>
            <p>TK {deliveryCharge}</p>
          </div>

          <div className="flex justify-between py-2">
            <p className="text-gray-700">Discount</p>
            <p>TK {discount}</p>
          </div>
        </div>
      </div>
      {/* Order Summary and Place Order */}
      <section className=" fixed w-full bottom-0 left-0 bg-white z-50 px-4 pb-4">
        <div className="flex justify-between py-2 font-bold text-xl border-t-2 text-blue-600">
          <p>Total</p>
          <div className="flex items-center">
            <GiTakeMyMoney className="size-6 text-purple-600 mx-1" />
            <p>TK {cartTotal + tip + deliveryCharge - discount}</p>
          </div>
        </div>
        <button
          onClick={handlePlaceOrder}
          className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold"
        >
          Confirm Order
        </button>
      </section>

      {/* Bkash Modal */}
      {showBkashModal && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg max-w-sm w-full">
            <h3 className="text-lg font-semibold mb-4">Bkash Payment</h3>
            {/* <input
              type="text"
              placeholder="Enter your Bkash number"
              value={bkashNumber}
              onChange={(e) => setBkashNumber(e.target.value)}
              className="w-full p-2 border rounded-lg mb-4"
            /> */}
            <button
              onClick={handleBkashPayment}
              className="w-full py-2 bg-blue-600 text-white rounded-lg font-bold"
            >
              Go to payment method
            </button>
            <button
              onClick={() => setShowBkashModal(false)}
              className="w-full py-2 mt-2 bg-gray-300 text-black rounded-lg font-bold"
              disabled={isProcessing}
            >
              Cancel
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutPage;
