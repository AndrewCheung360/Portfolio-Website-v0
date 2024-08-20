'use client'
import React from 'react'
import { motion } from 'framer-motion'


export default function NavWindow({scrollTo}) {

    const links = [
        {
            title: "Home",
            href: "landing"
        },
        {
            title: "About",
            href: "about"
        },
        {
            title: "Projects",
            href: "projects"
        },
        {
            title: "Contact",
            href: "contact"
        },
        {
            title: "Resume",
            href: "https://drive.google.com/file/d/1RF_0_-clvubnjwPUthkd15d6rbrhh78y/view?usp=sharing"
        }
    ]
    
    const perspective = {
        initial: {
            opacity: 0,
            rotateX: 90,
            translateY: 80,
            translateX: -20,
        },
        enter: (i) => ({
            opacity: 1,
            rotateX: 0,
            translateY: 0,
            translateX: 0,
            transition: {
                duration: 0.65, 
                delay: 0.5 + (i * 0.1), 
                ease: [.215,.61,.355,1],
                opacity: { duration: 0.35}
            }
        }),
        exit: {
            opacity: 0,
            transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1]}
        }
    }

    return (
      <div className= "flex flex-col justify-between pt-[60px] px-[40px] pb-[50px] h-full box-border">
         <div className="flex flex-col justify-evenly h-full relative overflow-hidden ">
          {
              links.map( (link, i) => {
                  const { title, href } = link;
                  return (
                      <div key={`b_${i}`} style={{
                        perspective: "120px",
                        perspectiveOrigin: "bottom",
                      }}>
                          <motion.div

                            custom={i}
                            variants={perspective}
                            initial="initial"
                            animate="enter"
                            exit="exit"
                            className = "group flex flex-row items-center"
                            onClick= {(e) => {
                                if(title != "Resume"){
                                    e.preventDefault()
                                    scrollTo(href)
                                }      
                            }}
                          >
                             <div className = "absolute right-[100%] w-[2vw] group-hover:translate-x-10 transition-all duration-300 ease-out"><svg viewBox="0 0 16 16" fill="none"><path d="M15.7071 8.70711C16.0976 8.31658 16.0976 7.68342 15.7071 7.29289L9.34315 0.928932C8.95262 0.538408 8.31946 0.538408 7.92893 0.928932C7.53841 1.31946 7.53841 1.95262 7.92893 2.34315L13.5858 8L7.92893 13.6569C7.53841 14.0474 7.53841 14.6805 7.92893 15.0711C8.31946 15.4616 8.95262 15.4616 9.34315 15.0711L15.7071 8.70711ZM0 9H15V7H0V9Z" fill="#fffcf0"></path></svg></div>
                              <a href={title == "Resume" ? href : ""} className = "text-[#fffcf0] text-[2.5vw] group-hover:translate-x-14 transition-all duration-300 ease-out" target = {title == "Resume" ? "blank" : ""} style={{
                                textDecoration: "none"
                              }} >
                                  {title}
                              </a>
                              
                          </motion.div>
                      </div>
                  )
              })
          }
         </div>
      </div>
    )
  }