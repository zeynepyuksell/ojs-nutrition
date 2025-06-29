import React, { useState } from "react";
import { Link } from "react-router-dom";

const CardComponent = ({ data }) => {
  const [imageErrors, setImageErrors] = useState({});

  // Kategori başlıklarına göre yönlendirme linkleri
  const getCategoryLink = (title) => {
    switch (title) {
      case "PROTEİN":
        return "/protein";
      case "VİTAMİNLER":
        return "/saglik";
      case "SAĞLIK":
        return "/saglik";
      case "SPOR GIDALARI":
        return "/spor-gidalari";
      case "GIDA":
        return "/spor-gidalari";
      case "TÜM ÜRÜNLER":
        return "/sale";
      default:
        return "/";
    }
  };

  const handleImageError = (itemId) => {
    setImageErrors(prev => ({
      ...prev,
      [itemId]: true
    }));
    console.log(`Görsel yüklenemedi: ${itemId}`);
  };

  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {data.map((item) => (
        <div
          key={item.id}
          className="relative w-full h-48 rounded-lg overflow-hidden group hover:shadow-lg transition-all duration-300 transform hover:scale-105"
        >
          {/* Arka Plan Görseli */}
          {!imageErrors[item.id] && (
            <img
              src={item.imagePath}
              alt={item.title}
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onError={() => handleImageError(item.id)}
              onLoad={() => console.log(`Görsel yüklendi: ${item.imagePath}`)}
            />
          )}
          
          {/* Fallback Background */}
          {imageErrors[item.id] && (
            <div 
              className="absolute inset-0 w-full h-full flex items-center justify-center"
              style={{ backgroundColor: item.bgColor || '#f3f4f6' }}
            >
              <div className="text-center text-gray-600">
                <div className="w-16 h-16 bg-gray-300 rounded-full mx-auto mb-2 flex items-center justify-center">
                  <span className="text-2xl font-bold">{item.title.charAt(0)}</span>
                </div>
                <p className="text-sm">{item.title}</p>
              </div>
            </div>
          )}

          {/* Overlay */}
          <div className="absolute inset-0 bg-opacity-40 group-hover:bg-opacity-30 transition-all duration-300"></div>

          {/* İçerik (Başlık ve Buton) */}
          <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
            <h2 className="font-bold text-lg md:text-xl mb-4 drop-shadow-lg text-black">{item.title}</h2>
            <Link 
              to={getCategoryLink(item.title)}
              className="bg-green-600 text-white px-6 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-green-700 hover:scale-105 transform shadow-lg"
            >
              İNCELE
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CardComponent;
