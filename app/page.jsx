"use client";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";
import rahul from "@public/rahul.png";

export default function Home() {
    return (
        <motion.div className="h-full" initial={{ y: "-200vh" }} animate={{ y: "0%" }} transition={{ duration: 1 }}>
            <div className='flex flex-col lg:flex-row p-4 sm:p-8 md:p-12 lg:p-20 xl:p-40 text-xl font-semibold overflow-scroll h-full'>
                {/* Image */}
                <div className="h-full flex items-center justify-center">
                    <Image src={rahul} alt="Rahul A B" className="rounded-lg w-[150px] sm:w-[250px] md:w-[300px] lg:h-auto lg:w-[1000px] " />
                </div>
                {/* Description */}
                <div className="lg:h-full flex flex-col gap-4 items-center justify-center px-4 sm:px-8">
                    {/* Title */}
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center lg:text-left">
                        Crafting Digital Experience & Designing Tomorrow
                    </h1>
                    {/* Description */}
                    <p className="text-base sm:text-lg md:text-xl text-center lg:text-left">
                        Welcome to my portfolio showcase, where innovation meets creativity! Dive into a collection of my diverse projects spanning across websites, mobile applications, robotics, and more. From sleek user interfaces to cutting-edge automation, each project embodies a fusion of technology and design. Explore the intersection of digital craftsmanship and engineering ingenuity as you browse through my work. Whether you&apos;re intrigued by interactive web experiences, intuitive mobile interfaces, or advancements in robotics, this portfolio offers a glimpse into my journey of pushing boundaries and shaping the future through technology.
                    </p>
                    <div className="flex flex-col sm:flex-row w-full gap-4 items-center justify-center mb-2">
                        <button className="rounded-lg p-4 ring-black ring-1 bg-black text-white w-full sm:w-auto">
                            <Link href={'/portfolio'}>View My Work</Link>
                        </button>
                        <button className="rounded-lg p-4 ring-black ring-1 w-full sm:w-auto">
                            <Link href={'/contact'}>Contact Me</Link>
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
