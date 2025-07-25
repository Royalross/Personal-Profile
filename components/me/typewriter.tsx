import React, { useState, useEffect } from 'react';

interface TypewriterProps {
  text: string;
  speed?: number; // ms per character
  delay?: number; // ms after finishing before reset
}

const Typewriter: React.FC<TypewriterProps> = ({
  text,
  speed = 80,
  delay = 2000,
}) => {
  const [displayed, setDisplayed] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    let timeout: ReturnType<typeof setTimeout>;

    if (index < text.length) {
      timeout = setTimeout(() => {
        setDisplayed(text.slice(0, index + 1));
        setIndex(index + 1);
      }, speed);
    } else {
      // Pause, then reset for looping
      timeout = setTimeout(() => {
        setDisplayed('');
        setIndex(0);
      }, delay);
    }

    return () => clearTimeout(timeout);
  }, [index, text, speed, delay]);

  return (
    <span className="font-mono text-white text-4xl">
      {displayed}
      <span className="animate-pulse">|</span>
    </span>
  );
};

export default Typewriter;
