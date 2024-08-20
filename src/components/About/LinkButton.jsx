'use client'
import React from "react";
import MagneticFramer from "../Footer/MagneticFramer";

export default function LinkButton({text, href}) {
    return (
        <MagneticFramer>
            <a href = {href} target="blank"  className = "group relative bg-[#fffcf0] rounded-[36px] py-4 flex justify-center gap-x-3 items-center px-6 cursor-pointer overflow-hidden 2xl:w-44">
                    <div className = "bg-black rounded-full w-2 h-2 group-hover:scale-[4000%] group-hover:bg-[#f26e1d] transition-all duration-300 ease-out"/>
                    <span className = "text-black text-[1vw] font-medium z-20 group-hover:-translate-x-6 group-hover:text-[#fffcf0] transition-all duration-300 ease-out">
                        {text}
                    </span>
                    <div className = "absolute left-[100%] z-20 group-hover:-translate-x-11 4xl:group-hover:-translate-x-20 transition-transform duration-300 ease-out"><svg width="16" height="16" viewBox="0 0 16 16" fill="none"><path d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z" fill="#fffcf0"></path></svg></div>
                </a>
        </MagneticFramer>
    )
}