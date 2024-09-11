import "../styles/global.css";
import Head from 'next/head';
import Link from 'next/link';

export default function App({ Component, pageProps }) {
    return (
    <>
      <Head>
        <link rel="icon" href="/images/icon.png" />
      </Head>
            {/* 添加导航菜单 */}
            <nav className="bg-pink-300 text-white w-full h-16 fixed top-0 left-0 z-50 flex items-center justify-center ">
        <span className="text-2xl font-bold">chiikawa</span>
        <ul className="flex  space-x-12 ml-auto">
          <li>
            <Link href="/" className="text-lg font-semibold">home</Link>
          </li>
          <li>
            <Link href="/posts/author" className="text-lg font-semibold">author</Link>
          </li>
          <li>
            <Link href="/posts/first-post" className="text-lg font-semibold">main caracter</Link>
          </li>
          <li>
            <Link href="/posts/third" className="text-lg font-semibold">sub caracter</Link>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
    
    )
  }