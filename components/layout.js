import Head from 'next/head';
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

            <div className="flex grid place-items-center w-full min-h-screen ">
              <img
                src="/images/homepage.jpg"
                alt=""
                className="w-full min-h-sceen object-contain overflow-hidden"
              />
                    
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <div className="flex flex-col justify-center items-center space-y-3 ">
                <h1 className="w-1/2 text-center text-lg font-semibold mt-2 mb-6" >
                  Chiikawa (ちいかわ), also known as Nanka Chiisakute Kawaii Yatsu (なんか小さくてかわいいやつ,
                  "Something Small and Cute"), is a Japanese manga series by Nagano.
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