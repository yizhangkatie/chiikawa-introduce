import React from "react";
import Link from 'next/link';

const ThirdTwo =()=>{
    return(
    <div className='relative m-auto w-full min-h-screen flex items-center'>
        <div className="relative grid grid-cols-1 md:grid-cols-2 gap-2 w-full min-h-screen bg-cover">
            <div className="relative flex items-center justify-center h-full ">

            <img src="/images/role_momonga.jpg" alt="role_momonga" className="w-auto h-screen object-contain"/>
            <div className="absolute inset-0 flex flex-col items-center justify-center mt-16">
                <img src="/images/momonga.jpg" alt="momonga" className="w-36 h-36 object-cover rounded-full"/>
                <div className="text-base md:text-lg text-left p-6 w-4/5 md:w-2/5 max-w-xs">
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
        <div className='relative grid grid-cols-1 md:grid-cols-2 w-full h-screen '>
            <div className='absolute top-16 left-0 w-1/2 md:w-1/3 h-1/3 md:h-1/2 mt-12 hover:animate-strech'> 
                <div className="relative w-full h-full" >               
                <img 
                src="/images/third/chocolate.png"
                alt="" 
                className="absolute bottom-0 w-full h-auto mt-2 object-contain bg-cover"/>
                
            
                <img src="/images/third/chocolate2.jpg" 
                alt="" 
                className="absolute top-0 right-0 w-full h-4/5 transition-opacity duration-400 object-contain "></img>
                </div>
            </div>

            <div className='absolute right-0 bottom-6 w-4/5 md:w-2/3 h-full '>
                <div className="relative w-full h-full" >
                <img 
                src="/images/third/scream.jpg"
                alt="" 
                className="absolute bottom-0 right-0 w-3/5 h-auto mt-2 object-contain"/>
                
            
                <img src="/images/third/scream2.jpg" 
                alt="" 
                className="absolute bottom-1 md:bottom-2 right-0 w-4/5 h-auto opacity-0 hover:opacity-100 transition-opacity duration-400 object-contain hover:animate-shake"></img>
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

export default ThirdTwo;