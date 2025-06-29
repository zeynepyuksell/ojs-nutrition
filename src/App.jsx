import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ProductDetailPage from "./pages/ProductDetailPage";
import ProteinPage from "./pages/ProteinPage"; // 👈 ekledik
import SportFoodsPage from "./pages/SportFoodsPage";
import SportProducts from "./pages/SportProducts";
import HealthPage from "./pages/HealthPage";
import SalePage from "./pages/SalePage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import CartPage from "./pages/CartPage";
import CheckoutPage from "./pages/CheckoutPage";
import OrderSuccessPage from "./pages/OrderSuccessPage";
import { AuthProvider } from "./context/AuthContext";
import { CartProvider } from "./context/CartContext";


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/product/:id" element={<ProductDetailPage />} />
            <Route path="/protein" element={<ProteinPage />} /> {/* 👈 yeni route */}
            <Route path="/spor-gidalari" element={<SportFoodsPage />} />
            <Route path="/spor-urunleri" element={<SportProducts />} />
            <Route path="/saglik" element={<HealthPage />} />
             <Route path="/sale" element={<SalePage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/cart" element={<CartPage />} />
            <Route path="/checkout" element={<CheckoutPage />} />
            <Route path="/order-success" element={<OrderSuccessPage />} />
            
          </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
