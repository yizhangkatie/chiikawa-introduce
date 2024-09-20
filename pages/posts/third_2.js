import React from "react";
import Link from 'next/link';

const ThirdTwo =()=>{
    return(
    <div className=' m-auto w-full text-center'>
    <div className="relative flex flex-row w-full h-screen bg-cover">

        <div className="flex flex-col items-center">
        <div className="absolute left-0 flex items-center h-full">
            <img src="/images/role_momonga.jpg" alt="role_momonga" className="w-auto h-screen object-contain mt-12"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center ">
                <img src="/images/momonga.jpg" alt="momonga" className="w-36 h-36 object-cover rounded-full"/>
                <div className="text-left p-6 w-full max-w-xs">
                <p className='text-lg font-semibold inline'>名前：</p>
                        <p className="text-lg  inline">モモンガ</p><br/>
                        <p className="text-lg font-semibold mb-2 inline">誕生日：</p>
                        <p className="text-lg inline">2020年 7月 22日</p><br/>
    
                        <p className="text-lg font-semibold mb-2 inline">紹介：</p>
                        <p className="text-lg inline">ふわふわで可愛らしい風貌の白いモモンガ。</p><br/>
                        
                        <p className="text-lg font-semibold mb-2 inline">性格：</p>
                        <p className="text-lg mb-2  inline">生活態度が享楽的で労働意欲が低い</p><br/>          
                     
                </div>
            </div>
        </div>
            <div className="absolute mt-4 bottom-2 right-4">
                <Link href="/posts/third">← Back to last page</Link>
            </div>
        </div>
        </div>
        </div>
    )
}

export default ThirdTwo;