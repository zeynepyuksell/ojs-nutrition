// src/components/ProductCard.jsx

import React from "react";
import { FaStar } from "react-icons/fa";

const ProductCard = ({ product }) => {
  return (
    <div className="border rounded-lg p-4 shadow hover:scale-105 transition">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-contain mb-4"
      />
      <h2 className="text-lg font-semibold">{product.name}</h2>
      <div className="flex items-center text-yellow-400 my-1">
        {Array.from({ length: 5 }).map((_, index) => (
          <FaStar
            key={index}
            className={index < Math.round(product.rating) ? "text-yellow-400" : "text-gray-300"}
          />
        ))}
        <span className="ml-2 text-gray-600">({product.reviews})</span>
      </div>
      <div className="mt-2">
        {product.oldPrice && (
          <span className="text-sm text-gray-500 line-through mr-2">{product.oldPrice} TL</span>
        )}
        <span className="text-lg font-bold">{product.price} TL</span>
      </div>
      <button className="mt-3 w-full bg-blue-600 text-white py-1 rounded hover:bg-blue-700">
        Sepete Ekle
      </button>
    </div>
  );
};

export default ProductCard;
