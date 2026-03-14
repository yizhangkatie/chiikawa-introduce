import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 pt-16">
      <div className="relative bg-gray-100 p-4 md:p-6 rounded shadow-lg w-4/5 max-w-md h-auto">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-gray-600 hover:text-gray-800 text-xl"
        >
          &times;
        </button>
        <div className="max-w-2xl mx-auto my-16 p-4 md:p-6 border-t border-pink-100 text-left">
          <h2 className="text-lg font-bold text-gray-800 text-center mb-4">
            Project Information
          </h2>

          <li>
            <strong>制作：</strong> 黄芳玲（コウ ホウレイ）
          </li>

          <li>
            <strong>技術スタック：</strong> Next.js, Tailwind CSS, Framer Motion
          </li>

          <li>
            <strong>コード：</strong>
            <a
              href="https://github.com/yizhangkatie"
              className="text-pink-400 hover:underline ml-1 break-all"
            >https://github.com/yizhangkatie
            </a>
          </li>

          <li>
            <strong>設計初衷：</strong>
            主にレスポンシブデザインとNext.jsのルーティングの実践を目的としています。ナガノ先生の作品が大好きで、その魅力を表現するためにこのサイトを制作しました。
          </li>

          {/* <p className="mt-8 text-xs text-gray-400 italic">
            ※ 「鎧たち」のページ制作中に開発者が真っ白に燃え尽きてしまったため、このページのみ未完成です (m(_ _)m)
          </p> */}
        </div>
        {/* <p className="text-black text-lg p-6">
          本サイトは個人の学習・練習目的で制作したものです。 Developed by 黄芳玲
        </p> */}
        
      </div>
    </div>
  );
};

export default Modal;
