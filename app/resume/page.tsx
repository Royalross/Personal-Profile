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
      <main className="flex-grow pt-20">
        <div className="text-center px-4">
          <h1 className="text-4xl font-bold mb-2">Resume</h1>
          <p className="text-lg text-gray-700 mb-6">
            Welcome! Here’s a quick overview of my professional background. Feel
            free to Look.
          </p>
        </div>
        <PDFViewerClient fileUrl="/Ross_Lughan_Resume.pdf" />
      </main>
      <footer className="bg-white py-4">
        <div className="flex justify-center items-center gap-6">
          <a
            href="https://www.linkedin.com/in/lughan-ross/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <Linkedin size={24} />
          </a>
          <a
            href="https://github.com/Royalross"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <Github size={24} />
          </a>
          <a href="mailto:royaltross.lr@gmail.com" aria-label="Email">
            <Mail size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}
