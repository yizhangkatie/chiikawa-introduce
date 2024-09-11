import Link from 'next/link';
import Head from 'next/head';
import styles from '/components/layout.module.css';
import React from 'react';


const author = () => {
    return (
    <main className="flex items-center justify-center min-h-screen">
        <Head>
            <title>Naganoの紹介</title>
        </Head>
        <div className="flex flex-col items-center justify-center w-72 h-144 p-6 mt-6 border border-gray rounded-lg text-center ">
            <img
                src="/images/ngn.jpg"
                alt="Card Image"
                className="w-full h-full object-cover rounded-lg mb-4"
            />
            <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">ナガノ</h3>
                <p className="text-lg">イラストレーターのナガノは、「nagano」や「ちいかわ」など、
                    癒し系イラストにおける独特な世界観で、SNSで人気を集めています。</p>
            </div>
        </div>
        <div class="w-full h-screen bg-cover bg-center slideshow-background animate-slideshow">
        </div>
    </main>
    )
}

export default author