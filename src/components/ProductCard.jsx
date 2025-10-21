import React from "react";

function ProductCard({ name, price, image, description }) {
  return (
    <div
      style={{
        border: "1px solid #ccc",
        borderRadius: "10px",
        padding: "15px",
        width: "250px",
        textAlign: "center",
        boxShadow: "0 2px 5px rgba(0,0,0,0.1)"
      }}
    >
      <img
        src={image}
        alt={name}
        style={{ width: "100%", borderRadius: "10px" }}
      />
      <h3>{name}</h3>
      <p>{description}</p>
      <strong>{price}</strong>
    </div>
  );
}

export default ProductCard;