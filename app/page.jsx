"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{ duration: 1 }}>
            <div className='flex flex-col lg:flex-row px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-xl font-semibold overflow-auto h-full'>
                {/* Image  */}
                <div className="h-1/2 lg:h-full lg:w-1/2 relative">
                    <Image alt="Rahul A B" fill className="object-contain"/>
                </div>
                {/* Description  */}
                <div className="h-1/2 lg:h-full lg:w-1/2 flex flex-col gap-8 items-center justify-center">
                    {/* Tittle */}
                    <h1 className="text-4xl md:text-6xl font-bold">Crafting Digital Experience & Designing Tomorrow </h1>
                    {/* Description */}
                    <p className="md:text-xl">
                        Welcome to my portfolio showcase, where innovation meets creativity! Dive into a collection of my diverse projects spanning across websites, mobile applications, robotics, and more. From sleek user interfaces to cutting-edge automation, each project embodies a fusion of technology and design. Explore the intersection of digital craftsmanship and engineering ingenuity as you browse through my work. Whether you&apos;re intrigued by interactive web experiences, intuitive mobile interfaces, or advancements in robotics, this portfolio offers a glimpse into my journey of pushing boundaries and shaping the future through technology.
                    </p>
                    <div className="flex w-full gap-4">
                        <button className="rounded-lg p-4 ring-black ring-1 bg-black text-white">View My Work</button>
                        <button className="rounded-lg p-4 ring-black ring-1 ">Contact Me</button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
