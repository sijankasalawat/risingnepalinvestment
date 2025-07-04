import { Users, Award, Mountain, TrendingUp, Star, Globe, Target, Heart } from 'lucide-react';
import bg from "../assets/design/design.png"

const About = () => {


  const achievements = [
    {
      icon: Mountain,
      title: 'Nepal Focus',
      description: '15+ hydro power projects across Nepal\'s diverse terrain',
      gradient: 'from-green-500 to-emerald-600',
      metric: '15+',
      label: 'Projects'
    },
    {
      icon: Award,
      title: 'Industry Recognition',
      description: 'Multiple awards for sustainable energy innovation in Nepal',
      gradient: 'from-blue-500 to-cyan-600',
      metric: '8',
      label: 'Awards'
    },
    {
      icon: TrendingUp,
      title: 'Proven Results',
      description: 'Consistent 15%+ annual returns for investors',
      gradient: 'from-orange-500 to-red-600',
      metric: '15%+',
      label: 'Returns'
    },
    {
      icon: Users,
      title: 'Expert Team',
      description: '50+ professionals with deep Nepal market expertise',
      gradient: 'from-purple-500 to-pink-600',
      metric: '50+',
      label: 'Experts'
    }
  ];

  const values = [
    {
      icon: Globe,
      title: 'Environmental Sustainability',
      description: 'Commitment to protecting Nepal\'s pristine Himalayan environment while developing clean energy solutions.',
      color: 'green'
    },
    {
      icon: Heart,
      title: 'Community Development',
      description: 'Empowering local communities through job creation and infrastructure development in rural Nepal.',
      color: 'blue'
    },
    {
      icon: Target,
      title: 'Transparent Practices',
      description: 'Maintaining the highest standards of transparency and ethical business practices in all our operations.',
      color: 'orange'
    }
  ];

  return (
    <div className="">
      {/* Header */}
      <section className="py-10 bg-gradient-to-br from-green-50 via-white to-orange-50 relative overflow-hidden"
       style={{
 backgroundImage: `url(${bg})`,
     backgroundSize: 'auto',
    backgroundRepeat: 'repeat',
    backgroundPosition: 'center',
    
  }}>
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-green-200/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-to-r from-green-100/30 to-orange-100/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-start">
        
          <div className="text-4xl md:text-6xl font-bold text-gray-700 mb-8 leading-tight">
            About 
            <span className="block bg-gradient-to-r from-gray-800 via-green-500 to-green-500 bg-clip-text text-transparent">
              Rising Nepal Investment
            </span>
          </div>
        
        </div>
      </section>

      {/* Mission & Vision Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium">
                <Target className="w-4 h-4 mr-2" />
                Our Mission
              </div>
              
              <h2 className="text-5xl md:text-5xl font-bold text-gray-900 leading-tight">
                Powering  Nepal's Future
            
              </h2>
              
              <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                <p>
                  At Rising Nepal Investment, we believe in harnessing Nepal's abundant water resources 
                  to power the nation's development while creating sustainable value for our investors. 
                  Our mission is to accelerate Nepal's transition to energy independence through 
                  strategic hydro power investments.
                </p>
                <p>
                  Founded in 2014, we have established ourselves as Nepal's trusted partner in the 
                  renewable energy sector, specializing in hydro power development and infrastructure 
                  investments that respect our unique Himalayan environment and local communities.
                </p>
              </div>

              {/* Core Values */}
              <div className="space-y-6 pt-5">
                {values.map((value, index) => (
                  <div key={index} className="group flex items-start space-x-4 p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-lg transition-all duration-300">
                    <div className={`w-12 h-12 bg-${value.color}-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                      <value.icon className={`h-6 w-6 text-${value.color}-600`} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gray-900 mb-2">{value.title}</h3>
                      <p className="text-gray-600 leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Vision Card */}
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-green-500 to-orange-500 rounded-3xl transform rotate-3"></div>
              <div className="relative bg-white p-12 rounded-3xl shadow-2xl">
                <div className="text-center mb-8">
                  <div className="inline-flex items-center px-4 py-2 bg-orange-100 rounded-full text-orange-700 text-sm font-medium mb-6">
                    <Globe className="w-4 h-4 mr-2" />
                    Our Vision
                  </div>
                  <h3 className="text-3xl font-bold text-gray-900 mb-6">Building Tomorrow's Energy</h3>
                  <p className="text-gray-600 mb-8 text-lg leading-relaxed">
                    To be Nepal's leading investment platform for sustainable hydro power 
                    infrastructure, contributing to the nation's energy security and economic prosperity.
                  </p>
                </div>
                
                <div className="grid grid-cols-2 gap-6">
                  {[
                    { value: 'NPR 15B+', label: 'Assets Under Management', icon: TrendingUp },
                    { value: '300+', label: 'MW Clean Energy', icon: Mountain },
                    { value: '15+', label: 'Active Projects', icon: Award },
                    { value: '10+', label: 'Years Experience', icon: Users }
                  ].map((stat, index) => (
                    <div key={index} className="group text-center p-6 bg-gradient-to-br from-gray-50 to-white rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
                      <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-r from-green-500 to-orange-500 rounded-xl mb-4 group-hover:scale-110 transition-transform duration-300">
                        <stat.icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="text-2xl font-bold bg-gradient-to-r from-green-600 to-orange-500 bg-clip-text text-transparent mb-1">
                        {stat.value}
                      </div>
                      <div className="text-sm text-gray-600 font-medium">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Achievements */}
      <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-20">
            <div className="inline-flex items-center px-4 py-2 bg-green-100 rounded-full text-green-700 text-sm font-medium mb-6">
              <Award className="w-4 h-4 mr-2" />
              Our Impact
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-8">
              Recognized
            
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Driving innovation and excellence in Nepal's renewable energy sector
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="group relative">
                <div className="absolute inset-0 bg-gradient-to-br from-white to-gray-50 rounded-3xl transform rotate-1 group-hover:rotate-2 transition-transform duration-300"></div>
                <div className="relative bg-white p-8 rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-3">
                  <div className="text-center">
                    <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r ${achievement.gradient} rounded-2xl mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <achievement.icon className="h-10 w-10 text-white" />
                    </div>
                    
                    <div className="mb-4">
                      <div className={`text-4xl font-bold bg-gradient-to-r ${achievement.gradient} bg-clip-text text-transparent`}>
                        {achievement.metric}
                      </div>
                      <div className="text-sm text-gray-500 font-medium">{achievement.label}</div>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                    <p className="text-gray-600 leading-relaxed text-sm">{achievement.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

 

  
    </div>
  );
};

export default About;