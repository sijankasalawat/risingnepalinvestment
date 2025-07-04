import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Mountain } from 'lucide-react'; // Assuming you're using lucide-react

const services = [
  {
    image: "https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&dpr=1",
    title: "Large Scale Hydro Dams",
  },
  {
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg",
    title: "Business Consulting",
  },
  {
    image: "https://images.pexels.com/photos/590041/pexels-photo-590041.jpeg",
    title: "Investment Services",
  },
  {
    image: "https://images.pexels.com/photos/70362/oil-monahans-texas-sunset-70362.jpeg",
    title: "Oil & Gas",
  },
  {
    image: "https://www.fugro.com/_next/image?url=https%3A%2F%2Fd3rwfsce0vn25a.cloudfront.net%2Fimage%2F665520746864%2Fimage_kg3ebg14q93tpdn4e7i90lik1j%2F-Ro%3A5%2Cw%3A1440%2Ch%3A750%2Cn%3Adefault-B1440-FWEBP&w=3840&q=75",
    title: "Real Estate",
  },
  {
    image: "https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg",
    title: "Healthcare Services",
  },

];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
            <Mountain className="w-4 h-4 mr-2" />
            Our Expertise
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
        </div>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          autoplay={{ delay: 4000 }}
          pagination={{ clickable: true }}
          navigation
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="overflow-visible"
        >
          {services.map((project, index) => (
            <SwiperSlide key={index}>
              <div className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2">
                <div className="aspect-w-16 aspect-h-12 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-60 object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                  <h3 className="text-2xl font-bold mb-3 group-hover:text-green-500 transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
