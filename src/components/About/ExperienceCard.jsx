'use client'
import React from 'react'
import LinkButton from './LinkButton'

export default function ExperienceCard({isMobile}) {
    return(
        <>
        {isMobile ?
        <div className = "w-full h-1/5 rounded-3xl bg-[#101010] flex flex-col items-center py-6 gap-y-2 ring-1 ring-[#fffcf0]">
            <span className = "text-[#FFFCF0] text-[11vw] font-semibold">
                    EXPERIENCES
            </span>
            <div className = "w-full flex flex-col items-center gap-y-6">
                <div className = "w-[90%] flex flex-row justify-between items-center text-[#fffcf0] ">
                    <div className = "flex flex-col">
                        <span className = "text-[4vw] font-semibold">
                            Cornell AppDev
                        </span>
                        <span className = "text-[3vw]">
                            Android Developer
                        </span>
                    </div>
                    <div>
                        <span className = " text-[3vw] font-semibold">
                            2024 - Now
                        </span>
                    </div>
                </div>

                <div className = "w-[90%] bg-[#fffcf0] h-[1px]"/>
                <div className = "w-[90%] flex flex-row justify-between items-center text-[#fffcf0] ">
                    <div className = "flex flex-col">
                        <span className = "text-[4vw] font-semibold">
                            Zebra Technologies
                        </span>
                        <span className = "text-[3vw]">
                            Software Engineering Intern
                        </span>
                    </div>
                    <div>
                        <span className = " text-[3vw] font-semibold">
                            2024
                        </span>
                    </div>
                </div>

                <div className = "w-[90%] bg-[#fffcf0] h-[1px]"/>

                <div className = "w-[90%] flex flex-row justify-between items-center text-[#fffcf0] ">
                    <div className = "flex flex-col">
                        <span className = "text-[4vw] font-semibold">
                            Cornell University
                        </span>
                        <span className = "text-[3vw]">
                            BA in CS, Minor in AI
                        </span>
                    </div>
                    <div>
                        <span className = " text-[3vw] font-semibold">
                            2022 - Now
                        </span>
                    </div>
                </div>


            </div>
        </div>
        :
        <div className = "w-[45%] h-full rounded-3xl bg-[#101010] px-10 py-8 flex flex-col gap-y-2 ring-1 ring-[#fffcf0]">
        <div className = "w-full">
            <span className = "text-[#FFFCF0] text-[4vw] font-semibold">
                    EXPERIENCES
            </span>

        </div>
        
        <div className = "flex flex-col items-center h-full gap-y-6">
            <div className = "w-full flex flex-row justify-between items-center text-[#fffcf0] ">
                <div className = "flex flex-col">
                    <span className = "text-[2vw] font-semibold">
                        Cornell AppDev
                    </span>
                    <span className = "text-[1.25vw]">
                        Android Developer
                    </span>
                </div>
                <div>
                    <span className = " text-[1.5vw] font-semibold">
                        2024 - Now
                    </span>
                </div>
            </div>
            <div className = "w-full bg-[#fffcf0] h-[1px]"/>
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
                        Cornell WebDev
                    </span>
                    <span className = "text-[1.25vw]">
                        Full-Stack Developer
                    </span>
                </div>
                <div>
                    <span className = " text-[1.5vw] font-semibold">
                        2023
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


            {/* <div className = "w-full bg-[#fffcf0] h-[1px]"/> */}

            {/* <div className = "w-full flex flex-row justify-evenly gap-x-4 xl:gap-x-12 2xl:gap-x-6 items-center text-[#fffcf0]">

                <LinkButton text = "RESUME" href = "https://drive.google.com/file/d/1i4_e0rPOXiEjo1hd_iooSgE_2jK3GmvY/view?usp=sharing"/>
                <LinkButton text = "LINKEDIN" href = "https://www.linkedin.com/in/andrewcheung360/"/>
                <LinkButton text = "GITHUB" href = "https://github.com/AndrewCheung360"/>
            </div> */}

            </div>
        </div>
        
        }
        </>
        
    )
}