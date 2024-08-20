'use client'
import React from 'react'
import LinkButton from './LinkButton'

export default function ExperienceCard() {
    return(
        <div className = "w-[45%] h-full rounded-3xl bg-[#101010] px-10 py-8 flex flex-col gap-y-8 2xl:gap-y-12 ring-1 ring-[#fffcf0]">
        <div className = "w-full">
            <span className = "text-[#FFFCF0] text-[4vw] font-semibold">
                    EXPERIENCES
            </span>

        </div>
        
        <div className = "flex flex-col items-center h-full gap-y-10 xl:medium:gap-y-12 2xl:tall:gap-y-20 3xl:gap-y-16">
            <div className = "w-full flex flex-row justify-between items-center text-[#fffcf0] ">
                <div className = "flex flex-col">
                    <span className = "text-[2vw] font-semibold">
                        Zebra Technologies
                    </span>
                    <span className = "text-[1.25vw]">
                        Software Engineering Intern
                    </span>
                </div>
                <div>
                    <span className = " text-[1.5vw] font-semibold">
                        2024
                    </span>
                </div>
            </div>

            <div className = "w-full bg-[#fffcf0] h-[1px]"/>

            <div className = "w-full flex flex-row justify-between items-center text-[#fffcf0]">
                <div className = "flex flex-col ">
                    <span className = "text-[2vw] font-semibold">
                        Cornell University
                    </span>
                    <span className = "text-[1.25vw]">
                        BA in CS, Minor in AI
                    </span>
                </div>
                <div>
                    <span className = " text-[1.5vw] font-semibold">
                        2022 - Now
                    </span>
                </div>
            </div>

            <div className = "w-full bg-[#fffcf0] h-[1px]"/>

            <div className = "w-full flex flex-row justify-evenly gap-x-4 xl:gap-x-12 2xl:gap-x-6 items-center text-[#fffcf0]">
                {/* <span className = "text-[1.5vw] font-medium w-1/2">
                    For more information, check out my resume!
                </span> */}
                <LinkButton text = "RESUME" href = "https://drive.google.com/file/d/1RF_0_-clvubnjwPUthkd15d6rbrhh78y/view?usp=sharing"/>
                <LinkButton text = "LINKEDIN" href = "https://www.linkedin.com/in/andrewcheung360/"/>
                <LinkButton text = "GITHUB" href = "https://github.com/AndrewCheung360"/>
            </div>

            </div>
    </div>
    )
}