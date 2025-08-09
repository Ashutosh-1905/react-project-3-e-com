import { useEffect, useState } from "react";
import { useParams, Link, useNavigate } from "react-router";
import api from "../services/api";

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await api.get(`/products/${id}`);
        setProduct(res.data);
      } catch {
        setProduct(null);
      } finally {
        setLoading(false);
      }
    };
    fetchProduct();
  }, [id]);

  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cart.findIndex((item) => item.id === product.id);

    if (existingItemIndex >= 0) {
      cart[existingItemIndex].quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }

    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${quantity} ${product.title} added to cart!`);
    navigate("/cart"); // Redirect to cart after adding
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        Loading...
      </div>
    );
  }

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen">
        Product not found
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-gray-50">
      <div className="container mx-auto p-6">
        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="md:flex">
            {/* Product Image */}
            <div className="md:w-1/2 p-6 flex justify-center">
              <img
                src={product.image}
                alt={product.title}
                className="h-96 object-contain cursor-pointer"
                onClick={() => window.open(product.image, "_blank")} // Opens image in new tab
              />
            </div>

            {/* Product Details */}
            <div className="md:w-1/2 p-6">
              <h1 className="text-2xl font-bold mb-2">{product.title}</h1>
              <div className="flex items-center mb-4">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2.5 py-0.5 rounded">
                  {product.category}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center mb-4">
                <div className="flex items-center">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${
                        i < Math.floor(product.rating?.rate || 0)
                          ? "text-yellow-300"
                          : "text-gray-300"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                  <span className="text-gray-600 ml-2">
                    {product.rating?.count} reviews
                  </span>
                </div>
              </div>

              <p className="text-gray-700 mb-6">{product.description}</p>

              <div className="flex items-center mb-6">
                <span className="text-3xl font-bold text-gray-900">
                  ${product.price}
                </span>
              </div>

              {/* Quantity Selector */}
              <div className="flex items-center mb-6">
                <span className="mr-3">Quantity:</span>
                <button
                  onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                  className="px-3 py-1 bg-gray-200 rounded-l"
                >
                  -
                </button>
                <span className="px-4 py-1 bg-gray-100">{quantity}</span>
                <button
                  onClick={() => setQuantity((q) => q + 1)}
                  className="px-3 py-1 bg-gray-200 rounded-r"
                >
                  +
                </button>
              </div>

              {/* Add to Cart Button */}
              <button
                onClick={addToCart}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 px-4 rounded transition"
              >
                Add to Cart
              </button>

              {/* View Cart Button */}
              <Link
                to="/cart"
                className="block mt-4 text-center text-blue-600 hover:underline"
              >
                View Cart →
              </Link>
            </div>
          </div>
        </div>

        {/* Similar Products Section */}
        <div className="mt-8">
          <h2 className="text-xl font-semibold mb-4">Similar Products</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {/* You would map through similar products here */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
