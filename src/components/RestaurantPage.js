import React from 'react';

const RestaurantPage = () => {
  return (
    <div className="p-4 bg-gradient-to-r from-purple-200 to-blue-200">
      {/* Header Section */}
      <header className="bg-white p-4 rounded-lg shadow-lg flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <img
            src="img/burger.png"
            alt="Boom Boom Burger"
            className="w-20 h-16 rounded-md object-cover shadow-md"
          />
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-gray-800">Boom Boom Burger</h1>
            <p className="text-sm text-gray-500">
              0.2km away |{' '}
              <span className="text-gray-800 font-medium">Free delivery</span> | Tk 500 Minimum
            </p>
          </div>
        </div>
      </header>

      {/* Delivery Info Section */}
      <section className="bg-white mt-4 p-4 rounded-lg shadow-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <svg
              className="h-6 w-6 text-purple-600"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z"
              />
            </svg>
            <span className="text-lg font-semibold text-gray-800">4.7</span>
            <span className="text-sm text-gray-600">5000+ ratings</span>
          </div>
          <div className="text-sm text-gray-600">
            <p>
              Delivery: <span className="font-semibold text-gray-800">10-25 min</span>
            </p>
          </div>
        </div>
      </section>

      {/* Popular Items Section */}
      <section className="mt-6">
        <div className="bg-white my-4 p-4 rounded-lg shadow-lg">
          <h2 className="text-xl font-bold text-gray-800">All item</h2>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-3 xl:grid-cols-4 gap-3">
          {/* Item 1 */}
          <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
            <img
              src="img/burger.png"
              alt="Smokey BBQ Chicken Cheese Burger"
              className="w-full h-32 sm:h-48 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
              Smokey BBQ Chicken Cheese Burger
            </h3>
            <div className='flex items-center justify-between px-2'>
              <p className="text-gray-600 mx-2 my-1">Tk 240</p>
              <div className='flex items-center justify-between'>
              <svg  xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-purple-500 ' viewBox="0 0 24 24" fill="currentColor" >
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <p className='px-2 font-bold text-gray-700 '>4.3</p>
              </div>
            </div>
          </div>
           {/* Item 1 */}
           <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
            <img
              src="img/burger.png"
              alt="Smokey BBQ Chicken Cheese Burger"
              className="w-full h-32 sm:h-48 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
              Smokey BBQ Chicken Cheese Burger
            </h3>
            <div className='flex items-center justify-between px-2'>
              <p className="text-gray-600 mx-2 my-1">Tk 240</p>
              <div className='flex items-center justify-between'>
              <svg  xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-purple-500 ' viewBox="0 0 24 24" fill="currentColor">
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <p className='px-2 font-bold text-gray-700 '>4.3</p>
              </div>
            </div>
          </div>
           {/* Item 1 */}
           <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
            <img
              src="img/burger.png"
              alt="Smokey BBQ Chicken Cheese Burger"
              className="w-full h-32 sm:h-48 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
              Smokey BBQ Chicken Cheese Burger
            </h3>
            <div className='flex items-center justify-between px-2'>
              <p className="text-gray-600 mx-2 my-1">Tk 240</p>
              <div className='flex items-center justify-between'>
              <svg  xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-purple-500 ' viewBox="0 0 24 24" fill="currentColor" >
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <p className='px-2 font-bold text-gray-700 '>4.3</p>
              </div>
            </div>
          </div>

           {/* Item 1 */}
           <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
            <img
              src="img/burger.png"
              alt="Smokey BBQ Chicken Cheese Burger"
              className="w-full h-32 sm:h-48 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
              Smokey BBQ Chicken Cheese Burger
            </h3>
            <div className='flex items-center justify-between px-2'>
              <p className="text-gray-600 mx-2 my-1">Tk 240</p>
              <div className='flex items-center justify-between'>
              <svg  xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-purple-500 ' viewBox="0 0 24 24" fill="currentColor" >
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <p className='px-2 font-bold text-gray-700 '>4.3</p>
              </div>
            </div>
          </div>
           {/* Item 1 */}
           <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
            <img
              src="img/burger.png"
              alt="Smokey BBQ Chicken Cheese Burger"
              className="w-full h-32 sm:h-48 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
              Smokey BBQ Chicken Cheese Burger
            </h3>
            <div className='flex items-center justify-between px-2'>
              <p className="text-gray-600 mx-2 my-1">Tk 240</p>
              <div className='flex items-center justify-between'>
              <svg  xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-purple-500 ' viewBox="0 0 24 24" fill="currentColor" >
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <p className='px-2 font-bold text-gray-700 '>4.3</p>
              </div>
            </div>
          </div>
           {/* Item 1 */}
           <div className="bg-white rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition">
            <img
              src="img/burger.png"
              alt="Smokey BBQ Chicken Cheese Burger"
              className="w-full h-32 sm:h-48 object-cover rounded-md"
            />
            <h3 className="text-sm font-semibold text-gray-800 mx-2 mt-2">
              Smokey BBQ Chicken Cheese Burger
            </h3>
            <div className='flex items-center justify-between px-2'>
              <p className="text-gray-600 mx-2 my-1">Tk 240</p>
              <div className='flex items-center justify-between'>
              <svg  xmlns="http://www.w3.org/2000/svg" className='h-5 w-5 text-purple-500 ' viewBox="0 0 24 24" fill="currentColor" >
              <path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd" />
              </svg>
              <p className='px-2 font-bold text-gray-700 '>4.3</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default RestaurantPage;
