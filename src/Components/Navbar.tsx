import { useState } from 'react';
import logo from '../assets/logov1.png'
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';
const Navbar = () => {

    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

  return (
    <nav className="bg-black z-1000 text-white py-2 px-5 sticky top-0 shadow-md w-full">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-5">
          <a href="/">
            <img src={logo} className="size-18" alt="Logo cursor-pointer" />
          </a>
          <h1 className="font-bold uppercase text-2xl tracking-widest cursor-pointer">
            <a href="/">Fresh<span>Bite</span></a>
          </h1>
        </div>
        <ul className="gap-4 items-center ml-4 hidden md:flex">
          <li>
            <Link to="/" className="hover:text-gray-300 nav-btn">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-gray-300 nav-btn">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300 nav-btn">
              Contact
            </Link>
          </li>
          <li className="hover:text-gray-300 cursor-pointer rounded-full hover:bg-orange-700 bg-primary py-2 px-7 transition-all ease-in-out duration-300">
            <Link to="/menu" className="hover:text-gray-300">
              Our Menu
            </Link>
          </li>
        </ul>

        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FiX className="size-6 active:transform active:rotate-180 duration-100" />
          ) : (
            <FiMenu className="size-6 active:transform active:-rotate-180 duration-100" />
          )}
        </button>
      </div>

      <div
        className={`md:hidden fixed w-full left-0 bg-black text-white py-2 px-5 ${isMobileMenuOpen ? "h-full opacity-100" : "h-0 overflow-hidden opacity-0"} transition-all duration-300`}
      >
        <ul className="flex flex-col gap-2 space-y-5 items-center justify-center h-4/5 text-2xl">
          <li>
            <Link to="/" className="hover:text-gray-300">
              Home
            </Link>
          </li>

          <li>
            <Link to="/about" className="hover:text-gray-300">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-300">
              Contact
            </Link>
          </li>
          <li className="text-sm self-center hover:text-gray-300 rounded-full bg-primary py-2 px-7">
            <Link to="/menu" className="hover:text-gray-300">
              Our Menu
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
