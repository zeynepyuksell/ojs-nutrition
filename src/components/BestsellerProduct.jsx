import React from "react";
import { Link } from "react-router-dom";
import { products } from "../data/products";

const ProductCard = ({ product }) => (
  <div className="border rounded-lg p-4 shadow-md w-full text-center hover:shadow-lg transition-shadow duration-300 flex flex-col h-full">
    <Link to={`/product/${product.id}`} className="flex flex-col h-full">
      {/* İndirim Etiketi */}
      {product.discount && (
        <div className="absolute bg-red-600 text-white text-xs font-bold px-2 py-1 rounded-full transform -translate-y-1/2">
          {product.discount}
        </div>
      )}
      {/* Ürün Görseli */}
      <div className="w-full h-40 overflow-hidden rounded-lg shadow-sm">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>
      {/* Ürün Bilgileri */}
      <div className="flex flex-col flex-grow">
        <h3 className="text-lg font-bold mt-4 text-gray-800">{product.name}</h3>
        <p className="text-sm text-gray-600 mt-2">{product.description}</p>
        {/* Fiyat Bilgisi */}
        <div className="mt-4">
          <p className="text-lg font-bold text-gray-900">
            {product.price}{" "}
            {product.oldPrice && (
              <span className="text-gray-500 line-through text-sm ml-2">
                {product.oldPrice}
              </span>
            )}
          </p>
        </div>
      </div>
      {/* Sepete Ekle Butonu */}
      <div className="mt-auto pt-4">
        <button 
          className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors duration-300"
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          Sepete Ekle
        </button>
      </div>
    </Link>
  </div>
);

const BestsellerProducts = () => (
  <div className="text-center container mx-auto px-4">
    <h1 className="text-3xl font-bold my-8 text-gray-800">ÇOK SATANLAR</h1>
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-6">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);

export default BestsellerProducts;
