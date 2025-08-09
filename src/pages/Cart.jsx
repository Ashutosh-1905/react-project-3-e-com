import { useEffect, useState } from "react";
import { Link } from "react-router";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const cartData = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(cartData);
    setLoading(false);
  }, []);

  const removeItem = (id) => {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const updateQuantity = (id, newQuantity) => {
    if (newQuantity < 1) return;

    const updatedCart = cart.map((item) =>
      item.id === id ? { ...item, quantity: newQuantity } : item
    );

    setCart(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold mb-6">Your Shopping Cart</h1>

        {cart.length === 0 ? (
          <div className="text-center py-10">
            <p className="text-lg mb-4">Your cart is empty</p>
            <Link
              to="/"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="bg-white rounded-lg shadow overflow-hidden">
            <div className="divide-y divide-gray-200">
              {cart.map((item) => (
                <div key={item.id} className="p-4 flex flex-col md:flex-row">
                  <div className="md:w-1/4 flex justify-center">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-32 object-contain"
                    />
                  </div>
                  <div className="md:w-1/2 md:pl-6 mt-4 md:mt-0">
                    <h2 className="text-lg font-semibold">
                      <Link
                        to={`/products/${item.id}`}
                        className="hover:underline"
                      >
                        {item.title}
                      </Link>
                    </h2>
                    <p className="text-gray-600 mt-1">${item.price}</p>
                  </div>
                  <div className="md:w-1/4 mt-4 md:mt-0 flex items-center justify-between">
                    <div className="flex items-center">
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity - 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded-l"
                      >
                        -
                      </button>
                      <span className="px-4 py-1 bg-gray-100">
                        {item.quantity}
                      </span>
                      <button
                        onClick={() =>
                          updateQuantity(item.id, item.quantity + 1)
                        }
                        className="px-2 py-1 bg-gray-200 rounded-r"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => removeItem(item.id)}
                      className="ml-4 text-red-600 hover:text-red-800"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-50 border-t border-gray-200">
              <div className="flex justify-between items-center">
                <span className="text-lg font-semibold">
                  Total: ${total.toFixed(2)}
                </span>
                <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded">
                  Proceed to Checkout
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
