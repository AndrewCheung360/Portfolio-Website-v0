'use client'
import React from 'react'
import { useTransform, motion } from 'framer-motion'
import Image from 'next/image'
// import InkCursor from '@/components/InkCursor'

export default function About({scrollYProgress}) {
    const scale = useTransform(scrollYProgress, [0, 0.2, 1, 0.9], [0.8, 1, 0.92, 1])
    const rotate = useTransform(scrollYProgress, [0, 0.2], [10, 0])

    return (
        <div className = "relative h-[150vh] w-full">
            <motion.div style={{scale, rotate}} className = {`top-0 relative h-[150vh] rounded-[30px] w-full bg-black flex flex-row px-8 py-8 -space-x-20 xl:-space-x-32 2xl:-space-x-40`}>
                <div className = "flex flex-col items-center w-full">
                    <span className = "text-[#FFFCF0] text-[9vw] font-bold">
                        ABOUT
                    </span>
                    <div className = "w-full h-full flex flex-col items-center gap-y-11 xl:gap-y-12">
                        <div className = " rounded-3xl h-[56%] 2xl:h-[46.5%] w-[76%] flex justify-center">
                            <Image src = "/IMG_3879.webp" className = "rounded-3xl aspect-auto h-full xl:w-[90%] 2xl:w-[75%]" alt="andrew picture" width = {400} height={400}/>
                        </div>
                        <div className = "bg-[#101010] rounded-3xl h-1/3 xl:h-[36%] w-[76%] xl:w-[70%] 2xl:w-[60%] pt-6 px-7 flex flex-col gap-y-3">
                            <div className = "flex flex-row items-center justify-evenly gap-x-7 xl:gap-x-9  w-full">
                                <span className = "text-[#FFFCF0] text-[3vw] 2xl:text-[2.75vw] font-semibold">
                                        EXPERIENCES
                                </span>
                                <button className = " bg-[#fffcf0] rounded-3xl py-3 w-1/3 flex justify-center gap-x-3 items-center px-4">
                                    <div className = "bg-black rounded-full w-2 h-2"/>
                                    <span className = " text-[1.25vw] xl:text-[1vw] 2xl:text-[0.9vw] font-semibold">
                                        RESUME
                                    </span>
                                </button>

                            </div>
                            
                            <div className = "flex flex-col items-center h-full gap-y-6">
                                <div>
                                    
                                </div>
                                <div className = "w-full flex flex-row justify-between items-center text-[#fffcf0] ">
                                    <div className = "flex flex-col">
                                        <span className = "text-[2vw] 2xl:text-[1.5vw] font-semibold">
                                            Zebra Technologies
                                        </span>
                                        <span className = "text-[1.25vw] 2xl:text-[1vw]">
                                            Software Engineering Intern
                                        </span>
                                    </div>
                                    <div>
                                        <span className = " text-[1.5vw] 2xl:text-[1.25vw] font-semibold">
                                            2024 - 2024
                                        </span>
                                    </div>
                                </div>

                                <div className = "w-full bg-[#fffcf0] h-[1px]"/>

                                <div className = "w-full flex flex-row justify-between items-center text-[#fffcf0]">
                                    <div className = "flex flex-col ">
                                        <span className = "text-[2vw] font-semibold 2xl:text-[1.5vw]">
                                            Cornell University
                                        </span>
                                        <span className = "text-[1.25vw] 2xl:text-[1vw]">
                                            BA in CS, Minor in AI
                                        </span>
                                    </div>
                                    <div>
                                        <span className = " text-[1.5vw] 2xl:text-[1.25vw] font-semibold">
                                            2022 - 2025
                                        </span>
                                    </div>
                                </div>

                            </div>

                        </div>
                    </div>
                    
                </div>
                <div className = "flex flex-col w-full items-center mt-6 gap-y-10 xl:mt-0 xl:gap-y-0 xl:justify-evenly">
                    <div className = " bg-[#101010] rounded-3xl w-[80%] h-3/5 xl:h-1/2 py-10 gap-y-10 xl:gap-y-0 xl:py-5 px-7 flex flex-col  xl:justify-evenly">
                    <span className = " text-[#fffcf0] font-medium text-[2.25vw] xl:text-[2vw] leading-[2.75rem] xl:leading-[3rem]">
                    As a <span className="font-bold text-[#f26e1d]">software engineer</span> and computer science student at <span className="font-bold text-[#f26e1d]">Cornell University</span> specializing in <span className="font-bold text-[#f26e1d]">AI</span>{", I'm passionate about leveraging"} <span className="font-bold text-[#f26e1d]">full-stack development</span> and <span className="font-bold text-[#f26e1d]">machine learning</span> to create <span className="font-bold text-[#f26e1d]">innovative solutions</span>.  
                    </span>
                    <span className = " text-[#fffcf0] font-medium text-[2.25vw] xl:text-[2vw] leading-[2.75rem] xl:leading-[3rem] ">
                        {"When I'm not at my 💻, you can find me playing the 🎹 or 🎻, assembling Gunpla 🤖 models, or lifting 🏋🏻."}
                    </span>

                    </div>
                    <div className = " bg-[#101010] rounded-3xl w-[80%] h-[31%] xl:h-2/5 2xl:h-[35%] py-6 pl-7 pr-7 flex flex-col">
                      
                        

                    </div>
                </div>
                



            </motion.div>
       </div>
    )
}