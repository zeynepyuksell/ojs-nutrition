import React from "react";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <div className="border rounded-lg p-4 shadow hover:scale-105 transition group">
      <div className="relative">
        {/* Ürün Görseli - Yüksek Kalite */}
        <div className="w-full h-56 overflow-hidden rounded-lg bg-gray-50 mb-4">
          <img 
            src={product.image} 
            alt={product.name} 
            className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500 ease-out"
            loading="lazy"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          {/* Fallback için placeholder */}
          <div className="w-full h-full  items-center justify-center text-gray-400 text-sm hidden">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <p>Görsel Yüklenemedi</p>
            </div>
          </div>
        </div>
        
        {/* Sepete Ekle Butonu */}
        <button
          onClick={handleAddToCart}
          className={`absolute top-2 right-2 p-2 rounded-full transition-all duration-300 transform hover:scale-110 z-10 ${
            isInCart(product.id)
              ? "bg-green-600 text-white hover:bg-green-700"
              : "bg-blue-600 text-white hover:bg-blue-700"
          }`}
        >
          {isInCart(product.id) ? (
            <Check className="w-4 h-4" />
          ) : (
            <ShoppingCart className="w-4 h-4" />
          )}
        </button>
      </div>
      
      <h2 className="text-lg font-semibold line-clamp-2">{product.name}</h2>
      <p className="text-sm text-gray-600">{product.reviews} Yorum</p>
      <div className="mt-2">
        {product.discount ? (
          <>
            <span className="line-through text-red-500 mr-2">{product.oldPrice} TL</span>
            <span className="font-bold">{product.price} TL</span>
          </>
        ) : (
          <span className="font-bold">{product.price} TL</span>
        )}
      </div>
    </div>
  );
};

export default ProductCard;
