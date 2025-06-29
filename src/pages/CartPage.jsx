import React from "react";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ShoppingCart, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowLeft, 
  CreditCard,
  Truck,
  Shield,
  CheckCircle
} from "lucide-react";

const CartPage = () => {
  const { 
    items, 
    removeFromCart, 
    updateQuantity, 
    getCartTotal, 
    clearCart 
  } = useCart();

  const handleQuantityChange = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeFromCart(productId);
    } else {
      updateQuantity(productId, newQuantity);
    }
  };

  const shippingCost = getCartTotal() >= 100 ? 0 : 29.90;
  const totalWithShipping = getCartTotal() + shippingCost;

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6"
          >
            <ShoppingCart className="w-12 h-12 text-gray-400" />
          </motion.div>
          <h2 className="text-2xl font-bold text-gray-800 mb-4">Sepetiniz Boş</h2>
          <p className="text-gray-600 mb-8">Alışverişe başlamak için ürünlerimizi keşfedin.</p>
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Alışverişe Başla
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="mb-8">
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-blue-600 transition-colors mb-4"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Alışverişe Devam Et
          </Link>
          <h1 className="text-3xl font-bold text-gray-800">Sepetim</h1>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Sepet Ürünleri */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-xl font-semibold mb-6">Sepet Ürünleri ({items.length})</h2>
              
              <AnimatePresence>
                {items.map((item, index) => (
                  <motion.div
                    key={item.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: index * 0.1 }}
                    className="flex items-center gap-4 py-4 border-b border-gray-100 last:border-b-0"
                  >
                    {/* Ürün Resmi */}
                    <div className="w-24 h-24 rounded-lg overflow-hidden flex-shrink-0 bg-gray-50">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-full h-full object-contain"
                        loading="lazy"
                        onError={(e) => {
                          e.target.style.display = 'none';
                          e.target.nextSibling.style.display = 'flex';
                        }}
                      />
                      {/* Fallback için placeholder */}
                      <div className="w-full h-full  items-center justify-center text-gray-400 text-xs ">
                        <div className="text-center">
                          <div className="w-8 h-8 bg-gray-200 rounded-full mx-auto mb-1"></div>
                          <p>Görsel</p>
                        </div>
                      </div>
                    </div>

                    {/* Ürün Bilgileri */}
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-gray-800 truncate">{item.name}</h3>
                      <p className="text-sm text-gray-600">₺{item.price}</p>
                    </div>

                    {/* Miktar Kontrolü */}
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity - 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Minus className="w-4 h-4" />
                      </button>
                      <span className="w-12 text-center font-semibold">{item.quantity}</span>
                      <button
                        onClick={() => handleQuantityChange(item.id, item.quantity + 1)}
                        className="w-8 h-8 rounded-full border border-gray-300 flex items-center justify-center hover:bg-gray-50 transition-colors"
                      >
                        <Plus className="w-4 h-4" />
                      </button>
                    </div>

                    {/* Toplam Fiyat */}
                    <div className="text-right">
                      <p className="font-semibold text-gray-800">
                        ₺{item.price}
                      </p>
                    </div>

                    {/* Sil Butonu */}
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="text-red-500 hover:text-red-700 transition-colors"
                    >
                      <Trash2 className="w-5 h-5" />
                    </button>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Sepeti Temizle */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <button
                  onClick={clearCart}
                  className="text-red-600 hover:text-red-800 transition-colors text-sm"
                >
                  Sepeti Temizle
                </button>
              </div>
            </div>
          </div>

          {/* Özet */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-sm p-6 sticky top-8">
              <h2 className="text-xl font-semibold mb-6">Sipariş Özeti</h2>
              
              {/* Fiyat Detayları */}
              <div className="space-y-3 mb-6">
                <div className="flex justify-between">
                  <span className="text-gray-600">Ara Toplam</span>
                  <span className="font-semibold">₺{getCartTotal()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Kargo</span>
                  <span className={shippingCost === 0 ? "text-green-600 font-semibold" : "font-semibold"}>
                    {shippingCost === 0 ? "Ücretsiz" : `₺${shippingCost}`}
                  </span>
                </div>
                <div className="border-t pt-3">
                  <div className="flex justify-between text-lg font-bold">
                    <span>Toplam</span>
                    <span>₺{totalWithShipping}</span>
                  </div>
                </div>
              </div>

              {/* Kargo Bilgisi */}
              {shippingCost === 0 ? (
                <div className="bg-green-50 border border-green-200 rounded-lg p-3 mb-6">
                  <div className="flex items-center text-green-700">
                    <Truck className="w-4 h-4 mr-2" />
                    <span className="text-sm font-medium">Ücretsiz Kargo</span>
                  </div>
                </div>
              ) : (
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-3 mb-6">
                  <div className="flex items-center text-blue-700">
                    <Truck className="w-4 h-4 mr-2" />
                    <span className="text-sm">₺{shippingCost} kargo ücreti</span>
                  </div>
                  <p className="text-xs text-blue-600 mt-1">
                    ₺100 üzeri alışverişlerde ücretsiz kargo
                  </p>
                </div>
              )}

              {/* Ödeme Butonu */}
              <Link
                to="/checkout"
                className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors flex items-center justify-center gap-2"
              >
                <CreditCard className="w-5 h-5" />
                Ödemeye Geç
              </Link>

              {/* Güvenlik Bilgileri */}
              <div className="mt-6 pt-4 border-t border-gray-100">
                <div className="flex items-center text-sm text-gray-600 mb-2">
                  <Shield className="w-4 h-4 mr-2" />
                  <span>Güvenli Ödeme</span>
                </div>
                <div className="flex items-center text-sm text-gray-600">
                  <CheckCircle className="w-4 h-4 mr-2" />
                  <span>SSL Şifreli Bağlantı</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage; 