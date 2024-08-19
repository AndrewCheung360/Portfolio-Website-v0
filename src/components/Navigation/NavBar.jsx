'use client'
import React from 'react'
import { useState } from 'react';
import { motion, AnimatePresence} from 'framer-motion'
import LandingMenu from '@/components/Navigation/LandingMenu';
import NavWindow from './NavWindow';

export default function NavBar({scrollTo}){

    const [isActive, setIsActive] = useState(false)

    const menu = {
        open: {
            width: "480px",
            height: "650px",
            top: "-25px",
            right: "-25px",
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

    return(
        <>
        <nav className="w-full flex justify-between items-center absolute top-0 py-8 2xl:py-10 px-8 pointer-events-none z-10 mix-blend-difference text-[#fffcf0]">
            <div className = " pointer-events-none font-extrabold text-2xl 2xl:text-[2vw]">
                <span className = "">{"andrew"}</span>
                <span className = "">{"."}</span>
                <span className = "text-[#1da1f2]">{"cheung"}</span>
            </div>
            <div className = "w-full flex absolute justify-center items-center font-extrabold text-xl gap-x-2 2xl:text-[2vw]">
                <span className = "">SOFTWARE</span>
                <span className = "text-[#1da1f2]">ENGINEER</span>
            </div>
            

            </nav>
            <div className = " absolute right-10 top-8">
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
        </>
    )
}