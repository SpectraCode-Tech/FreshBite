import { useCart } from "../Context/CartContext";

const Order = () => {
  const { cart, removeFromCart, clearCart } = useCart();

  const total = cart.reduce((acc, item) => {
    const priceNumber = Number(item.price.replace(/[^0-9.]/g, ""));
    return acc + priceNumber * item.quantity;
  }, 0);

  return (
    <section>
      {cart.map((item, index) => (
        <div key={index}>
          <p>{item.name}</p>
          <p>{item.price}</p>
          <p>Qty: {item.quantity}</p>

          <button onClick={() => removeFromCart(index)}>Remove</button>
        </div>
      ))}

      {cart.length > 0 && (
        <>
          <h2>Total: ₦{total.toLocaleString()}</h2>

          <button onClick={clearCart}>Clear Cart</button>
        </>
      )}
    </section>
  );
};

export default Order;
