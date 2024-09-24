import React from "react";
import Link from 'next/link';
import styles from '/components/layout.module.css';
import ImageCarousel from '/components/imagecarousel';

const ThirdOne =()=>{
    const images = [
        '/images/third/shisa/1.png',
        '/images/third/shisa/2.png',
        '/images/third/shisa/3.png',
        '/images/third/shisa/4.png',
        '/images/third/shisa/5.png',
        '/images/third/shisa/6.png',
      ];
    return(
    <div className='m-auto w-full text-center pt-12 lg:pt-16'>
        <div className="relative flex w-full h-full lg:h-content bg-cover flex-col lg:flex-row">
            <div className="relative flex items-center h-full">
                <img src="/images/role_shisa.jpg" alt="role_shisa" className="w-full h-full object-contain"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center ">
                    <img src="/images/shisa.jpg" alt="shisa" className="w-36 h-36 object-cover rounded-full"/>

                <div className="text-left p-6 w-full max-w-xs">
                    <p className='text-lg font-semibold inline'>名前：</p>
                        <p className="text-lg inline">シーサー</p><br/>
                        <p className="text-lg font-semibold mb-2 inline">誕生日：</p>
                        <p className="text-lg inline">2021年 8月 24日</p><br/>
    
                        <p className="text-lg font-semibold mb-2 inline">紹介：</p>
                        <p className="text-lg inline">沖縄県で伝説の獣像「シーサー」をモデルにして。</p><br/>
                        
                        <p className="text-lg font-semibold mb-2 inline">性格：</p>
                        <p className="text-lg mb-2  inline">勤勉で努力を惜しまない、優しい</p><br/>

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

export default ThirdOne;