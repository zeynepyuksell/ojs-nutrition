import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { products } from "../data/products";
import ProductList from "../components/ProductList";
import { FaStar } from "react-icons/fa";
import { ShoppingCart, Check, X } from "lucide-react";
import { useCart } from "../context/CartContext";

const testimonials = [
  {
    date: "2025-06-01",
    review: "Harika Ürün!",
    comment: "Koku çok kalıcı ve etkileyici, kesinlikle tekrar alırım.",
  },
  // Diğer yorumlar aynı şekilde tekrarlandığı için örnek olarak 3 tanesini bıraktım
  {
    date: "2025-06-02",
    review: "Mükemmel kalite!",
    comment: "Fiyatına göre performansı çok iyi, tavsiye ederim.",
  },
  {
    date: "2025-06-03",
    review: "Memnun kaldım.",
    comment: "Kargo hızlıydı ve paketleme özenliydi.",
  },
  {
    date: "2025-06-01",
    review: "Harika Ürün!",
    comment: "Etkileyici, kesinlikle tekrar alırım.",
  },
  {
    date: "2025-06-01",
    review: "Başarılı!",
    comment: "Paketlemesi çok özenliydi.",
  },
  {
    date: "2025-06-01",
    review: "Hızlı Teslimat",
    comment: "Çok hızlı ve sağlam geldi, kesinlikle tekrar alırım.",
  },
  {
    date: "2025-06-01",
    review: "Mükemmel!",
    comment: "Arkadaşımın önerisi üzerine aldım ve çok memnun kaldım.",
  },
  {
    date: "2025-06-01",
    review: "Harika!",
    comment: "Çok başarılı.",
  },
  {
    date: "2025-06-01",
    review: "Harika Ürün!",
    comment: "Sürekli kullanıyorum hiç sıkıntı yaşamadım.",
  },
];

const ProductDetailPage = () => {
  const { id } = useParams();
  const product = products.find((prod) => prod.id === Number(id));
  const { addToCart, isInCart } = useCart();
  const [selectedFlavor, setSelectedFlavor] = useState("");
  const [selectedSize, setSelectedSize] = useState("");

  if (!product) {
    console.log("No product found for ID:", id);
  }

  const handleAddToCart = () => {
    if (product) {
      addToCart(product);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-8">
      {/* Ürün Detayları */}
      <div className="container mx-auto px-4 py-8">
        {product ? (
          <div className="bg-white rounded-lg shadow-lg p-6">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
              <div className="w-full md:w-1/2 flex justify-center">
                <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-xl h-96 bg-gray-50 rounded-lg overflow-hidden flex items-center justify-center">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-contain p-4"
                    loading="lazy"
                    onError={(e) => {
                      e.target.style.display = 'none';
                      e.target.nextSibling.style.display = 'flex';
                    }}
                  />
                  {/* Fallback için placeholder */}
                  <div className="w-full h-full flex items-center justify-center text-gray-400 text-lg hidden">
                    <div className="text-center">
                      <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4"></div>
                      <p>Ürün Görseli Yüklenemedi</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-1/2">
                <h2 className="text-3xl font-bold text-gray-800">{product.name}</h2>
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
                      onClick={() => setSelectedFlavor(flavor)}
                      className={`p-2 border rounded cursor-pointer transition-colors ${
                        selectedFlavor === flavor
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-blue-500"
                      }`}
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
                      onClick={() => setSelectedSize(size)}
                      className={`p-2 border rounded cursor-pointer transition-colors ${
                        selectedSize === size
                          ? "border-blue-500 bg-blue-50"
                          : "border-gray-300 hover:border-blue-500"
                      }`}
                    >
                      {size}
                    </div>
                  ))}
                </div>

                {/* Fiyat Bilgisi */}
                <div className="mt-6">
                  <p className="text-2xl font-bold text-gray-900">₺{product.price}</p>
                  {product.oldPrice && (
                    <p className="text-sm text-gray-500 line-through">
                      ₺{product.oldPrice}
                    </p>
                  )}
                  {product.discount && (
                    <p className="text-sm text-red-500 font-semibold">
                      %{product.discount} İndirim
                    </p>
                  )}
                </div>

                {/* Sepete Ekle Butonu */}
                <button 
                  onClick={handleAddToCart}
                  className={`mt-6 w-full py-3 px-6 rounded-lg transition-all duration-300 font-semibold flex items-center justify-center gap-2 ${
                    isInCart(product.id)
                      ? "bg-green-600 text-white hover:bg-green-700"
                      : "bg-blue-600 text-white hover:bg-blue-700"
                  }`}
                >
                  {isInCart(product.id) ? (
                    <>
                      <Check className="w-5 h-5" />
                      SEPETE EKLENDİ
                    </>
                  ) : (
                    <>
                      <ShoppingCart className="w-5 h-5" />
                      SEPETE EKLE
                    </>
                  )}
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

      {/* Ürün Listesi */}
      <ProductList />

      {/* Müşteri Yorumları */}
      <section className="bg-white text-black py-10 px-5">
        <h3 className="text-center text-xl font-bold mb-5">
          GERÇEK MÜŞTERİ YORUMLARI
        </h3>
        <div className="flex flex-col items-center gap-5">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="bg-gray-100 p-4 rounded-xl shadow-md max-w-xl w-full"
            >
              <p className="text-sm text-gray-500">{item.date}</p>
              <h4 className="font-bold mt-2">{item.review}</h4>
              <p className="text-sm mt-1">{item.comment}</p>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-5">
          <FaStar className="text-yellow-500" />
          <span className="font-bold">198453 Yorum</span>
        </div>
      </section>
    </div>
  );
};

export default ProductDetailPage;
