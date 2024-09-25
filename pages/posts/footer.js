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


        <div className="relative flex flex-col object-contain w-full h-screen bg-cover overflow-hidden"> 
        
        <div className='absolute bottom-0 w-full flex flex-col justify-center items-center'>
        <img src="/images/footer_name.jpg" className='flex  w-2/3 h-16 object-contain lg:mb-6'></img>
            <img src="/images/footer_all3.jpg" alt="footer" className="flex w-full h-64 object-contain animate-moveUpDown" />
        
            <div className="relative bg-gray-300 bg-cover w-full h-36 left-0 flex items-center justify-center border-t border-gray-400 ">
                <img src="/images/name.jpg" alt="name" className='absolute top-0 justify-center top-4 w-28 h-8 items-center '></img>
                <div className='flex justify-center items-center flex-col lg:flex-row w-full h-auto mt-6 space-x-3 space-y-1 lg:space-x-6'>
                    <p className="justify-center text-black text-xs">プライバシー</p>
                    <div className='flex justify-center items-center '>
                        <p className="text-black text-xs mr-2">公式アカウント/サイト</p>
                        <a href='https://x.com/anime_chiikawa?s=21'>
                            <img src="/images/x_symbol.jpg" alt="x symbol" className='w-4 h-4 rounded-full'></img>
                        </a>
                        <a href='https://www.anime-chiikawa.jp/'>
                            <img src="/images/site.jpg" alt="site symbol" className='ml-2 w-4 h-4 rounded-full'></img>     
                        </a>
                    </div>

                    <div className="flex justify-center items-center">
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
        </div>


    )
}

export default Footer