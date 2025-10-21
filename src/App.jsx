import React from "react";
import Header from "./components/Header";
import ProductList from "./components/ProductList";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app">
      <Header />
      <ProductList />
      <Footer />
    </div>
  );
}

export default App;
