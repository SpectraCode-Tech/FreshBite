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
          <img src={logo} className="size-18" alt="Logo" />
          <h1 className="font-bold uppercase text-2xl tracking-widest">
            Fresh<span>Bite</span>
          </h1>
        </div>
        <ul className="gap-4 items-center ml-4 hidden md:flex">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300  ">
              About
            </a>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
          <li className="hover:text-gray-300 rounded-full bg-orange-600 py-2 px-7">
            <Link to="/menu" className="hover:text-gray-300">
              Our Menu
            </Link>
          </li>
        </ul>
        {/* Mobile menu button */}
        <button className="md:hidden text-white" onClick={toggleMobileMenu}>
          {isMobileMenuOpen ? (
            <FiX className="size-6 active:transform active:rotate-180 duration-100" />
          ) : (
            <FiMenu className="size-6 active:transform active:-rotate-180 duration-100" />
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden fixed w-full left-0 bg-black text-white py-2 px-5 ${isMobileMenuOpen ? "h-max opacity-100" : "h-0 overflow-hidden opacity-0"} transition-all duration-300`}
      >
        <ul className="flex flex-col gap-2">
          <li>
            <a href="#" className="hover:text-gray-300">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Menu
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300">
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar
