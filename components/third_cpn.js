import styles from '/components/layout.module.css';

const ThirdCpn = () => {  
    return (    
      <main className="relative flex flex-col min-h-screen items-center justify-center pt-10 px-6 mt-16  space-y-4">
      <h2 className="text-3xl font-bold mt-4">
        <div className=" text-gray-700">
          <p>サブキャラ資料</p>
        </div>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6 mb-6 p-6">
        <a href="/posts/third_1" className={styles.card}>
          <div className={styles.cardContent}>
            <img src="/images/shisa.jpg" alt="Chiikawa" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">シーサー</h2>
                <p className="text-lg">ラーメン屋「郎」の助手。
                ラーメンの鎧さんを「お師匠」と呼ぶ。</p>
            </div>  
          </div>
        </a>

        <a href="/posts/third_2" className={styles.card}>
          <div className={styles.cardContent}>
            <img src="/images/momonga.png" alt="Chiikawa" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">モモンガ</h2>
                <p className="text-lg">常にかわいこぶっている。
                色んなことをおねだりする。</p>
            </div>  
          </div>
        </a>

        <a href="/posts/third_3"className={styles.card}>                    
          <div className={styles.cardContent}>
            <img src="/images/huruhon.jpg" alt="Chiikawa" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">古本屋</h2>
                <p className="text-lg">元々は顔が描かれていないモブキャラ。古本屋を経営していて、読書が好き。</p>
            </div>
          </div>
        </a>

        <a href="/posts/third_4"className={styles.card}>                    
          <div className={styles.cardContent}>
            <img src="/images/kurimanjyu.jpg" alt="Chiikawa" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">栗まんじゅう</h2>
                <p className="text-lg">見た目はかわいいけど…!?
                グルメで面倒見がいい。</p>
            </div>
          </div>
        </a>

        <a href="/posts/third_5"className={styles.card}>                    
          <div className={styles.cardContent}>
            <img src="/images/rako.jpg" alt="Chiikawa" className={styles.cardImage} />
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">ラッコ</h2>
                <p className="text-lg">討伐が得意で強い。
                ちいかわ達のあこがれの存在。</p>
            </div>
          </div>
        </a>

        <a href="/posts/third_6"className={styles.card}>                    
          <div className={styles.cardContent}>
            <img src="/images/yoroi.jpg" alt="Chiikawa" className={styles.cardImage}/>
            <div className="flex flex-col items-center">
                <h2 className="text-xl text-black font-semibold mb-2">鎧たち</h2>
                <p className="text-lg">西洋風の鎧を纏ったような姿をしている人型の種族。</p>
            </div>
          </div>
        </a>

    </div>
    
    <div className='relative w-full h-48'>
        <div className='absolute bottom-6 right-4 md:right-16 w-56 h-42 '>            
          <img src="/images/momonga_shake.jpg" alt="Shaking Image" className={styles.shakeImg} /> 
        </div>
    </div>
  </main>
  );}
  
  
  export default ThirdCpn;