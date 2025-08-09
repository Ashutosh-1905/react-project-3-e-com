import React from "react";

import { Route, Routes } from "react-router";
import Details from "./components/Details";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Product from "./pages/Product";
import NotFound from "./pages/NotFound";
import Cart from "./pages/Cart";

const App = () => {
  return (
    <div className="min-h-screen bg-gray-50 flex">
      <Navbar />
      <main className="container mx-auto p-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/details/:id" element={<Details />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
