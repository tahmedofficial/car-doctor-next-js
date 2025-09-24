"use client";
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const page = () => {

    const handleSignup = () => {

    }

    return (
        <div className='container mx-auto py-14'>
            <h1 className='text-4xl font-medium text-center py-12'>Signup</h1>
            <div className='grid grid-cols-2'>
                <div>
                    <Image src="/assets/images/login/login.svg" height={600} width={600} alt='login image'></Image>
                </div>
                <div className='border-2 p-12 space-y-5'>
                    <form onSubmit={handleSignup} className='space-y-5'>
                        <div>
                            <label htmlFor="email">Email</label> <br />
                            <input className='outline-0 border p-1' type="email" name='email' placeholder='Your email' />
                        </div>
                        <div>
                            <label htmlFor="password">Password</label> <br />
                            <input className='outline-0 border p-1' type="password" name='password' placeholder='Your email' />
                        </div>
                        <button className=' btn btn-primary'>Login</button>

                    </form>
                    <div className='space-y-6'>
                        <h1>Signin with social linl</h1>
                        <div className='flex items-center justify-around'>
                            <button className=' btn btn-primary'>Google</button>
                            <button className=' btn btn-primary'>Facebook</button>
                        </div>
                    </div>
                    <h1>Already have an account ? <Link className='text-blue-800 font-medium' href="/login">Login</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default page;