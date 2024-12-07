import React, { useState } from "react";
import { useSelector } from "react-redux";

const Eligibility = () => {
  const { currUser } = useSelector((state) => state.user);

  // List of scholarships
  const scholarships = [
    { id: 1, name: "Merit-Based Scholarship", details: "For students with GPA ≥ 9.0" },
    { id: 2, name: "Need-Based Scholarship", details: "For students with financial difficulties" },
    { id: 3, name: "Sports Scholarship", details: "For students excelling in sports" },
    { id: 4, name: "STEM Scholarship", details: "For students pursuing STEM courses" },
  ];

  const [eligibilityMessage, setEligibilityMessage] = useState("");
  const [selectedScholarship, setSelectedScholarship] = useState(null);

  // Mock function to check eligibility (replace with actual logic)
  const checkEligibility = () => {
    if (currUser.age >= 18 && currUser.gpa >= 7.5) {
      setEligibilityMessage(
        "Congratulations! You are eligible for the scholarship."
      );
    } else {
      setEligibilityMessage(
        "We regret to inform you that you are not eligible for the scholarship."
      );
    }
  };

  // Handle scholarship selection
  const handleScholarshipChange = (event) => {
    const selectedId = Number(event.target.value);
    const scholarship = scholarships.find((s) => s.id === selectedId);
    setSelectedScholarship(scholarship);
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full">
        <h1 className="text-2xl font-bold mb-6 text-gray-800">
          Scholarship Eligibility
        </h1>
        <div className="mb-4">
          <p className="text-gray-600">
            <strong>Name:</strong> {currUser.name}
          </p>
          <p className="text-gray-600">
            <strong>Email:</strong> {currUser.email}
          </p>
          <p className="text-gray-600">
            <strong>Age:</strong> {currUser.age}
          </p>
          <p className="text-gray-600">
            <strong>GPA:</strong> {currUser.gpa}
          </p>
        </div>

        <div className="mb-4">
          <label htmlFor="scholarship" className="block text-gray-700 font-semibold mb-2">
            Select a Scholarship:
          </label>
          <select
            id="scholarship"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
            onChange={handleScholarshipChange}
          >
            <option value="">-- Choose a Scholarship --</option>
            {scholarships.map((scholarship) => (
              <option key={scholarship.id} value={scholarship.id}>
                {scholarship.name}
              </option>
            ))}
          </select>
        </div>

        {selectedScholarship && (
          <div className="bg-blue-100 p-4 rounded-lg mb-4">
            <h3 className="text-lg font-semibold text-blue-800">
              {selectedScholarship.name}
            </h3>
            <p className="text-blue-700">{selectedScholarship.details}</p>
          </div>
        )}

        <button
          onClick={checkEligibility}
          className="bg-blue-500 text-white py-2 px-4 rounded-full w-full font-semibold hover:bg-blue-600 transition duration-300"
        >
          Check Eligibility
        </button>

        {eligibilityMessage && (
          <div
            className={`mt-4 p-4 rounded ${
              eligibilityMessage.includes("Congratulations")
                ? "bg-green-100 text-green-700"
                : "bg-red-100 text-red-700"
            }`}
          >
            {eligibilityMessage}
          </div>
        )}
      </div>
    </div>
  );
};

export default Eligibility;
