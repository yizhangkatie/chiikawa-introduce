import Head from 'next/head';
import Link from 'next/link';
import React from 'react';


const SecondOne = () => {
    return (
        <div className='m-auto w-full text-center'>
        <div className="flex flex-col items-center ">
            <Head>
                <title>ハチワレの紹介</title>
            </Head>
            
            <img
                src="/images/all_1.jpg" 
                alt="hachiware图片"
                className="w-full object-cover m-auto"
            />
            <p className="text-center text-lg font-semibold mt-2">
                ちいかわのともだち。明るくてポジティブ。
                どうくつで生活している。
            </p>

            <div className="mt-4">
                <Link href="/posts/first-post">← Back to last page<br/></Link>
            </div>

        </div>
        </div>    
    );
  };

export default SecondOne;