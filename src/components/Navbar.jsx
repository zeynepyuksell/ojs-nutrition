import { ShoppingCart, User, LogIn, UserPlus, LogOut, Settings } from "lucide-react";
import { Link } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useAuth } from "../context/AuthContext";
import { useCart } from "../context/CartContext";

const Navbar = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const dropdownRef = useRef(null);
  const { user, logout } = useAuth();
  const { getCartCount } = useCart();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setShowAccountMenu(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  const handleLogout = () => {
    logout();
    setShowAccountMenu(false);
  };

  return (
    <nav className="w-full border-b bg-white shadow-md">
      <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
        <Link to="/" className="text-xl font-bold italic">
          OJS <span className="font-normal">NUTRITION</span>
        </Link>

        <div className="flex w-1/3 border rounded-lg overflow-hidden">
          <input
            type="text"
            placeholder="Aradığınız ürünü yazınız"
            className="flex-1 p-2 border-none outline-none"
          />
          <button className="px-4 bg-gray-700 text-white">Ara</button>
        </div>

        <div className="flex items-center space-x-4">
          {/* Account Dropdown */}
          <div className="relative" ref={dropdownRef}>
            <button 
              className="flex items-center space-x-2 border px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
              onClick={() => setShowAccountMenu(!showAccountMenu)}
            >
              <User size={20} />
              <span>{user ? user.name : 'Hesap'}</span>
            </button>
            
            {showAccountMenu && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg border z-50">
                <div className="py-1">
                  {user ? (
                    <>
                      <div className="px-4 py-2 text-sm text-gray-500 border-b">
                        Hoş geldiniz, {user.name}
                      </div>
                      <Link
                        to="/profile"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowAccountMenu(false)}
                      >
                        <Settings className="w-4 h-4 mr-2" />
                        Profil Ayarları
                      </Link>
                      <button
                        onClick={handleLogout}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                      >
                        <LogOut className="w-4 h-4 mr-2" />
                        Çıkış Yap
                      </button>
                    </>
                  ) : (
                    <>
                      <Link
                        to="/login"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowAccountMenu(false)}
                      >
                        <LogIn className="w-4 h-4 mr-2" />
                        Giriş Yap
                      </Link>
                      <Link
                        to="/register"
                        className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setShowAccountMenu(false)}
                      >
                        <UserPlus className="w-4 h-4 mr-2" />
                        Kayıt Ol
                      </Link>
                    </>
                  )}
                </div>
              </div>
            )}
          </div>
          
          <Link 
            to="/cart"
            className="relative border px-4 py-2 rounded-md hover:bg-gray-50 transition-colors"
          >
            <ShoppingCart size={20} />
            {getCartCount() > 0 && (
              <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs px-1 rounded-full min-w-[18px] h-[18px] flex items-center justify-center">
                {getCartCount()}
              </span>
            )}
          </Link>
        </div>
      </div>

      {/* Navigasyon Linkleri */}
      <div className="bg-black text-white">
        <div className="container mx-auto flex justify-between p-3 text-sm">
          <Link to="/protein" className="cursor-pointer hover:underline">PROTEİN</Link>
          <Link to="/spor-gidalari" className="cursor-pointer hover:underline">SPOR GIDALARI</Link>
          <Link to="/saglik">VİTAMİN</Link>
          <Link to="/spor-urunleri" className="cursor-pointer hover:underline">SPOR ÜRÜNLERİ</Link>
          <Link to="/sale">İNDİRİM</Link>
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
