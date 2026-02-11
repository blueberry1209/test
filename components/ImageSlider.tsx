
import React, { useState, useEffect, useCallback } from 'react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1542744095-291d1f67b221?q=80&w=1920&auto=format&fit=crop',
    text: '전문적이고 체계적인 코딩 교육',
    subtext: '바이브코딩 학교에서 미래를 향한 첫 걸음을 시작하세요.',
  },
  {
    image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1920&auto=format&fit=crop',
    text: '학생들의 프로젝트, 세상에 가치를 더하다',
    subtext: '창의적인 아이디어가 현실이 되는 곳, 학생들의 성장을 지원합니다.',
  },
  {
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1920&auto=format&fit=crop',
    text: '최고의 교육 환경',
    subtext: '학생들이 학습에만 집중할 수 있도록 쾌적하고 안정적인 환경을 제공합니다.',
  },
];

const ImageSlider: React.FC = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };
  
  useEffect(() => {
    const slideInterval = setInterval(nextSlide, 5000);
    return () => clearInterval(slideInterval);
  }, [nextSlide]);

  return (
    <div className="relative w-full h-[60vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <img src={slide.image} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-white text-center p-4">
            <h2 className="text-3xl md:text-5xl font-bold drop-shadow-lg animate-fade-in-down">{slide.text}</h2>
            <p className="mt-4 text-lg md:text-xl max-w-2xl drop-shadow-lg animate-fade-in-up">{slide.subtext}</p>
          </div>
        </div>
      ))}
      
      <button onClick={prevSlide} className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-75 transition z-10">
        &#10094;
      </button>
      <button onClick={nextSlide} className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white bg-opacity-50 p-2 rounded-full text-gray-800 hover:bg-opacity-75 transition z-10">
        &#10095;
      </button>

      <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <button key={index} onClick={() => setCurrent(index)} className={`w-3 h-3 rounded-full transition ${current === index ? 'bg-white' : 'bg-gray-400'}`}></button>
        ))}
      </div>
    </div>
  );
};

export default ImageSlider;
