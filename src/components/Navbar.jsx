import { ShoppingCart, User } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="w-full border-b bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <div className="text-xl font-bold italic">
          OJS <span className="font-normal">NUTRITION</span>
        </div>
        <div className="flex w-1/3 border rounded-lg overflow-hidden">
          <input type="text" placeholder="Aradığınız ürünü yazınız" className="flex-1 p-2 border-none outline-none" />
          <button className="px-4 bg-gray-700 text-white">Ara</button>
        </div>
        <div className="flex items-center space-x-4">
          <button className="flex items-center space-x-2 border px-4 py-2 rounded-md">
            <User size={20} />
            <span>Hesap</span>
          </button>
          <button className="relative border px-4 py-2 rounded-md">
            <ShoppingCart size={20} />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full">0</span>
          </button>
        </div>
      </div>
      <div className="bg-black text-white">
        <div className="container mx-auto flex justify-between p-3 text-sm">
          {['PROTEİN', 'SPOR GIDALARI', 'SAĞLIK', 'GIDA', 'VİTAMİN', 'TÜM ÜRÜNLER'].map((item, index) => (
            <span key={index} className="cursor-pointer hover:underline">{item}</span>
          ))}
        </div>
      </div>
      <div className="bg-gray-100 text-center text-sm py-2">
        <span className="mx-4">📦 AYNI GÜN KARGO - 16:00'dan önceki siparişlerde</span>
        <span className="mx-4">😊 ÜCRETSİZ KARGO - 100 TL üzeri siparişlerde</span>
        <span className="mx-4">🔒 GÜVENLİ ALIŞVERİŞ - 1.000.000+ mutlu müşteri</span>
      </div>
    </nav>
  );
};

export default Navbar;