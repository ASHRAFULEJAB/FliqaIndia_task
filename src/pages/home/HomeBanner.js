import React from "react";
import hero from "../../assets/images/hero.png";

const HomeBanner = () => {
  return (
    <>
      <div className=" lg:ml-96">
        <h1
          class="max-w-lg text-xl  font-semibold text-center tracking-tight
         text-gray-800 xl:text-4xl dark:text-black lg:ml-48"
        >
          India’s Leading Creative Platform
        </h1>
        <p className="text-black lg:ml-56">
          Experience hassle free bookings. Trusted by 2500+ Customers
        </p>

        <div class="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row mb-6 lg:ml-32">
          <input
            id="email"
            type="text"
            class="px-32 py-2 text-gray-700 bg-white border rounded-3xl
                     dark:bg-white dark:text-gray-300 dark:border-gray-600 focus:border-blue-400
                      dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40
                       focus:ring-blue-300"
            placeholder="Search service, blog and many more…"
          />

          <button
            class="w-full px-10 py-2 text-sm font-medium tracking-wider 
              text-gray-100 transition-colors duration-300 transform md:w-auto 
              focus:outline-none bg-black rounded-3xl hover:bg-gray-700 focus:ring 
              focus:ring-gray-300 focus:ring-opacity-80"
          >
            Search
          </button>
        </div>
      </div>
      <img src={hero} alt="" className="w-full" />
    </>
  );
};

export default HomeBanner;
