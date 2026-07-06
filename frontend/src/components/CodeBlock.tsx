'use client';

import React, { useState, useEffect } from 'react';

const codeString = `import React from 'react';
import { StudyNotion } from '@edtech/core';

export default function MasterClass() {
  const future = new StudyNotion.Future();
  
  return (
    <div className="learning-journey">
      <h1>Unlock Your Potential</h1>
      <StudyNotion.Course 
        topic="Web Development"
        level="Master"
      />
      <button onClick={() => future.start()}>
        Start Learning Now
      </button>
    </div>
  );
}`;

const CodeBlock = () => {
  const [displayedCode, setDisplayedCode] = useState('');
  
  useEffect(() => {
    let i = 0;
    const typingInterval = setInterval(() => {
      setDisplayedCode(codeString.slice(0, i));
      i++;
      if (i > codeString.length) {
        clearInterval(typingInterval);
        // Reset after a delay to loop the animation
        setTimeout(() => {
          setDisplayedCode('');
          i = 0;
        }, 5000);
      }
    }, 40);

    return () => clearInterval(typingInterval);
  }, []);

  return (
    <div className="w-full max-w-lg rounded-xl overflow-hidden shadow-2xl relative border border-border bg-surface">
      {/* IDE Header */}
      <div className="bg-background px-4 py-3 flex items-center gap-2 border-b border-border">
        <div className="w-3 h-3 rounded-full bg-red-500"></div>
        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
        <div className="w-3 h-3 rounded-full bg-green-500"></div>
        <div className="ml-4 text-xs font-mono text-text-muted">MasterClass.tsx</div>
      </div>
      
      {/* IDE Body */}
      <div className="p-6 h-64 overflow-hidden relative font-mono text-sm bg-surface">
        <pre className="text-text-muted">
          <code>
            {displayedCode.split('\n').map((line, index) => (
              <div key={index} className="flex">
                <span className="w-6 text-gray-600 select-none">{index + 1}</span>
                <span dangerouslySetInnerHTML={{
                  __html: line
                    .replace(/import|from|export|default|function|return|const|new/g, '<span class="text-pink-400">$&</span>')
                    .replace(/React|StudyNotion|MasterClass|Course/g, '<span class="text-yellow-400">$&</span>')
                    .replace(/"[^"]*"/g, '<span class="text-yellow-200">$&</span>')
                    .replace(/<[/]?\w+|>/g, '<span class="text-purple-400">$&</span>')
                    .replace(/className|topic|level|onClick/g, '<span class="text-blue-300">$&</span>')
                }} />
              </div>
            ))}
            <span className="inline-block w-2 h-4 bg-white animate-pulse ml-1 align-middle"></span>
          </code>
        </pre>
      </div>
    </div>
  );
};

export default CodeBlock;
