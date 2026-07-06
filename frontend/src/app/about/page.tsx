import React from 'react';

export default function About() {
  return (
    <main className="flex flex-1 flex-col justify-center items-center text-text-main px-4 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>
      
      <div className="z-10 flex flex-col items-center text-center max-w-3xl glass-panel p-12 rounded-3xl border border-white/10 shadow-2xl">
        <h1 className="text-5xl font-extrabold tracking-tight mb-6 drop-shadow-lg text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">
          About StudyNotion
        </h1>
        <p className="text-xl text-text-muted font-light leading-relaxed">
          StudyNotion is a premier EdTech platform designed to bridge the gap between ambitious learners and world-class instructors. Our mission is to provide affordable, high-quality IT education to everyone, everywhere.
        </p>
      </div>
    </main>
  );
}
