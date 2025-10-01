import React from 'react'
import { FileText, Search, CheckSquare, Send } from 'lucide-react'

const Process = () => {
  const steps = [
    {
      step: 1,
      icon: FileText,
      title: 'Submit Request',
      description: 'Provide candidate details and required verification types',
      bgImage: '/public/images/step1-submission.jpg', 
      bgColor: 'from-blue-500/10 to-blue-600/5'
    },
    {
      step: 2,
      icon: Search,
      title: 'Verification Process',
      description: 'Our team conducts thorough background checks',
      bgImage: '/public/images/step2-verification.webp', 
      bgColor: 'from-green-500/10 to-green-600/5'
    },
    {
      step: 3,
      icon: CheckSquare,
      title: 'Quality Check',
      description: 'All reports undergo strict quality assurance',
      bgImage: '/public/images/step3-quality.jpg', 
      bgColor: 'from-purple-500/10 to-purple-600/5'
    },
    {
      step: 4,
      icon: Send,
      title: 'Report Delivery',
      description: 'Receive comprehensive verification report',
      bgImage: '/public/images/step4-delivery.jpg', 
      bgColor: 'from-orange-500/10 to-orange-600/5'
    }
  ]

  return (
    <section id="process" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Simple Process
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Four simple steps to get comprehensive background verification
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const IconComponent = step.icon
            return (
              <div key={step.step} className="text-center group">
                
                <div 
                  className="relative rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden min-h-[300px] flex flex-col justify-center group-hover:scale-105 group-hover:rotate-1 transform transition-transform duration-300"
                  style={{
                    backgroundImage: `linear-gradient(rgba(255,255,255,0.9), rgba(255,255,255,0.9)), url('${step.bgImage}')`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundRepeat: 'no-repeat'
                  }}
                >
                  
                  <div className={`absolute inset-0 bg-gradient-to-br ${step.bgColor} opacity-50 group-hover:opacity-30 transition-opacity duration-300`}></div>
                  
                  
                  <div className="relative z-10">
                    
                    <div className="bg-white text-blue-600 w-8 h-8 rounded-full flex items-center justify-center absolute -top-2 -right-2 font-bold text-sm shadow-lg border border-blue-200">
                      {step.step}
                    </div>
                    
                    
                    <div className="bg-white/80 backdrop-blur-sm border border-white/20 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:bg-white group-hover:shadow-xl transition-all duration-300">
                      <IconComponent className="h-10 w-10 text-blue-600 group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-4 relative">
                      {step.title}
                      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-0 group-hover:w-16 h-0.5 bg-blue-600 transition-all duration-300"></div>
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-medium">
                      {step.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default Process