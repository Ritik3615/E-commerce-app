import { useState } from "react";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_API_URL}/api/users/login`,
        { email, password }
      );

      // ✅ Save token or user info (optional)
      localStorage.setItem("userInfo", JSON.stringify(res.data));

      alert("✅ Login successful");
      navigate("/"); // 🔁 Redirect to homepage
    } catch (err) {
      alert("❌ Login failed: " + (err.response?.data?.message || "Server error"));
      console.error(err);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-200 to-indigo-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-lg shadow-lg w-96 animate-fade-in"
      >
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">
          Login to MyShop
        </h2>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded focus:outline-none focus:ring-2 focus:ring-indigo-500"
          required
        />

        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 w-full rounded hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>

        <p className="text-center text-sm text-gray-600 mt-4">
          Don’t have an account?{" "}
          <Link to="/register" className="text-indigo-700 hover:underline">
            Register
          </Link>
        </p>
      </form>
    </div>
  );
}
