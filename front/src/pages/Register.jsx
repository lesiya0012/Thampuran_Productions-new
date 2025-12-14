import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  // Joi schema
  const registerSchema = Joi.object({
    name: Joi.string().min(2).required().messages({
      "string.empty": "Name is required",
      "string.min": "Name must be at least 2 characters",
    }),
    email: Joi.string().email().required().messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email format",
    }),
    password: Joi.string().min(6).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 6 characters",
    }),
  });

  const handleRegister = async (e) => {
    e.preventDefault();

    const { error } = registerSchema.validate(
      { name, email, password },
      { abortEarly: false }
    );

    if (error) {
      const formatted = {};
      error.details.forEach((d) => (formatted[d.path[0]] = d.message));
      setErrors(formatted);
      return;
    }

    try {
      const res = await axios.post("https://thampuranproductions.vercel.app/api/auth/signup", {
        name,
        email,
        password,
      });
      localStorage.setItem("token", res.data.token);
      alert("Registration successful!");
      navigate("/main");
    } catch (err) {
      alert("Registration failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
     <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden" style={{
        background: "radial-gradient(circle at center, #1a1207, #000)",
      }}>

      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/20 via-transparent to-black pointer-events-none" />
       {/* Logo + Title */}
        <div className="absolute top-35 flex flex-col items-center">

        <h1 className="text-yellow-500 text-3xl font-bold tracking-wide">THAMPURAN</h1>
        <p className="text-yellow-400 text-xs tracking-widest text-center">PRODUCTIONS</p>
      </div>

      {/* Form */}
      <form
        noValidate
        onSubmit={handleRegister}
        className="bg-[#0c0c0c]/90 border border-yellow-600/40 p-8 rounded-xl shadow-2xl w-full max-w-md mt-30 backdrop-blur-sm z-10"
      >
        <h2 className="text-2xl text-white font-bold mb-1 text-center">Create Account</h2>
        <p className="text-gray-400 text-center mb-6 text-sm">Join Thampuran Productions</p>

        <input
          type="text"
          placeholder="Your Name"
          autoComplete="new-name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full p-3 mb-2 bg-black/40 border border-yellow-600/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
        />
        {errors.name && <p className="text-red-500 text-sm mb-2">{errors.name}</p>}

        <input
          type="email"
          autoComplete="new-email"
          placeholder="Enter your mail-id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 mb-2 bg-black/40 border border-yellow-600/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
        />
        {errors.email && <p className="text-red-500 text-sm mb-2">{errors.email}</p>}

        <input
          type="password"
          autoComplete="new-password"
          placeholder="Create a password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 mb-4 bg-black/40 border border-yellow-600/40 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-yellow-500"
        />
        {errors.password && <p className="text-red-500 text-sm mb-2">{errors.password}</p>}

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-[#FFD700] to-[#ffb300] text-black font-bold py-2 rounded-lg hover:opacity-90 transition"
        >
          Register
        </button>

         <p className="text-center mt-5 text-gray-400 text-sm">
          Aldready Have an Account?
          <button
            onClick={() => navigate("/")}
            type="button"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Login
          </button>
        </p>

      </form>

      <footer className="text-gray-600 text-xs mt-6 text-center z-10">
        © 2025 Thampuran Productions. All rights reserved.
      </footer>
    </div>
  );
}

export default Register;