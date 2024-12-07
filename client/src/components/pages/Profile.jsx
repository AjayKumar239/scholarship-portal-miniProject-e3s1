import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  // Access user from state
  const currUser = useSelector((state) => state?.user?.currUser);

  return (
    <div className="max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold mb-6 text-gray-800">User Profile</h1>

      {currUser ? (
        <div>
          {/* User Information */}
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Name:</h2>
            <p className="text-gray-600">{currUser.name}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">College:</h2>
            <p className="text-gray-600">{currUser.college}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Application Status:</h2>
            <p className="text-gray-600">{currUser.applicationStatus || "Pending"}</p>
          </div>
          <div className="mb-4">
            <h2 className="text-xl font-semibold text-gray-700">Number of Applications:</h2>
            <p className="text-gray-600">{currUser.noOfApplications || 0}</p>
          </div>
        </div>
      ) : (
        <div>
          <p className="text-gray-600">You are not logged in. Please log in to view your profile.</p>
        </div>
      )}
    </div>
  );
};

export default Profile;
