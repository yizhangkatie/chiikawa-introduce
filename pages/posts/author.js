import Link from 'next/link';
import Head from 'next/head';
import styles from '/components/layout.module.css';
import React from 'react';


const Author = () => {
    return (
    <main className="flex items-center justify-center min-h-screen">
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 items-center h-screen p-6 gap-6">
        <div className="w-full h-4/5  flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg  ">

                <img
                    src="/images/ngn.jpg"
                    alt="Card Image"
                    className=" w-48 h-36 md:w-4rem md:h-80 items-center object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl md:text-lg font-semibold mb-2 text-center">ナガノ</h3>
                <p className="text-base md:text-lg text-center ">日本のイラストレーター、漫画家。女性。自分ツッコミくま（現在のナガノのくま）、
                ちいかわ（なんか小さくてかわいいやつ）の作者。筆ペンやシャープペンシル、
                色鉛筆、コピックを用いたアナログらしい柔らかな線画、繊細で独特なタッチと、
                かわいいだけではない世の中の不条理さを描くストーリーが老若男女問わず幅広く支持されている。 
                </p>
           
                <Link href={"https://x.com/ngntrtr"}>nagano's X homepage</Link>
        </div>

        <div className="w-full h-4/5  bg-cover bg-center rounded-lg slideshow-background animate-slideshow object-contain"></div>


    </div>

    </main>
    )
}

Author.title = 'Naganoの紹介'

export default Author