import React from "react";
import Link from 'next/link';

const ThirdThree = ()=>{
    return(
    <div className='relative m-auto w-full min-h-screen flex items-center'>

        <div className="absolute inset-0 w-screen h-full opacity-0 md:opacity-100">
            <img src="/images/third/grass.jpg" className="w-screen h-full object-fill" alt="背景图片"></img>
            <div className="absolute right-0 top-1/2 flex items-center justify-center">
                <img src="/images/third/kuri.png" className="z-10 w-48 h-48 animate-walk" alt="覆盖图片"></img>
            </div>
        </div>

        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 w-full min-h-screen bg-cover">
            <div className="relative flex items-center justify-center h-full ">

            <img src="/images/role_kurimanjyu.jpg" alt="role_kuri" className="w-auto h-screen object-contain mt-12"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center mt-16">
                    <img src="/images/kurimanjyu.jpg" alt="kuri" className="w-36 h-36 object-cover rounded-full"/>
                    <div className="text-base md:text-lg text-left p-4 w-4/5 md:w-2/5 max-w-xs ">
                        <p className='text-lg font-semibold inline'>名前：</p>
                        <p className="text-lg  inline">栗まんじゅう</p><br/>
                        <p className="text-lg font-semibold mb-2 inline">誕生日：</p>
                        <p className="text-lg inline">2020年 1月 29日</p><br/>
    
                        <p className="text-lg font-semibold mb-2 inline">紹介：</p>
                        <p className="text-lg inline">和菓子の栗まんじゅうに動物のラーテルを混ぜたようなキャラクター。</p><br/>
                        
                        <p className="text-lg font-semibold mb-2 inline">性格：</p>
                        <p className="text-lg mb-2  inline">おっさん臭くて優しい</p><br/>          

                    
                    </div>
                </div>

            </div>
            <div className="absolute bottom-2 right-16 md:right-6">
                <Link href="/posts/third">← Back to last page</Link>
            </div>

            
            <div className=" flex items-center justify-center md:opacity-0">
                <img src="/images/third/grass.jpg" className="w-auto h-full object-contain"></img>
                <div className="absolute right-0 bottom-20 flex items-center justify-center">
                <img src="/images/third/kuri.png" className="z-10 w-16 h-16 animate-walk" alt="覆盖图片"></img>
            </div>
        </div>
        </div>   
    </div>
    )
}

export default ThirdThree;