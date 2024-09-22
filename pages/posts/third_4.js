import React from "react";
import Link from 'next/link';

const ThirdFourth =()=>{
    return(
    <div className='relative m-auto w-full min-h-screen flex items-center'>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 w-full min-h-screen bg-cover">
            <div className="relative flex items-center justify-center h-full ">
            <img src="/images/role_rako.jpg" alt="role_rako" className="w-auto h-screen object-contain mt-12"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center mt-16">
                    <img src="/images/rako.jpg" alt="rako" className="w-36 h-36 object-cover rounded-full"/>
                    <div className="text-base md:text-lg text-left p-4 w-4/5 md:w-2/5 max-w-xs ">
                        <p className=' font-semibold inline'>名前：</p>
                        <p className="inline">ラッコ</p><br/>
                        <p className="font-semibold mb-2 inline">誕生日：</p>
                        <p className="inline">2021年 1月 24日</p><br/>
    
                        <p className="font-semibold mb-2 inline">紹介：</p>
                        <p className="inline">孤高の強者的な雰囲気を漂わせており、基本的には単独で行動している。</p><br/>
                        
                        <p className="font-semibold mb-2 inline">性格：</p>
                        <p className="mb-2  inline">非常に頼り甲斐があり</p><br/>           

                    
                    </div>
                </div>
            </div>
        
            <div className="absolute bottom-2 right-16 md:right-6">
                <Link href="/posts/third">← Back to last page</Link>
            </div>
        </div>   
    </div>
    )
}
export default ThirdFourth;