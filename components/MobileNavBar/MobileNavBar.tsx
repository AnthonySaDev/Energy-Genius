'use client'
import React from 'react';
import { Sheet, SheetClose, SheetContent, SheetHeader, SheetTrigger } from '../ui/sheet';
import Image from 'next/image';
import Link from 'next/link';
import energy from '../../public/energy.png';
import { sidebarLinks } from '@/constants';
import { usePathname, useRouter } from 'next/navigation';
import { cn } from '@/lib/utils';
import { FaSignOutAlt } from 'react-icons/fa'; // Import the logout icon

export default function MobileNavBar({user}: MobileNavProps) {
    const pathName = usePathname();
    const router = useRouter();

    const handleLogout = () => {
        localStorage.removeItem('user');
        router.push('/sign-in');
    };

    return (
        <section className='w-full max-w-[264px]'>
            <Sheet>
                <SheetTrigger>
                    <Image src='/icons/hamburger.svg' alt='menu' width={30} height={30} className='cursor-pointer'/>
                </SheetTrigger>
                <SheetContent side={"left"} className='border-none bg-white'>
                    <Link href={'/'} className='cursor-pointer items-center gap-1 px-4'>
                        <Image src={energy} alt='logo' width={50} height={50} />
                        <h1 className='text-26 my-2'>Energy Genius</h1>
                    </Link>
                    <div className='mobilenav-sheet'>
                        <SheetClose asChild>
                            <nav className='flex h-full flex-col gap-16 pt-16 text-white'>
                                {sidebarLinks.map((item) => {
                                    const isActive = pathName === item.route || pathName.startsWith(`${item.route}/`);

                                    return (
                                        <Link key={item.label} href={item.route} className={cn("sidebar-link", {
                                            'bg-green-700': isActive
                                        }
                                        )}>
                                            <div className='relative size-6'>
                                                <Image src={item.imgURL} alt={item.label} fill  className={cn({'brightness-[3] invert-0': isActive})}/>
                                            </div>
                                            <span className={cn('text-zinc-900 max-xl:hidden',{'text-white': isActive})}>{item.label}</span>
                                        </Link>
                                    );
                                })}
                                <button onClick={handleLogout} className="sidebar-link bg-red-700 flex items-center gap-2">
                                    <FaSignOutAlt className="text-white" />
                                    <span className='text-white'>Logout</span>
                                </button>
                            </nav>
                        </SheetClose>
                    </div>
                </SheetContent>
            </Sheet>
        </section>
    );
}
