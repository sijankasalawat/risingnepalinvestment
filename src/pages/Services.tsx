
import {  TrendingUp, Building, Users, CheckCircle,  Mountain } from 'lucide-react';
import bg from "../assets/design/design.png"

const Services = () => {
  const services = [
    {
      icon: Mountain,
      title: 'Hydro Power Development',
      description: 'End-to-end development of hydro power facilities leveraging Nepal\'s abundant water resources.',
      image: 'https://images.pexels.com/photos/433308/pexels-photo-433308.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      features: [
        'Site feasibility studies in Himalayan terrain',
        'Environmental impact assessments',
        'Engineering and design for mountain conditions',
        'Construction management',
        'Operational optimization'
      ],
      gradient: 'from-green-500 to-emerald-600'
    },
    {
      icon: TrendingUp,
      title: 'Investment Management',
      description: 'Professional asset management services for hydro power investment portfolios in Nepal.',
      image: 'https://images.pexels.com/photos/590022/pexels-photo-590022.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      features: [
        'Portfolio diversification across regions',
        'Risk management for mountain projects',
        'Performance monitoring',
        'Strategic planning',
        'Market analysis and forecasting'
      ],
      gradient: 'from-blue-500 to-cyan-600'
    },
    {
      icon: Building,
      title: 'Infrastructure Finance',
      description: 'Comprehensive financing solutions for large-scale hydro power infrastructure projects.',
      image: 'https://images.pexels.com/photos/259027/pexels-photo-259027.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      features: [
        'Project financing for hydro developments',
        'Debt structuring',
        'Equity partnerships',
        'Government incentive optimization',
        'Tax planning and compliance'
      ],
      gradient: 'from-orange-500 to-red-600'
    },
    {
      icon: Users,
      title: 'Consulting Services',
      description: 'Expert advisory services for renewable energy investments and regulatory compliance in Nepal.',
      image: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&dpr=1',
      features: [
        'Strategic consulting for Nepal market',
        'Regulatory guidance and compliance',
        'Market entry strategies',
        'Due diligence services',
        'Technology assessment'
      ],
      gradient: 'from-purple-500 to-pink-600'
    }
  ];

  return (
    <div className="">
      {/* Header */}
      <section className="py-20 bg-gradient-to-br from-green-50 to-orange-50 relative overflow-hidden"
       style={{
 backgroundImage: `url(${bg})`,
     backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    
  }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
         
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 flex gap-5 justify-center">
        
            <span className="block bg-gradient-to-r from-gray-800 via-green-500 to-green-500 bg-clip-text text-transparent">
                  Our Services
            </span>
          </h1>
          <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
            Comprehensive solutions for hydro power investments in Nepal, from initial development 
            to long-term asset management, tailored for the unique Himalayan environment.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white"  >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <div key={index} className="group bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Service Image */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                  
                  {/* Icon overlay on image */}
                  <div className="absolute top-6 left-6">
                    <div className={`inline-flex items-center justify-center w-14 h-14 bg-gradient-to-r ${service.gradient} rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <service.icon className="h-7 w-7 text-white" />
                    </div>
                  </div>
                  
                  {/* Title overlay on image */}
                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{service.title}</h3>
                  </div>
                </div>

                {/* Content */}
                <div className="p-8">
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-start">
                        <div className="w-5 h-5 bg-green-100 rounded-full flex items-center justify-center flex-shrink-0 mt-1 mr-3">
                          <CheckCircle className="h-3 w-3 text-green-600" />
                        </div>
                        <span className="text-gray-700 leading-relaxed text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Our Investment
          
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A proven methodology that ensures successful hydro power investments from conception to operation
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Site Assessment',
                description: 'Comprehensive evaluation of Nepal\'s hydro potential and feasibility analysis',
                color: 'from-green-500 to-emerald-600'
              },
              {
                step: '02',
                title: 'Strategic Planning',
                description: 'Development planning with regulatory approval and community engagement',
                color: 'from-blue-500 to-cyan-600'
              },
              {
                step: '03',
                title: 'Project Development',
                description: 'Construction and commissioning of hydro power facilities',
                color: 'from-orange-500 to-red-600'
              },
              {
                step: '04',
                title: 'Asset Management',
                description: 'Ongoing management and performance optimization',
                color: 'from-purple-500 to-pink-600'
              }
            ].map((phase, index) => (
              <div key={index} className="group text-center relative">
                <div className="relative mb-8">
                  <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${phase.color} text-white rounded-2xl text-2xl font-bold shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    {phase.step}
                  </div>
                  {index < 3 && (
                    <div className="hidden md:block absolute top-10 left-full w-full h-0.5 bg-gradient-to-r from-gray-300 to-transparent"></div>
                  )}
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">{phase.title}</h3>
                <p className="text-gray-600 leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>


    </div>
  );
};

export default Services;