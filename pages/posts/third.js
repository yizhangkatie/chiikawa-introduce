import Head from 'next/head';
import styles from '/components/layout.module.css';

const ThirdPost = () => {  
    return (
      <>
      {/* <Head>
        <title>サブキャラクターの紹介</title>
      </Head> */}
      <main className="flex flex-col items-center justify-center pt-20 px-6 mt-4">
        <h2 className="text-3xl font-bold ">
          <div className=" text-gray-700">
            <p>サブキャラクター資料</p>
          </div>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          <a href="/posts/second_1" className={styles.card}>
            <div className={styles.cardContent}>
              <img src="/images/shisa.jpg" alt="Chiikawa" className={styles.cardImage} />
              <div className="flex flex-col items-center">
                  <h2 className="text-xl text-black font-semibold mb-2">シーサー</h2>
                  <p className="text-lg">ラーメン屋「郎」の助手。
                  ラーメンの鎧さんを「お師匠」と呼ぶ。</p>
              </div>  
            </div>
          </a>
  
          <a href="/posts/second_2" className={styles.card}>
            <div className={styles.cardContent}>
              <img src="/images/momonga.jpg" alt="Chiikawa" className={styles.cardImage} />
              <div className="flex flex-col items-center">
                  <h2 className="text-xl text-black font-semibold mb-2">モモンガ</h2>
                  <p className="text-lg">常にかわいこぶっている。
                  色んなことをおねだりする。</p>
              </div>  
            </div>
          </a>
  
          <a href="/posts/second_3"className={styles.card}>                    
            <div className={styles.cardContent}>
              <img src="/images/kurimanjyu.jpg" alt="Chiikawa" className={styles.cardImage} />
              <div className="flex flex-col items-center">
                  <h2 className="text-xl text-black font-semibold mb-2">栗まんじゅう</h2>
                  <p className="text-lg">見た目はかわいいけど…!?
                  グルメで面倒見がいい。</p>
              </div>
            </div>
          </a>

          <a href="/posts/second_3"className={styles.card}>                    
            <div className={styles.cardContent}>
              <img src="/images/rako.jpg" alt="Chiikawa" className={styles.cardImage} />
              <div className="flex flex-col items-center">
                  <h2 className="text-xl text-black font-semibold mb-2">ラッコ</h2>
                  <p className="text-lg">討伐が得意で強い。
                  ちいかわ達のあこがれの存在。</p>
              </div>
            </div>
          </a>
        </div>
      </main>
    </>
  );}
  
  ThirdPost.title = 'サブキャラクターの紹介'
  
  export default ThirdPost;