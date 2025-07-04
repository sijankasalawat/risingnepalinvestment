import React, { useEffect, useState } from 'react';


interface CurtainTransitionProps {
  isActive: boolean;
  onComplete: () => void;
}

const CurtainTransition: React.FC<CurtainTransitionProps> = ({ isActive, onComplete }) => {
  const [isOpening, setIsOpening] = useState(false);

  useEffect(() => {
    if (isActive) {
      // Optional short delay before starting the opening animation
      const timer = setTimeout(() => {
        setIsOpening(true);

        // Call onComplete when animation should be done
        const completeTimer = setTimeout(() => {
          onComplete();
        }, 1000); // Match with transition duration

        return () => clearTimeout(completeTimer);
      }, 100); // small delay before curtain starts

      return () => clearTimeout(timer);
    }
  }, [isActive, onComplete]);

  if (!isActive) return null;

  return (
    <div className="fixed inset-0 z-[51] pointer-events-none bg-transparent "
     >
      {/* Left curtain */}
      <div
        className={`
          absolute top-0 left-0 w-1/2 h-full bg-[#111]
          transform transition-transform duration-1000 ease-in-out
          ${isOpening ? '-translate-x-full' : 'translate-x-0'}
        `}
      />
      {/* Right curtain */}
      <div
        className={`
          absolute top-0 right-0 w-1/2 h-full bg-[#111]
          transform transition-transform duration-1000 ease-in-out
          ${isOpening ? 'translate-x-full' : 'translate-x-0'}
        `}
      />
    </div>
  );
};

export default CurtainTransition;
