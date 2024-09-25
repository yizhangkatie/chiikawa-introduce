import React from "react";
import Link from 'next/link';

const ThirdThree = ()=>{
    return(
        <div className='m-auto w-full text-center pt-12 lg:pt-16'>
        <div className="relative flex w-full h-full lg:h-content bg-cover flex-col lg:flex-row">
            <div className="relative flex items-center w-auto h-full z-20">
                <img src="/images/role_kurimanjyu.jpg" alt="role_kuri" className="w-full h-full object-contain"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center ">
                    <img src="/images/kurimanjyu.jpg" alt="kuri" className="w-36 h-36 object-cover rounded-full"/>

                <div className="text-left p-6 w-full max-w-xs">
                        <p className='font-semibold inline'>名前：</p>
                        <p className="inline">栗まんじゅう</p><br/>
                        <p className="font-semibold mb-2 inline">誕生日：</p>
                        <p className="inline">2020年 1月 29日</p><br/>
    
                        <p className="font-semibold mb-2 inline">紹介：</p>
                        <p className="inline">和菓子の栗まんじゅうに動物のラーテルを混ぜたようなキャラクター。</p><br/>
                        
                        <p className="font-semibold mb-2 inline">性格：</p>
                        <p className="mb-2  inline">おっさん臭くて優しい</p><br/>

                </div>
                </div>
            </div>
            <div className="relative flex flex-1 justify-center items-center overflow-hidden">
                <img src="/images/third/grass.jpg" className="w-full h-full object-fill" alt="背景图片"></img>
            <div className="absolute right-0 top-1/2 flex items-center justify-center">
                <img src="/images/third/kuri.png" className="z-10 w-16 lg:w-36 h-16 lg:h-36 animate-walk" alt="覆盖图片"></img>
            </div>
            </div>


            <div className="absolute bottom-0 left-0 right-0 lg:left-auto lg:right-4">
            <Link href="/posts/third">← Back to last page</Link>
            </div>
        </div>
        

    </div> 
    )
}

export default ThirdThree;