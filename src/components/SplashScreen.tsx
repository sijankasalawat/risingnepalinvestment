import React, { useEffect, useState } from 'react';
import Logo from "../assets/logo/logo.png"
import bg from "../assets/design/design.png"

interface SplashScreenProps {
  onComplete: () => void;
}

const SplashScreen: React.FC<SplashScreenProps> = ({ onComplete }) => {
  const [showImage, setShowImage] = useState(false);
  const [colorReveal, setColorReveal] = useState(0);
  const [isComplete, setIsComplete] = useState(false);

  useEffect(() => {
    // Show the image first
    const showImageTimer = setTimeout(() => {
      setShowImage(true);
    }, 300);

    // Start the color reveal animation
    const startColorReveal = setTimeout(() => {
      const duration = 2000;
      const startTime = Date.now();
      
      const animateReveal = () => {
        const elapsed = Date.now() - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        setColorReveal(progress * 100);
        
        if (progress < 1) {
          requestAnimationFrame(animateReveal);
        }
      };
      
      animateReveal();
    }, 500);

    // Complete the splash screen
    const completeAnimation = setTimeout(() => {
      setIsComplete(true);
      setTimeout(() => {
        onComplete();
      }, 800);
    }, 5500);

    return () => {
      clearTimeout(showImageTimer);
      clearTimeout(startColorReveal);
      clearTimeout(completeAnimation);
    };
  }, [onComplete]);

  return (
    <div className="fixed  inset-0 bg-gradient-to-br from-[#ffffff] via-[#808080] to-[#ffffff] flex items-center justify-center z-50 overflow-hidden "  
    style={{
 backgroundImage: `url(${bg})`,
     backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    
  }} >
      {/* Flowing particles emanating from center during color reveal */}
      {colorReveal > 20 && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Concentric circles flowing outward */}
          {/* <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-32 h-32 border-1 text-yellow-400 rounded-full animate-ping" style={{ animationDuration: '4s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-48 h-48 border-1 border-amber-300/20 rounded-full animate-ping" style={{ animationDuration: '4s', animationDelay: '0.5s' }}></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 border-1 border-amber-400/15 rounded-full animate-ping" style={{ animationDuration: '5s', animationDelay: '1s' }}></div>
          </div>  */}

          {/* Subtle gradient waves */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="w-96 h-96 bg-gradient-radial from-amber-100/10 via-amber-200/5 to-transparent rounded-full animate-pulse" style={{ animationDuration: '4s' }}></div>
          </div>
        </div>
      )}

      {/* Main logo container */}
      <div className="text-center relative z-10">
        <div className={`
          transition-all duration-1000 ease-out relative
          ${showImage ? 'opacity-100 scale-100' : 'opacity-0 scale-95'}
          ${isComplete ? 'opacity-0 scale-95' : ''}
        `}>
          {/* Glow effect behind logo that appears with color */}
          {/* <div 
            className="absolute inset-0 bg-gradient-radial from-amber-200/20 via-amber-100/10 to-transparent rounded-full blur-2xl transform scale-150 transition-opacity duration-1000"
            style={{ opacity: colorReveal / 100 * 0.6 }}
          ></div> */}
          
          {/* Logo container with grayscale to color effect */}
          <div className="relative overflow-hidden mb-8">
            {/* Grayscale version (base layer) */}
            <div className="relative mx-auto flex items-center justify-center">
              <img src={Logo}  className="text-white/30 grayscale lg:h-[300px] h-[100px] w-full" />
            </div>
            
            {/* Color version (revealing layer) */}
            <div 
              className="absolute inset-0 overflow-hidden"
              style={{
                clipPath: `polygon(0 0, 100% 0, 100% ${colorReveal}%, 0 ${colorReveal}%)`,
                transition: 'filter 0.1s linear',
              }}
            >
              <div className="mx-auto  flex items-center justify-center">
                <img src={Logo} alt="hrhsfsinvestment logo" className="lg:h-[300px] h-[100px] w-full" />
              </div>
            </div>
            
            {/* Flowing line effect at the transition */}
            {colorReveal > 0 && colorReveal < 100 && (
              <div 
                className="absolute left-0 right-0 h-1 "
                style={{ 
                  top: `${colorReveal}%`,
                  transform: 'translateY(-50%)'
                }}
              ></div>
            )}
          </div>

          {/* Company name with elegant typography
          <div className="space-y-2">
            <h1 className="text-3xl md:text-4xl font-light text-gray-900 tracking-wide">
              Risign Nepal 
            </h1>
            <p className="text-xl text-yellow-500 font-light tracking-widest">
              INVESTMENT
            </p>
            <div className="w-24 h-px bg-gradient-to-r from-transparent via-amber-400 to-transparent mx-auto mt-4"></div>
          </div> */}
        </div>
      </div>

      {/* Fade out overlay */}
      <div className={`
        absolute inset-0 bg-slate-900 transition-opacity duration-800
        ${isComplete ? 'opacity-100' : 'opacity-0 pointer-events-none'}
      `}></div>
    </div>
  );
};

export default SplashScreen;