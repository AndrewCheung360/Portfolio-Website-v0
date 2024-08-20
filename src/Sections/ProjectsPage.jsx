'use client'
import React, { useEffect, useState } from "react"
import { useAnimate, AnimatePresence, motion } from "framer-motion"
import Image from "next/image"

export default function ProjectsPage() {
    const [scope, animate] = useAnimate()
    const [openProject, setOpenProject] = useState(null)

    useEffect(() => {
        const projects = ["glimpse", "clubspace", "streetfighter"]
        projects.forEach(project => {
            animate(`#${project}`, {
                height: openProject === project ? "80vh" : "4px"
            })
        })
    }, [openProject])

    const handleProjectClick = (project) => {
        setOpenProject(prev => prev === project ? null : project)
    }

    return (
        <div className={`${openProject ? "relative" : "sticky"} top-0 h-[150vh] bg-[#fffcf0] px-32 flex flex-col gap-y-12 pt-8 xl:py-0`} id = "projects" >
            <span className="text-[4vw] font-bold">
                SELECTED PROJECTS
            </span>
            <div ref={scope} className="flex flex-col gap-y-12">
                <div className="flex flex-row w-full justify-between items-center" onClick={() => handleProjectClick("glimpse")}>
                    <span className="text-[2.5vw] font-semibold">
                        Glimpse
                    </span>
                    <span className="text-[1.75vw]">
                        2024
                    </span>
                </div>
                <div id="glimpse" className="w-full bg-[#fffcf0] h-1 border-b-[3px] border-black">
                    
                    <AnimatePresence>
                    {openProject == "glimpse" && 
                    <motion.div className="flex flex-col gap-y-4 tall:gap-y-10" initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}>
                        <span className="text-[1.75vw] font-semibold">
                            Glimpse is a mobile application that allows users to maintain connections with their friends by forming groups and responding to daily prompts with text, photos, or videos.
                        </span>
                        <span className="text-[1.25vw]">
                            Technologies: React Native, Expo, Supabase, AWS
                        </span>
                        <div className = "flex w-full flex-row justify-evenly items-center">
                            <Image src="/glimpse-home.png" className = "2xl:h-[500px] h-[420px] rounded-3xl border-2" width={250} height={500} alt="glimpse-home"/>
                            <Image src="/glimpse-feed.png" className = "2xl:h-[500px] h-[420px] rounded-3xl border-2" width={250} height={100} alt="glimpse-group"/>
                            <Image src="/glimpse-camera.png" className = "2xl:h-[500px] h-[420px] rounded-3xl border-2" width={250} height={100} alt="glimpse-prompt"/>
                            <Image src="/glimpse-profile.png" className = "2xl:h-[500px] h-[420px] rounded-3xl border-2" width={250} height={100} alt="glimpse-response"/>
                        </div>
                    </motion.div>}
                    </AnimatePresence>
                </div>

                <div className="flex flex-row w-full justify-between items-center" onClick={() => handleProjectClick("clubspace")}>
                    <span className="text-[2.5vw] font-semibold">
                        Clubspace
                    </span>
                    <span className="text-[1.75vw]">
                        2023
                    </span>
                </div>
                <div id="clubspace" className="w-full bg-[#fffcf0] h-1 border-b-[3px] border-black">
                    <AnimatePresence>
                        {openProject == "clubspace" && 
                        <motion.div className="flex flex-col gap-y-12 tall:gap-y-16" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                            <span className="text-[1.75vw] font-semibold">
                                Clubspace is a website that allows students to discover and join clubs at their school, and for club leaders to manage their members and events.
                            </span>
                            <span className="text-[1.25vw]">
                                Technologies: React, Next.js, PostgreSQL, Prisma, AWS, TailwindCSS
                            </span>
                            <div className = "flex w-full flex-row justify-evenly items-center">
                            <Image src="/clubspace-home.png" className = "tall:w-[640px] 2xl:w-[640px] border-2" width={500} height={300} alt="clubspace-home"/>
                            <Image src="/clubspace-demo.png" className = "tall:w-[640px] 2xl:w-[640px] border-2" width={500} height={300} alt="clubspace-club"/>
                            </div>
                            
                        </motion.div>}
                    </AnimatePresence>
                </div>

                <div className="flex flex-row w-full justify-between items-center" onClick={() => handleProjectClick("streetfighter")}>
                    <span className="text-[2.5vw] font-semibold">
                        Street Fighter II - Motion
                    </span>
                    <span className="text-[1.75vw]">
                        2023
                    </span>
                </div>
                <div id="streetfighter" className="w-full bg-[#fffcf0] h-1 border-b-[3px] border-black">
                    <AnimatePresence>
                        {openProject == "streetfighter" && 
                        <motion.div className="flex flex-col gap-y-6 tall:gap-y-10" initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}>
                            <span className="text-[1.75vw] font-semibold">
                                Street Fighter II - Motion is a motion-controlled recreation of the classic game Street Fighter II, where players can fight against each other using their body movements.
                            </span>
                            <span className="text-[1.25vw]">
                                Technologies: Python, Pygame, Tensorflow, OpenCV
                            </span>
                            <div className = "w-full flex flex-row justify-center ">
                                <video width="800" height="500" muted autoPlay loop className = "2xl:h-[500px] h-[350px] ">
                                    <source src="/SFDemo.mov" type="video/mp4"/>
                                </video>
                            </div>
                            
                        </motion.div>}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    )
}
