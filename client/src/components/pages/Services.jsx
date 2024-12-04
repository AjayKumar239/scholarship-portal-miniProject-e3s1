import React from "react";

const Services = () => {
  return (
    <div className="bg-blue-50 py-10 px-5">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-blue-600">Our Services</h1>
        <p className="text-gray-700 mt-4">
          Explore the features of the PMSSS Scholarship Portal.
        </p>
      </div>
      <div className="mt-10 grid gap-6 sm:grid-cols-3 max-w-6xl mx-auto">
        {[
          {
            title: "Application Submission",
            description: "Simplified application forms for students.",
          },
          {
            title: "Status Tracking",
            description: "Monitor application progress in real time.",
          },
          {
            title: "Document Verification",
            description: "Ensure accuracy with automated verification.",
          },
          {
            title: "Approval Workflows",
            description: "Streamlined approval processes for institutions.",
          },
          {
            title: "Fund Disbursement",
            description: "Secure and timely scholarship payouts.",
          },
          {
            title: "Feedback System",
            description: "Collect feedback for process improvements.",
          },
        ].map((service, index) => (
          <div key={index} className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold text-blue-500">{service.title}</h3>
            <p className="text-gray-600 mt-2">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
