
import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Crown, ArrowRight, Sparkles } from 'lucide-react';

const ImageCarousel: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiyBrNJ_6EGGM96DakW0Xpht_c67cAsfUd2mGewfrZJ1SInZAfea3S-A4Ozf2zxpwZyTsWxd8KM1qPF12bwYLP-_RFCJJOvEMvKVqgxBmhv5s3dt_p9KHNXwmHDXyAx5-riDYUsVWAnQRo4aDqOOgGSgPGOqW7Duatr0GxXfHxVY6N8KcsnW9rvTnIh/s1024/Urban%20Infrastructure.jpg",
      title: "OFFICE OF",
      subtitle: "hydropower ",
      description: "Comprehensive business services across eight prestigious industries with unmatched expertise and dedication to excellence"
    },
    {
      image: "https://www.fugro.com/_next/image?url=https%3A%2F%2Fd3rwfsce0vn25a.cloudfront.net%2Fimage%2F665520746864%2Fimage_kg3ebg14q93tpdn4e7i90lik1j%2F-Ro%3A5%2Cw%3A1440%2Ch%3A750%2Cn%3Adefault-B1440-FWEBP&w=3840&q=75",
      title: "OFFICE OF",
      subtitle: "H.R.H. Prince Salman  Bin",
      description: "From manpower to real estate, healthcare to energy - we deliver excellence with sophisticated business solutions"
    },
    {
      image: "https://www.fuergy.com/media/pages/blog/a-guide-to-hydropower-what-is-it-and-how-does-it-work/5835fabe42-1712730370/a-guide-to-hydropower-what-is-it-and-how-does-it-work.webp",
      title: "OFFICE OF",
      subtitle: "H.R.H. Prince Salman  Bin",
      description: "Join our prestigious clientele and experience the premium treatment your business deserves"
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative h-screen overflow-hidden bg-gradient-to-br from-gray-900 via-gray-800 to-black">
      {/* Decorative Stars */}
      <div className="absolute top-20 left-20 text-green-200  opacity-60">
        <Sparkles className="h-6 w-6" />
      </div>
      <div className="absolute top-40 right-32 text-green-200  opacity-40">
        <Sparkles className="h-4 w-4" />
      </div>
      <div className="absolute bottom-32 left-40 text-green-200  opacity-50">
        <Sparkles className="h-5 w-5" />
      </div>
      <div className="absolute bottom-20 right-20 text-green-200  opacity-60">
        <Sparkles className="h-6 w-6" />
      </div>

      {/* Background Images with Overlay */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? 'opacity-30' : 'opacity-0'
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}

      {/* Content */}
      <div className="relative z-10 h-full flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="grid grid-cols-1 text-center w-full gap-16">
            {/* Left Content */}
            <div className="text-center">
              <h1 className="text-7xl font-bold text-gray-50">
            
              
         
           Rising Nepal Investment 
           

              </h1>
        
              <p className='text-lg md:text-xl text-gray-300 mb-12 pt-5 text-center'>
                Your trusted partner in unlocking Nepal’s growth opportunities through innovation, integrity, and impact.

              </p>
{/*               
              <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl leading-relaxed">
                {slides[currentSlide].description}
              </p> */}

              {/* <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/contact" >
                <button className="px-8 py-4 bg-green-400 text-black font-semibold rounded-lg hover:bg-green-300 transition-all duration-300 transform hover:scale-105">
                  Contact Us
                </button>
                </Link>
                <Link to="/about" >
                <button className="px-8 py-4 border border-gray-600 text-white font-semibold rounded-lg hover:border-green-400 hover:text-green-400 transition-all duration-300">
                  Learn More
                </button>
                </Link>
              </div> */}
            </div>

            {/* Right Visual Element */}
            {/* <div className="relative lg:flex md:flex justify-center items-center hidden "> */}
              {/* <div className="relative"> */}
                {/* Golden Hand Illustration Placeholder */}
                {/* <div className="w-96 h-96 bg-gradient-to-br from-green-400/20 to-amber-500/20 rounded-full flex items-center justify-center backdrop-blur-sm border border-green-400/30">
                  <Crown className="h-32 w-32 text-green-400 opacity-80" />
                </div> */}
                
                {/* Floating Cards */}
                {/* <div className="absolute -top-8 -left-8 bg-[#222222] border border-gray-700 rounded-xl p-4 shadow-2xl">
                  <div className="text-green-400 text-sm font-semibold">Premium Service</div>
                  <div className="text-white text-lg font-bold">Excellence</div>
                </div>
                
                <div className="absolute -bottom-8 -right-8 bg-[#222222] border border-gray-700 rounded-xl p-4 shadow-2xl">
                  <div className="text-green-400 text-sm font-semibold">Global Reach</div>
                  <div className="text-white text-lg font-bold">2000+ Clients</div>
                </div> */}
              {/* </div>
            </div> */}
          </div>
        </div>
      </div>

      {/* Navigation Arrows */}
      <button
        onClick={prevSlide}
        className="absolute left-4 lg:top-1/2 top-2/3 transform -translate-y-1/2 z-20 p-3 bg-[#222222]/50 text-green-400 rounded-full hover:bg-gray-700/70 transition-all duration-300 backdrop-blur-sm border border-gray-600"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 lg:top-1/2 top-2/3  transform -translate-y-1/2 z-20 p-3 bg-[#222222]/50 text-green-400 rounded-full hover:bg-gray-700/70 transition-all duration-300 backdrop-blur-sm border border-gray-600"
      >
        <ChevronRight className="h-6 w-6" />
      </button>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide 
                ? 'bg-green-400 shadow-lg shadow-green-400/50 scale-125' 
                : 'bg-gray-600 hover:bg-gray-500'
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default ImageCarousel;