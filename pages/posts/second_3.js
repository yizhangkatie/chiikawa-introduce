import Head from 'next/head';
import Link from 'next/link';
import ImageCarousel from '/components/imagecarousel';

export default function SecondThree(){
    const images = [
        '/images/second/u1.gif',
        '/images/second/u2.gif',
        '/images/second/u3.gif',
        '/images/second/u4.gif',
        '/images/second/u5.gif',
        '/images/second/u6.gif',
        '/images/second/u7.gif',
        '/images/second/u8.gif',
      ];
    return (
<div className='m-auto w-full text-center pt-12 lg:pt-16'>
        <div className="relative flex w-full h-full lg:h-content bg-cover flex-col lg:flex-row">
            <div className="relative flex items-center h-full">
                <img src="/images/role_usagi.jpg" alt="bg_usagi" className="w-full h-full object-contain"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center pb-12">
                    <img src="/images/usagi.jpg" alt="role_usagi" className="w-36 h-36 object-contain rounded-full"/>
                <div className="text-left p-4 w-full max-w-xs">
                    <p className='text-lg font-semibold mb-2 inline'>名前：</p>
                    <p className="text-lg mb-2  inline">うさぎ</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">誕生日：</p>
                    <p className="text-lg inline">2019年 1月 22日</p><br/>

                    <p className="text-lg font-semibold mb-2 inline">紹介：</p>
                    <p className="text-lg mb-2 inline">ちいかわの友達である黄色い体色の兎 </p><br/>
                   
                    <p className="text-lg font-semibold mb-2 inline">武器：</p>
                    <p className="text-lg mb-2  inline">黄色い棒</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">性格：</p>
                    <p className="text-lg mb-2  inline">自由奔放に振る舞い</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">能力：</p>
                    <p className="text-lg mb-2 inline">草むしり検定3級</p><br/><br/>
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