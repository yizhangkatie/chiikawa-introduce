import React from 'react';

const Modal = ({ isOpen, onClose, content }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
            <div className="relative bg-white p-6 rounded shadow-lg w-2/3 max-w-md h-48 ">
                <button 
                    onClick={onClose} 
                    className="absolute top-0 right-4 text-gray-600 hover:text-gray-800 text-xl"
                >
                    &times;
                    
                </button>
                <p className='text-black text-lg p-6'>▼  悪意のあるコンテンツの禁止
                当該タイトルを使用して人種や性への差別、性的指向、中傷、犯罪を助長するものは認めておりません。
                </p>
            </div>
        </div>
    );
};

export default Modal;

