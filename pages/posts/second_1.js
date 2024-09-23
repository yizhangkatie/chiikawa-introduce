import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import ImageCarousel from '/components/imagecarousel';

const SecondOne = () => {
    const images = [
        '/images/second/h1.gif',
        '/images/second/h2.gif',
        '/images/second/h3.gif',
        '/images/second/h4.gif',
        '/images/second/h5.gif',
        '/images/second/h6.gif',
        '/images/second/h7.gif',
        '/images/second/h8.gif',
      ];

    return (
        <div className='relative m-auto w-full min-h-screen flex items-center'>
            
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 w-full min-h-screen bg-cover">

            <div className="relative flex items-center justify-center h-full ">

                <img src="/images/role_hachiware.jpg" alt="bg_hachiware" className="w-auto h-screen object-contain mt-10 md:mt-12"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img src="/images/hachiware.jpg" alt="role_hachiware" className="w-24 h-24 md:w-36 md:h-36 object-contain rounded-full"/>
                    <div className="text-base md:text-lg text-left p-6 w-4/5 md:w-full max-w-xs">
                    <p className="font-semibold mb-2 inline">名前：</p>
                    <p className="mb-2  inline">ハチワレ</p><br/>
                    <p className="font-semibold mb-2 inline">誕生日：</p>
                    <p className="mb-2  inline">2020年 5月 1日</p><br/>
                    
                    <p className="font-semibold mb-2 inline">紹介：</p>
                    <p className="mb-2 inline">青・白の毛のハチワレ模様の猫がモチーフとなっている。</p><br/>
                   
                    <p className="font-semibold mb-2 inline">武器：</p>
                    <p className="mb-2  inline">水色のさすまた</p><br/>
                    
                    <p className="font-semibold mb-2 inline">性格：</p>
                    <p className="mb-2  inline">社交的で楽天家</p><br/>
                    
                    <p className="font-semibold mb-2 inline">能力：</p>
                    <p className="mb-2 inline">草むしり検定５級</p><br/><br/>
                    </div>
                </div>
            </div>
            <div className="flex flex-1 justify-center lg:justify-start items-center p-6 md:p-0">
                <div className="w-[700px] h-[500px] flex object-contain items-center justify-center">
                <ImageCarousel images={images}/>
                </div>
            </div>
        </div>
            <div className="absolute bottom-2 right-12 md:right-6">
                <Link href="/posts/first-post">← Back to last page</Link>
            </div>
        </div>   
    );
  };

export default SecondOne;