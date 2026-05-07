import { BsCart } from "react-icons/bs";

const Cart = () => {
  return (
    <>
      <div className="fixed cursor-pointer hover:drop-shadow-2xl bottom-1 right-3 rounded-full w-13 h-13 flex items-center justify-center bg-black z-100 p-2">
        <BsCart className="size-8 relative fill-white z-200" />
        <p className="text-white absolute top-2 right-2 font-bold bg-orange-600 rounded-full z-300 text-xs px-1">
          0
        </p>
      </div>
    </>
  );
}

export default Cart
