import React, { useState } from 'react'
import { Menu, X, Phone } from 'lucide-react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-white shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          {/* Logo - Only Logo Image */}
          <div className="flex items-center">
            <div className="flex items-center space-x-3">
              <img 
                src="/images/kynode-logo.jpg" 
                alt="Kynode Background Verification" 
                className="h-12 w-12 object-contain"
              />
               <div>
                <span className="text-2xl font-bold text-gray-900">Kynode</span>
                <span className="block text-xs text-gray-500 -mt-1">Background Verification</span>
              </div>
            </div>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-2">
            <a 
              href="#home" 
              className="relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-200">Home</span>
              <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 rounded-lg"></div>
            </a>
            
            <a 
              href="#services" 
              className="relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-200">Services</span>
              <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 rounded-lg"></div>
            </a>
            
            <a 
              href="#process" 
              className="relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-200">Process</span>
              <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 rounded-lg"></div>
            </a>
            
            <a 
              href="#contact" 
              className="relative text-gray-700 font-medium px-4 py-2 rounded-lg transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10 group-hover:text-white transition-colors duration-200">Contact</span>
              <div className="absolute inset-0 bg-black scale-x-0 group-hover:scale-x-100 transform origin-left transition-transform duration-300 rounded-lg"></div>
            </a>
            
            <div className="flex items-center space-x-4 ml-4">
              <a 
                href="tel:+919686881464" 
                className="flex items-center text-gray-700 hover:text-black transition-colors duration-200 px-3 py-2 rounded-lg hover:bg-gray-100"
              >
                <Phone className="h-4 w-4 mr-2" />
                <span className="font-medium">+91 96868 81464</span>
              </a>
              <a 
                href="#contact" 
                className="bg-black hover:bg-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition-colors duration-200"
              >
                Get Started
              </a>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-black p-2 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="lg:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white border-t">
              <a 
                href="#home" 
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-white hover:bg-black rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Home
              </a>
              <a 
                href="#services" 
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-white hover:bg-black rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Services
              </a>
              <a 
                href="#process" 
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-white hover:bg-black rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Process
              </a>
              <a 
                href="#contact" 
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-white hover:bg-black rounded-md transition-all duration-200"
                onClick={() => setIsOpen(false)}
              >
                Contact
              </a>
              
              <div className="pt-4 border-t">
                <a 
                  href="tel:+919686881464" 
                  className="flex items-center px-3 py-3 text-base font-medium text-gray-700 hover:text-black hover:bg-gray-100 rounded-md transition-all duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  <Phone className="h-4 w-4 mr-2" />
                  +91 96868 81464
                </a>
                <a 
                  href="#contact" 
                  className="block w-full mt-2 bg-black hover:bg-gray-800 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors duration-200"
                  onClick={() => setIsOpen(false)}
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navbar