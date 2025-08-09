import React, { useEffect, useState } from 'react'
import api from '../services/api';

const Home = () => {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)


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
    };

    if (error) {
        return (
          <div className="text-center py-10 text-red-500">Error: {error}</div>
        );
    }
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product) => (
        <div
          key={product.id}
          className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
        >
          <img src={product.image} alt={product.title} />
          <h3 className="mt-3 text-sm font-semibold">{product.title}</h3>
          <p className="mt-2 text-green-600 font-bold">${product.price}</p>
        </div>
      ))}
    </div>
  );
}

export default Home