import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";
import { ShoppingCart, Check } from "lucide-react";
import { useCart } from "../context/CartContext";

const ProductCard = ({ product }) => {
  const { addToCart, isInCart } = useCart();

  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addToCart(product);
  };

  return (
    <div className="border rounded-lg p-4 shadow-md w-full text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full relative group">
      <Link to={`/product/${product.id}`} className="flex flex-col h-full">
        {/* İndirim Etiketi */}
        {product.discount && (
          <div className="absolute top-2 left-2 bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full z-10">
            %{product.discount}
          </div>
        )}
        
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

        {/* Ürün Görseli - Yüksek Kalite */}
        <div className="w-full h-48 overflow-hidden rounded-lg shadow-sm bg-gray-50">
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
          <div className="w-full h-full items-center justify-center text-gray-400 text-sm hidden">
            <div className="text-center">
              <div className="w-16 h-16 bg-gray-200 rounded-full mx-auto mb-2"></div>
              <p>Görsel Yüklenemedi</p>
            </div>
          </div>
        </div>
        
        {/* Ürün Bilgileri */}
        <div className="flex flex-col flex-grow">
          <h3 className="text-lg font-bold mt-4 text-gray-800 line-clamp-2">{product.name}</h3>
          <p className="text-sm text-gray-600 mt-2 line-clamp-2">{product.description}</p>
          
          {/* Fiyat Bilgisi */}
          <div className="mt-4">
            <p className="text-lg font-bold text-gray-900">
              ₺{product.price}{" "}
              {product.oldPrice && (
                <span className="text-gray-500 line-through text-sm ml-2">
                  ₺{product.oldPrice}
                </span>
              )}
            </p>
          </div>
        </div>
      </Link>
    </div>
  );
};

const BestsellerProducts = () => (
  <div className="text-center container mx-auto px-4">
    <h1 className="text-3xl font-bold my-8 text-gray-800">ÇOK SATANLAR</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
    
    {/* Tümünü İncele Butonu */}
    <div className="mt-12">
      <Link 
        to="/sale"
        className="inline-flex items-center px-8 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
      >
        Tümünü İncele
        <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
        </svg>
      </Link>
    </div>
  </div>
);

export default BestsellerProducts;
