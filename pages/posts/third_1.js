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
        <div className='relative m-auto w-full min-h-screen flex items-center'>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 w-full min-h-screen bg-cover">

            <div className="relative flex items-center justify-center  h-full ">

            <img src="/images/role_shisa.jpg" alt="role_shisa" className="w-auto h-screen object-contain "/>
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-16">
                <img src="/images/shisa.jpg" alt="shisa" className="w-36 h-36 object-cover rounded-full"/>
                <div className="text-base md:text-lg text-left p-6 w-4/5 md:w-2/5 max-w-xs">
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
            <div className="flex flex-1 justify-center lg:justify-start items-center p-6 md:p-0">
                <div className="w-[700px] h-[500px] flex object-contain items-center justify-center">
                <ImageCarousel images={images}/>
                </div>
            </div>
        </div>
            <div className="absolute bottom-2 md:bottom-4 right-12 md:right-6">
                <Link href="/posts/third">← Back to last page</Link>
            </div>
        </div>   
    )
}

export default ThirdOne;