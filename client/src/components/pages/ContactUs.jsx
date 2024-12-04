import React from "react";

const ContactUs = () => {
  return (
    <div className="bg-gray-100 py-10 px-5">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl font-bold text-blue-600">Contact Us</h1>
        <p className="text-gray-700 mt-4">
          Reach out to us for any queries or support regarding scholarships.
        </p>
      </div>
      <form className="mt-10 max-w-3xl mx-auto bg-white shadow-md rounded-lg p-6">
        <div className="grid gap-6 sm:grid-cols-2">
          <div>
            <label className="block text-gray-700 font-medium">Full Name</label>
            <input
              type="text"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>
          <div>
            <label className="block text-gray-700 font-medium">Email Address</label>
            <input
              type="email"
              className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
              placeholder="Enter your email"
            />
          </div>
        </div>
        <div className="mt-6">
          <label className="block text-gray-700 font-medium">Message</label>
          <textarea
            rows="4"
            className="w-full mt-2 px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
            placeholder="Write your message here"
          ></textarea>
        </div>
        <button
          type="submit"
          className="mt-6 w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactUs;
