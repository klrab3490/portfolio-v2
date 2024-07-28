"use client";
import Link from 'next/link';
import { useRef } from 'react';
import Image from 'next/image';
import { IoLogoGithub, IoMdGlobe } from 'react-icons/io';
import { motion, useScroll, useTransform } from 'framer-motion'

// Image
import tkinder from "@public/protfolio/PythonProject.png"
import bookly from "@public/protfolio/Bookly.png";
import rssi from "@public/protfolio/RSSI.png";
import library from "@public/protfolio/CSE.png";
import Multipurpose from "@public/protfolio/Multipurpose.png";
import aces from "@public/protfolio/ACES.jpeg";
import petfeed from "@public/protfolio/ESP32 CAM + Arduino UNO.png"

// Data
const projects = [
    {
        id: 1,
        color: "from-red-300 to-blue-300",
        title: "Library Management System using Python(Tkinder) And MySQL",
        desc: "A group of friends in their +2 education developed a Library Management System using Python (Tkinter) and MySQL. It showcased teamwork, technical skill, and adaptability in challenging times.",
        img: tkinder,
        github: "https://github.com/klrab3490/Python-Project-ComputerScience-XII",
    }, {
        id: 2,
        color: "from-blue-300 to-violet-300",
        title: "Bookly eCommerece Website",
        desc: "Bookly eCommerce Website is a personal project to hone skills in HTML, CSS, JavaScript, and Firebase, resembling an eCommerce platform for book sales. Through hands-on development, it offers practical experience in front-end design, interactivity, and database management.",
        img: bookly,
        github: "https://github.com/klrab3490/eCommerce-Books",
        link: "https://klrab3490.github.io/eCommerce-Books/",
    }, {
        id: 3,
        color: "from-violet-300 to-purple-300",
        title: "RSSI-Based Location Prediction with Flask",
        desc: "This Flask application serves as a simple location prediction system based on Received Signal Strength Indicator (RSSI) values. It utilizes the k-nearest neighbors (kNN) algorithm to predict the location based on the RSSI values provided.",
        img: rssi,
        github: "https://github.com/klrab3490/RSSI-location-prediction"
    }, {
        id: 4,
        color: "from-purple-300 to-red-300",        
        title: "CSE Department Website",
        desc: "The CSE Department Website is a collaborative project by students highlighting their web development skills. It offers insights into the Computer Science and Engineering Department, featuring faculty profiles, course information, and event updates.",
        img: aces,
        github: "https://github.com/klrab3490/aces-website",
        link: "https://aces-web.vercel.app/",
    }, {
        id : 5,
        color: "from-red-300 to-blue-300",
        title: "CSE Department Library Management System",
        desc: "The CSE Department Library Management System is a software project developed by students to automate library operations. It features book cataloging, borrowing, and return functionalities, streamlining the library's daily tasks.",
        img: library,
        github: "https://github.com/klrab3490/cs-library-alert-system",
        link: "https://cs-library-alert-system.vercel.app/"
    }, {
        id: 6,
        color: "from-blue-300 to-violet-300",
        title: "Pet Feed Dispenser using Arduino",
        desc: "The Pet Feed Dispenser is an Arduino-based hardware project designed to automate pet feeding. It dispenses food at scheduled intervals, ensuring regular feeding even when the owner is absent. This showcases the utilization of microcontrollers, sensors, and actuators to create a convenient automated pet care system.",
        img: petfeed,
        github: "https://github.com/klrab3490/pet-feed-dispensor"
    },{
        id: 7,
        color: "from-violet-300 to-purple-300",
        title: "Multipurpose Website",
        desc: "A game website is built using HTML, CSS, and JavaScript, featuring responsive design. It includes home, about, services, and contact pages, focusing on user-friendliness and visual appeal. Interactive elements engage visitors, demonstrating the developer's expertise in front-end web development and design.",
        img: Multipurpose,
        github: "https://github.com/klrab3490/multipurposewebsite",
        link: "https://klrab3490.github.io/multipurposewebsite/"
    },
    // {
    //     id: 7,
    //     color: "from-violet-300 to-purple-300",
        
    // }
]

export default function Project() {
    const ref = useRef();
    const { scrollYProgress } = useScroll({target:ref});
    const x = useTransform(scrollYProgress, [0, 1], ["0", "-85%"])

    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{ duration: 1 }}>
            <div className='h-[600vh] relative gap-4' ref={ref}>
                <div className='w-screen h-[calc(100vh-7rem)] flex items-center justify-center text-8xl text-center'> My Works <br></br> or <br></br> My Projects </div>
                <div className='sticky top-0 flex h-screen gap-8 items-center overflow-hidden'>
                    <motion.div style={{x}} className="flex">
                        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300 ' />
                        {projects.map(project => (
                            <div key={project.id} className={`h-screen w-screen flex items-center justify-center bg-gradient-to-r px-4 text-xl font-semibold ${project.color} w-full`}>
                                <div className='flex flex-col gap-8 text-white sm:w-1/2 text-center justify-center items-center w-full'>
                                    <h1>{project.title}</h1>
                                    <div className='h-44 md:h-64 lg:h-[350px] xl:h-[420px] w-auto'>
                                        <Image src={project.img} alt={project.title} className='h-full w-fit' />
                                    </div>
                                    <p>{project.desc}</p>
                                    <div className='flex w-1/2 justify-center items-center text-center gap-16'>
                                        {project.github && (
                                            <div className='flex items-center justify-center text-center gap-2 ring-1 ring-black rounded-full p-2 bg-black hover:transition-all hover:scale-110 hover:text-gray-400'>
                                                <IoLogoGithub size={30} />
                                                <Link href={project.github}> Github </Link>
                                            </div>
                                        )}
                                        {project.link && (
                                            <div className='flex items-center justify-center text-center gap-2 ring-1 ring-white rounded-full p-2 bg-white text-black hover:transition-all hover:scale-110 hover:text-gray-400'>
                                                <IoMdGlobe size={30} />
                                                <Link href={project.link}> Live </Link>
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))}
                        <div className='h-screen w-screen flex items-center justify-center bg-gradient-to-r from-purple-300 to-red-300' />
                    </motion.div>
                </div>
            </div>
            <div className="w-screen h-screen flex flex-col mt-16 items-center justify-center text-center">
                <h1 className="sm:text-8xl text-5xl p-4">Do you have a project?</h1>
                <div className="relative">
                    <motion.svg animate={{ rotate: 360 }} transition={{ duration: 8, ease: "linear", repeat: Infinity }} viewBox="0 0 300 300" className="w-64 h-64 md:w-[500px] md:h-[500px] ">
                        <defs>
                            <path id="circlePath" d="M 150, 150 m -60, 0 a 60,60 0 0,1 120,0 a 60,60 0 0,1 -120,0 " />
                        </defs>
                        <text fill="#000">
                            <textPath xlinkHref="#circlePath" className="text-lg">Front-End Developer and New UI Designer</textPath>
                        </text>
                    </motion.svg>
                    <Link href="/contact" className="w-16 h-16 md:w-28 md:h-28 absolute top-0 left-0 right-0 bottom-0 m-auto bg-black text-white rounded-full flex items-center justify-center" > Hire Me </Link>
                </div>
            </div>
        </motion.div>
    )
}
