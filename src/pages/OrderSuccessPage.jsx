import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { 
  CheckCircle, 
  Truck, 
  Mail, 
  Home, 
  Package,
  Clock,
  Phone
} from "lucide-react";

const OrderSuccessPage = () => {
  const orderNumber = Math.random().toString(36).substr(2, 9).toUpperCase();

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center py-8">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-2xl mx-auto text-center"
        >
          {/* Başarı İkonu */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
            className="w-24 h-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8"
          >
            <CheckCircle className="w-12 h-12 text-green-600" />
          </motion.div>

          {/* Başlık */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="text-3xl font-bold text-gray-800 mb-4"
          >
            Siparişiniz Başarıyla Alındı!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 mb-8"
          >
            Siparişiniz başarıyla oluşturuldu. Sipariş detayları e-posta adresinize gönderilecektir.
          </motion.p>

          {/* Sipariş Numarası */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
          >
            <div className="flex items-center justify-center gap-2 mb-4">
              <Package className="w-5 h-5 text-blue-600" />
              <h2 className="text-lg font-semibold text-gray-800">Sipariş Numarası</h2>
            </div>
            <p className="text-2xl font-bold text-blue-600 tracking-wider">{orderNumber}</p>
          </motion.div>

          {/* Sipariş Durumu */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="bg-white rounded-lg shadow-sm p-6 mb-8"
          >
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Sipariş Durumu</h3>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-green-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">Sipariş Onaylandı</p>
                  <p className="text-sm text-gray-600">Siparişiniz başarıyla alındı</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <Package className="w-4 h-4 text-blue-600" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-800">Hazırlanıyor</p>
                  <p className="text-sm text-gray-600">Ürünleriniz hazırlanıyor</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <Truck className="w-4 h-4 text-gray-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-400">Kargoya Verildi</p>
                  <p className="text-sm text-gray-400">Kargo firmasına teslim edilecek</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center">
                  <CheckCircle className="w-4 h-4 text-gray-400" />
                </div>
                <div className="text-left">
                  <p className="font-medium text-gray-400">Teslim Edildi</p>
                  <p className="text-sm text-gray-400">Adresinize teslim edilecek</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bilgilendirme */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="bg-blue-50 border border-blue-200 rounded-lg p-6 mb-8"
          >
            <h3 className="text-lg font-semibold text-blue-800 mb-4">Önemli Bilgiler</h3>
            <div className="space-y-3 text-left">
              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-800">E-posta Bildirimi</p>
                  <p className="text-sm text-blue-700">Sipariş durumu güncellemeleri e-posta adresinize gönderilecektir.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-800">Teslimat Süresi</p>
                  <p className="text-sm text-blue-700">Siparişiniz 1-3 iş günü içerisinde kargoya verilecektir.</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-blue-600 mt-0.5" />
                <div>
                  <p className="font-medium text-blue-800">Müşteri Hizmetleri</p>
                  <p className="text-sm text-blue-700">Sorularınız için 0850 123 45 67 numaralı hattımızı arayabilirsiniz.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Butonlar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link
              to="/"
              className="inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
            >
              <Home className="w-4 h-4 mr-2" />
              Ana Sayfaya Dön
            </Link>
            
            <Link
              to="/sale"
              className="inline-flex items-center justify-center px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <Package className="w-4 h-4 mr-2" />
              Alışverişe Devam Et
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default OrderSuccessPage; 