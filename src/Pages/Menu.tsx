import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import Cart from "../Components/cart";
import { useCart } from "../Context/CartContext";
import jollof from "../assets/jollof.jpeg";
import friedRice from "../assets/friedrice.jpeg";
import plantain from "../assets/plantain.jpeg";
import turkey from "../assets/turkey.jpeg";
import chicken from "../assets/chicken.jpeg";
import fish from "../assets/fish.jpeg";
import noodles from "../assets/noodles.jpeg";
import boiledEgg from "../assets/egg.jpeg";
import spag from "../assets/spag.jpeg";

const Menu = () => {

  const Products =[
    {
      image:`${jollof}`,
      name: "Smoky Jollof Rice",
      description: "Description for Product 1",
      price: "2500.00",
      category: "Main Course"
    },
    {
      image: `${friedRice}`,
      name: "Carribean Fried Rice",
      description: "Description for Product 2",
      price: "29.99",
      category: "Main Course"
    },
    {
      image: `${jollof}`,
      name: "Jollof and Fried Rice Mix",
      description: "Description for Product 3",
      price: "3000.00",
      category: "Main Course"
    },
    {
      image: `${noodles}`,
      name: "Stir Fry Noodles",
      description: "Description for Product 2",
      price: "3000.00",
      category: "Main Course"
    },
    {
      image: `${spag}`,
      name: "Stir Fry Spaghetti",
      description: "Description for Product 2",
      price: "3000.00",
      category: "Main Course"
    },
    {
      image: `${fish}`,
      name: "Peppered Fish",
      description: "Description for Product 2",
      price: "29.99",
      category: "Protein"
    },
    {
      image: `${turkey}`,
      name: "Peppered Turkey",
      description: "Description for Product 2",
      price: "4000.00",
      category: "Protein"
    },
    {
      image:`${chicken}`,
      name: "Peppered Chicken",
      description: "Description for Product 2",
      price: "3000.00",
      category: "Protein"
    },
    {
      image:`${boiledEgg}`,
      name: "Boiled egg",
      description: "Description for Product 2",
      price: "300.00",
      category: "Protein"
    },
    {
      image:`${plantain}`,
      name: "Fried Plantain",
      description: "One portion is four pieces",
      price: "400.00",
      category: "Side"
    },
    {
      image:`${plantain}`,
      name: "Product 2",
      description: "Description for Product 2",
      price: "29.99",
      category: "Category 2"
    },
  ];
    const { addToCart } = useCart();
  return (
    <>
      <Navbar />
      <Cart />
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        {Products.map((product, index) => (
          <Card
            key={index}
            image={product.image}
            name={product.name}
            description={product.description}
            price={`₦${product.price}`}
            category={product.category}
            addToCart={addToCart}
          />
        ))}
      </div>
    </>
  );
}

export default Menu
