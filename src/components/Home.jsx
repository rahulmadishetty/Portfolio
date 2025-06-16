import { useEffect, useRef } from 'react';
import './Home.css';
import Typewriter from 'typewriter-effect/dist/core';
// Import your HalftoneWaves component (adjust path if needed)
import HalftoneWaves from '../components/HalftoneWaves'; 

const Home = () => {
  const headingRef = useRef(null);

  useEffect(() => {
    new Typewriter(headingRef.current, {
      strings: [
        'Welcome',
        'Bienvenida',
        'Willkommen',
        'Bienvenu',
        'Benvenuto',
        'Selamat Datang',
        '欢迎',
        'أهلا وسهلا',
        '환영합니다',
        'Добро пожаловать',
        'مرحبا'
      ],
      autoStart: true,
      loop: true,
      delay: 75,
      deleteSpeed: 50,
    });
  }, []);

  return (
    <section id="home" className="snap-section relative h-screen overflow-hidden">
      {/* Halftone Waves as Background */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        <HalftoneWaves />
      </div>

      {/* Optional Overlay — you can keep or remove this */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-60"></div>

      {/* Foreground Content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white">
        <h1 ref={headingRef} className="text-4xl md:text-6xl font-bold"></h1>
        <p className="mt-4 text-xl md:text-2xl animate-fadeInUp">
          To my website
        </p>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2">
          <a href="#about">
            <svg
              className="w-8 h-8 text-white animate-bounce"
              fill="none" stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="my-8 h-px w-3/4 mx-auto bg-gradient-to-r from-transparent via-gray-600 to-transparent"></div>
    </section>

  );
};

export default Home;
