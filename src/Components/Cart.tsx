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
        className="fixed cursor-pointer bottom-1 right-3 rounded-full w-13 h-13 flex items-center justify-center bg-gray-900 z-100 p-2"
      >
        <BsCart className="size-7 group relative fill-white z-200" />

        {totalItems > 0 && (
          <p className="text-white group absolute top-2 right-2 font-bold bg-primary rounded-full z-300 text-xs px-1">
            {totalItems}
          </p>
        )}
      </div>
    </>
  );
};

export default Cart;
