import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Heart, Download, Share, MapPin, Calendar, Users } from 'lucide-react';
import { GalleryImage } from '../data/galleryData';

interface ModalProps {
  image: GalleryImage;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
  hasNext: boolean;
  hasPrev: boolean;
}

const Modal: React.FC<ModalProps> = ({ 
  image, 
  onClose, 
  onNext, 
  onPrev, 
  hasNext, 
  hasPrev 
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          if (hasPrev) onPrev();
          break;
        case 'ArrowRight':
          if (hasNext) onNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [onClose, onNext, onPrev, hasNext, hasPrev]);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/90 backdrop-blur-sm transition-opacity duration-300"
        onClick={onClose}
      />
      
      {/* Modal Content */}
      <div className="relative max-w-7xl max-h-screen w-full h-full flex items-center justify-center p-4 sm:p-8">
        {/* Navigation Buttons */}
        {hasPrev && (
          <button
            onClick={onPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#222222]/80 backdrop-blur-sm text-green-400 rounded-full hover:bg-[#937A4A]/20 border border-green-800 transition-all duration-200 hover:scale-110"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
        )}
        
        {hasNext && (
          <button
            onClick={onNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-10 p-3 bg-[#222222]/80 backdrop-blur-sm text-green-400 rounded-full hover:bg-[#937A4A]/20 border border-green-800 transition-all duration-200 hover:scale-110"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        )}

        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-3 bg-[#222222]/80 backdrop-blur-sm text-green-400 rounded-full hover:bg-[#937A4A]/20 border border-green-800 transition-all duration-200 hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>

        {/* Image Container */}
        <div className="relative max-w-full max-h-full">
          <img
            src={image.url}
            alt={image.title}
            className="h-[90vh] w-full object-contain rounded-lg shadow-2xl animate-in zoom-in-95 duration-300"
          />
          
          {/* Image Info Overlay */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6 rounded-b-lg">
            <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
              <div className="flex-1 min-w-0">
                {/* <h2 className="text-2xl sm:text-3xl font-bold text-green-400 mb-3">{image.title}</h2> */}
                
                {image.description && (
                  <p className="text-[#e2e2e2] bg-[#26262689] px-2 border-l-4 rounded-r-md  mb-4 text-lg leading-relaxed">{image.description}</p>
                )}

                {/* Event Details */}
                {/* <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                  {image.location && (
                    <div className="flex items-center gap-2 text-green-400">
                      <MapPin className="w-5 h-5 text-[#937A4A]" />
                      <span className="text-sm">{image.location}</span>
                    </div>
                  )}
                  {image.date && (
                    <div className="flex items-center gap-2 text-green-400">
                      <Calendar className="w-5 h-5 text-[#937A4A]" />
                      <span className="text-sm">{image.date}</span>
                    </div>
                  )}
                  {image.attendees && (
                    <div className="flex items-center gap-2 text-green-400">
                      <Users className="w-5 h-5 text-[#937A4A]" />
                      <span className="text-sm">{image.attendees} attendees</span>
                    </div>
                  )}
                </div> */}

                {/* <div className="flex items-center gap-4 text-[#AAAAAA]">
                  <div className="flex items-center gap-2">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#937A4A] to-[#B79B65] rounded-full flex items-center justify-center">
                      <span className="text-sm font-bold text-white">{image.author[0]}</span>
                    </div>
                    <div>
                      <span className="text-green-400 font-medium">{image.author}</span>
                      <p className="text-xs text-[#AAAAAA]">CEO & Founder</p>
                    </div>
                  </div>
                  <span>•</span>
                  <span className="capitalize text-[#937A4A] font-medium">{image.category.replace('-', ' ')}</span>
                  <span>•</span>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-[#937A4A]" />
                    <span>{image.likes}</span>
                  </div>
                </div> */}
              </div>
              
              {/* Action Buttons */}
              {/* <div className="flex items-center gap-2">
                <button className="p-3 bg-[#222222]/80 backdrop-blur-sm text-green-400 rounded-full hover:bg-[#937A4A]/20 border border-green-800 transition-all duration-200 hover:scale-110">
                  <Heart className="w-5 h-5" />
                </button>
                <button className="p-3 bg-[#222222]/80 backdrop-blur-sm text-green-400 rounded-full hover:bg-[#937A4A]/20 border border-green-800 transition-all duration-200 hover:scale-110">
                  <Share className="w-5 h-5" />
                </button>
                <button className="p-3 bg-[#222222]/80 backdrop-blur-sm text-green-400 rounded-full hover:bg-[#937A4A]/20 border border-green-800 transition-all duration-200 hover:scale-110">
                  <Download className="w-5 h-5" />
                </button>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;