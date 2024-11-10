// components/Hero.tsx
import React from 'react';
import Link from 'next/link';
import { SocialIcon } from './Icons';

export default function Hero() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-black text-white">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-red-600 animate-fade-in-down">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-fade-in-up">
          Hi, I'm Shama Farooq. I create digital experiences that entertain and inspire.
        </p>
        <div className="space-x-4 mb-8">
          <Link 
            href="/about" 
            className="bg-red-600 text-white px-6 py-3 rounded font-semibold hover:bg-red-700 transition duration-300"
          >
            About Me
          </Link>
          <Link 
            href="/projects" 
            className="bg-gray-700 text-white px-6 py-3 rounded font-semibold hover:bg-gray-600 transition duration-300"
          >
            My Projects
          </Link>
        </div>
        <div className="flex justify-center space-x-6">
          <SocialIcon href="https://github.com/Shamafarooq" icon="github" />
          <SocialIcon href="https://www.linkedin.com/in/shama-farooq-a3ba702ba/" icon="linkedin" />
        </div>
      </div>
    </main>
  );
}