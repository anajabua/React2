import React from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const products = [
    {
      name: "iPhone 17Pro max",
      price: "$999",
      image:
        "https://store.storeimages.cdn-apple.com/1/as-images.apple.com/is/iphone-17-pro-witb-cosmicorange-202509_FMT_WHH?wid=560&hei=744&fmt=jpeg&qlt=90&.v=NXh3OEZPWW1IYUpzT1hwc0dnVnRpNGpxQkRKUjFONlhiQkhUZXVydnkwSnRNV1RtaElLOWlibWpBaG1hcUZKYlZwRHBsN0J5WGltZHEvVEZYY0VZa3I2TGhYaGhMVkJpQ2RGWWVURTZNbXpJc0RDNGp0cUtNQmRxTjZCWlpwYmw",
      description: "Apple’s latest iPhone."
    },
    {
      name: "Adidas samba",
      price: "$150",
      image:
        "https://www.futbolemotion.com/imagesarticulos/230483/grandes/zapatilla-adidas-samba-og-blanco-0.webp",
      description: "Comfortable and stylish sneakers."
    },
    {
      name: "Bounty",
      price: "$2",
      image:
        "https://safadryfruitsandspices.com/wp-content/uploads/2023/09/Untitled-design-2023-09-07T175028.032.jpg",
      description: "chocolate bar."
    }
  ];

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        gap: "20px",
        margin: "30px"
      }}
    >
      {products.map((p, index) => (
        <ProductCard
          key={index}
          name={p.name}
          price={p.price}
          image={p.image}
          description={p.description}
        />
      ))}
    </div>
  );
}

export default ProductList;