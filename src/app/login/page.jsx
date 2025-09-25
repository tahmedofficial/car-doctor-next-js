"use client";
import Image from 'next/image';
import Link from 'next/link';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import SocialSignin from '../components/shared/SocialSignin';

const page = () => {

    const router = useRouter();

    const handleLogin = async (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        const response = await signIn("credentials", {
            email,
            password,
            redirect: false
        })
        if (response.status === 200) {
            router.push("/")
        }

    }

    return (
        <div className='container mx-auto py-14'>
            <h1 className='text-4xl font-medium text-center py-12'>Login</h1>
            <div className='grid grid-cols-2'>
                <div>
                    <Image src="/assets/images/login/login.svg" height={600} width={600} alt='login image'></Image>
                </div>
                <div className='border-2 p-12 space-y-5'>
                    <form onSubmit={handleLogin} className='space-y-5'>
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
                    <SocialSignin></SocialSignin>
                    <h1>Do not have an account ? <Link className='text-blue-800 font-medium' href="/signup">Signup</Link></h1>
                </div>
            </div>
        </div>
    );
};

export default page;