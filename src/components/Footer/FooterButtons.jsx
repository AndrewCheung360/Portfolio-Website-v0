'use client'
import React from "react"
import MagneticFramer from "./MagneticFramer"

export default function FooterButtons() {
    return(
        <div className = "flex flex-row items-center w-full justify-center gap-x-8 sm:gap-x-40 2xl:gap-x-64">
            <MagneticFramer>
                <a href = "https://github.com/AndrewCheung360" target="blank">
                    <svg
                        viewBox="0 0 1024 1024"
                        className = "w-[12vw] sm:w-[5vw] sm:tall:w-[6vw]  fill-[#fffcf0] cursor-pointer hover:fill-[#f26e1d]"
                        style = {{
                            transition: "fill 0.2s"
                        }}
                        >
                        <path d="M511.6 76.3C264.3 76.2 64 276.4 64 523.5 64 718.9 189.3 885 363.8 946c23.5 5.9 19.9-10.8 19.9-22.2v-77.5c-135.7 15.9-141.2-73.9-150.3-88.9C215 726 171.5 718 184.5 703c30.9-15.9 62.4 4 98.9 57.9 26.4 39.1 77.9 32.5 104 26 5.7-23.5 17.9-44.5 34.7-60.8-140.6-25.2-199.2-111-199.2-213 0-49.5 16.3-95 48.3-131.7-20.4-60.5 1.9-112.3 4.9-120 58.1-5.2 118.5 41.6 123.2 45.3 33-8.9 70.7-13.6 112.9-13.6 42.4 0 80.2 4.9 113.5 13.9 11.3-8.6 67.3-48.8 121.3-43.9 2.9 7.7 24.7 58.3 5.5 118 32.4 36.8 48.9 82.7 48.9 132.3 0 102.2-59 188.1-200 212.9a127.5 127.5 0 0138.1 91v112.5c.8 9 0 17.9 15 17.9 177.1-59.7 304.6-227 304.6-424.1 0-247.2-200.4-447.3-447.5-447.3z" />
                    </svg>
                </a>
            </MagneticFramer>

            <MagneticFramer>
                <a href = "https://www.linkedin.com/in/andrewcheung360/" target="blank">
                    <svg fill="none" viewBox="0 0 15 15" className = "w-[12vw] sm:w-[5vw] sm:tall:w-[6vw]  fill-[#fffcf0] cursor-pointer hover:fill-[#f26e1d]"
                        style = {{
                            transition: "fill 0.2s"
                        }}>
                    <path
                        fillRule="evenodd"
                        d="M2 1a1 1 0 00-1 1v11a1 1 0 001 1h11a1 1 0 001-1V2a1 1 0 00-1-1H2zm1.05 5h1.9v6h-1.9V6zm2.025-1.995a1.075 1.075 0 11-2.15 0 1.075 1.075 0 012.15 0zM12 8.357c0-1.805-1.167-2.507-2.326-2.507-.379-.018-.757.061-1.095.231-.257.13-.526.424-.734.938h-.053V6H6v6.005h1.906V8.81c-.027-.327.077-.75.291-1.001.215-.252.52-.312.753-.342h.073c.606 0 1.056.375 1.056 1.32v3.217h1.906L12 8.357z"
                        clipRule="evenodd"
                    />
                    </svg>
                </a>
            </MagneticFramer>
            
            <MagneticFramer>
                <a href = "mailto:andrewcheung360@gmail.com" target="blank">
                    <svg
                        viewBox="0 0 24 24"
                        className = "w-[15vw] sm:w-[5vw] sm:tall:w-[6vw]  fill-[#fffcf0] cursor-pointer hover:fill-[#f26e1d]"
                        style = {{
                            transition: "fill 0.2s"
                        }}
                        >
                        <path d="M18.73 5.41l-1.28 1L12 10.46 6.55 6.37l-1.28-1A2 2 0 002 7.05v11.59A1.36 1.36 0 003.36 20h3.19v-7.72L12 16.37l5.45-4.09V20h3.19A1.36 1.36 0 0022 18.64V7.05a2 2 0 00-3.27-1.64z" />
                    </svg>
                </a>
            </MagneticFramer>

            <MagneticFramer>
                <a href = "https://drive.google.com/file/d/1i4_e0rPOXiEjo1hd_iooSgE_2jK3GmvY/view?usp=sharing" target="blank"  className = "group relative bg-[#fffcf0] rounded-[36px] py-4 flex justify-center gap-x-3 items-center px-6 cursor-pointer overflow-hidden w-28 sm:w-32 xl:w-44">
                    <div className = "bg-black rounded-full w-2 h-2 group-hover:scale-[4000%] group-hover:bg-[#f26e1d] transition-all duration-300 ease-out"/>
                    <span className = "text-black text-[2.5vw] sm:text-[1.25vw] font-medium z-20 group-hover:-translate-x-6 group-hover:text-[#fffcf0] transition-all duration-300 ease-out">
                        RESUME
                    </span>
                    <div className = "absolute left-[100%] group-hover:-translate-x-8 z-20 sm:group-hover:-translate-x-11 4xl:group-hover:-translate-x-20 transition-transform duration-300 ease-out w-[16px] h-[16px]"><svg viewBox="0 0 16 16" fill="none"><path d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z" fill="#fffcf0"></path></svg></div>
                </a>
            </MagneticFramer>
        </div>
    )
}