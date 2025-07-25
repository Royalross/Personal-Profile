'use client';

import React from 'react';
import Navbar from '@/components/me/navbar';
import Typewriter from '@/components/me/typewriter';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      {/* Top Section with background image */}
      <section className="relative min-h-screen w-full flex flex-col">
        <Image
          src="/pixels.jpg"
          alt="Background animation"
          fill // Makes the image absolutely fill the parent (like position: absolute; top: 0; left:0; width:100%; height:100%)
          className="absolute inset-0 w-full h-full object-cover object-center z-0"
          priority // Loads the image eagerly,
        />

        {/* Overlay Content */}
        <div className="relative z-10 flex flex-col h-full min-h-screen">
          <Navbar />

          {/* Typewriter centered hopefully */}
          <div className="flex-1 flex flex-col items-center justify-center">
            <Typewriter text="Welcome To My website" speed={70} delay={2000} />
          </div>
        </div>
      </section>

      {/* Main Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl font-semibold mb-4">The Rest of It</h2>
          <p>Your content goes here...</p>
        </div>
      </section>
    </>
  );
}
