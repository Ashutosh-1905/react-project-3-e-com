import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-[15%] min-h-screen bg-zinc-100 flex flex-col items-center p-5">
      {/* Add Product Button */}
      <NavLink
        to="/create"
        className="w-full text-center py-2 px-4 mb-4 border rounded border-blue-200 text-blue-500 bg-white shadow hover:bg-blue-50 transition"
      >
        Add New Product
      </NavLink>

      <hr className="w-full my-2" />

      {/* Navigation Links */}
      <NavLink to="/" className="text-xl font-bold mb-3">
        MyStore
      </NavLink>
      <NavLink to="/" className="hover:underline mb-2">
        Home
      </NavLink>
      <NavLink to="/cart" className="hover:underline mb-4">
        Cart
      </NavLink>

      {/* Category Filter */}
      <h1 className="text-lg font-semibold mb-3 w-[80%]">Category Filter</h1>
      <ul className="w-[80%] p-3 rounded-lg bg-white shadow-sm">
        <li className="flex items-center mb-3 cursor-pointer hover:opacity-80">
          <span className="rounded-full w-4 h-4 bg-blue-300 mr-2"></span> Cart-1
        </li>
        <li className="flex items-center mb-3 cursor-pointer hover:opacity-80">
          <span className="rounded-full w-4 h-4 bg-red-300 mr-2"></span> Cart-2
        </li>
        <li className="flex items-center cursor-pointer hover:opacity-80">
          <span className="rounded-full w-4 h-4 bg-green-300 mr-2"></span>{" "}
          Cart-3
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
