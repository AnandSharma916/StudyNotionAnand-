'use client';

import React, { useState, useEffect } from 'react';
import { coursesData, Course } from '@/data/courses';
import { useSearchParams } from 'next/navigation';

export default function CoursesCatalog() {
  const searchParams = useSearchParams();
  const categoryFilter = searchParams.get('category');
  
  const [courses, setCourses] = useState<Course[]>(coursesData);

  useEffect(() => {
    if (categoryFilter) {
      setCourses(coursesData.filter(c => c.category === categoryFilter));
    } else {
      setCourses(coursesData);
    }
  }, [categoryFilter]);

  return (
    <main className="flex flex-col min-h-screen px-4 py-12 relative overflow-hidden text-text-main w-11/12 max-w-[1160px] mx-auto">
      {/* Decorative Orbs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-700 rounded-full mix-blend-multiply filter blur-[200px] opacity-30 -z-10"></div>
      
      <div className="mb-12">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 drop-shadow-md">
          {categoryFilter ? `${categoryFilter} Courses` : 'Course Catalog'}
        </h1>
        <p className="text-xl text-text-muted max-w-2xl font-light">
          Browse our collection of top-tier IT courses to level up your career.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 z-10">
        {courses.map(course => (
          <div key={course.id} className="glass-panel rounded-2xl overflow-hidden hover:scale-[1.02] transition-transform duration-300 group cursor-pointer border border-white/10 shadow-xl flex flex-col h-full">
            <div className="h-48 overflow-hidden relative">
              <img 
                src={course.image} 
                alt={course.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              />
              <div className="absolute top-3 left-3 bg-background/60 backdrop-blur-md px-3 py-1 rounded-full text-xs font-semibold text-blue-300 border border-white/10">
                {course.level}
              </div>
            </div>
            
            <div className="p-6 flex flex-col flex-1 justify-between">
              <div>
                <p className="text-xs text-purple-400 font-bold uppercase tracking-wider mb-2">{course.category}</p>
                <h2 className="text-xl font-bold mb-2 group-hover:text-blue-300 transition-colors line-clamp-2">{course.title}</h2>
                <p className="text-text-muted text-sm mb-4">By {course.instructor}</p>
              </div>
              
              <div className="flex items-center justify-between border-t border-white/10 pt-4 mt-auto">
                <div className="flex items-center gap-1">
                  <span className="text-yellow-400 font-bold">{course.rating}</span>
                  <span className="text-text-muted text-xs">({course.reviews.toLocaleString()})</span>
                </div>
                <div className="text-lg font-bold text-text-main">
                  ₹{course.price.toLocaleString('en-IN')}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {courses.length === 0 && (
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-text-muted">No courses found in this category.</h2>
        </div>
      )}
    </main>
  );
}
