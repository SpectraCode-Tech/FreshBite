import aboutImage from "../assets/about.jpeg";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <section className="px-6 sm:px-10 py-20 max-w-7xl mx-auto">
      {/* Heading */}
      <div className="mb-14">
        <p className="text-orange-600 font-semibold uppercase tracking-widest mb-2">
          About Us
        </p>

        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          About <span className="text-orange-600">FreshBite.</span>
        </h1>
      </div>

      <div className="flex flex-col lg:flex-row items-center gap-14">
        <div className="w-full lg:w-1/2">
          <h2 className="text-2xl md:text-3xl font-semibold leading-snug mb-6">
            Authentic Nigerian Flavors,
            <br />
            Made Fresh Every Day
          </h2>

          <p className="text-gray-600 leading-8 text-lg">
            At FreshBite Kitchen, we believe food is more than just a meal —
            it’s an experience that brings people together and creates lasting
            memories. From rich local delicacies to satisfying everyday
            favorites, every dish is carefully prepared using fresh ingredients,
            authentic recipes, and a passion for great taste.
            <br />
            <br />
            Inspired by the warmth of Nigerian hospitality, FreshBite was
            created to serve meals that feel both comforting and unforgettable.
            Whether you’re dining in, grabbing a quick bite, or ordering from
            home, we’re committed to delivering quality, flavor, and excellent
            service in every experience.
          </p>
          <Link to="/about">
            <button className="mt-8 bg-orange-600 hover:bg-orange-700 text-white px-7 py-3 rounded-full font-medium transition-all duration-300 cursor-pointer">
              Learn More
            </button>
          </Link>
        </div>

        <div className="w-full lg:w-1/2">
          <img
            src={aboutImage}
            alt="FreshBite Kitchen"
            className="w-full h-125 cursor-pointer object-cover rounded-3xl shadow-2xl hover:scale-[1.02] transition-transform duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default About;
