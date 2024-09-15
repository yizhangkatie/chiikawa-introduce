import "../styles/global.css";
import Head from 'next/head';
import Link from 'next/link';
import Header from "../components/Head";
import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useState } from "react";
import Image from "next/image";

export default function App({ Component, pageProps }) {
  console.info(Component)
    const router = useRouter();
    const handleNavigation = (href) => {
      router.push(href);};

    const [isScrolling, setIsScrolling] = useState(false);
    const [imageIndex, setImageIndex] = useState(0);
    const [isOnFirstPage, setIsOnFirstPage] = useState(true);
    const scrollToTop = () => {
      let clickCount = 0;
      const switchImage = () => {
        setImageIndex(prev => (prev === 0 ? 1 : 0));
        clickCount += 1;
        if (clickCount < 4) {
          setTimeout(switchImage, 300); // 图片时间间隔
        } else {
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          });
        }
      };
  
      switchImage();
    };
    useEffect(() => {
      const handleScroll = () => {
        const scrollY = window.scrollY;
        if (scrollY > 300) { 
          setIsOnFirstPage(false);
        } else {setIsOnFirstPage(true);}
        if (scrollY > 300) {
          setIsScrolling(true);
        } else {setIsScrolling(false);
        }
      };
    
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
      }, []);

    return (
    <>
      <Header component={Component} />
      {!isOnFirstPage && (
      <div className=" flex flex-col items-center fixed bottom-4 z-50 right-4">
      <span className="writing-mode-vertical-rl mb-1 text-brown font-bold">TOP</span>
      <button
          onClick={scrollToTop}
          className="cursor-pointer focus:outline-none"
        >
          {imageIndex === 0 ? (
            <Image src="/images/mushi2.jpg" alt="返回顶部" width={40} height={40} />
          ) : (
            <Image src="/images/mushi1.jpg" alt="返回顶部" width={42} height={42} />
          )}

        </button>
      </div>
      )}

      {/* 导航 */}
      <nav className="bg-pink-300 text-white w-full h-16 fixed top-0 left-0 z-50 px-6 flex items-center justify-center ">
          <a href="/">
            <img src="/images/top_name.jpg" alt="top name" className="w-28 h-8"></img>
          </a>
          
        <ul className="flex space-x-4 ml-auto">
          <li>
            <div className="w-auto h-16 hover:bg-pink-400 p-4">
            <a onClick={() => handleNavigation('/')} className="text-lg font-semibold cursor-pointer">
            Home
            </a>
            </div>
          </li>
          <li>
            <div className="w-auto h-16 hover:bg-pink-400 p-4">
            <a onClick={() => handleNavigation('/posts/author')} className="text-lg font-semibold cursor-pointer">
            Author
            </a>
            </div>
          </li>
          <li>
            <div className="w-auto h-16 hover:bg-pink-400 p-4">
            <a onClick={() => handleNavigation('/posts/first-post')} className="text-lg font-semibold cursor-pointer">
            Main Character
            </a>
            </div>

          </li>
          <li>
          <div className="w-auto h-16 hover:bg-pink-400 p-4">
            <a onClick={() => handleNavigation('/posts/third')} className="text-lg font-semibold cursor-pointer">
            Sub Character
            </a>            
          </div>

          </li>
        </ul>
      </nav>

      <Component {...pageProps} />
    </>
    
    )
  }
