import { GrPrevious } from "react-icons/gr";
import { useNavigate, Link } from "react-router-dom"; // Added Link
import { useCart } from "../Context/CartContext";

const Order = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const navigate = useNavigate();

  const DELIVERY_FEE = 2500;

  const subtotal = cart.reduce((acc, item) => {
    const priceNumber = Number(item.price.replace(/[^0-9.]/g, ""));
    return acc + priceNumber * item.quantity;
  }, 0);

  const total = subtotal + DELIVERY_FEE;

  const handleBack = () => navigate("/menu");

  const savedInfo = localStorage.getItem("userContactInfo");
  const userInfo = savedInfo ? JSON.parse(savedInfo) : null;

  const handleWhatsAppOrder = () => {
    const phoneNumber = "2349077656721";

    const itemsList = cart
      .map(
        (item) =>
          `• ${item.name} (x${item.quantity}) - ₦${(
            Number(item.price.replace(/[^0-9.]/g, "")) * item.quantity
          ).toLocaleString()}`,
      )
      .join("\n");

    const deliveryDetails = userInfo
      ? `\n\n*Delivery Details:*\n📍 Name: ${userInfo.firstName} ${userInfo.lastName}\n🏠 Address: ${userInfo.address}\n📞 Phone: ${userInfo.phone}`
      : "\n\n(No delivery info provided)";

    const message = encodeURIComponent(
      `*New Order from FreshBite*\n` +
        `--------------------------\n` +
        `${itemsList}\n` +
        `--------------------------\n` +
        `*Subtotal:* ₦${subtotal.toLocaleString()}\n` +
        `*Delivery:* ₦${DELIVERY_FEE.toLocaleString()}\n` +
        `*Total:* ₦${total.toLocaleString()}` +
        `${deliveryDetails}`,
    );

    window.open(`https://wa.me/${phoneNumber}?text=${message}`, "_blank");
  };

  if (cart.length === 0) {
    return (
      <section className="max-w-4xl mx-auto p-6 md:p-10 text-center py-20">
        <button onClick={handleBack} className="block mb-6">
          <GrPrevious className="size-6 text-gray-500 cursor-pointer hover:text-gray-800 transition-colors" />
        </button>
        <div className="text-6xl mb-4">🛒</div>
        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-500">
          Add some items to your cart to see them here.
        </p>
      </section>
    );
  }

  return (
    <section className="max-w-6xl mx-auto p-4 md:p-10">
      <button onClick={handleBack} className="block mb-6">
        <GrPrevious className="size-6 text-gray-500 cursor-pointer hover:text-gray-800 transition-colors" />
      </button>

      <h1 className="text-3xl font-extrabold text-gray-900 mb-8">
        Complete Your Order
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
        <div className="lg:col-span-2 space-y-4">
          <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-gray-200 text-sm font-semibold text-gray-500 px-4">
            <div className="col-span-6">Product</div>
            <div className="col-span-2 text-center">Quantity</div>
            <div className="col-span-3 text-right">Total Price</div>
            <div className="col-span-1"></div>
          </div>

          <div className="divide-y divide-gray-100 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            {cart.map((item, index) => {
              const itemPrice =
                Number(item.price.replace(/[^0-9.]/g, "")) * item.quantity;
              return (
                <div
                  key={index}
                  className="grid grid-cols-1 md:grid-cols-12 gap-4 items-center p-4 hover:bg-gray-50 transition-colors"
                >
                  <div className="col-span-12 md:col-span-6 flex items-center gap-4">
                    <div className="w-16 h-16 bg-gray-100 rounded-xl flex items-center justify-center font-bold text-gray-400 overflow-hidden shrink-0 border border-gray-200">
                      {item.image ? (
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      ) : (
                        "📦"
                      )}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">
                        {item.name}
                      </h3>
                      <p className="text-sm text-gray-500 md:hidden">
                        Qty: {item.quantity}
                      </p>
                    </div>
                  </div>

                  <div className="hidden md:block col-span-2 text-center font-medium text-gray-700">
                    {item.quantity}
                  </div>

                  <div className="col-span-9 md:col-span-3 text-left md:text-right font-semibold text-gray-900 text-lg md:text-base">
                    ₦{itemPrice.toLocaleString()}
                  </div>

                  <div className="col-span-3 md:col-span-1 text-right">
                    <button
                      onClick={() => removeFromCart(index)}
                      className="text-red-500 cursor-pointer hover:text-red-700 p-2 rounded-lg hover:bg-red-50 transition-colors text-sm font-medium md:text-base"
                      aria-label="Remove item"
                    >
                      <span className="md:hidden">Remove</span>
                      <span className="hidden md:inline">✕</span>
                    </button>
                  </div>
                </div>
              );
            })}
          </div>

          <button
            onClick={clearCart}
            className="text-sm cursor-pointer font-medium text-gray-500 hover:text-red-600 transition-colors px-4 py-2"
          >
            Clear Entire Cart
          </button>
        </div>

        <div className="bg-gray-50 rounded-2xl p-6 border border-gray-200 shadow-sm sticky top-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">
            Order Summary
          </h2>

          <div className="mb-6 p-4 bg-white rounded-xl border border-gray-100">
            <div className="flex justify-between items-center mb-2">
              <h3 className="text-xs font-bold uppercase text-gray-400 tracking-wider">
                Deliver To
              </h3>
              <Link
                to="/delivery"
                className="text-xs font-bold text-orange-600 hover:underline"
              >
                EDIT
              </Link>
            </div>
            {userInfo ? (
              <div className="text-sm text-gray-700">
                <p className="font-bold">
                  {userInfo.firstName} {userInfo.lastName}
                </p>
                <p className="text-gray-500 truncate">{userInfo.address}</p>
                <p className="text-gray-500">{userInfo.phone}</p>
              </div>
            ) : (
              <p className="text-sm text-red-500 italic">No address found</p>
            )}
          </div>

          <div className="space-y-4 pb-6 border-b border-gray-200">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>₦{subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between text-gray-600">
              <span>Delivery</span>
              <span className="text-gray-900 font-medium">
                ₦{DELIVERY_FEE.toLocaleString()}
              </span>
            </div>
          </div>

          <div className="flex justify-between items-baseline pt-6 mb-6">
            <span className="text-base font-medium text-gray-900">Total</span>
            <span className="text-2xl font-black text-gray-900">
              ₦{total.toLocaleString()}
            </span>
          </div>

          <button
            onClick={handleWhatsAppOrder}
            className="w-full bg-orange-600 hover:bg-orange-700 cursor-pointer text-white font-semibold py-4 px-6 rounded-full transition-all shadow-md active:scale-[0.98]"
          >
            Order via WhatsApp
          </button>

          <p className="text-[10px] text-gray-400 mt-4 text-center">
            Clicking will open WhatsApp to share your order with us.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Order;
