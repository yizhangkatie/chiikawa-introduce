import "../styles/global.css";
import Head from 'next/head';
import Link from 'next/link';
import { useRouter } from 'next/router';

export default function App({ Component, pageProps }) {
    const router = useRouter();

    const handleNavigation = (href) => {
      router.push(href);
  };
    return (
    <>
      <Head>
        <link rel="icon" href="/images/icon.png" />
      </Head>
            {/* 添加导航菜单 */}
        <nav className="bg-pink-300 text-white w-full h-16 fixed top-0 left-0 z-50 px-6 flex items-center justify-center ">
        <span className="text-2xl font-bold">chiikawa</span>
        <ul className="flex  space-x-12 ml-auto">
          <li>
            <a onClick={() => handleNavigation('/')} className="text-lg font-semibold cursor-pointer">
            Home
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigation('/posts/author')} className="text-lg font-semibold cursor-pointer">
            Author
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigation('/posts/first-post')} className="text-lg font-semibold cursor-pointer">
            Main Character
            </a>
          </li>
          <li>
            <a onClick={() => handleNavigation('/posts/third')} className="text-lg font-semibold cursor-pointer">
            Sub Character
            </a>
          </li>
        </ul>
      </nav>
      <Component {...pageProps} />
    </>
    
    )
  }