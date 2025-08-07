import { Link } from "react-router-dom";
import { FaShoppingCart, FaUserCircle, FaSearch } from "react-icons/fa";

export default function Navbar() {
  return (
    <nav className="bg-[#2874f0] text-white px-6 py-3 shadow-md sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto">
        {/* Logo */}
        <Link to="/" className="text-2xl font-bold tracking-wide hover:opacity-90 transition">
          FlipKart<span className="text-yellow-300 font-semibold">.Lite</span>
        </Link>

        {/* Search Bar */}
        <div className="flex items-center bg-white rounded-md overflow-hidden w-[400px]">
          <input
            type="text"
            placeholder="Search for products, brands and more"
            className="p-2 px-4 w-full text-gray-800 outline-none"
          />
          <FaSearch className="text-[#2874f0] mx-3" />
        </div>

        {/* Right Links */}
        <div className="flex items-center space-x-6">
          <Link
            to="/login"
            className="hover:bg-white hover:text-[#2874f0] px-4 py-1 rounded transition duration-200"
          >
            <FaUserCircle className="inline mr-1" /> Login
          </Link>
          <Link to="/cart" className="hover:underline text-white">
            <FaShoppingCart className="inline mr-1" /> Cart
          </Link>
          <a href="#" className="hover:underline text-white">
            Become a Seller
          </a>
        </div>
      </div>
    </nav>
  );
}
