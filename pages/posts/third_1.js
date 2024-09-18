import React from "react";
import Link from 'next/link';

const ThirdOne =()=>{
    return(
        <div className="relative flex flex-col w-full h-screen">
        <div className="absolute left-0 flex items-center h-full w-auto">
            <img src="/images/role_shisa.jpg" alt="role_shisa" className="w-auto h-screen object-contain mt-12"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center w-auto">
                <img src="/images/shisa.jpg" alt="shisa" className="w-1/2 h-1/5 object-cover rounded-full mt-12"/>
                <div className="text-left p-6 w-full max-w-xs">
                <p className='text-lg font-semibold inline'>名前：</p>
                        <p className="text-lg  inline">シーサー</p><br/>
                        <p className="text-lg font-semibold mb-2 inline">誕生日：</p>
                        <p className="text-lg inline">2021年 8月 24日</p><br/>
    
                        <p className="text-lg font-semibold mb-2 inline">紹介：</p>
                        <p className="text-lg inline">沖縄県で伝説の獣像「シーサー」をモデルにして。</p><br/>
                        
                        <p className="text-lg font-semibold mb-2 inline">性格：</p>
                        <p className="text-lg mb-2  inline">勤勉で努力を惜しまない、優しい</p><br/>          
                     
                </div>
            </div>
        </div>
            <div className="absolute mt-4 bottom-2 right-4">
                <Link href="/posts/third">← Back to last page</Link>
            </div>
        </div>
    )
}

export default ThirdOne;