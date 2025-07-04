
import {  Zap, TrendingUp,  Mountain } from 'lucide-react';
import { Link } from 'react-router-dom';
import ImageCarousel from '../components/ImageCarousel';
import ServicesSection from '../components/ServicesSection';
import { Facebook, Instagram, Linkedin, } from 'lucide-react';
import bg from "../assets/design/design.png"
import owner from "../assets/rizwan.jpg"

const Home = () => {
  return (
    <div>
      {/* Hero Section */}
      
        
        {/* Animated background elements */}
      

       <ImageCarousel/>
  

  

      {/* Hydro Power Showcase Section */}
 <ServicesSection/>
    <section
  className="relative py-20  "
  style={{
 backgroundImage: `url(${bg})`,
     backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    
  }}
>
  {/* Light overlay to brighten the background image */}
  <div className="absolute inset-0  opacity-90  pointer-events-none" />

  <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      
      {/* Image and Decorative Shapes */}
      <div className="relative">
        <div className="relative overflow-hidden rounded-2xl shadow-2xl">
          <img
            src={owner}
            alt="Rizwan Aalam"
            className="w-full lg:h-[600px] h-[400px] object-cover"
          />
        </div>
        <div className="absolute -top-5 -right-5 w-24 h-24  rounded-full opacity-10 bg-slate-500" ></div>
        <div className="absolute -bottom-5 -left-5 w-32 h-32  rounded-xl opacity-10 bg-green-500">
          {/* <img src="./src/assets/side-design.png" alt="Decorative Shape" className="w-full h-full object-contain" /> */}

            
        </div>
      </div>

      {/* Text Content */}
      <div className="space-y-6 text-[#D5C09C]">
        <div>
            <h2 className="text-3xl md:text-4xl font-bold  bg-gradient-to-r from-gray-800 to-green-400 bg-clip-text text-transparent mb-4">
            Meet Our CoFounder and Managing Director
            
          </h2>
           
          <h3 className="text-2xl font-semibold text-[#68934a] mb-6">
           Rizwan Aalam
          </h3>
        </div>

        <div className="space-y-4 leading-relaxed text-[#aaaaaa]">
          <p className="">
             Rizwan Aalam  founded HRH Prince Salman bin Faisal Al Saud Investment with a vision to create a comprehensive business solutions ecosystem that serves clients across multiple industries.
          </p>
          <p>
            Under his leadership, HRH Prince Salman bin Faisal Al Saud Investment has grown from a small staffing agency to a multi-industry powerhouse, serving over 2,000 clients worldwide and maintaining a 98% client satisfaction rate.
          </p>

          <div className="bg-[#505050a9] p-6 rounded-xl border-l-4 border-[#80a253]">
            <p className="text-[#d0e9b5] font-medium italic">
“Every great vision begins with a purpose and ours is to bridge nations, empower industries, and build futures.”
            </p>
            <p className="text-sm mt-2 text-[#b1cb9a]">- Rizwan Aalam, Co-Founder & Managing Director</p>
          </div>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-lg font-semibold text-green-500 mb-4">Connect with Rizwan Aalam</h4>
          <div className="flex space-x-4">
            <a
              href="https://www.facebook.com/alz.rizwan"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-[#3B5998] text-white rounded-full hover:bg-[#DBAD6A] transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Facebook className="w-5 h-5" />
            </a>
               <a
              href="https://www.instagram.com/R.AALAM17?fbclid=IwY2xjawLEss9leHRuA2FlbQIxMABicmlkETFCT1oxZjA1d0pHVjZqNG1DAR6_2d0GbQWfjv6mdSWRGVJoHaz0tDldWkFNBkO4hZdbETm4l28ZhNcvQgkfUA_aem_Eld7jeIt34awFc6kiZ5Qsw"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-[#E4405F] text-white rounded-full hover:bg-[#DBAD6A] transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Instagram className="w-5 h-5" />
            </a>
           <a
              href="https://www.linkedin.com/in/rizwan-aalam-b4a575371"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center w-12 h-12 bg-[#0077B5] text-white rounded-full hover:bg-[#DBAD6A] transition-all duration-300 transform hover:scale-110 shadow-lg"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Why Choose
           
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              We combine deep local expertise with international standards to deliver 
              sustainable energy solutions that benefit Nepal's communities and investors alike.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Local Expertise',
                description: 'Deep understanding of Nepal\'s geography, regulations, and hydro power potential with proven track record.',
                icon: Mountain,
                gradient: 'from-green-500 to-emerald-600'
              },
              {
                title: 'Sustainable Impact',
                description: 'Clean, renewable energy solutions that support Nepal\'s energy independence and environmental goals.',
                icon: Zap,
                gradient: 'from-blue-500 to-cyan-600'
              },
              {
                title: 'Proven Returns',
                description: 'Consistent performance with strong returns while contributing to Nepal\'s economic development.',
                icon: TrendingUp,
                gradient: 'from-orange-500 to-red-600'
              },
            ].map((feature, index) => (
              <div key={index} className="group relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-500 transform hover:-translate-y-2 overflow-hidden">
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-50 to-gray-100 rounded-full -translate-y-16 translate-x-16 group-hover:scale-150 transition-transform duration-700"></div>
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r ${feature.gradient} rounded-2xl mb-6 relative z-10 group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4 relative z-10">{feature.title}</h3>
                <p className="text-gray-600 leading-relaxed relative z-10">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  
    </div>
  );
};

export default Home;