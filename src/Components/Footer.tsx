import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-zinc-950 text-gray-300 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-white tracking-tight">
              Fresh<span className="text-orange-500">Bite</span>
            </h2>
            <p className="text-sm leading-relaxed">
              Serving the most authentic Jollof, Fried Rice, and Swallows in the
              city. Taste the heart of home-cooked meals delivered to your door.
            </p>
            <div className="flex space-x-4 pt-2">
              <a href="#" className="hover:text-orange-500 transition-colors">
                FB
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                TW
              </a>
              <a href="#" className="hover:text-orange-500 transition-colors">
                IG
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Explore
            </h3>
            <ul className="space-y-4 text-sm">
              <li>
                <Link
                  to="/"
                  className="hover:text-orange-500 transition-colors"
                >
                  Our Menu
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="hover:text-orange-500 transition-colors"
                >
                  Our Kitchen
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-orange-500 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Opening Hours
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex gap-10">
                <span>Mon — Fri:</span>
                <span className="text-white">9AM — 8PM</span>
              </li>
              <li className="flex gap-10">
                <span>Saturday:</span>
                <span className="text-white">10AM — 9PM</span>
              </li>
              <li className="flex gap-10">
                <span>Sunday:</span>
                <span className="text-white">12PM — 6PM</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold mb-6 uppercase text-xs tracking-widest">
              Get in Touch
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold">Location:</span>
                <span>123 Foodie Avenue, Victoria Island, Lagos</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold">Phone:</span>
                <span>+234 800 FRESH BITE</span>
              </li>
              <li className="flex items-start space-x-3">
                <span className="text-orange-500 font-bold">Email:</span>
                <span>hello@freshbite.com</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-tighter">
          <p>
            &copy; {new Date().getFullYear()} Fresh Bite Food Services. All
            rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-white transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
