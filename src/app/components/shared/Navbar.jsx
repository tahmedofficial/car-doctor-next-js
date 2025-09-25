"use client";
import Image from 'next/image';
import Link from 'next/link';
import React, { use } from 'react';
import { IoCartOutline } from "react-icons/io5";
import { CiSearch } from "react-icons/ci";
import { signOut, useSession } from 'next-auth/react';


const Navbar = () => {

    const session = useSession();
    console.log(session);
    let user
    if (session.data?.user) {
        user = session.data.user
    } else {
        user = null
    }


    const navItems = [
        {
            title: "Home",
            path: "/"
        },
        {
            title: "About",
            path: "/about"
        },
        {
            title: "Services",
            path: "/services"
        },
        {
            title: "Blog",
            path: "/blog"
        },
        {
            title: "Contact",
            path: "/contact"
        }
    ]

    return (
        <div className='bg-white'>
            <div className="navbar container mx-auto">
                <div className="navbar-start">
                    <Link href={"/"}>
                        <Image src="/assets/logo.svg" alt='Logo' height={60} width={80}></Image>
                    </Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <div className='flex items-center space-x-6'>
                        {navItems.map(item => (
                            <Link key={item.path} href={item.path}>
                                {item.title}
                            </Link>
                        ))}
                    </div>
                </div>
                <div className="navbar-end">
                    <div className='flex items-center gap-3'>
                        <IoCartOutline className='text-xl' />
                        <CiSearch className='text-xl' />
                        <a className="btn">Appointment</a>
                        {
                            user ? <button onClick={() => signOut()} className="btn">Log Out</button> :
                                <Link className="btn" href="/login">Login</Link>
                        }

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;