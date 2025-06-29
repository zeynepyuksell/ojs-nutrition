import { useState } from "react";
import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

const testimonials = [
  {
    date: "03/05/24",
    review: "Beğendim gayet güzeldi",
    comment: "Ürün gayet güzel ama eksikliği bir süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    date: "03/05/24",
    review: "Beğendim gayet güzeldi",
    comment: "Ürün gayet güzel ama eksikliği bir süreden sonra bayabiliyor insanı teşekkürler."
  },
  {
    date: "03/05/24",
    review: "Beğendim gayet güzeldi",
    comment: "Ürün gayet güzel ama eksikliği bir süreden sonra bayabiliyor insanı teşekkürler."
  }
];

export default function OjsNutrition() {
  return (
    <div className="w-full text-white">
      {/* Hero Section */}
      <section className="relative w-full flex items-center justify-center h-[500px] bg-gradient-to-r from-black to-green-500 overflow-hidden">
        {/* Background Image */}
        <img
          src="/assets/i"
          alt="OJS Nutrition Background"
          className="absolute inset-0 w-full h-full object-cover"
          onError={(e) => {
            e.target.style.display = 'none';
          }}
        />
        
        {/* Fallback Background */}
        <div className="absolute inset-0 bg-gradient-to-"></div>
        
        <div className="absolute inset-0 bg-opacity-50"></div> {/* Karanlık efekt */}
        <div className="relative z-10 text-white font-bold text-5xl text-center">
          <h1 className="uppercase">OJS</h1>
          <h2 className="italic">Nutrition</h2>
        </div>
      </section>

     {/* Customer Reviews */}
      <section className="bg-white text-black py-10 px-5">
        <h3 className="text-center text-xl font-bold mb-5">GERÇEK MÜŞTERİ YORUMLARI</h3>
        <div className="flex flex-col md:flex-row justify-center items-center gap-5">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-gray-100 p-4 rounded-xl shadow-md max-w-xs hover:shadow-lg transition-shadow duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
            >
              <p className="text-sm text-gray-500">{item.date}</p>
              <h4 className="font-bold mt-2">{item.review}</h4>
              <p className="text-sm mt-1">{item.comment}</p>
            </motion.div>
          ))}
        </div>
        <div className="flex justify-center items-center gap-2 mt-5">
          <FaStar className="text-yellow-500" />
          <span className="font-bold">198453 Yorum</span>
        </div>
      </section>
    </div>
  );
}
