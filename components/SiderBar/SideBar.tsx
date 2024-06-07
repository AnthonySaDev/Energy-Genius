'use client'
import React from 'react'
import Link from 'next/link'
import energy from '../../public/energy.png'
import Image from 'next/image'
import { sidebarLinks } from '@/constants'
import { cn } from '@/lib/utils'
import { usePathname, useRouter } from 'next/navigation'
import { FaSignOutAlt } from 'react-icons/fa'

export default function SideBar() {
    const pathName = usePathname()
    const router = useRouter()

    const handleSignOut = () => {
        localStorage.removeItem('user');
        router.push('/sign-in');
    }

    return (
        <section className='sidebar'>
            <nav className='flex flex-col gap-4'>
                <Link href={'/'} className='mb-12 cursor-pointer items-center gap-2'>
                    <Image src={energy} alt='logo' width={50} height={50} className='size-[24] max-xl:size-14'/>
                    <h1 className='sidebar-logo'>Energy Genius</h1>
                </Link>
                {sidebarLinks.map((item) => {
                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`);

                    return (
                        <Link key={item.label} href={item.route} className={cn("sidebar-link", {
                            'bg-green-700': isActive
                        })}>
                            <div className='relative size-6'>
                                <Image src={item.imgURL} alt={item.label} fill className={cn({'brightness-[3] invert-0': isActive})}/>
                            </div>
                            <span className={cn('text-zinc-900 max-xl:hidden',{'text-white': isActive})}>{item.label}</span>
                        </Link>
                    );
                })}
                <button 
                    onClick={handleSignOut} 
                    className='sidebar-link text-red-600 flex items-center gap-2 mt-auto hover:bg-red-100'
                >
                    <FaSignOutAlt className='size-6' />
                    <span className='text-zinc-900 max-xl:hidden'>Sign Out</span>
                </button>
            </nav>
        </section>
    )
}
