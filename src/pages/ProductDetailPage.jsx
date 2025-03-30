import React from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";

const ProductDetailPage = () => {
  const { id } = useParams();

  const product = products.find((prod) => prod.id === Number(id));

  if (!product) {
    console.log("No product found for ID:", id);
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Ürün Detay Sayfası */}
      <div className="container mx-auto px-4 py-8">
        {product ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              {/* Sol taraf - Ürün resmi */}
              <div className="w-full md:w-1/2 flex justify-center">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl h-auto object-contain"
                />
              </div>

              {/* Sağ taraf - Ürün detayları */}
              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800">
                  {product.name}
                </h2>
                <div className="text-yellow-500 mt-2">
                  {"★".repeat(5)} {product.rating} Yorum
                </div>
                <p className="mt-4 text-gray-600">{product.description}</p>

                {/* Aroma Seçenekleri */}
                <h4 className="mt-6 font-semibold text-gray-800">Aroma:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.flavors.map((flavor) => (
                    <div
                      key={flavor}
                      className="p-2 border border-gray-300 rounded hover:border-blue-500 cursor-pointer"
                    >
                      {flavor}
                    </div>
                  ))}
                </div>

                {/* Boyut Seçenekleri */}
                <h4 className="mt-6 font-semibold text-gray-800">Boyut:</h4>
                <div className="flex flex-wrap gap-2 mt-2">
                  {product.sizes.map((size) => (
                    <div
                      key={size}
                      className="p-2 border border-gray-300 rounded hover:border-blue-500 cursor-pointer"
                    >
                      {size}
                    </div>
                  ))}
                </div>

                {/* Fiyat ve İndirim */}
                <div className="mt-6">
                  <p className="text-2xl font-bold text-gray-900">
                    {product.price}
                  </p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      {product.oldPrice}
                    </p>
                  )}
                  {product.discount && (
                    <p className="text-sm text-red-500 font-semibold">
                      {product.discount}
                    </p>
                  )}
                </div>

                {/* Sepete Ekle Butonu */}
                <button className="mt-6 w-full py-3 px-6 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300 font-semibold">
                  SEPETE EKLE
                </button>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-2xl font-bold text-red-500">Ürün bulunamadı.</p>
            <p className="text-gray-600 mt-2">ID: {id}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductDetailPage;
