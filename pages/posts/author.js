import Link from 'next/link';
import Head from 'next/head';
import styles from '/components/layout.module.css';
import React from 'react';


const Author = () => {
    return (
    <main className="flex flex-col min-h-screen items-center justify-center pt-10 px-6 mt-16 space-y-3 mb-16">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 ">
        <div className="w-full flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg  ">
                <img
                    src="/images/ngn.jpg"
                    alt="Card Image"
                    className=" w-auto h-auto items-center object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl md:text-lg font-semibold mb-2 text-center">ナガノ</h3>
                <p className="text-base md:text-lg text-center ">日本のイラストレーター、漫画家。女性。自分ツッコミくま（現在のナガノのくま）、
                ちいかわ（なんか小さくてかわいいやつ）の作者。筆ペンやシャープペンシル、
                色鉛筆、コピックを用いたアナログらしい柔らかな線画、繊細で独特なタッチと、
                かわいいだけではない世の中の不条理さを描くストーリーが老若男女問わず幅広く支持されている。 
                </p>
           
                <Link href={"https://x.com/ngntrtr"}>nagano's X homepage</Link>
        </div>
        <div className=" w-full h-64 md:h-full bg-cover bg-center rounded-lg slideshow-background animate-slideshow object-contain"></div>

    </div>

    </main>
    )
}

Author.title = 'Naganoの紹介'

export default Author