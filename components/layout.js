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


      {/* 添加导航菜单 */}
      <nav className="bg-pink-300 text-white w-full h-16 fixed top-0 left-0 z-50 flex items-center justify-center ">
        <span className="text-2xl font-bold">{name}</span>
        <ul className="flex  space-x-12 ml-auto">
          <li>
            <Link href="/posts/author" className="text-lg font-semibold">author</Link>
          </li>
          <li>
            <Link href="/posts/first-post" className="text-lg font-semibold">main caracter</Link>
          </li>
          <li>
            <Link href="/other_characters" className="text-lg font-semibold">sub caracter</Link>
          </li>
        </ul>
      </nav>

      <header className={styles.header}>

            <div className="flex grid place-items-center w-full h-screen ">
              <img
                src="/images/homepage.jpg"
                alt=""
                className=" w-full max-h-full object-contain"
              />
              <h1 className={utilStyles.heading2Xl}>{name}</h1>
              <div className="flex flex-col justify-center items-center space-y-3 ">
                <h1 className="w-1/2 text-center text-lg font-semibold mt-2" >
                  Chiikawa (ちいかわ), also known as Nanka Chiisakute Kawaii Yatsu (なんか小さくてかわいいやつ,
                  "Something Small and Cute"), is a Japanese manga series by Nagano.
                </h1>
                <p className="flex items-center justify-center text-center text-medium p-6 text-current no-underline border border-gray-300 rounded-lg transition-all duration-150 ease-in-out w-72 h-20 hover:text-pink-300 hover:border-pink-300 hover:scale-105">
                  <Link href="/posts/author">Learn more!</Link>
                </p>
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