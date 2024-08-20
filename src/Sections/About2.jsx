'use client'
import React from 'react'
import { useTransform, motion } from 'framer-motion'
import Image from 'next/image'
import MixedShapes from '@/components/Skills/MatterBox'
import AboutPicture from '@/components/About/AboutPicture'
import LinkButton from '@/components/About/LinkButton'
import ExperienceCard from '@/components/About/ExperienceCard'
import MatterBox from '@/components/Skills/MatterBox'

export default function About2({scrollYProgress}) {
    const scale = useTransform(scrollYProgress, [0, 0.2, 1, 0.9], [0.8, 1, 0.92, 1])
    const rotate = useTransform(scrollYProgress, [0, 0.2], [10, 0])

    return (
        <div className = "relative h-[200vh] w-full" id = "about">
            <motion.div style={{scale, rotate}} className = {`top-0 relative h-[200vh] rounded-[30px] w-full bg-black flex flex-col items-center px-16 py-8 2xl:py-16 gap-y-52 xl:gap-y-72 2xl:tall:gap-y-48 medium:2xl:gap-y-64`}>
                        <div className = "w-full h-2/5 flex flex-row justify-center gap-x-32 items-center">
                            <div className = "flex flex-col items-center h-full gap-y-6">
                                <span className = "text-[#FFFCF0] text-[7vw] font-bold">
                                    ABOUT
                                </span>
                                <AboutPicture/>
                            </div>
                            
                            <div className = "w-1/2 flex flex-col h-full justify-center gap-y-6 xl:gap-y-12 mt-48 xl:mt-52 medium:2xl:mt-36 2xl:tall:mt-0">
                                <span className = " text-[#fffcf0] font-medium text-[2.25vw] leading-[2.75rem] xl:leading-[4.5rem]">
                                As a <span className="font-bold text-[#f26e1d]">software engineer</span> and computer science student at <span className="font-bold text-[#f26e1d]">Cornell University</span> specializing in <span className="font-bold text-[#f26e1d]">AI</span>{", I'm passionate about leveraging"} <span className="font-bold text-[#f26e1d]">full-stack development</span> and <span className="font-bold text-[#f26e1d]">machine learning</span> to create <span className="font-bold text-[#f26e1d]">innovative solutions</span>.  
                                </span>
                                <span className = " text-[#fffcf0] font-medium text-[2.25vw] leading-[2.75rem] xl:leading-[4.5rem]">
                                    {"When I'm not at my 💻, you can find me playing the 🎹 or 🎻, assembling Gunpla 🤖 models, or lifting 🏋🏻."}
                                </span>
                            </div>
                        </div>
                        <div className = "flex flex-row w-full h-2/5 justify-center gap-x-28 ">

                            <ExperienceCard/>

                            <div className = " relative w-[45%] h-full rounded-3xl bg-[#101010] ring-1 ring-[#fffcf0] flex justify-center items-end">
                                <span className = "absolute text-[#fffcf0] text-[4vw] top-8 font-semibold">
                                    SKILLS
                                </span>
                                <MatterBox/>
                            </div>
                        </div>
                        
                



            </motion.div>
       </div>
    )
}