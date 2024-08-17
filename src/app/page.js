'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import LandingPage from '@/Sections/LandingPage';
import About from '@/Sections/About';
import Image from 'next/image'


export default function Home() {
  const [windowsWidth, setWindowsWidth] = useState(0);
  const [darkMode, setDarkMode] = useState(false);

  const getBlocks = () => {
    const blockSize = windowsWidth * 0.005;
    const nbOfBlocks = Math.ceil(window.innerHeight / blockSize);
    return [...Array(nbOfBlocks * 2).keys()].map((_, rowIndex) => {
      return (
        <div
          onMouseEnter={(e) => handleMouseEnter(e)}
          key={rowIndex}
          className={`w-full h-[5vw]`}
        ></div>
      );
    });
  };

  const handleMouseEnter = (e) => {

    // Introduce a delay for the color change
    setTimeout(() => {
      e.target.style.backgroundColor = darkMode ? '#fffcf0' : 'black';
    }, 0); // Delay to allow the re-render with new classes
    setTimeout(() => {
      e.target.style.backgroundColor = 'transparent';
    }, 300);
  };

  const container = useRef()
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  })


  useEffect(() => {
    const lenis = new Lenis();
    function raf(time){
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    setWindowsWidth(window.innerWidth);
    setDarkMode(window.matchMedia('(prefers-color-scheme: dark)').matches);

    requestAnimationFrame(raf)

  }, []);

  const background = useTransform(scrollYProgress, [0, 0.4], ['#ffffff00', '#fffcf0'])


  return (
    <>
    
      <main ref={container} className = {`relative h-[440vh] xl:h-[450vh]`}>
        
        <motion.div style={{background}} className = "relative w-full h-full">
            <LandingPage darkMode={darkMode} windowsWidth={windowsWidth} getBlocks={getBlocks} scrollYProgress={scrollYProgress}/>

            {/* ABOUT SECTION */}

              <About scrollYProgress={scrollYProgress}/>





            <div className = "sticky top-0 h-[130vh] bg-[#fffcf0] px-8">
              <span className = " text-[8vw] font-bold">
                PROJECTS
              </span>
            </div>
            <div className = "relative h-[60vh] xl:h-[70vh] bg-black px-8 rounded-t-[30px]">
              <div className = "w-full flex flex-row justify-center items-center">
                <span className = " text-[10.5vw]  font-bold text-[#fffcf0]">
                  {"LET'S CONNECT"}
                </span>
                <span className = "text-[#f26e1d] text-[13vw]">+</span>
              </div>
              
            </div>
        </motion.div>
        



      </main>


    </>
  );
}
