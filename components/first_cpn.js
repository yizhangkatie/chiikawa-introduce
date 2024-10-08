import Link from 'next/link';
import styles from '/components/layout.module.css';
import { useState,useEffect } from 'react';

const FirstCpn = () => {  
  const images = [
    '/images/chii_anime1.jpg', 
    '/images/chii_anime2.jpg'  
];

const [imageIndex, setImageIndex] = useState(0);

useEffect(() => {
    const intervalId = setInterval(() => {
        setImageIndex(prevIndex => (prevIndex === 0 ? 1 : 0));
    }, 2000); 

    return () => clearInterval(intervalId); 
}, []);

  return (
    <>
   
    <main className="relative flex flex-col min-h-screen items-center justify-center pt-10 px-6 mt-16 space-y-3 mb-16">

      <h2 className="text-3xl font-bold mb-6 mt-8">
        <div className=" text-gray-700">
          <p>メインキャラ資料</p>
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/posts/second_1" className={styles.card}>
          <div className={styles.cardContent}>
            <img src="/images/hachiware.jpg" alt="hachiware" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">ハチワレ</h2>
                <p className="text-lg">ちいかわのともだち。明るくてポジティブ。
                どうくつで生活している。</p>
            </div>  
          </div>
        </a>

        <a href="/posts/second_2" className={styles.card}>
          <div className={styles.cardContent}>
            <img src="/images/chii.jpg" alt="Chii" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">ちいかわ</h2>
                <p className="text-lg">ちょっぴり泣き虫だけど優しい性格。
                草むしりや討伐などをして生活している。</p>
            </div>  
          </div>
        </a>

        <a href="/posts/second_3"className={styles.card}>                    
          <div className={styles.cardContent}>
            <img src="/images/usagi.jpg" alt="usagi" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">うさぎ</h2>
                <p className="text-lg">ちいかわのともだち。
                「ウラ」「ヤハ」など大声でよく叫ぶ。</p>
            </div>
          </div>
        </a>
      </div>
      <div className='relative bottom-0 w-full h-48 '>
      <div className='relative w-48 h-48 '>                  
            <img 
                src="/images/chii_anime1.jpg"
                alt="chii" 
                className="absolute top-0 left-4 w-full h-full mt-2 object-contain"/>

                <img src="/images/chii_anime2.jpg" 
                alt="chii" 
                className="absolute bottom-0 left-4 w-full h-full opacity-0 hover:opacity-100 transition-opacity duration-400 object-contain"></img>
        </div>
      </div>
    </main>
  </>
)}


export default FirstCpn;