import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Star, Truck, Shield, Loader2 } from "lucide-react";
import BestsellerProducts from "../components/BestsellerProduct";
import CardComponent from "../components/CardComponent";
import HeroSection from "../components/HeroSection";
import OjsNutrition from "../components/OjsNutrition";

const cardData = [
  {
    id: 1,
    title: "PROTEİN",
    imagePath: "/assets/image/picture1.png",
    bgColor: "#bfdbfe",
  },
  {
    id: 2,
    title: "VİTAMİNLER",
    imagePath: "/assets/image/picture3.png",
    bgColor: "#fed7aa",
  },
  {
    id: 3,
    title: "SAĞLIK",
    imagePath: "/assets/image/picture4.png",
    bgColor: "#e5e7eb",
  },
  {
    id: 4,
    title: "SPOR GIDALARI",
    imagePath: "/assets/image/picture8.png",
    bgColor: "#f3f4f6",
  },
  {
    id: 5,
    title: "GIDA",
    imagePath: "/assets/image/picture9.png",
    bgColor: "#fca5a5",
  },
  {
    id: 6,
    title: "TÜM ÜRÜNLER",
    imagePath: "/assets/image/picture2.png",
    bgColor: "#a5b4fc",
  },
];

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Sayfa yüklendiğinde loading state'ini false yap
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <Loader2 className="w-12 h-12 text-blue-600 animate-spin mx-auto mb-4" />
          <p className="text-gray-600">Sayfa yükleniyor...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen">
      <HeroSection />
      
      {/* Hızlı Erişim Bölümü */}
      <section className="bg-gradient-to-r from-blue-50 to-indigo-50 py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Hızlı Erişim</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              İhtiyacınız olan ürünleri hızlıca bulun ve sipariş verin
            </p>
          </motion.div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-blue-100 rounded-full mb-4 mx-auto">
                <Star className="w-6 h-6 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Çok Satanlar</h3>
              <p className="text-gray-600 text-sm mb-4">En popüler ürünlerimizi keşfedin</p>
              <Link 
                to="/sale"
                className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium"
              >
                İncele <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-green-100 rounded-full mb-4 mx-auto">
                <Truck className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Hızlı Kargo</h3>
              <p className="text-gray-600 text-sm mb-4">Aynı gün kargo imkanı</p>
              <Link 
                to="/sale"
                className="inline-flex items-center text-green-600 hover:text-green-700 font-medium"
              >
                İncele <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 bg-purple-100 rounded-full mb-4 mx-auto">
                <Shield className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Güvenli Alışveriş</h3>
              <p className="text-gray-600 text-sm mb-4">%100 güvenli ödeme</p>
              <Link 
                to="/sale"
                className="inline-flex items-center text-purple-600 hover:text-purple-700 font-medium"
              >
                İncele <ArrowRight className="w-4 h-4 ml-1" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>
      
      <CardComponent data={cardData} />
      
      <div className="container mx-auto px-4 py-8">
        <BestsellerProducts />
      </div>
      
      <OjsNutrition />
    </div>
  );
};

export default HomePage;
