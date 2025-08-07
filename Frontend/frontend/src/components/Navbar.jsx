import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-[#2874f0] text-white px-6 py-3 shadow-lg sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link
          to="/"
          className="text-2xl font-extrabold tracking-wide flex items-center gap-1 hover:scale-105 transition-transform duration-200"
        >
          <span className="drop-shadow-lg">FlipKart</span>
          <span className="text-yellow-300 font-semibold animate-pulse">.Lite</span>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-[350px] md:w-[400px] shadow focus-within:ring-2 focus-within:ring-yellow-300 transition">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="p-2 px-4 w-full text-gray-800 outline-none"
          />
          <button className="p-2 hover:bg-gray-100 transition">
            <FaSearch className="text-[#2874f0] text-lg" />
          </button>
        </div>

        {/* Right Links */}
        <div className="flex items-center space-x-4 md:space-x-6">
          <Link
            to="/login"
            className="flex items-center gap-1 hover:bg-white hover:text-[#2874f0] px-4 py-1 rounded transition duration-200 font-medium"
          >
            <FaUserCircle className="text-xl" /> Login
          </Link>
          <Link
            to="/cart"
            className="relative flex items-center hover:underline text-white"
          >
            <FaShoppingCart className="text-xl mr-1" />
            Cart
            {/* Example badge for cart items */}
            <span className="absolute -top-2 -right-3 bg-yellow-300 text-[#2874f0] text-xs font-bold px-2 py-0.5 rounded-full shadow">
              2
            </span>
          </Link>
          <a
            href="#"
            className="hover:underline hover:text-yellow-300 transition font-medium"
          >
            Become a Seller
          </a>
        </div>
      </div>
    </nav>
  );
}