'use client'
import React, {useState, useEffect} from 'react'
import dynamic from 'next/dynamic'
import { useTransform, motion } from 'framer-motion'
import NavBar from '@/components/Navigation/NavBar'

const Scene = dynamic(() => import('@/components/Scene'), {
    ssr: false,
})

export default function LandingPage({darkMode, windowsWidth, getBlocks, scrollYProgress, scrollTo}) {
    
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
    const rotate = useTransform(scrollYProgress, [0, 0.2], [0, -5])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    

    return (
        <motion.div style={{scale, rotate, opacity}} id = "landing" className={`sticky top-0 flex h-screen items-center justify-center ${darkMode ? 'bg-black' : 'bg-[#fffcf0]'}`}>
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
            <Scene darkMode={darkMode} />
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
      </motion.div>
    )
}