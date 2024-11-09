import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import Footer from "../Layout/Footer";

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

  return (
    <>
      <div className='bg-white'>
        {/* Header section */}
        <div className='bg-red-500 w-full fixed z-10'>
          <header className="bg-gradient-to-r from-purple-600 to-blue-600 p-4 pb-8 px-4 flex items-center justify-between">
            <div className="flex items-center">
              {/* Location Icon */}
              <svg
                className="w-6 h-6 text-white"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10 2a6 6 0 00-6 6c0 3.866 6 10 6 10s6-6.134 6-10a6 6 0 00-6-6zm0 8a2 2 0 110-4 2 2 0 010 4z"
                  clipRule="evenodd"
                ></path>
              </svg>
              <div className="ml-2 text-white text-sm">
                <span className="block">Kamalnagar, Lakshmipur, Bangladesh</span>
              </div>
            </div>
            {/* Notification Icon */}
            <div>
              <svg
                className="w-6 h-6 static top-0 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0M3.124 7.5A8.969 8.969 0 0 1 5.292 3m13.416 0a8.969 8.969 0 0 1 2.168 4.5"
                />
              </svg>
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
                <svg
                  className="absolute left-7 top-3 w-5 h-5 text-purple-600"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm6-8a6 6 0 11-12 0 6 6 0 0112 0z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fillRule="evenodd"
                    d="M14.293 14.293a1 1 0 011.414 0l2.5 2.5a1 1 0 01-1.414 1.414l-2.5-2.5a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </Link>
            </div>
          </section>
        </div>
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

        <Footer />
      </div>
    </>
  );
}

export default Home;
