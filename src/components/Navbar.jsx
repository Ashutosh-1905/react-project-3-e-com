import React from "react";
import { NavLink } from "react-router";

const Navbar = () => {
  return (
    <nav className="w-60 min-h-screen bg-zinc-100 flex flex-col items-center p-5">
      <NavLink
        to="/create"
        className="w-full text-center py-2 px-4 mb-4 border rounded border-blue-200 text-blue-500 bg-white shadow hover:bg-blue-50 transition"
      >
        Add New Product
      </NavLink>

      <hr className="w-full my-2" />

      <NavLink to="/" className="text-xl font-bold mb-3">
        MyStore
      </NavLink>

      <div className="flex flex-col items-start w-full px-4 space-y-2 mb-4">
        <NavLink to="/" className="hover:underline">
          Home
        </NavLink>
        <NavLink to="/cart" className="hover:underline">
          Cart
        </NavLink>
      </div>

      <h1 className="text-lg font-semibold mb-3 w-full pl-4">
        Category Filter
      </h1>
      <ul className="w-[85%] p-3 rounded-lg bg-white shadow-sm">
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
