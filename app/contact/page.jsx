"use client";
import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { motion } from 'framer-motion'


export default function Contact() {
    const message = "Say Hello!";

    // Message Status
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState(false)

    // Email JS Platform
    const form = useRef();
    const sendEmail = (e) => {
        setSuccess(false); // Resetting the Success Status
        setError(false); // Resetting the Error Status
        e.preventDefault(); 

        emailjs.sendForm(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, form.current, process.env.NEXT_PUBLIC_PUBLIC_KEY)
            .then((result) => {
                setSuccess(true);
                form.current.reset();
            },(error) => {
                setError(true);
            }
        );
    }

    return (
        <motion.div className="h-full" initial={{y:"-200vh"}} animate={{y:"0%"}} transition={{ duration: 1 }}>
            <div className='flex h-full flex-col lg:flex-row p-4 sm:p-8 md:p-12 lg:p-20 xl:px-40'>
                {/* Text */}
                <div className='h-[150px] lg:h-full lg:w-1/2 flex items-center justify-center text-6xl'>
                    <div>
                        {message.split("").map((letter,index) => (
                            <motion.span key={index} initial={{opacity:0}} animate={{opacity:1}} transition={{delay: index*0.1, repeat: Infinity, duration: 3}}>{letter}</motion.span>
                        ))}
                    </div>
                </div>
                {/* Form */}
                <form ref={form} onSubmit={sendEmail} className='h-full lg:w-1/2 bg-red-50 rounded-xl text-xl flex flex-col sm:gap-8 gap-4 justify-center p-6 lg:p-16'>
                    <span className='text-lg sm:text-xl'>Dear Rahul A B,</span>
                    <textarea rows={6} name='user_message' placeholder='Enter Message' className='bg-transparent border-b-2 border-b-black outline-none resize-none p-2'/>
                    <span className='text-lg sm:text-xl'>My Mail Address Is:</span>
                    <input type='email' name='user_email' placeholder='Enter Email Address' className=' bg-transparent border-b-2 border-b-black outline-none p-2'/>
                    <span className='text-lg sm:text-xl'>Regards</span>
                    <button className='bg-purple-200 rounded font-semibold text-gray-600 p-4'>Send</button>
                    {success && <span className='text-green-600 font-semibold text-center'>Your Message Has Been Sent Successfully!</span>}
                    {error && <span className='text-red-600 font-semibold text-center'>Something Went Wrong!!</span>}
                </form>
            </div>
        </motion.div>
    )
}
