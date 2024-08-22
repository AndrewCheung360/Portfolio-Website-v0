import React from 'react'
import Image from 'next/image'

export default function AboutPicture() {
    return(
        <div className = "relative flex justify-center items-center px-8 py-8">
            <div className = "absolute w-10 h-10 bg-transparent border-t-2 border-l-2 border-[#fffcf0] left-0 top-0"/>
            <div className = "absolute w-10 h-10 bg-transparent border-t-2 border-r-2 border-[#fffcf0] right-0 top-0"/>
            <div className = "absolute w-10 h-10 bg-transparent border-b-2 border-l-2 border-[#fffcf0] left-0 bottom-0"/>
            <div className = "absolute w-10 h-10 bg-transparent border-b-2 border-r-2 border-[#fffcf0] right-0 bottom-0"/>
            <Image src = "/IMG_7607.jpg" className = "" alt="andrew picture" width = {400} height={400}/>
        </div>
    )
}