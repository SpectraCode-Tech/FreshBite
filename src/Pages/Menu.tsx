import Card from "../Components/Card";
import Navbar from "../Components/Navbar";
import { useCart } from "../Context/CartContext";
import cardImg from "../assets/slide1.jpeg";

const Menu = () => {

  const Products =[
    {
      name: "Smoky Jollof Rice",
      description: "Description for Product 1",
      price: "2500.00",
      category: "Main Course"
    },
    {
      name: "Carribean Fried Rice",
      description: "Description for Product 2",
      price: "29.99",
      category: "Main Course"
    },
    {
      name: "Jollof and Fried Rice Mix",
      description: "Description for Product 3",
      price: "3000.00",
      category: "Main Course"
    },
    {
      name: "Stir Fry Noodles",
      description: "Description for Product 2",
      price: "3000.00",
      category: "Main Course"
    },
    {
      name: "Stir Fry Spaghetti",
      description: "Description for Product 2",
      price: "29.99",
      category: "Category 2"
    },
    {
      name: "Product 2",
      description: "Description for Product 2",
      price: "29.99",
      category: "Category 2"
    },
    {
      name: "Product 2",
      description: "Description for Product 2",
      price: "29.99",
      category: "Category 2"
    },
    {
      image:{},
      name: "Product 2",
      description: "Description for Product 2",
      price: "29.99",
      category: "Category 2"
    },
    {
      image:{},
      name: "Product 2",
      description: "Description for Product 2",
      price: "29.99",
      category: "Category 2"
    },
    {
      image:{},
      name: "Product 2",
      description: "Description for Product 2",
      price: "29.99",
      category: "Category 2"
    },
    {
      image:{},
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
      <div className="p-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10">
        {Products.map((product, index) => (
          <Card
            key={index}
            image={cardImg}
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
