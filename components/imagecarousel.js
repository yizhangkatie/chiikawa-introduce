import React,{ useState,  useEffect  } from "react";
import {motion} from "framer-motion"


function ImageCarousel({ images }){
    const [currentIndex, setCurrentIndex] = useState(0);

    const goToPrevious = () => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
    };
  
    const goToNext = () => {
      setCurrentIndex((prevIndex) => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    };
    useEffect(() => {
      const intervalId = setInterval(goToNext, 4000); // 每3000毫秒（3秒）滑动一次
  
      return () => clearInterval(intervalId); 
    }, [currentIndex]);

    return (
      <div className="relative w-full h-full items-center justify-center object-contain overflow-hidden mt-10">
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          key={images[currentIndex]}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
        >
          <img src={images[currentIndex]} alt="carousel" className="w-full h-full object-contain rounded-lg" />
        </motion.div>
        <button
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &#9664;
        </button>
        <button
          onClick={goToNext}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md"
        >
          &#9654;
        </button>
      </div>
    );
}

export default ImageCarousel;

