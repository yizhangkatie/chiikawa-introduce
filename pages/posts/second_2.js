import Head from 'next/head';
import Link from 'next/link';
import ImageCarousel from '/components/imagecarousel';

export default function SecondTwo(){
    const images = [
        '/images/c1.gif',
        '/images/c2.gif',
        '/images/c3.gif',
        '/images/c4.gif',
        '/images/c5.gif',
        '/images/c6.gif',
        '/images/c7.gif',
        '/images/c8.gif',
        '/images/c9.gif',
      ];

    return (
        <div className='m-auto w-full text-center'>
        <div className="flex flex-col items-center ">
            <Head>
                <title>ちいかわの紹介</title>
            </Head>
            
        <div className="relative flex flex-row w-full h-screen bg-cover">
            <div className="flex flex-1 justify-center items-center">
                <div className="w-full h-full flex object-contain items-center justify-center ml-56">
                <ImageCarousel images={images}/>
                </div>
            </div>
            <div className="absolute left-0 flex items-center h-full">
                <img src="/images/role_chii.jpg" alt="bg_hachiware" className="w-auto h-screen object-contain mt-12"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img src="/images/chi.jpg" alt="role_chii" className="w-36 h-36 object-contain rounded-full"/>
                <div className="text-left p-4 w-full max-w-xs">
                    <p className="text-lg font-semibold mb-2 inline">誕生日：</p>
                    <p className="text-lg mb-2  inline">2017年 ５月１日</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">紹介：</p>
                    <p className="text-lg mb-2 inline">chiikawaの主人公</p><br/>
                   
                    <p className="text-lg font-semibold mb-2 inline">武器：</p>
                    <p className="text-lg mb-2  inline">ピンク色のさすまた</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">性格：</p>
                    <p className="text-lg mb-2  inline">臆病でシャイな性格</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">能力：</p>
                    <p className="text-lg mb-2 inline">草むしり検定5級の合格に向けて勉強中</p><br/><br/>
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