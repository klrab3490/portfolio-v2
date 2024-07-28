"use client"

import Link from 'next/link'
import Image from 'next/image';
import { useState } from 'react';
import Navlinks from './Navlinks';
import { motion } from 'framer-motion';

import github from '@public/github.png'
import facebook from '@public/facebook.png'
import instagram from '@public/instagram.png'
import linkedin from '@public/linkedIn.png'

const Links = [
    { name: "Home", href: "/",},
    { name: "About", href: "/about",},
    { name: "Project", href: "/project",},
    { name: "Contact", href: "/contact",},
];

export default function Navbar() {
    // Navbar State
    const [isOpen, setIsOpen] = useState(false);
    const HandleNav = () => {
        setIsOpen(!isOpen);
    }

    // Navbar HamburgerButton Animation
    const topVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: 45,
            backgroundColor:"rgb(255, 255, 255)"
        }
    }
    const middleVariants = {
        closed: {
            opacity: 1,
        },
        opened: {
            opacity: 0,
            backgroundColor:"rgb(255, 255, 255)"
        }
    }
    const bottomVariants = {
        closed: {
            rotate: 0,
        },
        opened: {
            rotate: -45,
            backgroundColor:"rgb(255, 255, 255)"
        }
    }

    // Navbar HamburgerMenu Animation
    const listVariants = {
        closed: {
            x: "100vw",
        },
        opened: {
            x: 0,
            transition: {
                when: "beforeChildren",
                staggerChildren: 0.2,
            }
        }
    }
    const listItemVariants = {
        closed: {
            x: "-10",
            opacity: 0,
        },
        opened: {
            x: 0,
            opacity: 1,
        }
    }

    return (
        <div className='h-full flex items-center justify-between px-4 sm:px-8 md:px-12 lg:px-20 xl:px-40 text-xl font-semibold'>
            
            {/* Redirecting Pages */}
            <div className='hidden md:flex gap-4 w-1/3'>
                {Links.map(link => (
                    <Navlinks key={link.name} link={link} />
                ))}
            </div>
            
            {/* Logo */}
            <div className='md:hidden lg:flex xl:w-1/3 flex xl:justify-center items-center'>
                <Link href='/' className='text-sm bg-black rounded-md p-1 font-semibold flex items-center justify-center'>
                    <span className='text-white mr-2'>Rahul A B{" "}</span>
                    <span className='w-12 h-8 rounded bg-white text-black flex items-center justify-center'>.dev</span>
                </Link>
            </div>
            
            {/* Social Media */}
            <div className='hidden md:flex justify-end gap-4 w-1/3'>
                <Link href={"https://github.com/klrab3490"}>
                    <Image src={github} alt={"Logo"} width={30} height={30} />
                </Link>
                <Link href={"https://www.facebook.com/rahul.bushi/"}>
                    <Image src={facebook} alt={"Logo"} width={30} height={30} />
                </Link>
                <Link href={"https://www.instagram.com/kl.rab_3490/"}>
                    <Image src={instagram} alt={"Logo"} width={30} height={30} />
                </Link>
                <Link href={"https://www.linkedin.com/in/rahul-a-b-0044b1232/"}>
                    <Image src={linkedin} alt={"Logo"} width={30} height={30} />
                </Link>
            </div>
            
            {/* Responsiveness */}
            <div className='md:hidden'>
            
                {/* HamburgerButton */}
                <button className='flex flex-col justify-between w-10 h-8 z-50 relative' onClick={HandleNav}>
                    <motion.div variants={topVariants} animate={ isOpen ? "opened" : "closed"} className="w-10 h-1 rounded bg-black origin-left"></motion.div>
                    <motion.div variants={middleVariants} animate={ isOpen ? "opened" : "closed"} className="w-10 h-1 rounded bg-black origin-left"></motion.div>
                    <motion.div variants={bottomVariants} animate={ isOpen ? "opened" : "closed"} className="w-10 h-1 rounded bg-black origin-left"></motion.div>
                </button>
            
                {/* Menu List */}
                {isOpen && (
                    <motion.div variants={listVariants} initial="closed" animate="opened" className='absolute top-0 left-0 w-screen h-screen bg-black text-white flex flex-col items-center justify-center gap-8 text-4xl z-40'>
                        {Links.map(link => (
                            <motion.div  key={link.name} variants={listItemVariants}>
                                <Link href={link.href} onClick={HandleNav}> {link.name} </Link>
                            </motion.div>
                        ))}
                    </motion.div>
                )}
            </div>
        </div>
    )
}
