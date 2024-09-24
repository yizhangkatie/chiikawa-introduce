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
<div className='m-auto w-full text-center pt-12 lg:pt-16'>
        <div className="relative flex w-full h-full lg:h-content bg-cover flex-col lg:flex-row">
            <div className="relative flex items-center h-full">
                <img src="/images/role_hachiware.jpg" alt="bg_hachiware" className="w-full h-full object-contain"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center pb-12">
                    <img src="/images/hachiware.jpg" alt="role_hachiware" className="w-36 h-36 object-contain rounded-full"/>
                <div className="text-left p-4 w-full max-w-xs">
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
            <div className="flex flex-1 justify-center items-center h-content">
                <div className="w-[600px] h-[500px] flex object-contain items-center justify-center pb-12">
                <ImageCarousel images={images}/>
                </div>
            </div>
            <div className="absolute bottom-2 left-0 right-0 lg:left-auto lg:right-4">
                <Link href="/posts/first">← Back to last page</Link>
            </div>
        </div>
        

        </div>
    );
  };

export default SecondOne;