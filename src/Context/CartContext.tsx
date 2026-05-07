import { createContext, useContext, useEffect, useState } from "react";
import type { ReactNode } from "react";

export type CartItem = {
  image: string;
  name: string;
  price: string;
  quantity: number;
};

type StoredCart = {
  cart: CartItem[];
  timestamp: number;
};

type CartContextType = {
  cart: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (index: number) => void;
  clearCart: () => void;
};

const CartContext = createContext<CartContextType | undefined>(undefined);

const EXPIRY_TIME = 24 * 60 * 60 * 1000; // 24 hours in ms

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem("cartData");

    if (!saved) return [];

    try {
      const parsed: StoredCart = JSON.parse(saved);

      const isExpired = Date.now() - parsed.timestamp > EXPIRY_TIME;

      if (isExpired) {
        localStorage.removeItem("cartData");
        return [];
      }

      return parsed.cart;
    } catch {
      return [];
    }
  });

  // ✅ persist with timestamp
  useEffect(() => {
    const data: StoredCart = {
      cart,
      timestamp: Date.now(),
    };

    localStorage.setItem("cartData", JSON.stringify(data));
  }, [cart]);

  const addToCart = (item: CartItem) => {
    setCart((prev) => {
      const existingIndex = prev.findIndex((p) => p.name === item.name);

      if (existingIndex !== -1) {
        const updated = [...prev];
        updated[existingIndex].quantity += item.quantity;
        return updated;
      }

      return [...prev, item];
    });
  };

  const removeFromCart = (index: number) => {
    setCart((prev) => prev.filter((_, i) => i !== index));
  };

  const clearCart = () => {
    setCart([]);
    localStorage.removeItem("cartData");
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used inside CartProvider");
  return context;
};
