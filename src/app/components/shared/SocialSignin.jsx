"use client";
import { signIn, useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import React from 'react';

const SocialSignin = () => {

    const router = useRouter();
    const session = useSession();

    const handleSocialSignin = (provider) => {
        signIn(provider, { redirect: false })
    }
    if (session.status === "loading") {
        return <h3>Lodding...</h3>
    }

    if (session.status === "authenticated") {
        router.push("/");
    }

    return (
        <div className='space-y-6'>
            <h1>Signin with social linl</h1>
            <div className='flex items-center justify-around'>
                <button onClick={() => handleSocialSignin("google")} className=' btn btn-primary'>Google</button>
                <button onClick={() => handleSocialSignin("facebook")} className=' btn btn-primary'>Facebook</button>
            </div>
        </div>
    );
};

export default SocialSignin;