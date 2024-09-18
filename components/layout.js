import Image from 'next/image';
import styles from './layout.module.css';
import utilStyles from '../styles/utils.module.css';
import Link from 'next/link';


const name = 'chiikawa';
export const siteTitle = 'chiikawa-ちいかわ';


export default function Layout({ children, home }) {
  return (
    <div className={styles.container}>
      
      <header className={styles.header}>

            <div className="flex flex-col place-items-center w-full  min-h-screen">
              <div className='relative w-full min-h-screen items-center justify-center'>
              <img
                src="/images/home_bg.jpg"
                alt=""
                className="absolute top-0 inset-0 w-full h-full object-fill"
              />
              <img
                src="/images/home_cloud.jpg"
                alt="cloud"
                className="absolute top-0 inset-0 w-full h-full object-fill z-10 transition-transform duration-500 ease-in-out transform hover:scale-105"
              />
              </div>      

              <div className="flex flex-col justify-center items-center space-y-3 ">
                <h1 className={utilStyles.heading2Xl}>{name}</h1>
                <h1 className="w-1/2 text-center text-lg font-semibold mt-2 mb-6" >
                【なんか小さくてかわいいやつ】通称「ちいかわ」たちが送る楽しくて、ちょっぴり切ない物語。
                時には辛いことで泣いちゃうけれど「ちいかわ」の周りにはやさしい友達や個性豊かなキャラクターがたくさん！
                </h1>
              </div>
            </div>
            
      </header>
      <main>{children}</main>
      {!home && (
        <div className={styles.backToHome}>
          <Link href="/">← Back to home</Link>
        </div>
      )}
    </div>
  );
}