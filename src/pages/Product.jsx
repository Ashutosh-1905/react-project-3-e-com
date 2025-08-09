import React, { useEffect, useState } from 'react'
import api from '../services/api';
import { useParams } from 'react-router';

const Product = () => {
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const {id}  = useParams();

const addToCart = () => {
  const cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(product);
  localStorage.setItem("cart", JSON.stringify(cart));
  alert("Product added to cart!");
};

    useEffect(() => {
        const fetchProduct = async () => {
            try {

                const response = await api.get(`/products/${id}`);
                setProduct(response.data)
            } catch {
                setProduct(null);
            } finally {
                setLoading(false);
            }
        };

        fetchProduct();
    }, [id]);

   if (loading) {
     return (
       <div className="flex justify-center items-center h-screen">
         <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-600"></div>
       </div>
     );
   }

    if (!product) {
      return (
        <div className="flex justify-center items-center h-screen text-red-500 text-lg">
          Product not found or an error occurred.
        </div>
      );
    }


 return (
   <div className="bg-white p-6 rounded-lg shadow max-w-4xl mx-auto">
     <div className="flex flex-col md:flex-row gap-6">
       <img
         src={product?.image}
         alt={product?.title || "No title"}
         className="w-full md:w-1/3 h-80 object-contain"
       />
       <div className="flex-1">
         <h1 className="text-2xl font-bold">{product?.title}</h1>
         <p className="text-gray-600 mt-1">{product?.category}</p>
         <div className="text-2xl font-semibold text-green-600 mt-4">
           ${product.price}
         </div>
         <p className="mt-4 text-gray-700">{product.description}</p>

         <button
           onClick={() => {
             addToCart()
           }}
           className="mt-6 cursor-pointer bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded">
           Add to cart
         </button>
       </div>
     </div>
   </div>
 );
}

export default Product