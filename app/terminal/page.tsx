'use client';

import React, { useState, useRef, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import MatrixRain from '@/components/ui/matrix-rain';

function TerminalWidget() {
  const router = useRouter();
  const [history, setHistory] = useState<string[]>(['Welcome to my terminal']);
  const [input, setInput] = useState('');
  const endRef = useRef<HTMLDivElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      const cmd = input.trim().toLowerCase();
      setInput('');

      if (cmd === '') return;
      if (cmd === 'stop') {
        // redirect to home
        router.push('/');
        return;
      }

      // echo the command
      setHistory((h) => [...h, cmd === 'help' ? 'help' : cmd]);

      // response for help
      if (cmd === 'help') {
        setHistory((h) => [...h, 'Still in construction']);
      }
    }
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  return (
    <div className="w-full max-w-md h-96 bg-black/80 border border-green-500 rounded-lg shadow-lg font-mono text-green-400 flex flex-col p-4 overflow-hidden">
      {/* History pane */}
      <div className="flex-1 overflow-y-auto mb-2">
        {history.map((line, idx) => (
          <div key={idx} className="whitespace-pre-wrap">
            <span className="text-green-500 mr-1">$</span>
            {line}
          </div>
        ))}
        <div ref={endRef} />
      </div>

      {/* Input */}
      <div className="flex">
        <span className="text-green-500 mr-2">$</span>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          className="bg-transparent flex-1 focus:outline-none"
          autoFocus
        />
      </div>
    </div>
  );
}

export default function TerminalPage() {
  return (
    <div className="relative w-full h-screen bg-black overflow-hidden">
      {/* Matrix rain background */}
      <div className="absolute inset-0">
        <MatrixRain />
      </div>

      {/* terminal widget */}
      <div className="absolute inset-0 flex items-center justify-center z-10 px-4">
        <TerminalWidget />
      </div>
    </div>
  );
}
