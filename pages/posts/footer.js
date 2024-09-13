import Head from 'next/head';
import React from 'react';


const Footer =() =>{
    return (
    <div className="relative w-full h-screen bg-cover mt-36 ">
        <div className='absolute bottom-0 w-full h-screen mb-10'>
            <img src="/images/footer_all3.png" alt="footer" className="w-full h-auto" />
        </div>
        <div className="absolute bottom-0 text-center w-full bottom-0">
            <div className="bg-gray-100 bg-cover text-white w-full h-36 bottom-0 left-0 px-6 flex items-center justify-center border-t border-gray-200 ">
                <a href='https://x.com/anime_chiikawa?s=21' className='items-center'>
                </a>
                
                <a href='https://www.anime-chiikawa.jp/'>「ちいかわ」公式サイト</a>
            </div>

        </div>
    </div>
    )
}

export default Footer