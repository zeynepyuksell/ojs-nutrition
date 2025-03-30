import React from "react";
import BestsellerProducts from "../components/BestsellerProduct";
import CardComponent from "../components/CardComponent";
import HeroSection from "../components/HeroSection";
import OjsNutrition from "../components/OjsNutrition";

const cardData = [
  {
    id: 1,
    title: "PROTEİN",
    imagePath: "/assets/image/png-1.png",
    bgColor: "bg-blue-200",
  },
  {
    id: 2,
    title: "VİTAMİNLER",
    imagePath: "/assets/image/2 52.png",
    bgColor: "bg-orange-100",
  },
  {
    id: 3,
    title: "SAĞLIK",
    imagePath: "/assets/image/3 101.png",
    bgColor: "bg-gray-200",
  },
  {
    id: 4,
    title: "SPOR GIDALARI",
    imagePath: "/assets/image/5 101.png",
    bgColor: "bg-gray-100",
  },
  {
    id: 5,
    title: "GIDA",
    imagePath: "/assets/image/7 100.png",
    bgColor: "bg-blue-200",
  },
  {
    id: 6,
    title: "TÜM ÜRÜNLER",
    imagePath: "/assets/image/amino-asit-paket.png",
    bgColor: "bg-blue-300",
  },
];

const HomePage = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <CardComponent data={cardData} />
      <div className="container mx-auto px-4 py-8">
        <BestsellerProducts />
      </div>
      <OjsNutrition />
    </div>
  );
};

export default HomePage;
