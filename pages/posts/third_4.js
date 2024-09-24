import React from "react";
import Link from 'next/link';
import ImageCarousel from '/components/imagecarousel';

const ThirdFourth =()=>{
    const images = [
        '/images/third/rako/1.jpg',
        '/images/third/rako/2.jpg',
        '/images/third/rako/3.jpg',
        '/images/third/rako/4.jpg',
      ];
    return(
        <div className='m-auto w-full text-center pt-12 lg:pt-16'>
        <div className="relative flex w-full h-full lg:h-content bg-cover flex-col lg:flex-row">
            <div className="relative flex items-center h-full">
                <img src="/images/role_rako.jpg" alt="role_rako" className="w-full h-full object-contain"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center ">
                    <img src="/images/rako.jpg" alt="rako" className="w-36 h-36 object-cover rounded-full"/>

                <div className="text-left p-6 w-full max-w-xs">
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
            <div className="flex flex-1 justify-center items-center h-content">
            <div className="w-[600px] h-[500px] flex object-contain items-center justify-center pb-12">
                <ImageCarousel images={images}/>
            </div>
            </div>

            <div className="absolute bottom-2 left-0 right-0 lg:left-auto lg:right-4">
            <Link href="/posts/third">← Back to last page</Link>
            </div>
        </div>
        

    </div> 
    )
}
export default ThirdFourth;