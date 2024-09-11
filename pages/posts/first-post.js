import Link from 'next/link';
import Head from 'next/head';
import styles from '/components/layout.module.css';

const FirstPost = () => {  
  return (
    <>
    <Head>
      <title>主要キャラクターの紹介</title>
    </Head>
    <main className="flex flex-col items-center justify-center pt-20 px-6">
      <h2 className="text-3xl font-bold mb-6 mt-8">
        <div className=" text-gray-700">
          <p>主要キャラクター資料</p>
        </div>
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <a href="/posts/second_1" className={styles.card}>
          <div className={styles.cardContent}>
            <img src="/images/hachiware.jpg" alt="Chiikawa" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">ハチワレ</h2>
                <p className="text-lg">ちいかわのともだち。明るくてポジティブ。
                どうくつで生活している。</p>
            </div>  
          </div>
        </a>

        <a href="/posts/second_2" className={styles.card}>
          <div className={styles.cardContent}>
            <img src="/images/chi.jpg" alt="Chiikawa" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">ちいかわ</h2>
                <p className="text-lg">ちょっぴり泣き虫だけど優しい性格。
                草むしりや討伐などをして生活している。</p>
            </div>  
          </div>
        </a>

        <a href="/posts/second_3"className={styles.card}>                    
          <div className={styles.cardContent}>
            <img src="/images/usagi.jpg" alt="Chiikawa" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">うさぎ</h2>
                <p className="text-lg">ちいかわのともだち。
                「ウラ」「ヤハ」など大声でよく叫ぶ。</p>
            </div>
          </div>
        </a>
      </div>
    </main>
  </>
);}

export default FirstPost;