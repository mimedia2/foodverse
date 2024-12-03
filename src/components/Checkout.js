import React, { useState, useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import axios from "axios";
import { api_path_url, authToken } from "../secret";
import toast from "react-hot-toast";
import Header from "./Header";
import { GiTakeMyMoney } from "react-icons/gi";
import { MdDeliveryDining } from "react-icons/md";

const CheckoutPage = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const passedSubtotal = parseFloat(queryParams.get("subtotal")) || 0; // URL থেকে সাবটোটাল নেয়া

  const [tip, setTip] = useState(0); // টিপ ব্যবস্থাপনা
  const [paymentMethod, setPaymentMethod] = useState("Cash on Delivery"); // পেমেন্ট মেথড
  const [instructions, setInstructions] = useState(""); // ইউজার ইনস্ট্রাকশন
  const [selectedAddress, setSelectedAddress] = useState("home"); // ডেলিভারি ঠিকানা
  const [totalAmount, setTotalAmount] = useState(passedSubtotal); // মোট এমাউন্ট
  const [deliveryCharge, setDeliveryCharge] = useState(25); // ডেলিভারি চার্জ
  const [isProcessing, setIsProcessing] = useState(false); // প্রসেসিং স্টেট


  useEffect(() => {
    setTotalAmount(passedSubtotal); // Ensure totalAmount is updated with passedSubtotal initially
  }, [passedSubtotal]);

  const handlePlaceOrder = async () => {
    // Check if payment method is Bkash
    if (paymentMethod === "Bkash") {
      try {
        setIsProcessing(true); // Show processing state
  
        // Prepare data for bKash payment
        const bkashData = {
          amount: totalAmount + tip + deliveryCharge, // Total amount including tip and delivery
        };
  
        // Call backend API to get bKash payment link
        const bkashResponse = await axios.post(
          `${api_path_url}/bkash-payment`,
          bkashData,
          {
            headers: {
              "Content-Type": "application/json",
              "x-auth-token": authToken, // Auth token for security
            },
          }
        );
  
        if (bkashResponse.data.success) {
          // Redirect to the bKash payment URL
          const bkashLink = bkashResponse.data.bkashURL; // Backend should return this
          window.location.href = bkashLink; // Redirect user to bKash website
        } else {
          toast.error("Failed to initiate Bkash payment."); // Show error message
        }
      } catch (error) {
        console.error("Bkash payment error:", error); // Log error for debugging
        toast.error("Something went wrong with Bkash payment."); // Show error to user
      } finally {
        setIsProcessing(false); // Stop processing state
      }
    } else {
      placeOrder(); // Place order directly for other methods
    }
  };

  // ফাংশন: অর্ডার প্রসেসিং
  const placeOrder = async () => {
    setIsProcessing(true);
    try {
      const orderData = {
        tip,
        paymentMethod,
        instructions,
        selectedAddress,
        totalAmount: totalAmount + tip + deliveryCharge,
      };

      const response = await axios.post(`${api_path_url}/order/place-order`, orderData, {
        headers: {
          "x-auth-token": authToken,
          "Content-Type": "application/json",
        },
      });

      if (response.data.success) {
        toast.success("Order placed successfully!");
      } else {
        toast.error("Failed to place order.");
      }
    } catch (error) {
      console.error("Order error:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  // ফাংশন: টিপ পরিবর্তন করা
  const handleTipChange = (amount) => {
    setTip(amount);
  };
  
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
              className={`flex-1 p-3 border ${selectedAddress === "home" ? "border-blue-600" : "border-gray-300"} rounded-lg flex items-center`}
              onClick={() => setSelectedAddress("home")}
            >
              <span className="material-icons">home</span>
              <p className="ml-2">Home</p>
            </button>
            <button
              className={`flex-1 p-3 border ${selectedAddress === "current" ? "border-blue-600" : "border-gray-300"} rounded-lg flex items-center`}
              onClick={() => setSelectedAddress("current")}
            >
              <span className="material-icons">place</span>
              <p className="ml-2">Current</p>
            </button>
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
                  tip === amount ? "bg-blue-600 text-white" : "bg-gray-100 text-gray-700"
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
                setPaymentMethod(paymentMethod === "Cash on Delivery" ? "Bkash" : "Cash on Delivery")
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
            <p>TK {totalAmount}</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-gray-700">Rider Tip</p>
            <p>TK {tip}</p>
          </div>
          <div className="flex justify-between py-2">
            <p className="text-gray-700">Delivery Charge</p>
            <p>TK {deliveryCharge}</p>
          </div>
        </div>
        </div>
      {/* Order Summary and Place Order */}
      <section className=" fixed w-full bottom-0 left-0 bg-white z-50 px-4 pb-4">
        <div className="flex justify-between py-2 font-bold text-xl border-t-2 text-blue-600">
          <p>Total</p>
          <div className="flex items-center">
            <GiTakeMyMoney className="size-6 text-purple-600 mx-1" />
            <p>TK {totalAmount + tip + deliveryCharge}</p>
          </div>
        </div>
        <button onClick={handlePlaceOrder} className="w-full py-3 bg-blue-600 text-white rounded-lg font-bold">
          Confirm Order
        </button>
      </section>

      

    </div>
  );
};

export default CheckoutPage;
