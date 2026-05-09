import { useState } from "react";
import type { CartItem } from "../Context/CartContext";

type CardProps = {
  image: string;
  name: string;
  description: string;
  price: string;
  category?: string;
  addToCart: (item: CartItem) => void;
};

const Card = ({
  image,
  name,
  description,
  price,
  category,
  addToCart, // ✅ FIX: you forgot this
}: CardProps) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    setQuantity((prev) => prev + 1);
  };

  const decrement = () => {
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    addToCart({
      image,
      name,
      price,
      quantity,
    });
  };

  return (
    <div className="group bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-all duration-500">
      <div className="relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full h-60 object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {category && (
          <span className="absolute top-4 left-4 bg-orange-600 text-white text-xs font-semibold px-4 py-1 rounded-full">
            {category}
          </span>
        )}
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className=" text-lg sm:text-2xl font-bold text-gray-900">
              {name}
            </h3>
          </div>

          <p className="text-xl font-bold text-orange-600 whitespace-nowrap">
            {price}
          </p>
        </div>
        
        <p className="text-gray-500 text-sm mt-2 leading-6">{description}</p>

        <div className="grid grid-cols-2 mt-6 items-center grid-rows-1 gap-5">
          <span>
            <button
              onClick={handleAddToCart}
              className="w-full text-xs sm:text-sm bg-orange-600 hover:bg-orange-700 active:bg-orange-800 hover:text-gray-300 text-white py-3 rounded-full font-medium transition-all duration-300 cursor-pointer"
            >
              Order Now
            </button>
          </span>

          <span className="flex items-center justify-center text-black gap-2 py-2 rounded-full">
            <button className="qty-btn px-4 py-2" onClick={decrement}>
              -
            </button>
            <p className="text-lg font-bold">{quantity}</p>
            <button className="qty-btn px-4 py-2" onClick={increment}>
              +
            </button>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Card;
