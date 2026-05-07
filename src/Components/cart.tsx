import { BsCart } from "react-icons/bs";
import { useCart } from "../Context/CartContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cart } = useCart();
  const navigate = useNavigate();

  const totalItems = cart.length;

  const openOrder = () => {
    navigate("/order-now");
  };

  return (
    <>
      <div
        onClick={openOrder}
        className="fixed cursor-pointer hover:shadow-2xl bottom-1 right-3 rounded-full w-13 h-13 flex items-center justify-center bg-black z-100 p-2"
      >
        <BsCart className="size-7 relative fill-white z-200" />

        {totalItems > 0 && (
          <p className="text-white absolute top-2 right-2 font-bold bg-orange-600 rounded-full z-300 text-xs px-1">
            {totalItems}
          </p>
        )}
      </div>
    </>
  );
};

export default Cart;
