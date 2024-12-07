import React from 'react'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { GraduationCap, Users, BookOpen, Building2, CircleDollarSign, Clock, XCircle, HelpCircle } from 'lucide-react'

const navItems = [
  { icon: GraduationCap, text: "Scholarships Offered", route: "/offered" },
  { icon: Users, text: "Who are Eligible?", route: "/eligibility" },
  { icon: BookOpen, text: "Courses Eligible?", route: "/courses" },
  { icon: Building2, text: "Colleges Eligible", route: "/colleges" },
  { icon: CircleDollarSign, text: "Fee Structure", route: "/fees" },
  { icon: Clock, text: "Time Line", route: "/timeline" },
  { icon: XCircle, text: "Reasons for Rejection", route: "/rejections" },
  { icon: HelpCircle, text: "FAQs / Instructions", route: "/faqs" }
]

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
}

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100
    }
  }
}

export function NavigationIcons() {
  return (
    <motion.div 
      className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6 p-6 bg-white rounded-lg shadow-lg m-4"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {navItems.map((item, index) => (
        <NavItem key={index} Icon={item.icon} text={item.text} route={item.route} />
      ))}
    </motion.div>
  )
}

function NavItem({ Icon, text, route }) {
  return (
    <motion.div 
      className="flex flex-col items-center text-center"
      variants={itemVariants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
    >
      <Link to={route}>
        <motion.div 
          className="w-16 h-16 rounded-full bg-gradient-to-br from-teal-400 to-blue-500 flex items-center justify-center shadow-lg"
          whileHover={{ rotate: 360 }}
          transition={{ duration: 0.5 }}
        >
          <Icon className="w-8 h-8 text-white" />
        </motion.div>
      </Link>
      <p className="mt-2 text-sm text-blue-900 font-semibold">{text}</p>
    </motion.div>
  )
}
