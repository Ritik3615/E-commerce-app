import { useState } from "react";
import axios from "axios";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:5000/api/users/login", {
        email,
        password,
      });
      alert("Login successful");
      console.log(res.data);
    } catch (err) {
      alert("Login failed");
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-indigo-200 to-indigo-400">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg w-96 animate-fade-in">
        <h2 className="text-2xl font-bold mb-6 text-indigo-700 text-center">Login to MyShop</h2>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="border border-gray-300 p-2 mb-4 w-full rounded"
          required
        />
        <button
          type="submit"
          className="bg-indigo-600 text-white py-2 w-full rounded hover:bg-indigo-700 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
