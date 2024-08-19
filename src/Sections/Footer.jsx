'use client'
import React from "react"
import FooterButtons from "@/components/Footer/FooterButtons"
import Bottom from '@/components/Footer/Bottom'

export default function Footer() {
    return(
        <div className = "relative h-[60vh] xl:h-[70vh] bg-black px-8 rounded-t-[30px] flex flex-col justify-start gap-y-8 pb-4 tall:pb-2 tall:gap-y-[4.5rem]" id="contact">
              <div className = "w-full flex flex-row justify-center items-center">
                <span className = "text-[10vw] xl:text-[10.5vw]  font-bold text-[#fffcf0]">
                  {"LET'S CONNECT"}
                </span>
                <span className = "text-[#f26e1d] text-[13vw]">+</span>
              </div>
              
              <FooterButtons />

              <Bottom />
              
            </div>
    )
}