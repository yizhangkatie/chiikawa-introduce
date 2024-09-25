import Head from 'next/head';
import Link from 'next/link';
import ImageCarousel from '/components/imagecarousel';

export default function SecondTwo(){
    const images = [
        '/images/second/c1.gif',
        '/images/second/c2.gif',
        '/images/second/c3.gif',
        '/images/second/c4.gif',
        '/images/second/c5.gif',
        '/images/second/c6.gif',
        '/images/second/c7.gif',
        '/images/second/c8.gif',
        '/images/second/c9.gif',
      ];

    return (
<div className='m-auto w-full text-center pt-12 lg:pt-16'>
        <div className="relative flex w-full h-full lg:h-content bg-cover flex-col lg:flex-row">
            <div className="relative flex items-center h-full">
                <img src="/images/role_chii.jpg" alt="bg_chii" className="w-full h-full object-contain"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center pb-12">
                    <img src="/images/chii.jpg" alt="role_chii" className="w-36 h-36 object-contain rounded-full"/>
                <div className="text-left p-4 w-full max-w-xs">
                    <p className="font-semibold mb-2 inline">名前：</p>
                    <p className="mb-2  inline">ちいかわ</p><br/>
                    <p className="font-semibold mb-2 inline">誕生日：</p>
                    <p className="mb-2  inline">2017年 ５月１日</p><br/>
                    
                    <p className="font-semibold mb-2 inline">紹介：</p>
                    <p className="mb-2 inline">chiikawaの主人公</p><br/>
                   
                    <p className="font-semibold mb-2 inline">武器：</p>
                    <p className="mb-2  inline">ピンク色のさすまた</p><br/>
                    
                    <p className="font-semibold mb-2 inline">性格：</p>
                    <p className="mb-2  inline">臆病でシャイな性格</p><br/>
                    
                    <p className="font-semibold mb-2 inline">能力：</p>
                    <p className="mb-2 inline">草むしり検定5級の合格に向けて勉強中</p><br/><br/>
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
    )
}