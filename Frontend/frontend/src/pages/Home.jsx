import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-[70vh] text-center px-4">
      <h1 className="text-4xl font-bold text-gray-800">Welcome to MyShop</h1>
      <p className="mt-4 text-gray-600 max-w-xl">
        Explore exclusive deals, top brands, and unbeatable prices.
      </p>

      <Link to="/register">
        <button className="mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition duration-300 shadow-md">
          Register Now
        </button>
      </Link>
    </div>
  );
}
