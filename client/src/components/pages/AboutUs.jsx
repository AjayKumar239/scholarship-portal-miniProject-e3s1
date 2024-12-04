import React from "react";

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600">About PMSSS Scholarship Portal</h1>
        <p className="text-gray-700 mt-4">
          Your gateway to efficient and transparent scholarship management.
        </p>
      </div>
      <div className="mt-10 max-w-5xl mx-auto grid gap-6 sm:grid-cols-2">
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-500">Our Mission</h2>
          <p className="text-gray-600 mt-4">
            To simplify the scholarship process by providing a secure, paperless system
            that manages applications and disbursements efficiently.
          </p>
        </section>
        <section className="bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-500">Our Vision</h2>
          <p className="text-gray-600 mt-4">
            To empower students by ensuring accessibility and transparency in scholarship
            management while reducing manual administrative tasks.
          </p>
        </section>
      </div>
    </div>
  );
};

export default AboutUs;
