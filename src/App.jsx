import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/common/Navbar'
import Footer from './components/common/Footer'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div 
        className="min-h-screen bg-cover bg-fixed bg-center"
        style={{
          backgroundImage: "url('/images/background/v2.jpg')",
        }}
      >
        <div className="min-h-screen">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </div>
    </Router>
  )
}

export default App