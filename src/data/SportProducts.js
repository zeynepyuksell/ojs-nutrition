import React from "react";
import ProductCard from "../components/ProductCard"; // varsa

const sportProducts = [
  {
    id: 1,
    title: "Protein Bar",
    subtitle: "Pratik ve sağlıklı atıştırmalık",
    price: 79,
    image: "/assets/image/1.jpg.webp",
  },
  {
    id: 2,
    title: "Elektrolit İçecek",
    subtitle: "Hidrasyonu korur",
    price: 49,
    image: "/assets/image/2.jpg", // image yazımı düzeltildi
  },
];

const SportProducts = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Spor Ürünleri</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
        {sportProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SportProducts;
