import { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const HeroSection = () => {
  const [address, setAddress] = useState("");

  return (
    <div className="relative w-full bg-[#EDF3FC] text-gray-900 h-screen flex flex-col">
      {/* Hero Section */}
      <div className=" flex-4 mx-auto px-6 lg:px-12 flex flex-col lg:flex-row items-center">
        {/* Text Section */}
        <div className="lg:w-1/2 text-center lg:text-left">
          <h2 className="text-4xl font-bold leading-tight">
            Many Restaurants in <span className="text-red-500">1 Order</span>
          </h2>
          <p className="text-gray-600 mt-4">
            Order from different restaurants and get them all in one delivery.
          </p>

          {/* Address Input */}
          <div className="mt-6 flex items-center border border-gray-300 rounded-lg px-3 py-2 w-full max-w-md">
            <FaMapMarkerAlt className="text-blue-600 mr-2" />
            <input
              type="text"
              placeholder="Enter Delivery Address"
              className="flex-1 outline-none"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <button className="bg-red-500 text-white px-4 py-2 rounded-lg">
              ➝
            </button>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            <a href="#" className="text-red-500">
              Sign in
            </a>{" "}
            for your recent address
          </p>
        </div>

        {/* Image Section */}
        <div className="lg:w-1/2 flex justify-center mt-10 lg:mt-0">
          <img
            src="biryani.png"
            alt="Food Delivery Illustration"
            className="w-180"
          />
        </div>
      </div>

      {/* CTA Buttons */}
      <div className="flex flex-1 justify-around w-full lg:px-80 place-content-center  mt-12 flex-wrap">
        <div>
          <div className="hover:bg-red-500 px-6 bg-white text-black hover:text-white py-4 rounded-t-lg shadow-md">
            <h3 className="font-bold">I am hungry!</h3>
            <p className="text-sm">Order directly from your favorites!</p>
            <a href="#" className="underline text-sm">
              Order Now →
            </a>
          </div>
          <div className="h-1 bg-red-500"></div>
        </div>

        <div>
          <div className="hover:bg-blue-600  px-6 bg-white text-black hover:text-white py-4 rounded-t-lg shadow-md">
            <h3 className="font-bold">Marketplace</h3>
            <p className="text-sm">A collection of local businesses!</p>
            <a href="#" className="text-blue-600 underline text-sm">
              Order Now →
            </a>
          </div>
          <div className="h-1 bg-blue-600"></div>
        </div>

        <div>
          <div className="hover:bg-yellow-400  px-6 bg-white  text-black hover:text-white py-4 rounded-t-lg shadow-md">
            <h3 className="font-bold">Join 1Delivery</h3>
            <p className="text-sm">Become a part of the community!</p>
            <a href="#" className="text-red-300 underline text-sm">
              Sign Up
            </a>
          </div>
          <div className="h-1 bg-yellow-400"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
