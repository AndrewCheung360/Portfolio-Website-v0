import React from 'react'
import MagneticFramer from './MagneticFramer'
import Link from 'next/link'

export default function Bottom(){
    const scrollToTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
      };
    return(
        <div className = "flex flex-row items-end justify-between w-full pr-8">
            <span className = "text-[#fffcf0] text-[2vw] font-semibold">
                {"©2024 ANDREW CHEUNG"}
            </span>
            <MagneticFramer>
                    <svg
                        viewBox="0 0 16 16"
                        className = "w-[5vw] fill-[#fffcf0] hover:fill-[#f26e1d] cursor-pointer"
                        style = {{
                            transition: 'fill 0.3s'
                        }}
                        onClick={scrollToTop}
                        >
                        <path d="M16 8A8 8 0 100 8a8 8 0 0016 0zm-7.5 3.5a.5.5 0 01-1 0V5.707L5.354 7.854a.5.5 0 11-.708-.708l3-3a.5.5 0 01.708 0l3 3a.5.5 0 01-.708.708L8.5 5.707V11.5z" />
                    </svg>
            </MagneticFramer>

        </div>
    )
}