'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useAuth } from '@/context/AuthContext';
import { FiChevronDown } from 'react-icons/fi';

const Navbar = () => {
  const { isLoggedIn, setIsLoggedIn, setUser } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUser(null);
    window.location.href = '/login';
  };

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="flex justify-between items-center w-11/12 max-w-[1160px] py-4 mx-auto">
        <Link href="/">
          <span className="text-text-main text-3xl font-extrabold tracking-tight cursor-pointer hover:text-primary transition">
            StudyNotion
          </span>
        </Link>

        <nav>
          <ul className="flex items-center gap-x-8 text-text-muted font-medium relative">
            <li>
              <Link href="/" className="group relative overflow-hidden inline-flex">
                <span className="transition-transform duration-300 ease-out group-hover:-translate-y-full">Home</span>
                <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 group-hover:text-accent">Home</span>
              </Link>
            </li>

            {/* Catalog Dropdown */}
            <li 
              className="relative cursor-pointer group flex items-center gap-1 hover:text-text-main transition-colors duration-300"
              onMouseEnter={() => setShowDropdown(true)}
              onMouseLeave={() => setShowDropdown(false)}
            >
              <Link href="/courses" className="group relative overflow-hidden inline-flex">
                <span className="transition-transform duration-300 ease-out group-hover:-translate-y-full">Catalog</span>
                <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 group-hover:text-accent">Catalog</span>
              </Link>
              <FiChevronDown className={`transition-transform duration-300 ${showDropdown ? 'rotate-180 text-primary' : ''}`} />

              {/* Dropdown Menu */}
              {showDropdown && (
                <div className="absolute top-[120%] left-1/2 -translate-x-1/2 w-[250px] p-2 bg-surface rounded-xl shadow-2xl flex flex-col gap-1 z-50 transition-all duration-300 animate-in fade-in border border-border">
                  <div className="absolute -top-2 left-1/2 -translate-x-1/2 w-4 h-4 bg-surface border-t border-l border-border transform rotate-45"></div>
                  <Link href="/courses?category=Web+Development" className="p-3 hover:bg-muted rounded-lg transition-colors text-sm text-gray-200 hover:text-primary">
                    Web Development
                  </Link>
                  <Link href="/courses?category=AI+Machine+Learning" className="p-3 hover:bg-muted rounded-lg transition-colors text-sm text-gray-200 hover:text-primary">
                    AI & Machine Learning
                  </Link>
                  <Link href="/courses?category=Cloud+Computing" className="p-3 hover:bg-muted rounded-lg transition-colors text-sm text-gray-200 hover:text-primary">
                    Cloud Computing
                  </Link>
                  <Link href="/courses?category=Cyber+Security" className="p-3 hover:bg-muted rounded-lg transition-colors text-sm text-gray-200 hover:text-primary">
                    Cyber Security
                  </Link>
                </div>
              )}
            </li>

            <li>
              <Link href="/about" className="group relative overflow-hidden inline-flex">
                <span className="transition-transform duration-300 ease-out group-hover:-translate-y-full">About</span>
                <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 group-hover:text-accent">About</span>
              </Link>
            </li>
            <li>
              <Link href="/contact" className="group relative overflow-hidden inline-flex">
                <span className="transition-transform duration-300 ease-out group-hover:-translate-y-full">Contact</span>
                <span className="absolute inset-0 translate-y-full transition-transform duration-300 ease-out group-hover:translate-y-0 group-hover:text-accent">Contact</span>
              </Link>
            </li>
          </ul>
        </nav>

        <div className="flex items-center gap-x-4 text-text-main font-medium">
          {!isLoggedIn && (
            <Link href="/login">
              <button className="px-5 py-2 rounded-xl border border-border bg-background hover:bg-muted hover:text-primary-hover transition-all">
                Login
              </button>
            </Link>
          )}
          {!isLoggedIn && (
            <Link href="/signup">
              <button className="px-5 py-2 rounded-xl neon-btn">
                Sign Up
              </button>
            </Link>
          )}
          {isLoggedIn && (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-xl border border-border bg-background hover:bg-muted hover:text-primary-hover transition-all"
            >
              Log Out
            </button>
          )}
          {isLoggedIn && (
            <Link href="/dashboard">
              <button className="px-5 py-2 rounded-xl neon-btn">
                Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;
