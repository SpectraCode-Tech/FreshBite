import { BsCart } from "react-icons/bs";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.length;

  const openOrder = () => {
    // 1. Check local storage for saved info
    const savedInfo = localStorage.getItem("userContactInfo");

    if (savedInfo) {
      // 2. If info exists, go straight to order page
      navigate("/order-now");
    } else {
      // 3. If no info found, go to the info form
      navigate("/info-form"); // Ensure this route matches your App.js/main.js
    }
  };

  return (
    <>
      <div
        onClick={openOrder}
        className="fixed cursor-pointer bottom-5 right-5 rounded-full w-14 h-14 flex items-center justify-center bg-gray-900 z-[100] shadow-xl transition-transform active:scale-90"
      >
        <BsCart className="size-7 fill-white" />

        {totalItems > 0 && (
          <p className="text-white absolute top-0 -right-1 font-bold bg-orange-600 rounded-full h-6 w-6 flex items-center justify-center text-[10px] border-2 border-white">
            {totalItems}
          </p>
        )}
      </div>
    </>
  );
};

export default Cart;
