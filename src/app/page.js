'use client'
import React from 'react'
import { useState, useEffect, useRef } from 'react';
import { useScroll, motion, useTransform } from 'framer-motion'
import Lenis from 'lenis'
import LandingPage from '@/Sections/LandingPage';
import About2 from '@/Sections/About2';
import ProjectsPage from '@/Sections/ProjectsPage';
import Footer from '@/Sections/Footer';


export default function Home() {
  const [windowsWidth, setWindowsWidth] = useState(0);
  const [darkMode, setDarkMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

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
      e.target.style.backgroundColor = 'black';
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
    setIsMobile(window.innerWidth < 768);

    requestAnimationFrame(raf)

  }, []);

  const background = useTransform(scrollYProgress, [0, 0.4], ['#ffffff00', '#fffcf0'])


  function scrollTo(id){
    document.getElementById(id).scrollIntoView({behavior: 'smooth'})
  }


  return (
    <>
    
      <main ref={container} className = {`h-[475h] sm:h-[520vh]`}>
        
        <motion.div style={{background}} className = "relative w-full h-full">
            <LandingPage isMobile={isMobile} windowsWidth={windowsWidth} getBlocks={getBlocks} scrollYProgress={scrollYProgress} scrollTo={scrollTo}/>

            <About2 scrollYProgress={scrollYProgress} isMobile={isMobile}/>

            <ProjectsPage isMobile={isMobile}/>
            <Footer isMobile={isMobile}/>
              {/* <About2 scrollYProgress={scrollYProgress}/>





            <ProjectsPage/>

            <Footer/> */}

            
        </motion.div>
        



      </main>


    </>
  );
}
