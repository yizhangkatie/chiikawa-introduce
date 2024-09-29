import React from "react";
import InfoWindow from "../../components/info_window";
import Link from "next/link";
 const ThirdThree=()=>{
    const images = [
        '/images/third/huruhon/1.png',
        '/images/third/huruhon/2.png',
        '/images/third/huruhon/3.png',
        '/images/third/huruhon/4.png',
        '/images/third/huruhon/5.png',
        '/images/third/huruhon/6.png',
        '/images/third/huruhon/7.png',
      ];
    return (
        <div className='m-auto w-full text-center pt-12 lg:pt-16'>
        <div className="relative flex w-full h-full lg:h-content bg-cover flex-col lg:flex-row">
            <div className="relative flex items-center h-full">
                <img src="/images/role_huruhon.jpg" alt="bg_huruhon" className="w-full h-full object-contain"/>
                <div className="absolute inset-0 flex flex-col items-center justify-center ">
                    <img src="/images/huruhon.jpg" alt="role_huruhon" className="w-36 h-36 object-contain rounded-full"/>
                    
                <div className="text-left p-6 w-full max-w-xs">
                    <p className="font-semibold mb-2 inline">名前：</p>
                    <p className="mb-2  inline">古本屋</p><br/>
                    <p className="font-semibold mb-2 inline">誕生日：</p>
                    <p className="mb-2  inline">2020年 8月 29日</p><br/>
                    
                    <p className="font-semibold mb-2 inline">紹介：</p>
                    <p className="mb-2 inline">元々は顔が描かれていないモブキャラの一人だった。</p><br/>
                    
                    <p className="font-semibold mb-2 inline">性格：</p>
                    <p className="mb-2  inline">親切でお人好しで、面倒見のいい</p><br/>
                </div>
                </div>
            </div>
            <div className="flex flex-1 justify-center items-center w-full h-content pt-8 pb-8 lg:p-12">
                    <InfoWindow 
                    images={images} 
                    bg="/images/role_huruhon.jpg" 
                    text={(
                        <>
                          <span style={{ paddingLeft: '2em' }}>古本屋を営んでいることからも覗えるように読書や本が好きで、本に関係することでは積極的な様子を見せる。
                            討伐の仕事もしているらしい、一人で討伐に行っているとおぼしき描写がある。<br/></span>
                          <span style={{ paddingLeft: '2em' }}>また、<a href="./third_2">モモンガ</a> が一本ツノちゃんの慟哭にちょっかいをかけようとした時にはモモンガを食事に誘う形で止めており、他者に対する気遣いや心配りができる気質も持っている。</span>
                        </>
                      )}/>
            </div>

            <div className="absolute bottom-0 left-0 right-0 lg:left-auto lg:right-4">
            <Link href="/posts/third">← Back to last page</Link>
            </div>
        </div>
        

        </div>
    );
  };

  export default ThirdThree;