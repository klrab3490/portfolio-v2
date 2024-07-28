"use client";
import Image from 'next/image';
import { useRef } from 'react';
import Brain from '@components/Brain';
import {  motion, useInView, useScroll, useTransform } from 'framer-motion'

// Images
import sign from "@public/Sign.png";

export default function About() {
    const containerRef = useRef();
    const { scrollYProgress } = useScroll({ container:containerRef });

    const skillRef = useRef();
    const isSkillInView = useInView(skillRef,{ margin: "-100px" });

    const educationRef = useRef();
    const isEducationInView = useInView(educationRef,{ margin: "-100px" });

    const experienceRef = useRef();
    const isExperienceInView = useInView(experienceRef,{ margin: "-100px" });

    const scrollY = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{ duration: 1 }}>
            {/* Container */}
            <div className="h-full overflow-scroll lg:flex" ref={containerRef}>
                {/* Text Container */}
                <div className='p-4 sm:p-8 md:p-12 lg:p-20 l:p-40 flex flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 lg:pr-0 xl:w-1/2'>

                    {/* BioGraphy */}
                    <div className='flex flex-col sm:gap-12 gap-0 justify-center'>
                        {/* Title */}
                        <h1 className='font-bold text-2xl'> BIOGRAPHY </h1>
                        {/* Description */}
                        <p className='text-lg'>Rahul A B is a final-year undergraduate student at Sahrdaya College Of Engineering and Technology, Kerala, driven by a passion for front-end development and designer. With a focus on becoming a full-stack web developer, Rahul immerses himself in projects ranging from Flutter app development to backend systems or even Arduino development. He thrives on challenges, constantly seeking opportunities to enhance his skills and knowledge. Inspired by the ever-evolving landscape of technology, Rahul is committed to making a lasting impact in the field of web development, combining his creative flair with a dedication to innovation and excellence. Additionally, Rahul has experience with Arduino coding, further showcasing his versatility and technical prowess in various areas of development.</p>
                        {/* Quote */}
                        <span className='italic'> In the journey of life, obstacles are but stepping stones. Embrace the present, for it shapes your tomorrow. Strive forward with determination, for amidst the joys and sorrows, lies the essence of fulfillment. </span>
                        {/* Sign */}
                        <div className='self-end'>
                            <Image src={sign} alt="Rahul Sign" width={150} />
                        </div>
                        {/* Scroll SVG */}
                        <motion.svg initial={{ opacity: 0.2, y: 0 }} animate={{ opacity: 1, y: "10px" }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={50} height={50} >
                            <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1" ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1" ></path>
                        </motion.svg>
                    </div>
                    
                    {/* Skills */}
                    <div className='flex flex-col sm:gap-12 gap-0 justify-center pb-64' ref={skillRef}>
                        {/* Title */}
                        <motion.h1 initial={{ x: "-300px" }} animate={isSkillInView ? { x: 0 } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl"> Skills </motion.h1>
                        {/* Skills List */}
                        <motion.div initial={{ x: "-300px" }} animate={isSkillInView ? { x: 0 } : {}} className="flex flex-col" >
                            <h1 className='font-semibold text-xl'>1. Front-End Technologies: </h1>
                            <div className='flex flex-wrap gap-2 px-4 mt-1'>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">HTML</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">CSS</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">JavaScript</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Tailwind CSS</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">React JS</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Next JS</div>
                            </div>
                            <h1 className='font-semibold text-xl mt-2'>2. Back-End Technologies: </h1>
                            <div className='flex flex-wrap gap-2 px-4 mt-1'>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MySQL</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">MongoDB</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Firebase</div>
                            </div>
                            <h1 className='font-semibold text-xl mt-2'>3. Programming Languages: </h1>
                            <div className='flex flex-wrap gap-2 px-4 mt-1'>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Python</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">C++</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Java</div>
                            </div>
                            <h1 className='font-semibold text-xl mt-2'>4. UI/UX Design: </h1>
                            <div className='flex flex-wrap gap-2 px-4 mt-1'>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Figma</div>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Canva</div>
                            </div>
                            <h1 className='font-semibold text-xl mt-2'>5. Tools: </h1>
                            <div className='flex flex-wrap gap-2 px-4 mt-1'>
                                <div className="rounded p-2 text-sm cursor-pointer bg-black text-white hover:bg-white hover:text-black">Git</div>
                            </div>
                        </motion.div>
                        {/* Scroll SVG */}
                        <motion.svg initial={{ opacity: 0.2, y: 0 }} animate={{ opacity: 1, y: "10px" }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={50} height={50} >
                            <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1" ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1" ></path>
                        </motion.svg>
                    </div>

                    {/* Education */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={educationRef}>
                        {/* Title */}
                        <motion.h1 initial={{ x: "-300px" }} animate={isEducationInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl"> EDUCATION </motion.h1>
                        {/* Education Container */}
                        <motion.div initial={{ x: "-300px" }} animate={isEducationInView ? { x: "0" } : {}}>
                            {/* 1 */}
                            <div className='flex justify-between h-48'>
                                {/* Left */}
                                <div className='w-1/3'>
                                    <div className='bg-white p-3  font-semibold rounded-b-lg rounded-s-lg'>Computer Science And Engineering</div>
                                    <div className='p-3 text-sm italic'>Sahrdaya College Of Engineering & TEchnology, Kodakara</div>
                                    <div className='p-3 text-sm font-semibold text-red-500'>2021 - Present</div>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>KTU</div>
                                </div>
                                {/* Center */}
                                <div>
                                    {/* line */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        <div className='absolute w-5 h-5 rounded-full bg-white ring-4 ring-sky-400 -left-2'></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-1/3'></div>
                            </div>
                            {/* 1 */}
                            <div className='flex justify-between h-48'>
                                {/* Left */}
                                <div className='w-1/3'>
                                    
                                </div>
                                {/* Center */}
                                <div>
                                    {/* line */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        <div className='absolute w-5 h-5 rounded-full bg-white ring-4 ring-sky-400 -left-2'></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-1/3'>
                                    <div className='bg-white p-3  font-semibold rounded-b-lg rounded-r-lg'>6th Standard To +2</div>
                                    <div className='p-3 text-sm italic'>Holy Grace Academy, Mala</div>
                                    <div className='p-3 text-sm font-semibold text-red-500'>2015 - 2021</div>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>CBSE</div></div>
                            </div>
                            {/* 3 */}
                            <div className='flex justify-between h-48'>
                                {/* Left */}
                                <div className='w-1/3'>
                                    <div className='bg-white p-3  font-semibold rounded-b-lg rounded-s-lg'>Kindergarden To 5th Standard</div>
                                    <div className='p-3 text-sm italic'>India School Ajman, Ajman</div>
                                    <div className='p-3 text-sm font-semibold text-red-500'>2008 - 2015</div>
                                    <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>CBSE</div>
                                </div>
                                {/* Center */}
                                <div>
                                    {/* line */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        <div className='absolute w-5 h-5 rounded-full bg-white ring-4 ring-sky-400 -left-2'></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-1/3'></div>
                            </div>
                        </motion.div>
                        {/* Scroll SVG */}
                        <motion.svg initial={{ opacity: 0.2, y: 0 }} animate={{ opacity: 1, y: "10px" }} transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" width={50} height={50} >
                            <path d="M5 15C5 16.8565 5.73754 18.6371 7.05029 19.9498C8.36305 21.2626 10.1435 21.9999 12 21.9999C13.8565 21.9999 15.637 21.2626 16.9498 19.9498C18.2625 18.6371 19 16.8565 19 15V9C19 7.14348 18.2625 5.36305 16.9498 4.05029C15.637 2.73754 13.8565 2 12 2C10.1435 2 8.36305 2.73754 7.05029 4.05029C5.73754 5.36305 5 7.14348 5 9V15Z" stroke="#000000" strokeWidth="1" ></path>
                            <path d="M12 6V14" stroke="#000000" strokeWidth="1"></path>
                            <path d="M15 11L12 14L9 11" stroke="#000000" strokeWidth="1" ></path>
                        </motion.svg>
                    </div>

                    {/* Experience */}
                    <div className="flex flex-col gap-12 justify-center pb-48" ref={experienceRef}>
                        {/* Title */}
                        <motion.h1 initial={{ x: "-300px" }} animate={isExperienceInView ? { x: "0" } : {}} transition={{ delay: 0.2 }} className="font-bold text-2xl"> VOLENTEERING EXPERIENCE </motion.h1>
                        {/* Education Container */}
                        <motion.div initial={{ x: "-300px" }} animate={isExperienceInView ? { x: "0" } : {}}>
                            {/* 1 */}
                            <div className='flex justify-between h-48'>
                                {/* Left */}
                                <div className='w-1/3'>
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Link Representative</div>
                                    <div className='p-3 text-sm italic'>IEEE Sahrdaya SB</div>
                                    <div className='p-3 text-sm font-semibold text-red-500'>2024 - Present</div>
                                    <div className='gap-1 flex flex-wrap'>
                                        <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>IEEE</div>
                                        <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Sahrdaya</div>
                                    </div>
                                </div>
                                {/* Center */}
                                <div className='w-fit'>
                                    {/* line */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        <div className='absolute w-5 h-5 rounded-full bg-white ring-4 ring-sky-400 -left-2'></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-1/3'></div>
                            </div>
                            {/* 2 */}
                            <div className='flex justify-between h-48'>
                                {/* Left */}
                                <div className='w-1/3'>  </div>
                                {/* Center */}
                                <div>
                                    {/* line */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        <div className='absolute w-5 h-5 rounded-full bg-white ring-4 ring-sky-400 -left-2'></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-1/3'>
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-r-lg'>Membership Development<br/> Co-ordinator</div>
                                    <div className='p-3 text-sm italic'>IEEE Sahrdaya SB<br/>Sahrdaya College Of Engineering</div>
                                    <div className='p-3 text-sm font-semibold text-red-500'>2023 - 2024</div>
                                    <div className='gap-1 flex flex-wrap'>
                                        <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>IEEE</div>
                                        <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Sahrdaya</div>
                                    </div>
                                </div>
                            </div>
                            {/* 3 */}
                            <div className='flex justify-between h-48'>
                                {/* Left */}
                                <div className='w-1/3'>
                                    <div className='bg-white p-3 font-semibold rounded-b-lg rounded-s-lg'>Vice - Chair Of PES Society</div>
                                    <div className='p-3 text-sm italic'>IEEE Sahrdaya SB</div>
                                    <div className='p-3 text-sm font-semibold text-red-500'>2022 - 2023</div>
                                    <div className='gap-1 flex flex-wrap'>
                                        <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>IEEE</div>
                                        <div className='p-1 rounded bg-white text-sm font-semibold w-fit'>Sahrdaya</div>
                                    </div>
                                </div>
                                {/* Center */}
                                <div>
                                    {/* line */}
                                    <div className='w-1 h-full bg-gray-600 rounded relative'>
                                        <div className='absolute w-5 h-5 rounded-full bg-white ring-4 ring-sky-400 -left-2'></div>
                                    </div>
                                </div>
                                {/* Right */}
                                <div className='w-1/3'></div>
                            </div>
                        </motion.div>
                    </div>
                </div>
                <div className='hidden lg:block sticky top-0 w-1/3 xl:w-1/2 z-30'>
                    <Brain scrollYProgress={scrollYProgress} />
                </div>
            </div>
        </motion.div>
    )
}
