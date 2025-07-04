import React, { useState, useEffect } from 'react';
import { Search, Filter, X, ChevronLeft, ChevronRight, Heart, Download, Share, Users, Award, Calendar } from 'lucide-react';
import ImageCard from '../components/ImageCard';
import Modal from '../components/Modal';
import bg from "../assets/design/design.png"

import { galleryImages, GalleryImage } from '../data/galleryData';

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [filteredImages, setFilteredImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay for animation effect
    const timer = setTimeout(() => {
      setImages(galleryImages);
      setFilteredImages(galleryImages);
      setIsLoading(false);
    }, 800);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let filtered = images;

    // // Apply category filter
    // if (activeFilter !== 'all') {
    //   filtered = filtered.filter(img => img.category === activeFilter);
    // }

    // // Apply search filter
    // if (searchQuery) {
    //   filtered = filtered.filter(img => 
    //     img.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     img.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    //     img.description?.toLowerCase().includes(searchQuery.toLowerCase())
    //   );
    // }

    setFilteredImages(filtered);
  }, [images, activeFilter, searchQuery]);

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  const handleCloseModal = () => {
    setSelectedImage(null);
  };

  const handleNextImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const nextIndex = (currentIndex + 1) % filteredImages.length;
    setSelectedImage(filteredImages[nextIndex]);
  };

  const handlePrevImage = () => {
    if (!selectedImage) return;
    const currentIndex = filteredImages.findIndex(img => img.id === selectedImage.id);
    const prevIndex = currentIndex === 0 ? filteredImages.length - 1 : currentIndex - 1;
    setSelectedImage(filteredImages[prevIndex]);
  };

  return (
    <div className="min-h-screen ">
      {/* Header */}
      <header className="sticky top-0 z-40 backdrop-blur-lg border-b border-[#5E4B28]/30 pt-10"
         style={{
 backgroundImage: `url(${bg})`,
     backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    
  }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="text-center sm:text-left">
              <h1 className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-gray-800 via-green-400 to-green-400 bg-clip-text text-transparent mb-2">
                Gallery
              </h1>
              <p className="text-[#AAAAAA] text-lg">Connecting with our community and building lasting relationships</p>
              
              {/* Stats */}
              {/* <div className="flex items-center justify-center sm:justify-start gap-6 mt-4">
                <div className="flex items-center gap-2 text-[#D5C09C]">
                  <Users className="w-5 h-5 text-[#937A4A]" />
                  <span className="text-sm font-medium">500+ Meetings</span>
                </div>
                <div className="flex items-center gap-2 text-[#D5C09C]">
                  <Award className="w-5 h-5 text-[#937A4A]" />
                  <span className="text-sm font-medium">Industry Leader</span>
                </div>
                <div className="flex items-center gap-2 text-[#D5C09C]">
                  <Calendar className="w-5 h-5 text-[#937A4A]" />
                  <span className="text-sm font-medium">Since 2015</span>
                </div>
              </div> */}
            </div>
            
            {/* <div className="flex items-center gap-4 w-full sm:w-auto">
              <SearchBar 
                searchQuery={searchQuery}
                onSearchChange={setSearchQuery}
              />
            </div> */}
          </div>
          
          {/* <FilterTabs 
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          /> */}
        </div>
      </header>

    

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 mt-5">
        {isLoading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {Array.from({ length: 12 }).map((_, index) => (
              <div 
                key={index}
                className="aspect-[4/5] bg-[#222222] rounded-2xl animate-pulse border border-[#5E4B28]/20"
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              />
            ))}
          </div>
        ) : (
          <>
            {filteredImages.length === 0 ? (
              <div className="text-center py-16">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-[#222222] border border-[#5E4B28] rounded-full mb-4">
                  <Search className="w-8 h-8 text-[#937A4A]" />
                </div>
                <h3 className="text-xl font-semibold text-[#D5C09C] mb-2">No images found</h3>
                <p className="text-[#AAAAAA]">Try adjusting your search or filter criteria</p>
              </div>
            ) : (
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {filteredImages.map((image, index) => (
                  <ImageCard
                    key={image.id}
                    image={image}
                    index={index}
                    onClick={() => handleImageClick(image)}
                  />
                ))}
              </div>
            )}
          </>
        )}
      </main>

      {/* Modal */}
      {selectedImage && (
        <Modal
          image={selectedImage}
          onClose={handleCloseModal}
          onNext={handleNextImage}
          onPrev={handlePrevImage}
          hasNext={filteredImages.length > 1}
          hasPrev={filteredImages.length > 1}
        />
      )}
    </div>
  );
};

export default Gallery;