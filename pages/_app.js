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
          setIsScrolling(true);
        } else {
          setIsOnFirstPage(true);
          setIsScrolling(false);
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
      <nav className="bg-pink-300 text-white w-full h-12 md:h-16 fixed top-0 left-0 z-50 px-4 md:px-8 flex items-center justify-center overflow-visible">
          <a href="/">
            <img src="/images/top_name.jpg" alt="top name" className="w-14 h-full md:w-1/4 md:h-full object-contain"></img>
          </a>
          
        <ul className="flex space-x-4 md:space-x-12 ml-auto h-12 md:h-16 ">
          <li>
            <div className="w-auto h-full flex items-center justify-center hover:bg-pink-400 md:p-2">
            <a onClick={() => handleNavigation('/posts/author')} className="w-max text-xs md:text-lg font-semibold cursor-pointer">
            作 者
            </a>
            </div>
          </li>
          <li>
            <div className="w-auto h-full flex items-center hover:bg-pink-400 md:p-2">
            <a onClick={() => handleNavigation('/posts/first')} className="w-max text-xs md:text-lg font-semibold cursor-pointer">
            メインキャラ
            </a>
            </div>

          </li>
          <li>
          <div className="w-auto h-full flex items-center hover:bg-pink-400 md:p-2">
            <a onClick={() => handleNavigation('/posts/third')} className="w-max text-xs md:text-lg font-semibold cursor-pointer">
            サブキャラ
            </a>            
          </div>

          </li>
        </ul>
      </nav>

      <Component {...pageProps} />
    </>
    
    )
  }
