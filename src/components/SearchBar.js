import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import handleApiRequest from "../helpers/handleApiRequest";

const SearchPage = () => {
  const [categories, setCategories] = useState(null);

  useEffect(() => {
    async function fetchData() {
      const apiResponse = await handleApiRequest("/category", {});
      if (apiResponse?.result) {
        setCategories(apiResponse.result);
      } else {
        setCategories(null);
      }
    }

    fetchData();
  }, []);
  useEffect(() => {
    console.log(categories);
  }, [categories]);

  return (
    <div className="bg-blue-50 min-h-screen">
      <div className="max-w-md mx-auto p-4">
        {/* Search Bar */}
        <div className="flex items-center space-x-2 mb-4 bg-white rounded-full shadow-md p-2">
          <Link to="" className="p-2">
            <svg
              className="w-6 h-6 text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </Link>
          <input
            type="text"
            className="w-full bg-transparent focus:outline-none"
            placeholder="Search your desired foods or restaurants"
          />
        </div>

        {/* Suggestions Section */}
        <div className="mb-6">
          <h2 className="text-xl font-semibold mb-2">Suggestions</h2>
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-lg shadow-md p-3 flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/50"
                alt="Sub Burger regular"
                className="w-12 h-12 rounded"
              />
              <div className="text-sm font-medium">Sub Burger regular</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/50"
                alt="Chicken Burger (Small)"
                className="w-12 h-12 rounded"
              />
              <div className="text-sm font-medium">Chicken Burger (Small)</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/50"
                alt="Fried Chicken"
                className="w-12 h-12 rounded"
              />
              <div className="text-sm font-medium">Fried Chicken</div>
            </div>
            <div className="bg-orange-100 rounded-lg shadow-md p-3 flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/50"
                alt="Special Set Menu"
                className="w-12 h-12 rounded"
              />
              <div className="text-sm font-medium">Special Set Menu</div>
            </div>
            <div className="bg-white rounded-lg shadow-md p-3 flex items-center space-x-2">
              <img
                src="https://via.placeholder.com/50"
                alt="Chicken Burger (Small)"
                className="w-12 h-12 rounded"
              />
              <div className="text-sm font-medium">Chicken Burger (Small)</div>
            </div>
          </div>
        </div>

        {/* Popular Categories Section */}
        <div>
          <h2 className="text-xl font-semibold mb-2">Popular Categories</h2>

          <div className="flex flex-wrap gap-2">
            {categories?.map((category) => (
              <>
                <Link
                  to={`/category/${category.name}`}
                  className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full shadow"
                >
                  {category.name}
                </Link>
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPage;
