import Head from 'next/head';
import Link from 'next/link';
import ImageCarousel from '/components/imagecarousel';

export default function SecondThree(){
    const images = [
        '/images/u1.gif',
        '/images/u2.gif',
        '/images/u3.gif',
        '/images/u4.gif',
        '/images/u5.gif',
        '/images/u6.gif',
        '/images/u7.gif',
        '/images/u8.gif',
      ];
    return (
<div className='m-auto w-full text-center'>
        <div className="flex flex-col items-center ">
            <Head>
                <title>うさぎの紹介</title>
            </Head>
            
        <div className="relative flex flex-row w-full h-screen bg-cover">
            <div className="flex flex-1 justify-center items-center">
                <div className="w-full h-full flex object-contain items-center justify-center ml-56">
                <ImageCarousel images={images}/>
                </div>
            </div>
            <div className="absolute left-0 flex items-center h-full">
                <img src="/images/role_usagi.jpg" alt="bg_usagi" className="w-auto h-screen object-contain mt-12"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img src="/images/usagi.jpg" alt="role_usagi" className="w-36 h-36 object-contain rounded-full"/>
                <div className="text-left p-4 w-full max-w-xs">
                    <p className='text-lg font-semibold mb-2 inline'>名前：</p>
                    <p className="text-lg mb-2  inline">うさぎ</p><br/>
                    
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
            <div className="absolute mt-4 bottom-2 right-4">
                <Link href="/posts/first-post">← Back to last page</Link>
            </div>
        </div>

        </div>
        </div>

    )
}