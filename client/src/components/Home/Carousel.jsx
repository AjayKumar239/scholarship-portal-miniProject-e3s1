import React, { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import { Button } from "../ui/button"
import Homee from './Homee.jpg'

const carouselData = [
  {
    title: "Student Applications",
    content: "In Telangana, successfully facilitated and disbursed 90+ lakh student applications under 14 schemes, in the last 4 academic years",
    icon: "🎓"
  },
  {
    title: "Application System",
    content: "Hassle-free application system for Students, with transparency and accountability in scholarship process",
    icon: "📝"
  },
  {
    title: "Verification Process",
    content: "Eliminated manual visits for verification & avoided fictitious colleges and ghost students",
    icon: "🏫"
  },
  {
    title: "Application Tracking",
    content: "Track the application status at every stage",
    icon: "📊"
  },
  {
    title: "Online Scholarship",
    content: "End-to-end Online Scholarship application for various scholarships offered to students (Pre-metric & Post-metric) by various State Governments",
    icon: "💻"
  }
]

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselData.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % carouselData.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + carouselData.length) % carouselData.length)
  }

  return (
    <div className="relative  bg-gradient-to-r from-teal-800 to-blue-900 text-white overflow-hidden">
      <div className="absolute inset-0 flex items-center justify-between px-4">
        <Button variant="ghost" size="icon" onClick={prevSlide} className="text-white hover:bg-white/20">
          <ChevronLeft className="w-8 h-8" />
        </Button>
        <Button variant="ghost" size="icon" onClick={nextSlide} className="text-white hover:bg-white/20">
          <ChevronRight className="w-8 h-8" />
        </Button>
      </div>
      <div className="flex h-full">
      
        <div className="w-1/4 flex items-center justify-center">
          <motion.img 
            src={Homee}
            alt="Student" 
            className="w-60 h-60 rounded-full shadow-lg"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
          />
        
        </div>
        <div className="w-2/3 flex flex-col justify-center p-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSlide}
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white/10 backdrop-blur-md p-6 rounded-lg mb-4 shadow-xl"
            >
              <h2 className="text-2xl font-bold mb-2">{carouselData[currentSlide].title}</h2>
              <p className="text-sm">{carouselData[currentSlide].content}</p>
            </motion.div>
          </AnimatePresence>
          <div className="grid grid-cols-2 gap-4">
            {carouselData.map((item, index) => (
              <InfoCard key={index} icon={item.icon} text={item.content} isActive={index === currentSlide} />
            ))}
          </div>
        </div>
      </div>
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {carouselData.map((_, index) => (
          <motion.div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${index === currentSlide ? 'bg-white' : 'bg-gray-400'}`}
            onClick={() => setCurrentSlide(index)}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          />
        ))}
      </div>
    </div>
  )
}

function InfoCard({ icon, text, isActive }) {
  return (
    <motion.div 
      className={`flex items-start space-x-2 bg-white/10 backdrop-blur-md p-4 rounded-lg shadow-lg transition-colors ${isActive ? 'border-2 border-white' : ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className="text-3xl">{icon}</div>
      <p className="text-sm">{text}</p>
    </motion.div>
  )
}

