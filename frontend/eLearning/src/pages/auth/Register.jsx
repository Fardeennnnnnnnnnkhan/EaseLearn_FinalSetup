import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './auth.css';
import { UserData } from '../../context/UserContext.jsx';

function Register() {
  const navigate = useNavigate();
  const { btnloading, registerUser } = UserData();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const submitHandler = async (e) => {
    e.preventDefault();
    await registerUser(name, email, password, navigate);
  };

  return (
    <div className="flex bg-black items-center justify-center min-h-screen bg-gradient-to-r from-[#171717] via-black to-teal-900/40">
    <div className="flex flex-col md:flex-row w-full md:w-3/4 bg-black bg-opacity-80 rounded-lg shadow-lg overflow-hidden">
      
      {/* Right Column (Image) */}
      <div className="w-full md:w-1/2 bg-teal-900/40 flex items-center justify-center p-4 md:p-0">
        <img
          src="https://i.ibb.co/645tY7V/toshjmosh-a-stunning-3-D-cartoon-illustration-of-a-male-student-25db8c50-fd24-437a-8a50-39195302f967.png"
          alt="Illustration"
          className="h-48 md:h-80"
        />
      </div>
  
      {/* Left Column (Form) */}
      <div className="w-full md:w-1/2 p-8 bg-[#0d0d0d] text-white">
        <h2 className="text-4xl font-bold text-teal-400 mb-6">Register</h2>
        <p className="text-lg mb-4 text-gray-300">Join us today!</p>
        <form onSubmit={submitHandler}>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="username">Username</label>
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              type="text"
              className="w-full px-3 py-2 bg-[#171717] text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="email">Email</label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full px-3 py-2 bg-[#171717] text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-teal-500"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-400 mb-2" htmlFor="password">Password</label>
            <input
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              type="password"
              className="w-full px-3 py-2 bg-[#171717] text-white border border-gray-600 rounded-md focus:outline-none focus:ring focus:ring-teal-500"
              required
            />
          </div>
          <button
            disabled={btnloading}
            type="submit"
            className="w-full bg-teal-600 text-white py-2 rounded-md hover:bg-teal-700 transition duration-300"
          >
            {btnloading ? 'Please Wait' : 'Register'}
          </button>
        </form>
  
        <p className="mt-4 text-center text-gray-400">
          Already have an account?{' '}
          <Link className="text-teal-400 hover:underline" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  </div>
  
  );
}

export default Register;
