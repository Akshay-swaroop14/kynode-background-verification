import React from 'react'
import { CheckCircle } from 'lucide-react'

const Services = () => {
  const services = [
    {
      icon: '👤',
      title: 'Employee Background Verification',
      description: 'Comprehensive background checks including employment, education, and criminal records.',
      features: ['Employment History', 'Education Verification', 'Criminal Records', 'Address Verification']
    },
    {
      icon: '🏢',
      title: 'Business Verification',
      description: 'Verify business credentials, financial stability, and corporate history.',
      features: ['Business Registration', 'Financial Stability', 'Legal Compliance', 'Market Reputation']
    },
    {
      icon: '🔍',
      title: 'Due Diligence',
      description: 'In-depth investigation for mergers, acquisitions, and partnerships.',
      features: ['Financial Due Diligence', 'Legal Compliance', 'Operational Review', 'Risk Assessment']
    },
    {
      icon: '📊',
      title: 'Database Search',
      description: 'Access multiple databases for comprehensive background checks.',
      features: ['Criminal Databases', 'Court Records', 'Global Watchlists', 'Credit History']
    }
  ]

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Our Verification Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive background verification solutions tailored to meet your organization's needs
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-gradient-to-br from-primary-50 to-blue-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-primary-100">
              <div className="text-4xl mb-4">{service.icon}</div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              <ul className="space-y-3">
                {service.features.map((feature, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-3 flex-shrink-0" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <button className="mt-6 text-primary-600 hover:text-primary-700 font-semibold">
                Learn More →
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Services