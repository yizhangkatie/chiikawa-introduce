
import styles from '/components/layout.module.css';
import { useState,useEffect } from 'react';

const FirstPost = () => {  
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
    {/* <Head>
      <title>主要キャラクターの紹介</title>
    </Head> */}

    <main className="flex flex-col h-full items-center justify-center pt-10 px-6 mt-12">

      <h2 className="text-3xl font-bold mb-6 mt-8">
        <div className=" text-gray-700">
          <p>主要キャラクター資料</p>
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
            <img src="/images/chi.jpg" alt="Chii" className={styles.cardImage} />
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
      <div className='relative bottom-0 w-screen h-36 '>
      <div className='relative w-36 h-36 '>                  
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

FirstPost.title = '主要キャラクターの紹介'

export default FirstPost;