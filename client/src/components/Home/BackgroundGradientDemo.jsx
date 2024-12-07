import React from "react";
import { BackgroundGradient } from "../ui/background-gradient";
import Homee from './Homee.jpg';
// import {Button} from "../mui/Button";
import Button from '@mui/material/Button';

export function BackgroundGradientDemo({ details }) {
  const { type, content, route, image } = details; // Destructuring details object

  return (
    <div className="relative rounded-xl max-w-[80%] p-2 sm:p-2 bg-zinc-900 shadow-lg">
      {/* Gradient Background */}
      <BackgroundGradient className="relative inset-0 -z-10 rounded-xl bg-gradient-to-br from-green-400 via-blue-500 to-purple-600 opacity-30" />
      
      {/* Image */}
      <img
        src={image || Homee} // Use dynamic image if provided, fallback to default
        alt={content || "Default Image"} // Fallback alt text
        className="w-full h-auto object-contain rounded-lg"
      />
      
      {/* Title */}
      <h3 className="text-lg sm:text-xl text-white mt-4">
        {type || "Default Title"} {/* Fallback title */}
      </h3>
      
      {/* Description */}
      <p className="text-sm text-neutral-400 mt-2">
        {content ||
          "Access your student account to manage your scholarship applications and view your status. Stay up-to-date with your scholarship journey and track all your important updates"}
      </p>
      
      {/* Button */}
      <button
        className="mt-4 px-6 py-2 bg-black text-white text-sm font-semibold rounded-full flex items-center justify-between gap-2 shadow-md hover:bg-neutral-800"
      >
        <Button variant="contained" onClick={() => window.location.href = route}> <span>Login Now</span></Button>
       
        {/* <span className="bg-zinc-700 text-white text-xs px-2 py-1 rounded-full">
          $100
        </span> */}
      </button>
    </div>
  );
}
