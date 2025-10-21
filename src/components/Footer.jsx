import React from "react";

function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer
      style={{
        textAlign: "center",
        padding: "20px",
        borderTop: "1px solid #ddd",
        marginTop: "30px"
      }}
    >
      <p>© {year} My Favorite Products</p>
    </footer>
  );
}

export default Footer;