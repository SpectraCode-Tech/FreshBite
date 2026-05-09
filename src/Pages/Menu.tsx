import { useState } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Cart from "../Components/cart";
import { useCart } from "../Context/CartContext";
import { Products } from "../Data/Products";

const Menu = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");

  const categories = [
    "All",
    ...Array.from(new Set(Products.map((p) => p.category))),
  ];

  const filtered =
    activeCategory === "All"
      ? Products
      : Products.filter((p) => p.category === activeCategory);

  return (
    <>
      <Navbar />
      <Cart />

      {/* Category Filter */}
      <div className="px-10 pt-6 flex flex-wrap gap-3">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-2 cursor-pointer rounded-full text-sm font-medium border transition-colors duration-200 ${
              activeCategory === cat
                ? "bg-black text-white border-black"
                : "bg-white text-gray-600 border-gray-300 hover:border-black hover:text-black"
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        {filtered.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            name={product.name}
            description={product.description}
            price={`₦${product.price}`}
            category={product.category}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
};

export default Menu;
