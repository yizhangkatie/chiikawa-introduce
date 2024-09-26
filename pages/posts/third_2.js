import React from "react";
import Link from 'next/link';

const ThirdTwo =()=>{
    return(
    <div className='m-auto w-full text-center pt-12 lg:pt-16'>
        <div className="relative flex w-full h-full lg:h-content bg-cover flex-col lg:flex-row">
            <div className="relative flex items-center h-full">
                <img src="/images/role_momonga.jpg" alt="role_momonga" className="w-full h-full object-contain"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center ">
                    <img src="/images/momonga.png" alt="momonga" className="w-36 h-36 object-cover rounded-full"/>

                <div className="text-left p-6 w-full max-w-xs">
                    <p className='font-semibold inline'>名前：</p>
                    <p className="inline">モモンガ</p><br/>
                    <p className="font-semibold mb-2 inline">誕生日：</p>
                    <p className="inline">2020年 7月 22日</p><br/>
    
                    <p className="font-semibold mb-2 inline">紹介：</p>
                    <p className="inline">ふわふわで可愛らしい風貌の白いモモンガ。</p><br/>
                        
                    <p className="font-semibold mb-2 inline">性格：</p>
                    <p className="mb-2  inline">生活態度が享楽的で労働意欲が低い</p><br/>
                </div>

                </div>
            </div>

            <div className="relative flex lg:flex-1 justify-center items-center h-content">
                <div className="absolute top-0 left-4 lg:left-12 w-56 h-1/2 lg:w-80 lg:h-96 lg:mt-12">
                    <div className="relative w-full h-full hover:animate-strech">
                        <img src="/images/third/chocolate.png" 
                        alt="chocolate" 
                        className="absolute bottom-0 left-4 w-48 lg:w-64 lg:h-56"></img>

                        <img src="/images/third/chocolate2.jpg" 
                        alt="chocolate2" 
                        className="absolute top-0 right-0 pb-10 w-2/3 h-full lg:w-56 opacity-0 transition-opacity duration-400 object-contain hover:opacity-100"></img>
                    </div>
                </div>
                <div className='absolute right-0 bottom-6 w-4/5 h-2/5 md:w-3/5 md:h-5/6 overflow-hidden'>
                    <div className="relative w-full h-full" >
                    <img 
                    src="/images/third/scream.png"
                    alt="" 
                    className="absolute bottom-0 right-0 w-4/5 h-5/6 "/>

                    <img src="/images/third/scream2.png" 
                    alt="" 
                    className="absolute top-0 right-0 w-4/5 h-4/5 mt-4 rounded-lg opacity-0 hover:opacity-100 transition-opacity duration-400 hover:animate-shake"></img>
                    </div>
                </div>  

            </div>

        <div className="absolute bottom-2 left-0 right-0 lg:left-auto lg:right-4">
            <Link href="/posts/third">← Back to last page</Link>
        </div>

        </div>
    </div> 
    )
}

export default ThirdTwo;