// import * as React from "react"
// import { Slot } from "@radix-ui/react-slot"
// import { cva } from "class-variance-authority"
// import { cn } from "@/lib/utils"

// const buttonVariants = cva(
//   "inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
//   {
//     variants: {
//       variant: {
//         default: "bg-primary text-primary-foreground hover:bg-primary/90",
//         destructive:
//           "bg-destructive text-destructive-foreground hover:bg-destructive/90",
//         outline:
//           "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
//         secondary:
//           "bg-secondary text-secondary-foreground hover:bg-secondary/80",
//         ghost: "hover:bg-accent hover:text-accent-foreground",
//         link: "text-primary underline-offset-4 hover:underline",
//       },
//       size: {
//         default: "h-10 px-4 py-2",
//         sm: "h-9 rounded-md px-3",
//         lg: "h-11 rounded-md px-8",
//         icon: "h-10 w-10",
//       },
//     },
//     defaultVariants: {
//       variant: "default",
//       size: "default",
//     },
//   }
// )

// const Button = React.forwardRef(({ className, variant, size, asChild = false, ...props }, ref) => {
//   const Comp = asChild ? Slot : "button"
//   return (
//     <Comp
//       className={cn(buttonVariants({ variant, size, className }))}
//       ref={ref}
//       {...props}
//     />
//   )
// })

// Button.displayName = "Button"

// export { Button, buttonVariants }




// header className="bg-gray-800 text-white shadow-md">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           <div className="flex items-center justify-between h-16">
//             {/* Logo */}
//             <div className="flex-shrink-0">
//               <Link to="/" className="text-2xl font-bold text-white">
//                 e-PMSSS
//               </Link>
//             </div>

//             {/* Navigation Links */}
//             <nav className="hidden md:flex space-x-6">
//               <Link to="/" className="hover:text-gray-300 transition duration-200">
//                 Home
//               </Link>
//               <Link to="/AboutUs" className="hover:text-gray-300 transition duration-200">
//                 About
//               </Link>
//               <Link to="/services" className="hover:text-gray-300 transition duration-200">
//                 Services
//               </Link>
//               <Link to="/ContactUs" className="hover:text-gray-300 transition duration-200">
//                 Contact
//               </Link>
//             </nav>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button className="text-white focus:outline-none">
//                 <span className="sr-only">Open main menu</span>
//                 <svg
//                   className="w-6 h-6"
//                   fill="none"
//                   stroke="currentColor"
//                   viewBox="0 0 24 24"
//                   xmlns="http://www.w3.org/2000/svg"
//                 >
//                   <path
//                     strokeLinecap="round"
//                     strokeLinejoin="round"
//                     strokeWidth="2"
//                     d="M4 6h16M4 12h16M4 18h16"
//                   ></path>
//                 </svg>
//               </button>
//             </div>

//             {/* User Profile & Logout */}
//             <div className="flex items-center space-x-4">
//               <Link
//                 to="/profile"
//                 className="flex items-center text-white hover:text-gray-300 transition duration-200"
//               >
//                 {/* <User className="w-6 h-6 mr-2" /> */}
//                 <span>Profile</span>
//               </Link>
//               <button className="flex items-center text-white hover:text-gray-300 transition duration-200">
//                 {/* <LogOut className="w-6 h-6 mr-2" /> */}
//                 <span>Logout</span>
//               </button>
//             </div>
//           </div>
//         </div>
//       </header>