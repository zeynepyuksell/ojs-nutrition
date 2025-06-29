import React from "react";

const ProductList = () => {
  const products = [
    { id: 1, title: "WHEN THEY PAKETİ", subtitle: "En Çok Tercih Edilen Protein Takviyesi", info: " ", image: "/assets/image/1 870.png",reviews: 7000, price: "549TL" },
    { id: 2, title: "FITNESS PAKETİ", subtitle: "En Sık Tüketilen takviyeler ", info: " ", image: "/assets/image/picture1.png", reviews: 7000, price: "799TL" },
    { id: 3, title: "GÜNLÜK VİTAMİN PAKETİ", subtitle: "En Sık Tüketilen takviyeler ", info: " ", image: "/assets/image/picture5.png", reviews: 6000, price: "549 TL" },
    { id: 4, title: "PRE-WORKOUT SUPREME", subtitle: "En Sık Tüketilen takviyeler ", info: " ", image: "/assets/image/picture4.png", reviews: 6733, price: "399 TL" },
    { id: 5, title: "CREAM OF RICE", subtitle:"En Sık Tüketilen takviyeler ", info: " ", image: "/assets/image/picture6.png", reviews: 5218, price: "5833 Yorum" },
    { id: 6, title: "CREATİNE PAKETİ", subtitle: "En Sık Tüketilen takviyeler ", info:" ", image: "/assets/image/picture2.png", reviews: 8453, price: "2390 TL" },
   
  ];

  return (
    <div className="p-14 max-w-full mx-auto bg-white rounded-lg shadow">
      <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-6 gap-6">
        {products.map((product) => (
          <div key={product.id} className="relative bg-white p-4 rounded-lg shadow flex flex-col items-center justify-center aspect-square">
            {/* Id etiket olarak sağ üst köşeye */}
            <span className="absolute top-2 right-2 bg-blue-600 text-white text-xs font-bold px-2 py-1 rounded">
              #{product.id}
            </span>

            <img
              src={product.image}
              alt={product.info || product.title}
              className="w-24 h-24 object-cover rounded-lg border border-gray-200 mb-4"
            />
            
            <div className="text-center">
              {product.title && (
                <h1 className="text-lg font-bold mb-1">{product.title}</h1>
              )}
              {product.subtitle && (
                <h2 className="text-sm font-semibold text-gray-600 mb-1">
                  {product.subtitle}
                </h2>
              )}
              {product.info && (
                <div className="mb-1">
                  <h3 className="font-medium text-gray-800">{product.info}</h3>
                  <p className="text-xs text-gray-500 mt-1">
                    {product.reviews?.toLocaleString()} Yorum
                  </p>
                  {product.price && (
                    <p
                      className={`text-sm mt-1 ${
                        String(product.price).includes("Yorum")
                          ? "text-gray-500"
                          : "text-green-600 font-medium"
                      }`}
                    >
                      {product.price}
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
