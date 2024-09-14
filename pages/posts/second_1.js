import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import ImageCarousel from '/components/imagecarousel';

const SecondOne = () => {
    const images = [
        '/images/h1.gif',
        '/images/h2.gif',
        '/images/h3.gif',
        '/images/h4.gif',
        '/images/h5.gif',
        '/images/h6.gif',
        '/images/h7.gif',
        '/images/h8.gif',
      ];

    return (
    <div className=' m-auto w-full text-center'>
            <Head>
                <title>ハチワレの紹介</title>
            </Head>
    <div className="relative flex flex-row w-full h-screen bg-cover ">
        <div className="flex flex-1 justify-center items-center">
            <div className="w-full h-full flex object-contain items-center justify-center ml-56">
            <ImageCarousel images={images}/>
            </div>
        </div>

        <div className="flex flex-col items-center">
            <div className="absolute left-0 flex items-center h-full">
                <img src="/images/role_hachiware.jpg" alt="bg_hachiware" className="w-auto h-screen object-contain mt-12"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img src="/images/hachiware.jpg" alt="role_hachiware" className="w-36 h-36 object-contain rounded-full"/>
                <div className="text-left p-4 w-full max-w-xs">
                    <p className='text-lg font-semibold mb-2 inline'>名前：</p>
                    <p className="text-lg mb-2  inline">ハチワレ</p><br/>
                    <p className="text-lg font-semibold mb-2 inline">誕生日：</p>
                    <p className="text-lg mb-2  inline">2020年 5月 1日</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">紹介：</p>
                    <p className="text-lg mb-2 inline">青・白の毛のハチワレ模様の猫がモチーフとなっている。</p><br/>
                   
                    <p className="text-lg font-semibold mb-2 inline">武器：</p>
                    <p className="text-lg mb-2  inline">水色のさすまた</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">性格：</p>
                    <p className="text-lg mb-2  inline">社交的で楽天家</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">能力：</p>
                    <p className="text-lg mb-2 inline">草むしり検定５級</p><br/><br/>
                </div>
                </div>
            </div>
            <div className="absolute mt-4 bottom-2 right-4">
                <Link href="/posts/first-post">← Back to last page</Link>
            </div>
        </div>

    </div>
    </div>    
    );
  };

export default SecondOne;