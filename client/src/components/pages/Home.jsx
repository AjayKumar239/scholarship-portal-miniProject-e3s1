import React from 'react';
import { Link } from 'react-router-dom';
import { HomeLabel } from '../Home/HomeLabel';
import { BackgroundGradientDemo } from '../Home/BackgroundGradientDemo';
import Homee from '../Home/Homee.jpg'
import officer from '../Home/officer.jpeg'
import student from '../Home/student.jpeg';
import institute from '../Home/institute.jpeg'
import ScholarshipPage from '../Home/ScholarshipPage';

const HomePage = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <HomeLabel />

      {/* Scholarship Page */}
      <ScholarshipPage />
      {/* Features Section */}
      

      <section className="py-20 bg-gray-100">
  <div className="container mx-auto px-10">
    <h2 className="text-4xl font-bold text-gray-900 text-center mb-12">Login</h2>
    <p className="text-center text-lg text-black-700 mb-8">For the Academic Year 2024-25, please use the following options to access your respective accounts.</p>
    
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-0 gap-y-20 mx-auto">
    {/* grid grid-cols-1 md:grid-cols-2 gap-20 */}




      {/* Student Login Card */}
      
    <BackgroundGradientDemo  details={{
    type: "Students",
    content: "Access your student account to manage your scholarship applications and view your status. Stay up-to-date with your scholarship journey and track all your important updates.",
    route: "/signin",
    image: student,
  }}
    
    />



<BackgroundGradientDemo  details={{
    type: "Institution",
    content: "Access the institute's dashboard to manage and verify student applications, ensuring a seamless scholarship process.",
    route: "/institute/login",
    image: institute,
  }}
    
    />


<BackgroundGradientDemo  details={{
    type: "Officer",
    content: "Access the officer's dashboard to review applications and manage scholarship details. Efficiently handle and oversee the scholarship process with ease.",
    route: "/officer/login",
    image: officer,
  }}
    
    />
    </div>
  </div>
</section>


      {/* Call to Action Section */}
      <section className="bg-orange-500 text-white py-20">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Transform Your Scholarship Journey?</h2>
          <p className="text-lg mb-8">Join our platform today and start managing your scholarships with ease and efficiency.</p>
          <Link 
            to="/signup" 
            className="bg-white text-orange-600 py-3 px-6 rounded-full text-lg font-semibold hover:bg-gray-100 transition ease-in-out duration-300"
          >
            Sign Up Now
          </Link>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
