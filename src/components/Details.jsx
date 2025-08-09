import React from "react";
import { NavLink } from "react-router";

const Details = () => {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex justify-center items-center py-10 px-4">
      <div className="max-w-4xl w-full bg-white rounded-2xl shadow-lg p-6 md:p-10 flex flex-col md:flex-row gap-8">
        {/* Product Image */}
        <div className="flex-1 flex justify-center items-center">
          <img
            src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png"
            alt="Product"
            className="w-full max-w-sm rounded-lg shadow-md hover:scale-105 transition-transform duration-300"
          />
        </div>

        {/* Product Details */}
        <div className="flex-1 flex flex-col gap-5">
          <h1 className="text-3xl font-bold text-gray-900">Product Title</h1>
          <h2 className="text-lg font-medium text-gray-500">Category</h2>
          <span className="text-2xl font-semibold text-green-600">$120.00</span>
          <p className="text-gray-600 leading-relaxed">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 mt-4">
            <NavLink
              to="/edit"
              className="px-6 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg shadow-md transition-colors"
            >
              Edit
            </NavLink>
            <NavLink
              to="/delete"
              className="px-6 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg shadow-md transition-colors"
            >
              Delete
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
