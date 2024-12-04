// src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import Favorites from "./components/Favorites";
import Cart from "./components/Cart";
import Order from "./components/Order";
import About from "./components/About";
import Profile from "./components/Profile";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import { AuthProvider } from "./contexts/AuthContext";
import PrivateRoute from "./components/PrivateRoute";
import Footer from "./Layout/Footer";
import SearchBar from "./components/SearchBar";
import RestaurantPage from "./components/RestaurantPage";
import RestaurantForm from "./components/RestaurantForm";
import LiveChat from "./components/LiveChat";
import DeliverymanRegistration from "./components/DeliverymanRegistration";
import AddressManager from "./components/AddressManager";
import "./App.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import CartProvider from "./contexts/CartContext";
import { Toaster } from "react-hot-toast";
import CuisineFilter from "./pages/CuisineFilter.jsx";
import Header from "./components/Header.jsx";
import Restaurant from "./pages/Restaurant.jsx";
import CategoryFilter from "./pages/CategoryFilter.jsx";

import Checkout from "./components/Checkout.js";
import { SocketProvider } from "./contexts/SocketIo.js";
import { Helmet } from "react-helmet";
import 'swiper/css';

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader


import Notification from "./components/Notification.js";
import SetAddressManager from "./components/SetAddressManager.js";


function App() {
  return (
    <SocketProvider>
      <AuthProvider>
        <ToastContainer position="top-right" theme="dark" />
        <Toaster />
        <Helmet>
          <title>
            Foodverse Delivery - Fresh and Fast Food Delivery Service
          </title>
          <meta
            name="description"
            content="Order fresh, delicious meals online with Foodverse Delivery. Fast and reliable service delivering to your doorstep."
          />
          <meta
            property="og:title"
            content="Foodverse Delivery - Fresh and Fast Food Delivery Service"
          />
          <meta
            property="og:description"
            content="Order fresh, delicious meals online with Foodverse Delivery. Fast and reliable service delivering to your doorstep."
          />
          <meta
            property="og:image"
            content="https://foodversedelivery.com/images/social-image.jpg"
          />
          <meta property="og:url" content="https://foodversedelivery.com" />
          <meta property="og:type" content="website" />
          <meta
            name="twitter:title"
            content="Foodverse Delivery - Fresh and Fast Food Delivery Service"
          />
          <meta
            name="twitter:description"
            content="Order fresh, delicious meals online with Foodverse Delivery. Fast and reliable service delivering to your doorstep."
          />
          <meta
            name="twitter:image"
            content="https://foodversedelivery.com/images/social-image.jpg"
          />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="robots" content="index, follow" />
          <meta
            name="viewport"
            content="width=device-width, initial-scale=1.0"
          />
          <link rel="icon" href="https://foodversedelivery.com/favicon.ico" />
          <link rel="canonical" href="https://foodversedelivery.com" />
        </Helmet>

        <CartProvider>
          <Router>
            <div className="App">
              <Routes>
                {/* Public Routes */}
                <Route path="/" element={<Home />} />
                <Route path="/signin" element={<SignIn />} />
                <></>
                {/* Protected Routes */}
                <Route
                  path="/favorites"
                  element={
                    <>
                      <PrivateRoute element={Favorites} />
                      <Footer />{" "}
                    </>
                  }
                />

                <Route
                  path="/home"
                  element={
                    <>
                      <PrivateRoute element={Home} />
                      <Footer />{" "}
                    </>
                  }
                />

                <Route
                  path="/restaurant"
                  element={
                    <>
                      <Header title={"Restaurant"} />
                      <Restaurant />
                      <Footer />
                    </>
                  }
                />

                <Route
                  path="/cuisine/:cuisine"
                  element={
                    <>
                      <Header title="filter cuisine" /> <CuisineFilter />{" "}
                      <Footer />
                    </>
                  }
                />


                <Route
                  path="/category/:category"
                  element={
                    <>
                      <Header title="category" /> <CategoryFilter />
                      <Footer />
                    </>
                  }
                />
                <Route
                  path="/cart"
                  element={
                    <>
                      <PrivateRoute element={Cart} />
                      <Footer />{" "}
                    </>
                  }
                />
                <Route
                  path="/order"
                  element={
                    <>
                      <PrivateRoute element={Order} />
                      <Footer />{" "}
                    </>
                  }
                />
                <Route
                  path="/about"
                  element={<PrivateRoute element={About} />}
                />
                <Route
                  path="/profile"
                  element={<PrivateRoute element={Profile} />}
                />
                <Route
                  path="/searchbar"
                  element={<PrivateRoute element={SearchBar} />}
                />
                <Route
                  path="/restaurant/:restaurantId"
                  element={<PrivateRoute element={RestaurantPage} />}
                />
                <Route
                  path="/restaurantform"
                  element={<PrivateRoute element={RestaurantForm} />}
                />
                <Route
                  path="/liveChat"
                  element={<PrivateRoute element={LiveChat} />}
                />
                <Route
                  path="/deliverymanRegistration"
                  element={<PrivateRoute element={DeliverymanRegistration} />}
                />
                <Route
                  path="/addressmanager"
                  element={<PrivateRoute element={AddressManager} />}
                />
                <Route
                  path="/checkout"
                  element={<PrivateRoute element={Checkout} />}
                />
                <Route
                path="/notification"
                element={<PrivateRoute element={Notification} />}
              />
              <Route
                path="/setaddressmanager"
                element={<PrivateRoute element={SetAddressManager} />}
              />
              </Routes>
            </div>
          </Router>
        </CartProvider>
      </AuthProvider>
    </SocketProvider>           
  );
}

export default App;
