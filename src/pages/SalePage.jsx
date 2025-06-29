import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Filter, 
  Star, 
  ShoppingCart, 
  Heart, 
  Eye, 
  Percent, 
  TrendingDown,
  Search,
  SlidersHorizontal,
  Check,
  X
} from "lucide-react";
import { useCart } from "../context/CartContext";

const saleProducts = [
  {
    id: 1,
    name: "Dumbull Seti",
    category: "Kıyafet",
    image: "/assets/image/dumbull.jpg",
    price: 700,
    oldPrice: 850,
    rating: 4.6,
    discount: 18,
    inStock: true,
    isNew: false,
  },
  {
    id: 2,
    name: "Koşu Bandı",
    category: "Spor Aletleri",
    image: "/assets/image/kosu.jpg",
    price: 3200,
    oldPrice: 5300,
    rating: 4.8,
    discount: 40,
    inStock: true,
    isNew: true,
  },
  {
    id: 3,
    name: "Sporcu Tişörtü",
    category: "Kıyafet",
    image: "/assets/image/tshırt.jpeg",
    price: 550,
    oldPrice: 800,
    rating: 4.4,
    discount: 31,
    inStock: true,
    isNew: false,
  },
  {
    id: 4,
    name: "Spor Ayakkabı",
    category: "Spor Aletleri",
    image: "/assets/image/shoes.jpeg",
    price: 690,
    oldPrice: 1550,
    rating: 4.7,
    discount: 55,
    inStock: true,
    isNew: false,
  },
  {
    id: 5,
    name: "Yoga Bant",
    category: "Spor Aletleri",
    image: "/assets/image/band.jpeg",
    price: 400,
    oldPrice: 550,
    rating: 4.7,
    discount: 27,
    inStock: false,
    isNew: true,
  },
  {
    id: 6,
    name: "Vitamin Bar",
    category: "Beslenme",
    image: "/assets/image/bar.png",
    price: 100,
    oldPrice: 180,
    rating: 4.7,
    discount: 44,
    inStock: true,
    isNew: false,
  },
  {
    id: 7,
    name: "Bar Seti",
    category: "Spor Aletleri",
    image: "/assets/image/set.jpg",
    price: 150,
    oldPrice: 220,
    rating: 4.7,
    discount: 32,
    inStock: true,
    isNew: false,
  },
];

const categories = ["Tümü", "Kıyafet", "Spor Aletleri", "Beslenme"];

const SalePage = () => {
  const [selectedCategory, setSelectedCategory] = useState("Tümü");
  const [priceRange, setPriceRange] = useState({ min: 0, max: 6000 });
  const [sortBy, setSortBy] = useState("default");
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilters, setShowFilters] = useState(false);
  const [notification, setNotification] = useState(null);
  
  const { addToCart, isInCart, getCartCount } = useCart();

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
  };

  const handlePriceChange = (e) => {
    const { name, value } = e.target;
    setPriceRange((prev) => ({
      ...prev,
      [name]: Number(value),
    }));
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    setNotification({
      type: 'success',
      message: `${product.name} sepete eklendi!`,
      product: product
    });
    
    // 3 saniye sonra bildirimi kapat
    setTimeout(() => {
      setNotification(null);
    }, 3000);
  };

  const filteredProducts = saleProducts
    .filter((product) => {
      const inCategory = selectedCategory === "Tümü" || product.category === selectedCategory;
      const inPriceRange = product.price >= priceRange.min && product.price <= priceRange.max;
      const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
      return inCategory && inPriceRange && matchesSearch;
    })
    .sort((a, b) => {
      switch (sortBy) {
        case "price-low":
          return a.price - b.price;
        case "price-high":
          return b.price - a.price;
        case "rating":
          return b.rating - a.rating;
        case "discount":
          return b.discount - a.discount;
        default:
          return 0;
      }
    });

  const calculateDiscount = (oldPrice, newPrice) => {
    return Math.round(((oldPrice - newPrice) / oldPrice) * 100);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-orange-50 to-yellow-50">
      {/* Notification */}
      <AnimatePresence>
        {notification && (
          <motion.div
            initial={{ opacity: 0, y: -100, x: "-50%" }}
            animate={{ opacity: 1, y: 20, x: "-50%" }}
            exit={{ opacity: 0, y: -100, x: "-50%" }}
            className="fixed top-4 left-1/2 z-50 bg-white rounded-xl shadow-2xl border border-green-200 p-4 max-w-sm"
          >
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-green-100 rounded-full flex items-center justify-center">
                <Check className="w-5 h-5 text-green-600" />
              </div>
              <div className="flex-1">
                <p className="font-semibold text-gray-800">{notification.message}</p>
                <p className="text-sm text-gray-600">Sepetinizde {getCartCount()} ürün var</p>
              </div>
              <button
                onClick={() => setNotification(null)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-5 h-5" />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Header Section */}
      <div className="bg-gradient-to-r from-red-600 to-orange-600 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-white/20 rounded-full mb-6"
            >
              <TrendingDown className="w-10 h-10" />
            </motion.div>
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              Büyük İndirim
            </h1>
            <p className="text-xl md:text-2xl opacity-90 mb-8">
              %70'e varan indirimlerle sağlıklı yaşam ürünleri
            </p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="flex flex-wrap justify-center gap-4 text-sm"
            >
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-semibold">500+</span> Ürün
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-semibold">%70</span> İndirim
              </div>
              <div className="bg-white/20 px-4 py-2 rounded-full">
                <span className="font-semibold">24s</span> Kargo
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="bg-white rounded-2xl shadow-lg p-6 mb-8"
        >
          {/* Search and Sort */}
          <div className="flex flex-col md:flex-row gap-4 mb-6">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Ürün ara..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              />
            </div>
            <div className="flex gap-2">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-red-500 focus:border-transparent"
              >
                <option value="default">Sıralama</option>
                <option value="price-low">Fiyat (Düşük-Yüksek)</option>
                <option value="price-high">Fiyat (Yüksek-Düşük)</option>
                <option value="rating">En Yüksek Puan</option>
                <option value="discount">En Yüksek İndirim</option>
              </select>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="px-4 py-3 bg-red-600 text-white rounded-xl hover:bg-red-700 transition-colors flex items-center gap-2"
              >
                <SlidersHorizontal className="w-5 h-5" />
                Filtreler
              </button>
            </div>
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2 mb-4">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategoryChange(category)}
                className={`px-4 py-2 rounded-full transition-all duration-300 ${
                  selectedCategory === category
                    ? "bg-red-600 text-white shadow-lg"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="border-t pt-4"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Fiyat Aralığı
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      name="min"
                      value={priceRange.min}
                      onChange={handlePriceChange}
                      placeholder="Min"
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                    <span className="flex items-center text-gray-500">-</span>
                    <input
                      type="number"
                      name="max"
                      value={priceRange.max}
                      onChange={handlePriceChange}
                      placeholder="Max"
                      className="flex-1 px-3 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-red-500 focus:border-transparent"
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </motion.div>

        {/* Products Grid */}
        <div className="mb-8">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              {filteredProducts.length} ürün bulundu
            </h2>
          </div>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {filteredProducts.map((product, index) => (
                <motion.div
                  key={product.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 group"
                >
                  {/* Product Image */}
                  <div className="relative">
                    <div className="w-full h-56 overflow-hidden bg-gray-50">
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
                    
                    {/* Discount Badge */}
                    <div className="absolute top-3 left-3 bg-red-600 text-white px-2 py-1 rounded-full text-sm font-bold flex items-center gap-1">
                      <Percent className="w-3 h-3" />
                      %{product.discount}
                    </div>

                    {/* New Badge */}
                    {product.isNew && (
                      <div className="absolute top-3 right-3 bg-green-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                        YENİ
                      </div>
                    )}

                    {/* Stock Badge */}
                    {!product.inStock && (
                      <div className="absolute top-3 right-3 bg-gray-600 text-white px-2 py-1 rounded-full text-sm font-bold">
                        TÜKENDİ
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                        <Heart className="w-4 h-4 text-gray-600" />
                      </button>
                      <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg hover:bg-gray-50 transition-colors">
                        <Eye className="w-4 h-4 text-gray-600" />
                      </button>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="p-4">
                    <div className="mb-2">
                      <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded-full">
                        {product.category}
                      </span>
                    </div>
                    
                    <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">
                      {product.name}
                    </h3>
                    
                    <div className="flex items-center gap-1 mb-3">
                      <Star className="w-4 h-4 text-yellow-400 fill-current" />
                      <span className="text-sm text-gray-600">{product.rating}</span>
                    </div>
                    
                    <div className="flex items-center justify-between">
                      <div>
                        <span className="text-lg font-bold text-red-600">
                          ₺{product.price.toLocaleString()}
                        </span>
                        <span className="text-sm text-gray-500 line-through ml-2">
                          ₺{product.oldPrice.toLocaleString()}
                        </span>
                      </div>
                      
                      <button 
                        onClick={() => handleAddToCart(product)}
                        className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 transform hover:scale-105 ${
                          isInCart(product.id)
                            ? "bg-green-600 text-white hover:bg-green-700"
                            : "bg-red-600 text-white hover:bg-red-700"
                        }`}
                      >
                        {isInCart(product.id) ? (
                          <Check className="w-4 h-4" />
                        ) : (
                          <ShoppingCart className="w-4 h-4" />
                        )}
                      </button>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <div className="text-gray-400 mb-4">
                <Search className="w-16 h-16 mx-auto" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">
                Ürün bulunamadı
              </h3>
              <p className="text-gray-500">
                Filtrelerinize uygun ürün bulunamadı. Lütfen farklı kriterler deneyin.
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SalePage;
