'use client';

import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';

const LoginForm = () => {
  const { setIsLoggedIn, setUser } = useAuth();
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const data = await response.json();
      if (data.success) {
        setIsLoggedIn(true);
        setUser(data.user);
        router.push('/dashboard');
      } else {
        alert(data.message);
      }
    } catch (error) {
      console.error('Error logging in:', error);
    }
  }

  return (
    <form onSubmit={submitHandler} className="flex flex-col w-full gap-y-5">
      <label className="w-full">
        <p className="text-[0.875rem] text-gray-200 mb-2 font-medium tracking-wide">
          Email Address <sup className="text-pink-400">*</sup>
        </p>
        <input
          type="email"
          required
          value={formData.email}
          placeholder="Enter your email address"
          onChange={changeHandler}
          name="email"
          className="glass-input rounded-xl w-full p-3 text-text-main placeholder-gray-400"
        />
      </label>

      <label className="w-full relative">
        <p className="text-[0.875rem] text-gray-200 mb-2 font-medium tracking-wide">
          Password <sup className="text-pink-400">*</sup>
        </p>
        <input
          type={showPassword ? 'text' : 'password'}
          required
          value={formData.password}
          placeholder="Enter Password"
          onChange={changeHandler}
          name="password"
          className="glass-input rounded-xl w-full p-3 text-text-main placeholder-gray-400"
        />
        <span
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-4 top-[42px] cursor-pointer text-text-muted hover:text-text-main transition"
        >
          {showPassword ? (
            <AiOutlineEyeInvisible fontSize={22} />
          ) : (
            <AiOutlineEye fontSize={22} />
          )}
        </span>
        <div className="flex justify-end mt-2">
          <Link href="#">
            <p className="text-xs text-primary-hover hover:text-blue-300 transition-colors drop-shadow-md">
              Forgot Password?
            </p>
          </Link>
        </div>
      </label>

      <button className="neon-btn py-3 px-6 rounded-xl mt-4 font-bold text-text-main shadow-lg tracking-wide text-lg">
        Sign In
      </button>
    </form>
  );
};

export default LoginForm;
