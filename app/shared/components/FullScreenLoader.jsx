'use client';
import { useEffect, useState } from 'react';

const FullScreenLoader = ({ duration = 3000, onFinish }) => {
  const [active, setActive] = useState(true);

  useEffect(() => {
    const scrollY = window.scrollY; // remember scroll position

    // lock scroll (works in all browsers + Next)
    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollY}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setActive(false);
      // wait for fade-out
      setTimeout(() => {
        // unlock scroll
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.overflow = '';
        document.body.style.width = '';
        window.scrollTo(0, scrollY); // restore scroll position
        onFinish?.();
      }, 700);
    }, duration);

    return () => {
      clearTimeout(timer);
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.overflow = '';
      document.body.style.width = '';
    };
  }, [duration, onFinish]);

  return (
    <div
      className={`fixed inset-0 z-[9999] bg-black flex items-center justify-center transition-opacity duration-700 ${
        active ? 'opacity-100' : 'opacity-0 pointer-events-none'
      }`}
    >
      <div className="w-10 h-10 border-4 border-t-transparent border-white/60 rounded-full animate-spin" />
    </div>
  );
};

export default FullScreenLoader;
