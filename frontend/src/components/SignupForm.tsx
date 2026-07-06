'use client';

import React, { useState } from 'react';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
import { useRouter } from 'next/navigation';
import { useAuth } from '@/context/AuthContext';

const SignupForm = () => {
  const { setIsLoggedIn, setUser } = useAuth();
  const router = useRouter();

  const [showCreatePass, setShowCreatePass] = useState(false);
  const [showConfirmPass, setShowConfirmPass] = useState(false);
  const [accountType, setAccountType] = useState('student');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  function changeHandler(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  }

  async function submitHandler(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords do not match");
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ ...formData, accountType }),
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
      console.error('Error signing up:', error);
    }
  }

  return (
    <div>
      <div className="flex bg-white/5 p-1 gap-x-1 rounded-full max-w-max border border-white/10 mb-6 shadow-inner backdrop-blur-md">
        <button
          onClick={() => setAccountType('student')}
          className={`${
            accountType === 'student'
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-text-main shadow-md'
              : 'bg-transparent text-text-muted hover:text-text-main'
          } py-2 px-6 rounded-full transition-all font-medium`}
        >
          Student
        </button>
        <button
          onClick={() => setAccountType('instructor')}
          className={`${
            accountType === 'instructor'
              ? 'bg-gradient-to-r from-purple-500 to-blue-500 text-text-main shadow-md'
              : 'bg-transparent text-text-muted hover:text-text-main'
          } py-2 px-6 rounded-full transition-all font-medium`}
        >
          Instructor
        </button>
      </div>

      <form onSubmit={submitHandler} className="flex flex-col gap-y-5">
        <div className="flex gap-x-4">
          <label className="w-full">
            <p className="text-[0.875rem] text-gray-200 mb-2 font-medium tracking-wide">
              First Name <sup className="text-pink-400">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="First Name"
              onChange={changeHandler}
              value={formData.firstName}
              name="firstName"
              className="glass-input rounded-xl w-full p-3 text-text-main placeholder-gray-400"
            />
          </label>

          <label className="w-full">
            <p className="text-[0.875rem] text-gray-200 mb-2 font-medium tracking-wide">
              Last Name <sup className="text-pink-400">*</sup>
            </p>
            <input
              type="text"
              required
              placeholder="Last Name"
              onChange={changeHandler}
              value={formData.lastName}
              name="lastName"
              className="glass-input rounded-xl w-full p-3 text-text-main placeholder-gray-400"
            />
          </label>
        </div>

        <label className="w-full">
          <p className="text-[0.875rem] text-gray-200 mb-2 font-medium tracking-wide">
            Email Address <sup className="text-pink-400">*</sup>
          </p>
          <input
            type="email"
            required
            placeholder="Enter your email address"
            value={formData.email}
            onChange={changeHandler}
            className="glass-input rounded-xl w-full p-3 text-text-main placeholder-gray-400"
            name="email"
          />
        </label>

        <div className="flex gap-x-4">
          <label className="w-full relative">
            <p className="text-[0.875rem] text-gray-200 mb-2 font-medium tracking-wide">
              Create Password <sup className="text-pink-400">*</sup>
            </p>
            <input
              type={showCreatePass ? 'text' : 'password'}
              required
              placeholder="Password"
              onChange={changeHandler}
              value={formData.password}
              name="password"
              className="glass-input rounded-xl w-full p-3 text-text-main placeholder-gray-400"
            />
            <span
              onClick={() => setShowCreatePass(!showCreatePass)}
              className="absolute right-3 top-[42px] cursor-pointer z-10 text-text-muted hover:text-text-main transition"
            >
              {showCreatePass ? (
                <AiOutlineEyeInvisible fontSize={22} />
              ) : (
                <AiOutlineEye fontSize={22} />
              )}
            </span>
          </label>

          <label className="w-full relative">
            <p className="text-[0.875rem] text-gray-200 mb-2 font-medium tracking-wide">
              Confirm Password <sup className="text-pink-400">*</sup>
            </p>
            <input
              type={showConfirmPass ? 'text' : 'password'}
              required
              placeholder="Confirm"
              onChange={changeHandler}
              value={formData.confirmPassword}
              name="confirmPassword"
              className="glass-input rounded-xl w-full p-3 text-text-main placeholder-gray-400"
            />
            <span
              onClick={() => setShowConfirmPass(!showConfirmPass)}
              className="absolute right-3 top-[42px] cursor-pointer z-10 text-text-muted hover:text-text-main transition"
            >
              {showConfirmPass ? (
                <AiOutlineEyeInvisible fontSize={22} />
              ) : (
                <AiOutlineEye fontSize={22} />
              )}
            </span>
          </label>
        </div>

        <button className="neon-btn py-3 px-6 rounded-xl mt-4 font-bold text-text-main shadow-lg tracking-wide text-lg w-full">
          Create Account
        </button>
      </form>
    </div>
  );
};

export default SignupForm;
