import React from 'react'

const Navbar = () => {
  return (
    <nav className="w-[15%] h-full bg-zinc-100 flex flex-col items-center p-10  pt-5">
      <a
        className="py-3 px-5 border rounded border-blue-100 text-blue-300 bg-zinc-50"
        href="/create"
      >
        Add New Product
      </a>

      <hr className="w-[80%] my-3" />
      <h1 className="text-2xl mb-3 w-[80%] ">Category Filter</h1>
      <ul className="w-[80%] p-3 rounded-lg">
        <li className="flex items-center mb-3">
          <span className="rounded-full inline-block w-[15px] h-[15px] bg-blue-100 mr-2"></span>{" "}
          Cart-1
        </li>
        <li className="flex items-center mb-3">
          <span className="rounded-full inline-block w-[15px] h-[15px] bg-red-100 mr-2"></span>{" "}
          Cart-2
        </li>
        <li className="flex items-center mb-3">
          <span className="rounded-full inline-block w-[15px] h-[15px] bg-green-100 mr-2"></span>{" "}
          Cart-3
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;