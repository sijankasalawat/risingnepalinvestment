import React, { useState } from 'react';
import { Heart, Download, Eye, MapPin, Calendar, Users } from 'lucide-react';
import { GalleryImage } from '../data/galleryData';

interface ImageCardProps {
  image: GalleryImage;
  index: number;
  onClick: () => void;
}

const ImageCard: React.FC<ImageCardProps> = ({ image, index, onClick }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  // const [isLiked, setIsLiked] = useState(false);

  // const handleLike = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   setIsLiked(!isLiked);
  // };

  // const handleDownload = (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   console.log('Download:', image.title);
  // };

  return (
    <div 
      className="group relative bg-white rounded-2xl overflow-hidden border border-[#5E4B28]/20 hover:border-[#937A4A]/40 shadow-lg hover:shadow-2xl hover:shadow-[#937A4A]/10 transition-all duration-500 cursor-pointer transform hover:scale-[1.02] hover:-translate-y-2"
      onClick={onClick}
      style={{
        animationDelay: `${index * 0.1}s`
      }}
    >
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-[#222222] via-[#2A2A2A] to-[#222222] animate-pulse" />
        )}
        
        <img
          src={image.url}
          alt={image.title}
          className={`w-full h-full object-cover transition-all duration-700 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          loading="lazy"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Action Buttons */}
        {/* <div className="absolute top-4 right-4 flex flex-col gap-2 transform translate-x-12 group-hover:translate-x-0 transition-transform duration-300">
          <button
            onClick={handleLike}
            className={`p-2 rounded-full backdrop-blur-sm transition-all duration-200 hover:scale-110 ${
              isLiked 
                ? 'bg-[#937A4A] text-white' 
                : 'bg-[#222222]/90 text-[#D5C09C] hover:bg-[#937A4A]/20 border border-[#5E4B28]'
            }`}
          >
            <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
          </button>
          
          <button
            onClick={handleDownload}
            className="p-2 bg-[#222222]/90 text-[#D5C09C] rounded-full backdrop-blur-sm hover:bg-[#937A4A]/20 hover:scale-110 transition-all duration-200 border border-[#5E4B28]"
          >
            <Download className="w-4 h-4" />
          </button>
        </div> */}

        {/* View Icon */}
       

        {/* Category Badge */}
        {/* <div className="absolute top-4 left-4">
          <span className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-medium border ${
            image.category === 'business-meetings' ? 'bg-[#937A4A]/20 text-[#D5C09C] border-[#937A4A]/30' :
            image.category === 'community-events' ? 'bg-[#B79B65]/20 text-[#EAD9B4] border-[#B79B65]/30' :
            image.category === 'partnerships' ? 'bg-[#5E4B28]/20 text-[#D5C09C] border-[#5E4B28]/30' :
            image.category === 'conferences' ? 'bg-[#937A4A]/20 text-[#D5C09C] border-[#937A4A]/30' :
            'bg-[#222222]/20 text-[#AAAAAA] border-[#5E4B28]/30'
          }`}>
            {image.category.replace('-', ' ')}
          </span>
        </div> */}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* <div className="flex items-start justify-between gap-3 mb-3">
          <div className="flex-1 min-w-0">
            <h3 className="font-semibold text-[#D5C09C] truncate group-hover:text-[#EAD9B4] transition-colors duration-200 text-lg">
              {image.title}
            </h3>
            {image.description && (
              <p className="text-sm text-[#AAAAAA] mt-1 line-clamp-2">{image.description}</p>
            )}
          </div>
        </div> */}

        {/* Event Details */}
        <div className="space-y-2 mb-4">
          {image.description && (
            <div className="flex items-center gap-2 text-sm text-[#AAAAAA]">
               <span className="line-clamp-2 overflow-hidden text-ellipsis">
{image.description}</span>
            </div>
          )}
      
          
        </div>
        
      
      </div>
    </div>
  );
};

export default ImageCard;