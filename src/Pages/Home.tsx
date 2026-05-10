import About from "../Components/About";
import Cart from "../Components/cart";
import FAQ from "../Components/FAQ";
import Hero from "../Components/Hero";
import Navbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Testimonials />
      <FAQ />
      <Cart />
    </>
  );
};

export default Home;
