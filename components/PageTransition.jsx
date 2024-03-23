"use client";

import Navbar from "./Navbar"
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion"

export default function PageTransition({ children }) {
    const pathName = usePathname();

    return (
        <AnimatePresence mode="wait">
            <div key={pathName} className="bg-gradient-to-b from-blue-200 to-red-200 w-screen h-screen text-black">
                <motion.div animate={{height:"0vh"}} exit={{height: "140vh"}} transition={{ duration:0.5, ease: "easeOut"}} className="h-screen w-screen fixed bg-black rounded-b-[100px] z-30" />
                <motion.div initial={{opacity:1}} animate={{opacity:0}} transition={{ duration:0.8, ease: "easeOut"}} className="fixed m-auto top-0 bottom-0 right-0 left-0 text-white text-8xl cursor-default z-40 w-fit h-fit">{pathName === "/" ? "home" : pathName.substring(1) }</motion.div>
                <motion.div initial={{height:"140vh"}} animate={{height: "0vh"}} transition={{delay:0.5}}  className="h-screen w-screen fixed bg-black bottom-0 rounded-t-[100px] z-20" />
                <div className="h-24">
                    <Navbar />
                </div>
                <div className="h-[calc(100vh-6rem)]">
                    {children}
                </div>
            </div>
        </AnimatePresence>
    )
}
