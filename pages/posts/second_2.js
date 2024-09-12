import Head from 'next/head';
import Link from 'next/link';

export default function SecondTwo(){
    return (
        <div className='m-auto w-full text-center'>
        <div className="flex flex-col items-center ">
            <Head>
                <title>ちいかわの紹介</title>
            </Head>
            
            <div class="relative w-full h-screen bg-cover ">
            <div class="absolute left-0 flex items-center h-full">
                <img src="/images/role_chii.jpg" alt="bg_hachiware" class="w-auto h-screen object-contain mt-12"/>
                <div class="absolute inset-0 flex flex-col items-center justify-center">
                    <img src="/images/chi.jpg" alt="role_chii" class="w-36 h-36 object-contain rounded-full"/>
                <div class="text-left p-4 w-full max-w-xs">
                    <p className="text-lg font-semibold mb-2 inline">誕生日：</p>
                    <p class="text-lg mb-2  inline">2020年 5月 1日</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">紹介：</p>
                    <p class="text-lg mb-2 inline">青・白の毛のハチワレ模様の猫がモチーフとなっている。</p><br/>
                   
                    <p className="text-lg font-semibold mb-2 inline">武器：</p>
                    <p class="text-lg mb-2  inline">水色のさすまた</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">性格：</p>
                    <p class="text-lg mb-2  inline">社交的で楽天家</p><br/>
                    
                    <p className="text-lg font-semibold mb-2 inline">能力：</p>
                    <p class="text-lg mb-2 inline">草むしり検定５級</p><br/><br/>
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