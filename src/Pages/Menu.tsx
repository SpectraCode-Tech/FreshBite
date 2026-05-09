import { useState } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Cart from "../Components/cart";
import { useCart } from "../Context/CartContext";
import { Products } from "../Data/Products";

const Menu = () => {
  const { addToCart } = useCart();
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState(""); // State for search input

  const categories = [
    "All",
    ...Array.from(new Set(Products.map((p) => p.category))),
  ];

  // Logic to filter by BOTH category and search query
  const filtered = Products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <Navbar />
      <Cart />

      {/* Filter and Search Section */}
      <div className="px-10 pt-6 flex flex-col md:flex-row md:items-center justify-between gap-4">
        {/* Category Filter */}
        <div className="flex flex-wrap gap-3">
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

        {/* Search Bar */}
        <div className="relative w-full md:w-64">
          <input
            type="text"
            placeholder="Search for food..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2 text-sm border border-gray-300 rounded-full focus:outline-none focus:border-black transition-colors"
          />
          {/* Optional: Clear Search Icon */}
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black"
            >
              ✕
            </button>
          )}
        </div>
      </div>

      {/* Product Grid */}
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        {filtered.length > 0 ? (
          filtered.map((product, index) => (
            <Card
              key={index}
              image={product.image}
              name={product.name}
              description={product.description}
              price={`₦${product.price}`}
              category={product.category}
              addToCart={addToCart}
            />
          ))
        ) : (
          <div className="col-span-full text-center py-20 text-gray-500">
            No products found matching your search.
          </div>
        )}
      </div>
    </>
  );
};

export default Menu;
