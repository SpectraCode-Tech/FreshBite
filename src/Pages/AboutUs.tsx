import { Link } from "react-router-dom";
import Cart from "../Components/cart";

const AboutUs = () => {
  return (
    <section className="">
      <nav className="">
        <p><Link to="/">Home</Link> &gt; <Link to="/about"> About Us</Link></p>
      </nav>
      <h1 className="text-4xl font-bold mb-6">About Us</h1>
      <p className="text-lg text-gray-700 mb-4">
        Welcome to FreshBite, your go-to destination for delicious and convenient meals! We are passionate about providing our customers with fresh, high-quality food that satisfies their cravings and fits their busy lifestyles. Our menu features a wide variety of dishes, from hearty sandwiches and vibrant salads to comforting bowls and indulgent desserts. We source our ingredients from trusted local suppliers to ensure that every bite is packed with flavor and nutrition.
        At FreshBite, we believe that good food should be accessible to everyone. That's why we offer easy online ordering and fast delivery, so you can enjoy our tasty meals wherever you are. Whether you're looking for a quick lunch, a satisfying dinner, or a snack on the go, FreshBite has got you covered. Our commitment to quality, convenience, and customer satisfaction is at the heart of everything we do. Thank you for choosing FreshBite – we look forward to serving you delicious meals that brighten your day!
      </p>
      <Cart />
    </section>
  );
}

export default AboutUs
