import Link from 'next/link';
import Head from 'next/head';
import styles from '/components/layout.module.css';
import React from 'react';


const Author = () => {
    return (
    <main className="flex items-center justify-center min-h-screen">
        {/* <Head>
            <title>Naganoの紹介</title>
        </Head> */}
    <div className="flex justify-between items-start w-full h-screen p-6">
        <div className="w-1/2 h-4/5 flex flex-col items-center p-6 border border-gray-300 rounded-lg mt-16">

                <img
                    src="/images/ngn.jpg"
                    alt="Card Image"
                    className="w-auto h-auto items-center object-cover rounded-lg mb-4"
                />
                <h3 className="text-xl font-semibold mb-2">ナガノ</h3>
                <p className="text-lg text-center">日本のイラストレーター、漫画家。女性。自分ツッコミくま（現在のナガノのくま）、
                ちいかわ（なんか小さくてかわいいやつ）の作者。筆ペンやシャープペンシル、
                色鉛筆、コピックを用いたアナログらしい柔らかな線画、繊細で独特なタッチと、
                かわいいだけではない世の中の不条理さを描くストーリーが老若男女問わず幅広く支持されている。 
                </p>
           
                <Link href={"https://x.com/ngntrtr"}>nagano's X homepage</Link>
        </div>
        <div className="w-1/2 h-4/5 mt-16 bg-cover bg-center rounded-lg slideshow-background animate-slideshow ml-6"></div>
    
   


</div>

    </main>
    )
}

Author.title = 'Naganoの紹介'

export default Author