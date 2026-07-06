'use client';

import React from 'react';
import SignupForm from './SignupForm';
import LoginForm from './LoginForm';
import { FcGoogle } from 'react-icons/fc';

interface TemplateProps {
  title: string;
  desc1: string;
  desc2: string;
  image: string;
  formType: 'login' | 'signup';
}

const Template: React.FC<TemplateProps> = ({ title, desc1, desc2, image, formType }) => {
  return (
    <div className="flex w-11/12 max-w-[1160px] py-16 mx-auto gap-y-12 gap-x-12 justify-between items-center flex-col md:flex-row min-h-[calc(100vh-80px)]">
      
      {/* Form Container */}
      <div className="w-11/12 max-w-[500px] bg-surface p-8 rounded-2xl text-text-main shadow-2xl relative z-10 transform transition-all duration-500 hover:scale-[1.01] border border-border">
        <h1 className="text-text-main font-bold text-[2rem] leading-[2.5rem] drop-shadow-md">{title}</h1>
        <p className="text-[1.125rem] mt-4 leading-[1.625rem]">
          <span className="text-text-muted">{desc1}</span>
          <span className="text-primary italic ml-2">{desc2}</span>
        </p>

        <div className="mt-8">
          {formType === 'signup' ? <SignupForm /> : <LoginForm />}
        </div>

        <div className="flex w-full items-center my-6 gap-x-3 opacity-70">
          <div className="h-[1px] w-full bg-[#1f2937]"></div>
          <p className="text-[#1f2937] font-medium leading-[1.375rem]">OR</p>
          <div className="h-[1px] w-full bg-[#1f2937]"></div>
        </div>

        <button className="w-full flex items-center justify-center rounded-xl font-medium text-text-muted border border-border bg-transparent hover:bg-muted hover:text-primary-hover transition-all px-[12px] py-[12px] gap-x-3 group">
          <FcGoogle className="text-2xl group-hover:scale-110 transition-transform" />
          <p>Sign In with Google</p>
        </button>
      </div>

      {/* Image Container */}
      <div className="relative w-11/12 max-w-[500px] hidden md:block">
        <img
          src="/assets/frame.png"
          alt="pattern"
          width={558}
          height={504}
          loading="lazy"
          className="opacity-50"
        />
        <img
          src={image}
          alt="Students"
          width={558}
          height={504}
          loading="lazy"
          className="absolute -top-4 right-4 rounded-xl shadow-[0_0_40px_rgba(139,92,246,0.3)] transition-transform duration-500 hover:scale-105"
        />
      </div>
    </div>
  );
};

export default Template;
