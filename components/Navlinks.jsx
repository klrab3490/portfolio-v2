import Link from 'next/link'
import { usePathname } from 'next/navigation';
import React from 'react'

export default function Navlinks({link}) {
    const pathName = usePathname();
    
    return (
        <Link className={`hidden md:block rounded-md p-1 ${pathName===link.href && "bg-black text-white"}`} href={link.href}>{link.name}</Link>
    )
}
