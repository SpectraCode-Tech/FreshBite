import { useState } from "react";
import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Cart from "../Components/Cart";
import { useCart } from "../Context/CartContext";
import { Products } from "../Data/Products";

const Menu = () => {
  const { addToCart } = useCart();

  
  const [activeCategory, setActiveCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  
  const categories = [
    "All",
    ...Array.from(new Set(Products.map((p) => p.category))),
  ];

  
  const filtered = Products.filter((product) => {
    const matchesCategory =
      activeCategory === "All" || product.category === activeCategory;
    const matchesSearch = product.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const handleCategorySelect = (cat: string) => {
    setActiveCategory(cat);
    setIsDropdownOpen(false);
  };

  return (
    <section className="">
      <Navbar />
      <Cart />

      <div className="px-6 md:px-10 pt-8 pb-4 flex flex-col md:flex-row md:items-center justify-between gap-6">        
        <div className="relative w-full md:w-72">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2 mb-1 block">
            Category
          </label>
          <button
            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            className="w-full flex items-center justify-between bg-white border border-gray-200 px-5 py-3.5 rounded-2xl shadow-sm hover:border-black transition-all active:scale-[0.98]"
          >
            <span className="text-sm font-semibold text-gray-800">
              {activeCategory}
            </span>
            <svg
              className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${isDropdownOpen ? "rotate-180" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </button>

          
          {isDropdownOpen && (
            <>
              <div
                className="fixed inset-0 z-10"
                onClick={() => setIsDropdownOpen(false)}
              ></div>

              <div className="absolute z-20 mt-2 w-full bg-white border border-gray-100 rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black ring-opacity-5 animate-in fade-in zoom-in duration-200">
                <ul className="py-2 max-h-64 overflow-y-auto">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <button
                        onClick={() => handleCategorySelect(cat)}
                        className={`w-full text-left px-5 py-3 text-sm transition-colors ${
                          activeCategory === cat
                            ? "bg-black text-white"
                            : "text-gray-600 hover:bg-gray-50 hover:text-black"
                        }`}
                      >
                        {cat}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </>
          )}
        </div>

        
        <div className="w-full md:w-80">
          <label className="text-xs font-bold text-gray-400 uppercase tracking-wider ml-2 mb-1 block">
            Search
          </label>
          <div className="relative">
            <span className="absolute inset-y-0 left-0 flex items-center pl-4">
              <svg
                className="w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
            </span>
            <input
              type="text"
              placeholder="Jollof, Chicken, Drinks..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-5 py-3.5 bg-white border border-gray-200 rounded-full text-sm shadow-sm focus:ring-2 focus:ring-black focus:border-black outline-none transition-all"
            />
          </div>
        </div>
      </div>

      <div className="px-10 mb-2">
        <p className="text-sm text-gray-500">
          Showing {filtered.length} {filtered.length === 1 ? "item" : "items"}
        </p>
      </div>

      <div className="p-6 md:p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map((product) => (
            <Card
              key={product.name}
              image={product.image}
              name={product.name}
              description={product.description}
              price={`₦${product.price}`}
              category={product.category}
              addToCart={addToCart}
            />
          ))
        ) : (
          <div className="col-span-full flex flex-col items-center justify-center py-24 text-gray-400">
            <svg
              className="w-16 h-16 mb-4 opacity-20"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
            <p className="text-xl font-medium">
              No results found for "{searchQuery}"
            </p>
            <button
              onClick={() => {
                setSearchQuery("");
                setActiveCategory("All");
              }}
              className="mt-4 text-black underline font-semibold"
            >
              Clear all filters
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Menu;
