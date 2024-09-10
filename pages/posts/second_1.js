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
                src="/images/chiikawa.jpg" 
                alt="chiikawa图片"
                className="rounded-full object-cover m-auto"
            />
            <p className="text-center text-lg font-semibold mt-2">
                这是一段文字
            </p>

            <div className="mt-4">
                <Link href="/posts/first-post">← Back to last page<br/></Link>
                <Link href="/">← Back to home</Link>
            </div>

        </div>
</div>    );
  };

export default SecondOne;