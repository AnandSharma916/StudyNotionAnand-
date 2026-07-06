'use client';

import React from 'react';
import PrivateRoute from '@/components/PrivateRoute';
import { useAuth } from '@/context/AuthContext';

const Dashboard = () => {
  const { user } = useAuth();

  return (
    <PrivateRoute>
      <main className="flex flex-1 flex-col items-center py-20 px-4 relative overflow-hidden">
        {/* Glowing orb background for dashboard */}
        <div className="absolute top-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>
        <div className="absolute bottom-0 left-1/4 w-96 h-96 bg-blue-600 rounded-full mix-blend-multiply filter blur-[150px] opacity-40"></div>

        <div className="w-full max-w-5xl z-10 space-y-8">
          
          <header className="glass-panel p-8 rounded-3xl text-text-main shadow-xl border border-white/10 flex justify-between items-center bg-gradient-to-br from-white/5 to-white/10">
            <div>
              <h1 className="text-4xl font-extrabold tracking-tight mb-2 drop-shadow-md">
                Welcome back, <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400">{user?.firstName || 'Student'}</span>!
              </h1>
              <p className="text-text-muted text-lg font-light">
                Here is a summary of your learning progress.
              </p>
            </div>
            <div className="hidden md:block">
              <div className="w-16 h-16 rounded-full bg-gradient-to-tr from-purple-500 to-blue-500 flex items-center justify-center text-2xl font-bold shadow-lg border-2 border-white/20">
                {user?.firstName?.[0] || 'S'}
              </div>
            </div>
          </header>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Stat Card 1 */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-40 hover:bg-white/5 transition-colors cursor-pointer group">
              <p className="text-text-muted font-medium">Courses Completed</p>
              <div className="flex items-end justify-between">
                <p className="text-5xl font-bold text-text-main group-hover:text-purple-400 transition-colors">12</p>
                <p className="text-green-400 text-sm font-semibold mb-1">+2 this week</p>
              </div>
            </div>

            {/* Stat Card 2 */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-40 hover:bg-white/5 transition-colors cursor-pointer group">
              <p className="text-text-muted font-medium">Hours Learned</p>
              <div className="flex items-end justify-between">
                <p className="text-5xl font-bold text-text-main group-hover:text-primary-hover transition-colors">148</p>
                <p className="text-green-400 text-sm font-semibold mb-1">+12 this week</p>
              </div>
            </div>

            {/* Stat Card 3 */}
            <div className="glass-panel p-6 rounded-2xl border border-white/10 flex flex-col justify-between h-40 hover:bg-white/5 transition-colors cursor-pointer group">
              <p className="text-text-muted font-medium">Current Streak</p>
              <div className="flex items-end justify-between">
                <p className="text-5xl font-bold text-text-main group-hover:text-pink-400 transition-colors">14 <span className="text-2xl">🔥</span></p>
                <p className="text-text-muted text-sm font-semibold mb-1">Keep it up!</p>
              </div>
            </div>
          </div>

        </div>
      </main>
    </PrivateRoute>
  );
};

export default Dashboard;
