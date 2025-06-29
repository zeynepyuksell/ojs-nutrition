import React, { useState } from "react";

const saleProducts = [
  {
    id: 1,
    name: "Protein Tozu",
    image: "/assets/image/kosu.jpg", // düzeltme yaptım jpp yanlış
    price: 500,
    oldPrice: 650,
    rating: 4.5,
  },
  {
    id: 2,
    name: "Vitamin C",
    image: "/assets/image/dumbull.jpg",
    price: 150,
    oldPrice: 200,
    rating: 4.7,
  },
  {
    id: 3,
    name: "Omega 3",
    image: "/assets/image/tshırt.jpeg",
    price: 300,
    oldPrice: 400,
    rating: 4.6,
  },
];

const SalePage = () => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart((prev) => [...prev, product]);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Sale Ürünleri</h1>

      {/* Sepet */}
      <div
        style={{
          border: "1px solid #ccc",
          padding: "10px",
          borderRadius: "8px",
          marginBottom: "20px",
        }}
      >
        <h2>Sepet</h2>
        {cart.length === 0 ? (
          <p>Sepetiniz boş.</p>
        ) : (
          <ul>
            {cart.map((item, index) => (
              <li key={index}>
                {item.name} - ₺{item.price}
              </li>
            ))}
          </ul>
        )}
      </div>

      {/* Ürünler */}
      <div style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {saleProducts.map((product) => (
          <div
            key={product.id}
            style={{
              border: "1px solid #ddd",
              borderRadius: "8px",
              padding: "10px",
              width: "200px",
            }}
          >
            <img
              src={product.image}
              alt={product.name}
              style={{ width: "100%", height: "150px", objectFit: "cover" }}
            />
            <h3>{product.name}</h3>
            <p>
              <span
                style={{
                  textDecoration: "line-through",
                  color: "#999",
                  marginRight: "10px",
                }}
              >
                ₺{product.oldPrice}
              </span>
              <span style={{ fontWeight: "bold", color: "red" }}>
                ₺{product.price}
              </span>
            </p>
            <p>⭐ {product.rating}</p>
            <button
              onClick={() => handleAddToCart(product)}
              style={{
                marginTop: "10px",
                padding: "6px 12px",
                backgroundColor: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                cursor: "pointer",
              }}
            >
              Sepete Ekle
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SalePage;
