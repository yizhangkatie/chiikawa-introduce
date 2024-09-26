import { useState } from 'react';
import ImageCarousel from './imagecarousel';

export default function InfoWindow({ images, bg , text}) {
  const [isDetailView, setIsDetailView] = useState(true);


  const handleToggleView = (view) => {
    setIsDetailView(view === 'detail');
  };

  return (
    <div
  className="w-full h-full md:w-4/5 flex flex-col items-center justify-center bg-cover bg-center rounded-lg shadow-lg p-6"
  style={{ backgroundImage: `url(${bg})` }}
>

      <div className="flex w-4/5 space-x-4 mb-4">
        <button
          onClick={() => handleToggleView('detail')}
          className={`w-1/2 rounded-lg ${
          isDetailView ? 'bg-white text-black' : 'bg-gray-200 text-black'
          }`}>
        
          詳細紹介
        </button>
        <button
          onClick={() => handleToggleView('image')}
          className={`w-1/2 rounded-lg ${
            !isDetailView ? 'bg-white text-black' : 'bg-gray-200 text-black'
          }`}
        >
          姿を見る
        </button>
      </div>


      <div
        className={`relative w-4/5 h-72 md:h-full flex items-center justify-center object-contain bg-white rounded-b-lg shadow-lg border-t-2`}
      >
        {isDetailView ? (
          <div className="absolute inset-0 flex flex-col p-4 text-lg text-gray-700 text-left mt-6">
            <p>
              {text}
            </p>
          </div>
        ) : (
          <div className="absolute inset-0 w-full h-full flex items-center justify-center p-6">
            <ImageCarousel images={images} />
          </div>
        )}
      </div>
    </div>
  );
}