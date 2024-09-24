import Head from 'next/head';
import React from 'react';
import Modal from '/components/modal';
import { useState } from 'react';

const Footer =() =>{
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');

    const openModal = (content) => {
        setModalContent(content);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalContent('');
    };

    return (
        <div className="relative w-full min-h-screen bg-cover overflow-hidden">
        <div className='absolute bottom-0 w-full mb-24 md:mb-32 '>
            <img src="/images/footer_all3.jpg" alt="footer" className="w-full h-64 object-contain animate-moveUpDown" />
        </div>

            <div className="absolute bottom-0 bg-gray-300 bg-cover text-white w-full h-36 left-0 flex items-center justify-center border-t border-gray-400 ">
                <img src="/images/name.jpg" alt="name" className='absolute justify-center top-4 w-28 h-8 items-center '></img>
                <div className='flex justify-center items-center w-full h-36 mt-6 p-12'>
                    <p className="justify-center text-black text-xs">プライバシー</p>
                    <p className="ml-3 mr-3 text-black">|</p>
                    <p className="text-black text-xs">公式アカウント/サイト</p>
                    <a href='https://x.com/anime_chiikawa?s=21' className='justify-center items-center '>
                        <img src="/images/x_symbol.jpg" alt="x symbol" className='ml-1 w-4 h-4 items-center justify-center rounded-full'></img>
                    </a>
            
                    <a href='https://www.anime-chiikawa.jp/' className="justify-center items-center">
                        <img src="/images/site.jpg" alt="site symbol" className='ml-2 w-4 h-4 items-center justify-center rounded-full'></img>     
                    </a>
                    <p className="ml-3 mr-3 text-black">|</p>

                    <div className="p-4">
                        <p 
                        className="text-black text-xs cursor-pointer" 
                        onClick={openModal}>            
                        動画コンテンツへの利用
                        </p>
                    <Modal 
                    isOpen={isModalOpen} 
                    onClose={closeModal} 
                    content={modalContent} />
                
                    </div>

                </div>
            </div>

        </div>

    )
}

export default Footer