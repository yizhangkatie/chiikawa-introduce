import React from "react";
import Link from 'next/link';

const ThirdThree = ()=>{
    return(
        <div className="relative flex flex-col w-full h-screen">
        <div className="absolute left-0 flex items-center h-full w-auto">
            <img src="/images/role_kurimanjyu.jpg" alt="role_kurimanjyu" className="w-auto h-screen object-contain mt-12"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center w-auto">
                <img src="/images/kurimanjyu.jpg" alt="kurimanjyu" className="w-1/2 h-1/5 object-cover rounded-full mt-12"/>
                <div className="text-left p-6 w-full max-w-xs">
                <p className='text-lg font-semibold inline'>名前：</p>
                        <p className="text-lg  inline">栗まんじゅう</p><br/>
                        <p className="text-lg font-semibold mb-2 inline">誕生日：</p>
                        <p className="text-lg inline">2020年 5月 1日</p><br/>
    
                        <p className="text-lg font-semibold mb-2 inline">紹介：</p>
                        <p className="text-lg inline">青・白の毛のハチワレ模様の猫がモチーフとなっている。</p><br/>
                        
                        <p className="text-lg font-semibold mb-2 inline">性格：</p>
                        <p className="text-lg mb-2  inline">社交的で楽天家</p><br/>          
                     
                </div>
            </div>
        </div>
            <div className="absolute mt-4 bottom-2 right-4">
                <Link href="/posts/third">← Back to last page</Link>
            </div>
        </div>
    )
}

export default ThirdThree;