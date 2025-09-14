import React, { useState } from "react";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList";
import Hero from "./components/Hero";
import Footer from "./components/Footer";

const allProducts = [
  { id: 1, name: "Ultraboost", category: "Men", price: "$180" },
  { id: 2, name: "Stan Smith", category: "Women", price: "$110" },
  { id: 3, name: "Kids Runner", category: "Kids", price: "$80" },
  { id: 4, name: "Training Shoes", category: "Sports", price: "$120" },
];

function App() {
  const [category, setCategory] = useState("Men");

  // Filter products based on selected category
  const filteredProducts = allProducts.filter(p => p.category === category);

  return (
    <div>
      <Navbar onSelectCategory={setCategory} />
      <Hero />
      {/* You can remove this h2 if you don’t want "Men Products" */}
      {/* <h2>{category} Products</h2> */}
      <ProductList products={filteredProducts} />
      <Footer />  {/* Footer stays at the bottom */}
    </div>
  );
}

export default App;

