import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Joi from "joi";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
 
  const navigate = useNavigate();

  const loginSchema = Joi.object({
    email: Joi.string().email().required().messages({
      "string.empty": "Email is required",
      "string.email": "Invalid email format",
    }),
    password: Joi.string().min(6).required().messages({
      "string.empty": "Password is required",
      "string.min": "Password must be at least 6 characters",
    }),
  });

  const handleLogin = async (e) => {
    e.preventDefault();

    const { error } = loginSchema.validate(
      { email, password },
      { abortEarly: false }
    );

    if (error) {
      const formatted = {};
      error.details.forEach((d) => (formatted[d.path[0]] = d.message));
      setErrors(formatted);
      return;
    }

    try {
      const res = await axios.post("http://localhost:5000/api/auth/login", {
        email,
        password,
      });

      localStorage.setItem("token", res.data.token);
      alert("Login successful!");
      navigate("/main");
    } catch (err) {
      alert("Login failed: " + (err.response?.data?.error || err.message));
    }
  };

  return (
    <div className="min-h-screen bg-black flex flex-col items-center justify-center relative overflow-hidden" style={{
        background: "radial-gradient(circle at center, #1a1207, #000)",
      }}>

      {/* Glow background */}
      <div className="absolute inset-0 bg-gradient-to-b from-yellow-600/20 via-transparent to-black pointer-events-none" />

      {/* Logo & Title */}
      <div className="flex flex-col items-center mb-6 z-10">
        

        <h1 className="text-yellow-500 text-3xl font-bold mt-3 tracking-wide">
          THAMPURAN
        </h1>
        <p className="text-yellow-400 tracking-widest text-xs">
          PRODUCTIONS
        </p>
      </div>

      {/* Login Card */}
      <form
      noValidate
        autoComplete="off"
        onSubmit={handleLogin}
        className="bg-[#0d0d0d]/90 border border-yellow-600/40 rounded-xl shadow-xl p-8 w-full max-w-sm backdrop-blur-xl z-10"
      >
        <h2 className="text-white text-xl font-semibold mb-1">Welcome back</h2>
        <p className="text-gray-400 text-sm mb-6">
          Sign in to your account to continue
        </p>

        {/* Email */}
        <input
          type="email"
          autoComplete="new-email"
          placeholder="Enter your mail-id"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full p-3 bg-black border border-yellow-600/40 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 outline-none"
        />
        {errors.email && (
          <p className="text-red-500 text-sm mb-2">{errors.email}</p>
        )}

        {/* Password */}
        <input
          type="password"
          autoComplete="new-password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="w-full p-3 bg-black mt-2 border border-yellow-600/40 rounded-lg text-white placeholder-gray-500 focus:border-yellow-500 outline-none"
        />
        {errors.password && (
          <p className="text-red-500 text-sm mb-2">{errors.password}</p>
        )}

        {/* Options */}
        <div className="flex justify-between text-sm text-gray-400 mt-3">
          <label className="flex items-center gap-2">
            <input type="checkbox" className="accent-yellow-500" />
            Remember me
          </label>

          <button type="button" className="text-yellow-400 hover:underline">
            Forgot password?
          </button>
        </div>

        {/* Sign in */}
        <button
          type="submit"
          className="w-full bg-yellow-500 text-black font-semibold py-2 rounded-lg mt-5 hover:bg-yellow-400 transition shadow-md"
        >
          Sign in
        </button>

        {/* Sign up */}
        <p className="text-center mt-5 text-gray-400 text-sm">
          Don’t have an account?{" "}
          <button
            onClick={() => navigate("/register")}
            type="button"
            className="text-yellow-400 font-semibold hover:underline"
          >
            Sign up
          </button>
        </p>
      </form>

      {/* Footer */}
      <footer className="text-gray-500 text-xs mt-6 z-10">
        © 2025 Thampuran Productions. All rights reserved.
      </footer>
    </div>
  );
}

export default Login;
