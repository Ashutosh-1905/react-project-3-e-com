import React, { useEffect, useState } from "react";
import api from "../services/api";
import { Link } from "react-router";

const Home = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await api.get("/products");
        setProducts(response.data);
      } catch (err) {
        setError(err.message || "Something went wrong");
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="text-center py-10">Loading products...</div>;
  }

  if (error) {
    return <div className="text-center py-10 text-red-500">Error: {error}</div>;
  }

  return (
    <div className="flex flex-wrap justify-center gap-6 p-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition flex flex-col w-64 h-[350px]"
        >
          {/* Product Image - Links to Details */}
          <Link to={`/products/${product.id}`} className="block">
            <div className="flex items-center justify-center h-48">
              <img
                src={product.image}
                alt={product.title}
                className="max-h-full max-w-full object-contain"
              />
            </div>
            <h3 className="mt-3 text-sm font-semibold text-gray-900 line-clamp-2 h-[40px]">
              {product.title}
            </h3>
          </Link>

          {/* Price and Add to Cart */}
          <div className="mt-auto flex justify-between items-center">
            <span className="font-bold">${product.price}</span>
            <button
              onClick={() => {
                const cart = JSON.parse(localStorage.getItem("cart")) || [];
                const existingItem = cart.find(
                  (item) => item.id === product.id
                );

                if (existingItem) {
                  existingItem.quantity += 1;
                } else {
                  cart.push({ ...product, quantity: 1 });
                }

                localStorage.setItem("cart", JSON.stringify(cart));
                alert(`${product.title} added to cart!`);
              }}
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
