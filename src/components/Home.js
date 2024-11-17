import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";
import { HiLocationMarker, HiOutlineBell, HiOutlineSearch } from "react-icons/hi";
import { FaMapLocationDot } from "react-icons/fa6";
import axios from "axios";

// Google Maps API to check delivery zone
const checkDistanceWithGoogleMaps = async (userLat, userLng, centerLat, centerLng, deliveryRadius) => {
  const apiKey = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;
  const url = `/api/maps?origins=${userLat},${userLng}&destinations=${centerLat},${centerLng}&apiKey=${process.env.REACT_APP_GOOGLE_MAPS_API_KEY}`;

  try {
    const response = await axios.get(url);
    const distanceInMeters = response.data.rows[0].elements[0].distance.value; // Distance in meters

    return distanceInMeters <= deliveryRadius; // Check if within delivery radius
  } catch (error) {
    console.error("Error with Google Maps API:", error);
    return false; // Treat as outside zone if error occurs
  }
};


function Home() {
  const cuisines = [
    { name: "Biryani", img: "./img/biryani.jpg" },
    { name: "Burger", img: "./img/burgerR.png" },
    { name: "Pizza", img: "./img/pizza.png" },
    { name: "Chicken", img: "./img/KPC.jpg" },
    { name: "Bengali", img: "./img/bangali.jpg" },
    { name: "Japanese", img: "./img/sandwich.jpg" },
    { name: "Burger", img: "./img/burgerR.png" },
    { name: "Burger", img: "./img/burgerR.png" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const ads = [
    { src: './img/Add1.jpg', alt: 'Ad 1' },
    { src: './img/Add2.jpg', alt: 'Ad 2' },
    { src: './img/Add1.jpg', alt: 'Ad 3' },
    { src: './img/Add2.jpg', alt: 'Ad 4' },
  ];

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % ads.length);
  };

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + ads.length) % ads.length);
  };

  // Automatically change the slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000); // 3000ms = 3 seconds

    return () => clearInterval(interval); // Clean up the interval on component unmount
  }, [currentIndex]);

  const [isServiceAvailable, setIsServiceAvailable] = useState(false);
  const [userAddress, setUserAddress] = useState({ latitude: null, longitude: null });

  useEffect(() => {
    // Simulate default location (for testing purposes)
    const defaultLat = 22.8366890508586;
    const defaultLng = 91.10103300604688;

    const address = JSON.parse(localStorage.getItem("userAddress")) || {
      latitude: defaultLat,
      longitude: defaultLng,
    };

    setUserAddress(address);

    // Delivery zone parameters
    const centerLat = 22.865347701065204; // Zone center latitude
    const centerLng = 91.09704138414757; // Zone center longitude
    const deliveryRadius = 5500; // 5.5 km radius

    // Check if user's location is within the delivery zone
    checkDistanceWithGoogleMaps(address.latitude, address.longitude, centerLat, centerLng, deliveryRadius)
      .then((isWithinZone) => {
        setIsServiceAvailable(isWithinZone);
        console.log(isWithinZone ? "User is within the delivery zone." : "User is outside the delivery zone.");
      })
      .catch((error) => {
        console.error("Error checking delivery zone:", error);
      });
  }, []);

  return (
    <>
      <div className='bg-white'>
        {/* Header section */}
        <div className='bg-red-500 w-full fixed z-10'>
          <header className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 pb-8 px-4 flex items-center justify-between">
            <Link to="/AddressManager">
            <div className="flex items-center">
              {/* Location Icon */}
              <HiLocationMarker className="size-6 text-white" />
              <div className="ml-2 text-white text-sm">
                <span className="block">{userAddress && userAddress.address ? userAddress.address : "Location not set"}</span> 
              </div>
            </div>
            </Link>
            {/* Notification Icon */}
            <div>
              <Link to="/Notification">
                <HiOutlineBell className="size-6 text-white" /> 
              </Link>
            </div>
          </header>

          {/* SearchBar */}
          <section className="relative">
            <div className="absolute -top-6 w-full px-4">
              <Link to="/SearchBar">
                <input
                  type="text"
                  className="w-full shadow-md rounded-full pl-10 pr-4 py-3 text-blue-600 placeholder-blue-700 bg-white focus:outline-none"
                  placeholder="Are you hungry !!"
                />
                <HiOutlineSearch className="size-5 absolute left-7 top-3 text-purple-600 " />
              </Link>
            </div>
          </section>
        </div>

        {isServiceAvailable ? (
        <div>  
        {/* Slider section */}
        <section className="p-3">
          <div className="relative w-full max-w-lg mx-auto mt-28 overflow-hidden rounded-lg shadow-lg">
            <div
              className="flex transition-transform duration-500"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {ads.map((ad, index) => (
                <div key={index} className="min-w-full">
                  <img src={ad.src} alt={ad.alt} className="w-full rounded-lg" />
                </div>
              ))}
            </div>

            <button
              onClick={prevSlide}
              className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full"
            >
              &#10094;
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 hover:bg-opacity-80 text-white p-2 rounded-full"
            >
              &#10095;
            </button>
          </div>
        </section>

        {/* Popular cuisines */}
        <section className="p-3">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-xl font-semibold text-purple-600">Popular Cuisines</h2>
            <Link to="" className="text-blue-600 font-semibold hover:underline">
              See All
            </Link>
          </div>
          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-6 lg:grid-cols-8 gap-2">
            {cuisines.map((cuisine, index) => (
              <Link to={`/cuisine/${cuisine.name}`} key={index} className="flex flex-col items-center">
                <img
                  src={cuisine.img}
                  alt={cuisine.name}
                  className="w-14 h-14 sm:w-20 sm:h-20 rounded-full shadow-md object-cover"
                />
                <span className="mt-2 text-sm sm:text-base font-medium text-gray-700">
                  {cuisine.name}
                </span>
              </Link>
            ))}
          </div>
        </section>
        </div>
        ) : (
        <div>  
        {/* Homw Empty Massage */}
        <section className='flex items-center justify-center min-h-screen bg-white'>
        <div className="text-center">
            <div className="flex justify-center mb-4">
              <div className="bg-gradient-to-r from-purple-100 to-blue-100 p-6 rounded-full">
                <FaMapLocationDot className="size-16 text-blue-700" />
              </div>
            </div>

            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Please Set Your Address
            </h2>
            <p className="text-gray-600">We will give you restaurant and food item</p>
            <p className="text-gray-600 mb-6">according to your location.</p>

            <Link
              to="/AddressManager"
              className="bg-gradient-to-r from-purple-600 to-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:bg-blue-700 transition duration-300"
            >
              Add Address
            </Link>
          </div>
        </section>
       </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default Home;
