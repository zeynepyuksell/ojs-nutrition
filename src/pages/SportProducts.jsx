import React from "react";
import ProductCard from "../components/ProductCard";

const sportProducts = [
  {
    id: 1,
    name: "Protein Bar",
    subtitle: "Pratik ve sağlıklı atıştırmalık",
    price: 3500,
    oldPrice: 4200,
    image: "/assets/image/1.jpg.webp",
    reviews: 24,
    discount: 17,
    inStock: true,
  },
  {
    id: 2,
    name: "Elektrolit İçecek",
    subtitle: "Hidrasyonu korur",
    price: 4000,
    oldPrice: 4800,
    image: "/assets/image/2.jpg",
    reviews: 18,
    discount: 17,
    inStock: true,
  },
  {
    id: 3,
    name: "Amino Asit Kompleksi",
    subtitle: "Kas gelişimi için",
    price: 7780,
    oldPrice: 9200,
    image: "/assets/image/3.jpg.webp",
    reviews: 32,
    discount: 15,
    inStock: true,
  },
  {
    id: 4,
    name: "BCAA Tozu",
    subtitle: "Kas yorgunluğunu azaltır",
    price: 4060,
    oldPrice: 5200,
    image: "/assets/image/4.jpg",
    reviews: 28,
    discount: 22,
    inStock: false,
  },
  {
    id: 5,
    name: "Kreatin Monohidrat",
    subtitle: "Güç artışı sağlar",
    price: 2000,
    oldPrice: 2500,
    image: "/assets/image/5.jpg",
    reviews: 45,
    discount: 20,
    inStock: true,
  },
  {
    id: 6,
    name: "Glutamin Tozu",
    subtitle: "Bağışıklık sistemi desteği",
    price: 1200,
    oldPrice: 1800,
    image: "/assets/image/6.webp",
    reviews: 19,
    discount: 33,
    inStock: true,
  },
];

const SportProducts = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">SPOR ÜRÜNLERİ</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {sportProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </div>
  );
};

export default SportProducts;
