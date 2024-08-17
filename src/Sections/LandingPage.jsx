'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import { useTransform, motion } from 'framer-motion'
// import PixelCursorEffect from '@/components/PixelCursorEffect'

const Scene = dynamic(() => import('@/components/Scene'), {
    ssr: false,
})

export default function LandingPage({darkMode, windowsWidth, getBlocks, scrollYProgress}) {
    
    const scale = useTransform(scrollYProgress, [0, 0.2], [1, 0.8])
    const rotate = useTransform(scrollYProgress, [0, 0.2], [0, -5])
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0])

    return (
        <motion.div style={{scale, rotate, opacity}} className={`sticky top-0 flex h-screen items-center justify-center ${darkMode ? 'bg-black' : 'bg-[#fffcf0]'}`}>
            <nav className="w-full flex justify-between items-center absolute top-0 py-8 px-8 pointer-events-none z-10 mix-blend-difference text-[#fffcf0]">
            <div className = " pointer-events-none font-extrabold text-2xl">
                <span className = "">{"andrew"}</span>
                <span className = "">{"."}</span>
                <span className = "text-[#1da1f2]">{"cheung"}</span>
            </div>
            <div className = "w-full flex absolute justify-center font-extrabold text-xl gap-x-2">
                <span className = "">SOFTWARE</span>
                <span className = "text-[#1da1f2]">ENGINEER</span>
            </div>
            
            <div className = "flex justify-end gap-x-6 w-1/4 font-medium items-center">
                <div className = " bg-[#fffcf0] px-5 py-1.5 rounded-3xl">
                    <span className = "text-black">MENU</span>
                </div>
                


            </div>
            </nav>
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