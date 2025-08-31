import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Login = ({ onLogin }) => {
  const [formData, setFormData] = useState({
    email: 'neetibut@example.com',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // ที่นี่จะเรียก API ไป backend
    // ตอนนี้จำลองการ login สำเร็จ
    onLogin({
      name: 'Neetibut Vasinondha',
      email: formData.email
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {/* Header */}
      <div className="absolute top-0 left-0 right-0 bg-white shadow-sm">
        <div className="flex justify-between items-center px-6 py-4">
          <div className="flex items-center space-x-2">
            <span className="text-2xl">📝</span>
            <span className="text-xl font-semibold text-blue-600">RAG Notes</span>
          </div>
          <div className="space-x-4">
            <Link to="/login" className="text-gray-600 hover:text-gray-800">Login</Link>
            <Link to="/signup" className="text-gray-600 hover:text-gray-800">Signup</Link>
          </div>
        </div>
      </div>

      {/* Login Form */}
      <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md mt-20">
        <h2 className="text-2xl font-bold text-center mb-6">Login to Your Account</h2>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Password
            </label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              placeholder="••••••••••••"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              required
            />
          </div>
          
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-200"
          >
            Login
          </button>
        </form>
        
        <p className="text-center text-sm text-gray-600 mt-4">
          Don't have an account? 
          <Link to="/signup" className="text-blue-600 hover:text-blue-800 ml-1">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;