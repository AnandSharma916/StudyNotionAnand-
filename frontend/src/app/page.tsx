import React from 'react';
import Link from 'next/link';
import CodeBlock from '@/components/CodeBlock';
import { coursesData } from '@/data/courses';

export default function Home() {
  const topCourses = coursesData.slice(0, 6);

  return (
    <main className="flex flex-col text-text-main overflow-hidden relative">

      {/* SECTION 1: HERO */}
      <section className="w-11/12 max-w-[1160px] mx-auto min-h-[calc(100vh-80px)] flex flex-col md:flex-row items-center justify-between gap-12 py-20 relative z-10">
        <div className="flex-1 flex flex-col items-start text-left relative z-20">
          <div className="bg-surface border border-primary/30 px-4 py-2 rounded-full mb-6 shadow-[0_0_15px_rgba(236,72,153,0.2)] animate-float">
            <span className="text-sm font-semibold text-primary flex items-center gap-2">
              <span className="animate-pulse">🤖</span> Powered by Next-Gen AI
            </span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight drop-shadow-xl">
            Master Your Future with AI & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-secondary to-accent">StudyNotion</span>
          </h1>
          <p className="text-xl md:text-2xl text-text-muted mb-10 max-w-2xl font-light leading-relaxed">
            Unlock your potential through AI-driven interactive courses, intelligent real-time collaboration, and a community of eager learners. 
          </p>
          
          <div className="flex gap-4">
            <Link href="/signup">
              <button className="neon-btn px-8 py-4 rounded-xl text-lg font-bold shadow-lg flex items-center gap-2 group">
                Start Learning for Free
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </button>
            </Link>
            <Link href="/courses">
              <button className="px-8 py-4 rounded-xl text-lg font-bold text-text-main border border-border bg-surface hover:bg-muted hover:border-primary/50 transition-all shadow-lg">
                Explore AI Catalog
              </button>
            </Link>
          </div>
        </div>
        
        {/* Animated AI Orbital Display (Kuch ghumta hua & awesome animations) */}
        <div className="flex-1 w-full flex justify-center items-center relative min-h-[400px] md:min-h-[500px]">
          
          {/* Central Glowing AI Core */}
          <div className="absolute w-40 h-40 bg-primary/20 rounded-full blur-[40px] animate-pulse" style={{ animationDuration: '3s' }}></div>
          <div className="relative z-10 w-28 h-28 bg-gradient-to-br from-primary to-secondary rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(236,72,153,0.6)] border-4 border-background hover:scale-110 transition-transform duration-500 cursor-pointer">
             <span className="text-5xl">🧠</span>
          </div>

          {/* Inner Orbit (Spinning) */}
          <div className="absolute w-[280px] h-[280px] border border-border/50 rounded-full animate-spin" style={{ animationDuration: '12s' }}>
            <div className="absolute -top-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-surface border border-primary/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.4)]">
              <span className="text-lg animate-pulse">⚙️</span>
            </div>
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 w-10 h-10 bg-surface border border-secondary/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(139,92,246,0.4)]">
              <span className="text-lg" style={{ animationDirection: 'reverse' }}>⚛️</span>
            </div>
          </div>

          {/* Outer Orbit (Spinning in Reverse) */}
          <div className="absolute w-[400px] h-[400px] border border-border/30 rounded-full animate-spin" style={{ animationDuration: '20s', animationDirection: 'reverse' }}>
            <div className="absolute top-1/2 -left-6 -translate-y-1/2 w-12 h-12 bg-surface border border-accent/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(6,182,212,0.4)]">
              <span className="text-xl animate-bounce">🤖</span>
            </div>
            <div className="absolute top-1/2 -right-6 -translate-y-1/2 w-12 h-12 bg-surface border border-primary/50 rounded-full flex items-center justify-center shadow-[0_0_15px_rgba(236,72,153,0.4)]">
              <span className="text-xl">📊</span>
            </div>
          </div>
          
          {/* Floating Code Block (Offset) */}
          <div className="absolute -bottom-16 -right-4 md:-right-12 transform scale-[0.65] md:scale-75 opacity-90 animate-float transition-all duration-700 hover:scale-75 md:hover:scale-90 hover:opacity-100 hover:z-30 cursor-pointer shadow-2xl">
             <CodeBlock />
          </div>
        </div>
      </section>

      {/* SECTION 2: TECH STACK MARQUEE */}
      <section className="w-full bg-surface border-y border-border py-8 overflow-hidden z-10">
        <div className="w-[200%] flex animate-marquee">
          {[1, 2].map((i) => (
            <div key={i} className="flex justify-around items-center w-full px-4 gap-12 text-text-muted text-2xl md:text-4xl font-bold">
              <span>Next.js</span>
              <span>•</span>
              <span>React</span>
              <span>•</span>
              <span>Node.js</span>
              <span>•</span>
              <span>Python</span>
              <span>•</span>
              <span>AWS</span>
              <span>•</span>
              <span>Docker</span>
              <span>•</span>
              <span>MongoDB</span>
              <span>•</span>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 3: FEATURES GRID */}
      <section className="w-11/12 max-w-[1160px] mx-auto py-32 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Why Choose StudyNotion?</h2>
          <p className="text-text-muted text-xl">We provide the best tools to accelerate your IT career.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { title: "Industry Experts", desc: "Learn directly from professionals working at top tech companies.", icon: "👨‍🏫" },
            { title: "Hands-on Projects", desc: "Build real-world applications to add to your resume and portfolio.", icon: "💻" },
            { title: "Lifetime Access", desc: "Pay once and get lifetime access to course materials and updates.", icon: "♾️" }
          ].map((feature, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-3xl border border-border hover:border-primary/50 transition-colors duration-300 hover:-translate-y-2 transform">
              <div className="text-5xl mb-6">{feature.icon}</div>
              <h3 className="text-2xl font-bold mb-3 text-text-main">{feature.title}</h3>
              <p className="text-text-muted leading-relaxed">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4: TRENDING COURSES */}
      <section className="w-full bg-surface border-t border-border py-32 z-10">
        <div className="w-11/12 max-w-[1160px] mx-auto">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-4xl font-bold mb-2">Trending Courses</h2>
              <p className="text-text-muted">Join thousands of students in these top-rated classes.</p>
            </div>
            <Link href="/courses">
              <button className="text-primary hover:text-primary-hover font-semibold transition-colors flex items-center gap-2">
                See all courses &rarr;
              </button>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {topCourses.map(course => (
              <div key={course.id} className="bg-background rounded-2xl overflow-hidden group cursor-pointer border border-border shadow-xl flex flex-col h-full transform transition-all duration-300 hover:scale-[1.03] hover:shadow-primary/10">
                <div className="h-48 overflow-hidden relative">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
                  />
                  <div className="absolute top-3 left-3 bg-background/80 px-3 py-1 rounded-full text-xs font-semibold text-primary border border-border">
                    {course.level}
                  </div>
                </div>
                
                <div className="p-6 flex flex-col flex-1 justify-between">
                  <div>
                    <p className="text-xs text-primary font-bold uppercase tracking-wider mb-2">{course.category}</p>
                    <h2 className="text-xl font-bold mb-2 group-hover:text-primary-hover transition-colors line-clamp-2">{course.title}</h2>
                    <p className="text-text-muted text-sm mb-4">By {course.instructor}</p>
                  </div>
                  
                  <div className="flex items-center justify-between border-t border-border pt-4 mt-auto">
                    <div className="flex items-center gap-1">
                      <span className="text-primary-hover font-bold">{course.rating}</span>
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
        </div>
      </section>

      {/* SECTION 4.5: GLOBAL IMPACT STATS */}
      <section className="w-full bg-background border-y border-border py-20 z-10 relative mt-20">
        <div className="absolute inset-0 bg-primary/5 blur-[100px] pointer-events-none"></div>
        <div className="w-11/12 max-w-[1160px] mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "100K+", label: "Active Students" },
            { value: "500+", label: "Premium Courses" },
            { value: "50+", label: "Industry Experts" },
            { value: "4.9/5", label: "Average Rating" },
          ].map((stat, idx) => (
            <div key={idx} className="glass-panel p-8 rounded-2xl flex flex-col items-center justify-center transform transition-transform hover:scale-105">
              <h3 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary mb-2">
                {stat.value}
              </h3>
              <p className="text-text-muted font-medium tracking-wide uppercase text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 4.75: STUDENT SUCCESS STORIES */}
      <section className="w-11/12 max-w-[1160px] mx-auto py-32 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 drop-shadow-md">Student Success Stories</h2>
          <p className="text-text-muted text-xl">See what our community has achieved with StudyNotion.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { name: "Sarah Jenkins", role: "Software Engineer at Google", content: "The Next.js and React course completely transformed my career. I went from a junior developer to landing a role at Google in just 6 months!", avatar: "SJ" },
            { name: "Rahul Sharma", role: "Cloud Architect", content: "The AWS certification path is phenomenally structured. I passed my Solutions Architect exam on the first try with a score of 940/1000.", avatar: "RS" },
            { name: "Emily Chen", role: "Cyber Security Analyst", content: "Hands down the best cybersecurity practical training available. The hands-on labs mimicking real-world threats gave me the confidence I needed.", avatar: "EC" }
          ].map((testimonial, idx) => (
            <div key={idx} className="bg-surface p-8 rounded-3xl border border-border relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-secondary/10 rounded-full blur-3xl -mr-10 -mt-10 transition-all group-hover:bg-secondary/20"></div>
              <div className="text-primary text-4xl mb-6">"</div>
              <p className="text-text-muted italic mb-8 relative z-10 leading-relaxed text-lg">
                {testimonial.content}
              </p>
              <div className="flex items-center gap-4 border-t border-border pt-6 mt-auto relative z-10">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white font-bold text-lg shadow-lg">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-text-main">{testimonial.name}</h4>
                  <p className="text-xs text-primary">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* SECTION 5: CTA FOOTER */}
      <section className="w-11/12 max-w-[800px] mx-auto py-32 text-center z-10 relative">
        <h2 className="text-5xl font-extrabold mb-6">Ready to Start Learning?</h2>
        <p className="text-xl text-text-muted mb-10">
          Create an account today and get access to world-class IT education.
        </p>
        <Link href="/signup">
          <button className="neon-btn px-10 py-5 rounded-2xl text-xl font-bold shadow-[0_0_20px_rgba(236,72,153,0.3)] transform transition-transform hover:scale-105">
            Create Free Account
          </button>
        </Link>
      </section>

      {/* SECTION 6: MASSIVE TYPOGRAPHY */}
      <section className="w-full overflow-hidden flex justify-center items-center pb-20 pt-10 z-0 select-none pointer-events-none opacity-50 hover:opacity-100 transition-opacity duration-700">
        <h1 
          className="text-[25vw] md:text-[20vw] font-black uppercase tracking-tighter text-transparent whitespace-nowrap leading-none" 
          style={{ WebkitTextStroke: '2px rgba(255, 255, 255, 0.15)' }}
        >
          ANAND
        </h1>
      </section>

    </main>
  );
}
