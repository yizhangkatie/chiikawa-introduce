import Head from 'next/head';
import Link from 'next/link';
import React from 'react';
import InfoWindow from '../../components/info_window';

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
                    <img src="/images/hachiware.jpg" alt="role_hachiware" className="w-24 h-24 object-contain rounded-full"/>
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
            <div className="flex flex-1 justify-center items-center w-full h-content pt-8 pb-8 lg:p-12">
                    <InfoWindow 
                    images={images} 
                    bg="/images/role_hachiware.jpg" 
                    text={(
                        <>
                          <span style={{ paddingLeft: '2em' }}>明確な言葉を発することのない<a href="./second_2">ちいかわ</a> や<a href="/posts/second_3">うさぎ</a>の言葉を「翻訳」したり、状況説明をしたりと、読者と物語の橋渡し的な役割。
                          説明役に入ることが多いが、「～ってコト？」という独特の言い回し（通称：ハチワレ構文）を使うのが特徴。<br/></span>
                          <span style={{ paddingLeft: '2em' }}><a href="./third_5">ラッコ</a>に憧れており、訓練をつけてもらって一緒に討伐に出かけたこともあった。
                          洞窟に暮らしており、慎ましやかな生活であることが描かれている。カメラで写真を撮るのが趣味。親友との思い出を大切にする傾向がある。</span>
                        </>
                      )}/>
            </div>
            <div className="absolute bottom-2 left-0 right-0 lg:left-auto lg:right-4">
                <Link href="/posts/first">← Back to last page</Link>
            </div>
        </div>
        

        </div>
    );
  };

export default SecondOne;