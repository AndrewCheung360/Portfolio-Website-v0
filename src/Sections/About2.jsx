'use client'
import React from 'react'
import { useTransform, motion } from 'framer-motion'
import AboutPicture from '@/components/About/AboutPicture'
import ExperienceCard from '@/components/About/ExperienceCard'
import MatterBox from '@/components/Skills/MatterBox'

export default function About2({scrollYProgress, isMobile}) {
    const scale = useTransform(scrollYProgress, [0, 0.2, 1, 0.9], [0.8, 1, 0.92, 1])
    const rotate = useTransform(scrollYProgress, [0, 0.2], [10, 0])

    return (
        <>
        {isMobile ?

        <div className = "relative w-full h-[240vh]" id = "about">
            <div className = "bg-black rounded-[30px] w-full h-full flex flex-col items-center py-8 px-6 gap-y-10">
                <span className = "text-[#FFFCF0] text-[20vw] font-bold">
                    ABOUT
                </span>
                <div className = "w-[90%] flex justify-center">
                    <AboutPicture/>
                </div>
                <div className = "flex flex-col items-center gap-y-4 w-[90%]">
                    <span className = " text-[#fffcf0] font-medium text-[5vw]">
                        As a <span className="font-bold text-[#f26e1d]">software engineer</span> and computer science student at <span className="font-bold text-[#f26e1d]">Cornell University</span> minoring in <span className="font-bold text-[#f26e1d]">AI</span>{", I'm passionate about leveraging"} <span className="font-bold text-[#f26e1d]">full-stack + mobile development</span> and <span className="font-bold text-[#f26e1d]">machine learning</span> to create beautiful user-focused systems and drive meaningful impact.  
                    </span>
                    <span className = " text-[#fffcf0] font-medium text-[5vw]">
                            {"When I'm not at my 💻, you can find me playing the 🎹 or 🎻, assembling Gunpla 🤖 models, or lifting 🏋🏻."}
                    </span>
                </div>
                <ExperienceCard isMobile={isMobile}/>

                <div className = "w-full h-1/5 relative rounded-3xl bg-[#101010] ring-1 ring-[#fffcf0] flex justify-center items-end">
                        <span className = "absolute text-[#fffcf0] text-[11vw] top-8 font-semibold">
                            SKILLS
                        </span>
                        <MatterBox/>
                </div>
                
            </div>

        </div>

        :

        <div className = "relative h-[200vh] w-full" id = "about">
            <motion.div style={{scale, rotate}} className = {`top-0 relative h-[200vh] rounded-[30px] w-full bg-black flex flex-col items-center px-16 py-6 gap-y-52 xl:gap-y-72 2xl:tall:gap-y-48 medium:2xl:gap-y-64`}>
                <div className = "w-full h-2/5 flex flex-row justify-center gap-x-32 items-center">
                    <div className = "flex flex-col items-center h-full gap-y-6">
                        <span className = "text-[#FFFCF0] text-[7vw] font-bold">
                            ABOUT
                        </span>
                        <AboutPicture/>
                    </div>
                    
                    <div className = "w-1/2 flex flex-col h-full justify-center gap-y-6 xl:gap-y-12 mt-48 xl:mt-52 medium:2xl:mt-36 2xl:tall:mt-0">
                        <span className = " text-[#fffcf0] font-medium text-[2vw] leading-[2.5rem] xl:leading-[4.25rem]">
                        As a <span className="font-bold text-[#f26e1d]">software engineer</span> and computer science student at <span className="font-bold text-[#f26e1d]">Cornell University</span> minoring in <span className="font-bold text-[#f26e1d]">AI</span>{", I'm passionate about leveraging"} <span className="font-bold text-[#f26e1d]">full-stack + mobile development</span> and <span className="font-bold text-[#f26e1d]">machine learning</span> to create beautiful user-focused systems and drive meaningful impact.  
                        </span>
                        <span className = " text-[#fffcf0] font-medium text-[2vw] leading-[2.5rem] xl:leading-[4.25rem]">
                            {"When I'm not at my 💻, you can find me playing the 🎹 or 🎻, assembling Gunpla 🤖 models, or lifting 🏋🏻."}
                        </span>
                    </div>
                </div>
                <div className = "flex flex-row w-full h-[40%] 2xl:h-[42%] justify-center gap-x-28 ">

                    <ExperienceCard isMobile = {isMobile}/>

                    <div className = " relative w-[45%] h-full rounded-3xl bg-[#101010] ring-1 ring-[#fffcf0] flex justify-center items-end">
                        <span className = "absolute text-[#fffcf0] text-[4vw] top-8 font-semibold">
                            SKILLS
                        </span>
                        <MatterBox/>
                    </div>
                </div>
            </motion.div>
        </div>
        }
        </>
       
    )
}