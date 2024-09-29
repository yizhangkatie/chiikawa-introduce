import React from "react";
import Link from 'next/link';
import InfoWindow from "../../components/info_window";
const ThirdFour = ()=>{
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
            <div className="relative flex flex-1 justify-center items-center overflow-hidden"
            style={{ 
                backgroundImage: `url("/images/third/grass.jpg")` ,
                backgroundSize: 'contain',
                }}>
            
            <div className="flex flex-1 justify-center items-center w-full h-content pt-8 pb-8 z-10">
                    <InfoWindow 
                    images={[]} 
                    bg="/images/role_kurimanjyu.jpg" 
                    text={(
                        <>
                          <span style={{ paddingLeft: '2em' }}>見た目は可愛らしいがおっさん臭い行動をとり、お酒とツマミを嗜んでいる姿をちいかわたちにたびたび目撃される。
                            お酒の資格を持っているから<a href="./third_1">シーサー</a>に勉強を教えるなど面倒見が良い。
                            なお、甘酒は資格無しでも飲める。言葉は発さず、飲んだ時「ハァーッ!」と言うのみ。<br/></span>
                          <span style={{ paddingLeft: '2em' }}>基本的な仕事が『リモートワーク』であり、草むしりには時々参加するものの討伐という危険な仕事には手を染めず悠々自適な生活を送る。
                            ちいかわ世界において<a href="./third_5">ラッコ</a>先生とは別ベクトルで強者であると言える。</span>
                        </>
                      )}/>
            </div>
            <div className="absolute right-0 top-1/2 flex items-center justify-center">
                <img src="/images/third/kuri.png" className="z-10 w-16 lg:w-36 h-16 lg:h-36 animate-walk" alt="kuri"></img>
            </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 lg:left-auto lg:right-4 z-10">
            <Link href="/posts/third">← Back to last page</Link>
            </div>
        </div>
        

    </div> 
    )
}

export default ThirdFour;