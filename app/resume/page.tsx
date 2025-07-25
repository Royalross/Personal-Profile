'use client';

import dynamic from 'next/dynamic';
import Navbar from '@/components/me/navbar';
import { Linkedin, Github, Mail } from 'lucide-react';

// Dynamically import the PDF viewer to avoid SSR issues
const PDFViewerClient = dynamic(
  () => import('@/components/me/PDFViewerClient'),
  { ssr: false },
);

export default function ResumePage() {
  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
      <Navbar className="bg-gray-400" />

      <main className="flex-grow pt-20 px-4 sm:px-8 lg:px-16">
        <div className="text-center max-w-3xl mx-auto">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2">
            Resume
          </h1>
          <p className="text-base sm:text-lg text-gray-700 mb-6">
            Welcome! Here’s a quick overview of my professional background. Feel
            free to look.
          </p>
        </div>

        <div className="mt-4 mb-8 w-full flex justify-center">
          <div className="w-full max-w-3xl h-[600px] sm:h-[800px] md:h-[900px] lg:h-[1000px] shadow-lg overflow-hidden rounded-lg">
            <PDFViewerClient fileUrl="/Ross_Lughan_Resume.pdf" />
          </div>
        </div>
      </main>

      <footer className="bg-white py-4">
        <div className="flex justify-center items-center gap-6 text-gray-800">
          <a
            href="https://www.linkedin.com/in/lughan-ross/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
            className="hover:text-blue-600 transition"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Royalross"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
            className="hover:text-gray-900 transition"
          >
            <Github size={24} />
          </a>
          <a
            href="mailto:royaltross.lr@gmail.com"
            aria-label="Email"
            className="hover:text-red-600 transition"
          >
            <Mail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
