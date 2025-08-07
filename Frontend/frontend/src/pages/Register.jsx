import { useState } from "react";
import axios from "axios";

export default function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/register", {
        name,
        email,
        password,
      });
      alert("✅ Registration successful!");
      console.log(res.data);
    } catch (err) {
      console.error("❌ Registration error:", err.response?.data || err.message);
      alert("Registration failed: " + (err.response?.data?.message || "Unknown error"));
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-100 to-green-400">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-xl shadow-xl w-full max-w-md animate-fade-in"
      >
        <h2 className="text-3xl font-bold mb-6 text-center text-green-700">
          Create an Account
        </h2>
        <input
          type="text"
          placeholder="Full Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="border border-gray-300 p-3 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="email"
          placeholder="Email Address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-3 mb-4 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-3 mb-6 w-full rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
          required
        />
        <button
          type="submit"
          className="bg-green-600 text-white font-semibold py-3 w-full rounded-md hover:bg-green-700 transition duration-300"
        >
          Register
        </button>
      </form>
    </div>
  );
}
