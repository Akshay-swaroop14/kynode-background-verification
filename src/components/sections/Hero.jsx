import React from 'react'
import { Shield, CheckCircle, Clock, Users } from 'lucide-react'

const Hero = () => {
  return (
    <section id="home" className="bg-gradient-to-br from-primary-50 to-white py-20 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          <div className="text-center lg:text-left">
            <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
              Reliable Background
              <span className="text-primary-600 block">Verification</span>
            </h1>
            
            <p className="mt-6 text-xl text-gray-600 leading-relaxed">
              Kynode provides comprehensive, accurate, and fast background verification services 
              to help businesses make informed decisions with confidence and security.
            </p>

            
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">99.8%</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Accuracy</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <Clock className="h-5 w-5 text-primary-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">24-48h</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Turnaround</p>
              </div>
              <div className="text-center lg:text-left">
                <div className="flex items-center justify-center lg:justify-start">
                  <Users className="h-5 w-5 text-purple-500 mr-2" />
                  <span className="text-2xl font-bold text-gray-900">50K+</span>
                </div>
                <p className="text-sm text-gray-600 mt-1">Verified</p>
              </div>
            </div>

            
           <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
          <button className="bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
         <Shield className="h-5 w-5 mr-2" />
              Start Verification
              </button>
             <button className="border-2 border-black text-black hover:bg-black hover:text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center">
            Learn More
             </button>
          </div>
          </div>

          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {[
              {
                icon: '🔒',
                title: 'Secure & Confidential',
                description: 'Your data is protected with enterprise-grade security'
              },
              {
                icon: '⚡',
                title: 'Fast Processing',
                description: 'Quick turnaround without compromising accuracy'
              },
              {
                icon: '🌍',
                title: 'Pan-India Coverage',
                description: 'Comprehensive verification across all states'
              },
              {
                icon: '📊',
                title: 'Detailed Reports',
                description: 'Clear, actionable insights for decision making'
              }
            ].map((feature, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-3xl mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-600 text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero