import React from "react"
import bannerImage from "/assets/image/banner.png"

const HeroSection = () => {
    return(
        <div className="w-full relative">
            <img 
                src={bannerImage}
                alt="OJS Nutrition Banner"
                className="w-full h-auto object-cover"
                onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                }}
            />
            {/* Fallback Banner */}
            <div className="w-full h-64 bg-gradient-to-r from-blue-600 to-green-600 hidden items-center justify-center">
                <div className="text-center text-white">
                    <h1 className="text-4xl font-bold mb-2">OJS NUTRITION</h1>
                    <p className="text-xl">Sağlıklı Yaşam İçin</p>
                </div>
            </div>
        </div>
    )
}

export default HeroSection