import React, { useEffect, useState } from "react";
import api from "../services/api";

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
          {/* Image container */}
          <div className="flex items-center justify-center h-48">
            <img
              src={product.image}
              alt={product.title}
              className="max-h-full max-w-full object-contain"
            />
          </div>

          {/* Product Title */}
          <h3 className="mt-3 text-sm font-semibold text-gray-900 line-clamp-2 h-[40px]">
            {product.title}
          </h3>

          {/* Price at bottom */}
          <p className="mt-auto text-green-600 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
};

export default Home;
