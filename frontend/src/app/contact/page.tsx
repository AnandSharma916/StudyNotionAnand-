import React from 'react';

export default function Contact() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-text-main px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>
      
      <div className="z-10 flex flex-col items-center text-center max-w-lg w-full glass-panel p-10 rounded-3xl border border-white/10 shadow-2xl">
        <h1 className="text-4xl font-extrabold tracking-tight mb-6 drop-shadow-lg text-text-main">
          Contact Us
        </h1>
        
        <form className="w-full flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Your Name" 
            className="glass-input rounded-xl w-full p-3 text-text-main placeholder-gray-400"
          />
          <input 
            type="email" 
            placeholder="Your Email Address" 
            className="glass-input rounded-xl w-full p-3 text-text-main placeholder-gray-400"
          />
          <textarea 
            placeholder="How can we help you?" 
            rows={4}
            className="glass-input rounded-xl w-full p-3 text-text-main placeholder-gray-400 resize-none"
          ></textarea>
          
          <button type="button" className="neon-btn py-3 px-6 rounded-xl mt-2 font-bold text-text-main shadow-lg tracking-wide">
            Send Message
          </button>
        </form>
      </div>
    </main>
  );
}
