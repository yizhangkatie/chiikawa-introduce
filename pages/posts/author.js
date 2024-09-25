import Link from 'next/link';
import React from 'react';


const Author = () => {
    return (
    <div className='lg:h-content mt-12 lg:mt-16'>
    <main className="relative flex h-full items-center justify-center px-6 space-y-3 py-8">
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="w-full flex flex-col items-center justify-center p-6 border border-gray-300 rounded-lg relative">
        
                <img
                    src="/images/ngn.jpg"
                    alt="Card Image"
                    className=" w-auto h-auto items-center object-cover rounded-lg mb-4 z-10"
                />
                <h3 className="text-xl md:text-lg font-semibold mb-2 text-center z-10">ナガノ</h3>
                <div className='relative w-full bg-white bg-opacity-30 backdrop-blur-md rounded-lg'>    

                <p className="text-base md:text-lg text-left z-10">日本のイラストレーター、漫画家。女性。自分ツッコミくま（現在のナガノのくま）、
                ちいかわ（なんか小さくてかわいいやつ）の作者。筆ペンやシャープペンシル、
                色鉛筆、コピックを用いたアナログらしい柔らかな線画、繊細で独特なタッチと、
                かわいいだけではない世の中の不条理さを描くストーリーが老若男女問わず幅広く支持されている。 
                </p>
           
                <Link href={"https://x.com/ngntrtr"} className='flex justify-center'>nagano's X homepage</Link>
                </div>
        </div>
        <div className=" w-full h-64 md:h-full bg-cover bg-center rounded-lg slideshow-background animate-slideshow object-contain"></div>

    </div>
        <div className="absolute bottom-2 lg:left-auto lg:right-4">
            <Link href="/">← Back to home</Link>
        </div>
    </main>
    </div>
    )
}

Author.title = 'Naganoの紹介'

export default Author