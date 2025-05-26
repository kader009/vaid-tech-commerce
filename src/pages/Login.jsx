import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import toast from 'react-hot-toast';
import axios from 'axios';

const LoginPage = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://ecom.laralink.com/api/auth/login', {
        email: username,
        password: password,
      });

      const { Token, RefreshToken } = res.data;
      localStorage.setItem('accessToken', Token);
      localStorage.setItem('refreshToken', RefreshToken);
      navigate('/dashboard');
      toast.success(`welcome to Dashboard`);
    } catch (err) {
      toast.error('Invalid credentials');
      console.log(err?.response?.data || err.message);
    }
  };

  return (
    <div>
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-purple-600 to-indigo-700 px-4">
        <div className="bg-white/10 backdrop-blur-md border border-white/30 p-8 rounded-xl shadow-lg w-full max-w-md text-white">
          <h2 className="text-3xl font-bold text-center text-white mb-6">
            Login to Dashboard
          </h2>

          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Username */}
            <div>
              <label className="block mb-1 font-semibold text-white">
                Username
              </label>
              <input
                type="text"
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="Enter your username"
                required
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>

            {/* Password */}
            <div>
              <label className="block mb-1 font-semibold text-white">
                Password
              </label>
              <input
                type="password"
                className="w-full px-4 py-2 bg-white/20 border border-white/30 text-white placeholder-white/70 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-300"
                placeholder="Enter your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-indigo-500 text-white py-2 rounded-lg hover:bg-indigo-600 transition duration-300 font-semibold"
            >
              Login
            </button>
          </form>

          {/* Register Now Link */}
          <p className="text-center mt-4 text-white/80">
            New here?{' '}
            <Link
              to="/register"
              className="text-blue-300 underline hover:text-white transition"
            >
              Register now
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
