'use client'
import React, {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import { useTransform, motion, AnimatePresence } from 'framer-motion'
import NavBar from '@/components/Navigation/NavBar'
import Scene from '@/components/Scene/Scene'
import LandingMenu from '@/components/Navigation/LandingMenu';
import NavWindow from '@/components/Navigation/NavWindow';


// const Scene = dynamic(() => import('@/components/Scene'), {
//     ssr: false,
// })

export default function LandingPage({isMobile, windowsWidth, getBlocks, scrollYProgress, scrollTo}) {
    
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
    const rotate = useTransform(scrollYProgress, [0, 0.2], [0, -5])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])
    const [isActive, setIsActive] = useState(false)
    const menu = {
        open: {
            width: "320px",
            height: "480px",
            top: "-25px",
            right: "-20px",
            transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1]}
        },
        closed: {
            width: "100px",
            height: "40px",
            top: "0px",
            right: "0px",
            transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1]}
        }
    }
    

    return (
        <>
        {isMobile ? 
            <motion.div id="landing" style={{opacity}} className = "sticky top-0 w-full h-[100vh] bg-[#fffcf0] py-2 flex flex-col items-center">
                <div className = "w-full h-[52%] py-2 flex flex-col items-center justify-between">
                    <nav className = "w-full mix-blend-difference text-[#fffcf0] px-2 flex flex-col">
                        <div className = "flex flex-col items-start">
                            <div>
                                <span className = "text-[7.25vw] font-extrabold">{"andrew"}</span>
                                <span className = "text-[7.25vw] font-extrabold">{"."}</span>
                                <span className = "text-[7.25vw] font-extrabold text-[#1da1f2]">{"cheung"}</span>
                            </div>
                            <div className = "flex flex-row items-center gap-x-1">
                                <span className = "text-[5vw] font-extrabold text-[#1da1f2]">{"("}</span>
                                <span className = "text-[5vw] font-extrabold">{"software"}</span>
                                <span className = "text-[5vw] font-extrabold ">{"engineer"}</span>
                                <span className = "text-[5vw] font-extrabold text-[#1da1f2]">{")"}</span>
                            </div>
                        </div>
                        
                        

                    </nav>
                    <div className={`flex flex-col gap-y-4 items-center w-[100%] uppercase mix-blend-difference text-[#fffcf0] px-4`}>
                        <div>
                            <span className = "text-[16.5vw] font-black text-center text-[#1da1f2] ">{"*"}</span>
                            <span className="text-[16.5vw] font-black text-center">{"ANDREW"}</span>
                            <span className = "text-[16.5vw] font-black text-center text-[#1da1f2]">{"*"}</span>
                        </div>
                        <div className = "flex flex-row gap-x-4">
                            <span className = "text-[16.5vw] font-black text-center text-[#1da1f2]">{"{"}</span>
                            <span className="text-[16.5vw] font-black text-center">{"CHEUNG"}</span>
                            <span className = "text-[16.5vw] font-black text-center text-[#1da1f2]">{"}"}</span>
                            
                        </div>
                    </div>


                </div>
                <div className = "flex justify-center h-screen w-screen absolute">
                        <Scene isMobile={isMobile} />
                </div>
                <div className = "absolute flex flex-col items-center w-full justify-end h-screen pb-4">
                    <span className = "text-[7vw] text-black">Scroll Down</span>
                </div>
                <div className = " absolute right-4 top-9">
                    <motion.div 
                        className= "w-[480px] h-[650px] bg-black rounded-3xl relative z-20"
                        variants={menu}
                        animate={isActive ? "open" : "closed"}
                        initial="closed"
                        >
                            <AnimatePresence>
                                {isActive && <NavWindow scrollTo = {scrollTo} />}
                            </AnimatePresence>
                    </motion.div>
                    <LandingMenu isActive={isActive} toggleMenu={() => {setIsActive(!isActive)}}/>
                </div>
            </motion.div> 
            
            :
            
            <motion.div style={{scale, rotate, opacity}} id = "landing" className={`sticky top-0 flex h-screen items-center justify-center bg-[#fffcf0]`}>
             <NavBar scrollTo = {scrollTo} />
            
            <div className={`flex flex-col px-14 w-[100%] relative pointer-events-none uppercase mix-blend-difference text-[#fffcf0] z-10`}>
                <div>
                    <span className = "text-[13vw] font-black text-left text-[#1da1f2] ">{"*"}</span>
                    <span className="text-[13vw] font-black text-left">{"ANDREW"}</span>
                    <span className = "text-[13vw] font-black text-left text-[#1da1f2]">{"*"}</span>
                </div>
                <div className = "text-right">
                    <span className = "text-[13vw] font-black text-right text-[#1da1f2]">{"{"}</span>
                    <span className="text-[13vw] font-black text-right">{"CHEUNG"}</span>
                    <span className = "text-[13vw] font-black text-right text-[#1da1f2]">{"}"}</span>
                    
                </div>
            </div>
            
            <div className = "flex justify-center h-screen w-screen absolute">
            <Scene isMobile={isMobile} />
            </div>
            
            <div className="flex h-screen w-full overflow-hidden absolute" style = {{
                            filter: 'url(#gooey)'
                        }}>
               
                    {windowsWidth > 0 &&
                    [...Array(20).keys()].map((_, columnIndex) => {
                    return (
                        <div key={'b_' + columnIndex} className="w-[5vw]"  >
                        {getBlocks()}
                        </div>
                    );
                    })}
            
            </div>
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" className = "hidden w-0 h-0 opacity-0 absolute">
              <defs>
                <filter id="gooey">
                     <feGaussianBlur in="SourceGraphic" result="blur" stdDeviation="10" />
                    <feColorMatrix in="blur" mode="matrix" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 19 -9" result="goo" />
                    <feComposite in="SourceGraphic" in2="goo" operator="atop" />
                 </filter>
              </defs>
          </svg>
      </motion.div>}
        </>
        
    )
}