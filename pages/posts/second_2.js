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
        <div className='relative m-auto w-full min-h-screen flex items-center'>

            <Head>
                <title>ちいかわの紹介</title>
            </Head>
            
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-6 w-full min-h-screen bg-cover">

            <div className="relative flex items-center justify-center h-full ">
                <img src="/images/role_chii.jpg" alt="bg_chii" className="w-auto h-screen object-contain mt-10 md:mt-12"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <img src="/images/chi.jpg" alt="role_chii" className="w-36 h-36 object-contain rounded-full"/>
                <div className="text-base md:text-lg text-left p-6 w-4/5 md:w-full max-w-xs">
                    <p className='font-semibold mb-2 inline'>名前：</p>
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
            <div className="flex flex-1 justify-center items-center p-6">
                <div className="w-[700px] h-[500px] flex object-contain items-center justify-center">
                <ImageCarousel images={images}/>
                </div>
            </div>
        </div>
            <div className="absolute bottom-0 right-12 md:right-6">
                <Link href="/posts/first-post">← Back to last page</Link>
            </div>
        </div>

    )
}