import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import { useCart } from "../Context/CartContext";
import cardImg from "../assets/slide1.jpeg";

const Menu = () => {
    const { addToCart } = useCart();
  return (
    <>
      <Navbar />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        <Card
          image={cardImg}
          name="Product Name"
          description="Product description goes here."
          price="$19.99"
          category="Category"
          addToCart={addToCart}
        />
      </div>
    </>
  );
}

export default Menu
